import SuccessDialog from '@/components/dialog/success-dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { useCategory } from '@/hooks/use-category';
import { useProduct } from '@/hooks/use-product';
import { handleApiError } from '@/lib/error';
import { formatPrice, getImagePreviewUrl } from '@/lib/utils';
import { handleChangeModalState, handleSetCreatedId } from '@/redux/modal/modal-slice';
import type { RootState } from '@/redux/store';
import { PATH_BRAND_DASHBOARD } from '@/routes/path';
import { CreateProductSchema, type TProductRequest } from '@/schema/product.schema';
import { zodResolver } from "@hookform/resolvers/zod";
import { CircleArrowOutUpRight, Upload, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import ModifierGroupsDialog from './components/modifier-groups-dialog';
import type { TCreateProductVariantRequest } from '@/schema/product-variant.schema';
import ProductVariantDialog from './components/product-variant-dialog';

const CreateProductPage = () =>
{
    const { isOpen, createdId } = useSelector( ( state: RootState ) => state.modal );
    const dispatch = useDispatch();

    const navigation = useNavigate();
    const { createProductMutation } = useProduct();
    const { getCategories } = useCategory();
    const { data, error: cateError, isError: isCateError, isLoading } = getCategories( {
        size: 10000,
        page: 1,
    } );

    if ( cateError && isCateError )
    {
        handleApiError( cateError );
    }

    const form = useForm<TProductRequest>( {
        resolver: zodResolver( CreateProductSchema ),
        defaultValues: {
            code: '',
            name: '',
            description: '',
            note: '',
            categoryId: '',
            productImages: [],
        },
    } );

    const {
        fields: imageFields,
        append: appendImage,
        remove: removeImage,
    } = useFieldArray( {
        control: form.control,
        name: 'productImages',
    } );

    const {
        fields: variantFields,
        append: appendVariant,
        update: updateVariant,
        remove: removeVariant,
    } = useFieldArray( {
        control: form.control,
        name: 'productVariants',
    } );

    const {
        fields: modifierGroupFields,
        append: appendModifierGroup,
    } = useFieldArray( {
        control: form.control,
        name: 'modifierGroups',
    } );
    console.log( "Variant fields:", variantFields );

    const [ imagePreviewUrls, setImagePreviewUrls ] = useState<string[]>( [] );
    const [ isHasVariants, setIsHasVariants ] = useState<boolean>( false );

    const [ isVariantDialogOpen, setIsVariantDialogOpen ] = useState( false );
    const [ editingVariantIndex, setEditingVariantIndex ] = useState<number | null>( null );

    const [ isModifierGroupsDialogOpen, setIsModifierGroupsDialogOpen ] = useState( false );

    useEffect( () =>
    {
        const updatePreviews = async () =>
        {
            const urls = await Promise.all(
                imageFields.map( async ( field ) =>
                {
                    if ( field.image instanceof File )
                    {
                        return await getImagePreviewUrl( field.image );
                    }
                    return ''; // fallback for non-File objects
                } )
            );
            setImagePreviewUrls( urls );
        };

        updatePreviews();
    }, [ imageFields ] );

    const handleMainImageChange = ( selectedIndex: number, isChecked: boolean ) =>
    {
        if ( !isChecked )
        {
            if ( imageFields.length === 1 )
            {
                toast.error( 'Phải có ít nhất một ảnh chính.' );
                return;
            }

            imageFields.forEach( ( _, index ) =>
            {
                form.setValue( `productImages.${ index }.isMainImage`, index === 0 );
            } );
        } else
        {
            imageFields.forEach( ( _, index ) =>
            {
                form.setValue( `productImages.${ index }.isMainImage`, index === selectedIndex );
            } );
        }
    };

    const handleImageUpload = ( event: React.ChangeEvent<HTMLInputElement> ) =>
    {
        const files = event.target.files;
        if ( !files ) return;

        if ( imageFields.length + files.length > 4 )
        {
            toast.error( 'Bạn chỉ có thể tải lên tối đa 4 hình ảnh.' );
            return;
        }

        Array.from( files ).forEach( ( file ) =>
        {
            appendImage( {
                image: file,
                isMainImage: imageFields.length === 0,
                altText: '',
            } );
        } );

        event.target.value = '';
    };


    const removeImagePreview = ( index: number ) =>
    {
        const currentImages = form.getValues( 'productImages' );
        const isRemovedImageMain = currentImages?.[ index ]?.isMainImage;

        removeImage( index );

        if ( isRemovedImageMain && imageFields.length > 1 )
        {
            setTimeout( () =>
            {
                const updatedImages = form.getValues( 'productImages' );
                if ( updatedImages && updatedImages.length > 0 )
                {
                    form.setValue( 'productImages.0.isMainImage', true );
                    for ( let i = 1; i < updatedImages.length; i++ )
                    {
                        form.setValue( `productImages.${ i }.isMainImage`, false );
                    }
                }
            }, 0 );
        }
    };

    const handleSaveModifierGroup = ( groups: { id: string, name: string }[] ) =>
    {

        form.setValue( 'modifierGroups', [] );
        groups.forEach( ( item ) =>
        {
            appendModifierGroup( {
                id: item.id,
                name: item.name,
            } );
        } );
        return;

    }

    const handleOpenVariantDialog = ( index?: number ) =>
    {
        setEditingVariantIndex( typeof index === 'number' ? index : null );
        setIsVariantDialogOpen( true );
    };

    const handleSaveVariant = ( data: TCreateProductVariantRequest ) =>
    {
        if ( editingVariantIndex !== null )
        {
            updateVariant( editingVariantIndex, data );
            toast.success( "Đã cập nhật biến thể." );
        } else
        {
            const exists = variantFields.some( v => v.code === data.code || v.sku === data.sku );
            if ( exists )
            {
                toast.error( "Mã hoặc SKU của biến thể đã tồn tại." );
                return;
            }
            appendVariant( data );
            toast.success( "Đã thêm biến thể." );
        }
    };

    const onSubmit = async ( data: TProductRequest ) =>
    {
        if ( createProductMutation.isPending ) return;
        const formData = new FormData();
        formData.append( 'Code', data.code );
        formData.append( 'Name', data.name );
        formData.append( 'Price', data.price?.toString() || "0" );
        formData.append( 'Description', data.description );
        formData.append( 'CategoryId', data.categoryId );
        formData.append( 'Sku', data.sku || '' );

        if ( data.displayOrder !== undefined )
        {
            formData.append( 'DisplayOrder', data.displayOrder?.toString() || "0" );
        }
        if ( data.note )
        {
            formData.append( 'Note', data.note );
        }

        if ( data.productImages && data.productImages.length > 0 )
        {
            data.productImages.forEach( ( imageData, index ) =>
            {
                if ( imageData.image )
                {
                    formData.append( `ProductImages[${ index }].Image`, imageData.image );
                }

                formData.append( `ProductImages[${ index }].IsMainImage`, imageData.isMainImage.toString() );

                if ( imageData.altText )
                {
                    formData.append( `ProductImages[${ index }].AltText`, imageData.altText );
                }
            } );
        }
        if ( data.modifierGroups && data.modifierGroups.length > 0 )
        {
            data.modifierGroups.forEach( ( group, index ) =>
            {
                formData.append( `ModifierGroupIds[${ index }]`, group.id );
            } );
        }
        if ( data.productVariants && data.productVariants.length > 0 )
        {
            data.productVariants.forEach( ( variant, index ) =>
            {
                formData.append( `ProductVariants[${ index }].Code`, variant.code );
                formData.append( `ProductVariants[${ index }].Name`, variant.name );
                formData.append( `ProductVariants[${ index }].Description`, variant.description || '' );
                formData.append( `ProductVariants[${ index }].Sku`, variant.sku || '' );
                formData.append( `ProductVariants[${ index }].BrandPrice`, variant.brandPrice.toString() );
                formData.append( `ProductVariants[${ index }].Size`, variant.size );
                if ( variant.displayOrder !== undefined )
                {
                    formData.append( `ProductVariants[${ index }].DisplayOrder`, variant.displayOrder?.toString() || "0" );
                }
            } );
        }
        try
        {
            const result = await createProductMutation.mutateAsync( formData );
            //console.log( "Product created successfully!" );
            dispatch( handleSetCreatedId( result.data.data.id ) );
            dispatch( handleChangeModalState( true ) );
        } catch ( error )
        {
            handleApiError( error );
        }

    };

    return (
        <Form { ...form }>
            <SuccessDialog
                open={ isOpen }
                onOpenChange={ ( open ) => dispatch( handleChangeModalState( open ) ) }
                title="Tạo sản phẩm mới thành công"
                actionLabel="Xem sản phẩm"
                onAction={ () =>
                {
                    if ( createdId )
                    {
                        dispatch( handleChangeModalState( false ) );
                        navigation( PATH_BRAND_DASHBOARD.product.editProduct( createdId ) )
                    }
                } }
            />
            <form className='relative' onSubmit={ form.handleSubmit( onSubmit ) } noValidate>
                <div>
                    <div className="mb-6">
                        <h1 className="text-2xl font-semibold">Tạo Sản Phẩm Mới</h1>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4" >
                        {/* Basic Information */ }
                        <Card className='shadow-none border-none bg-white lg:col-span-2 xl:col-span-2'>
                            <CardHeader className='grid grid-cols-1 md:grid-cols-2 items-center gap-4'>
                                <CardTitle>Thông Tin Cơ Bản</CardTitle>
                                <div className="flex justify-end items-center space-x-2">
                                    <label className="text-sm font-medium">Có biến thể</label>
                                    <Switch
                                        checked={ isHasVariants }
                                        onCheckedChange={ ( checked ) =>
                                        {
                                            setIsHasVariants( checked as boolean );
                                            form.setValue( 'productVariants', [] );
                                        }
                                        }
                                    />
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <FormField
                                        control={ form.control }
                                        name="code"
                                        render={ ( { field } ) => (
                                            <FormItem>
                                                <FormLabel>Mã sản phẩm *</FormLabel>
                                                <FormControl>
                                                    <Input disabled={ createProductMutation.isPending } placeholder="Nhập mã sản phẩm" { ...field } />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        ) }
                                    />
                                    <FormField
                                        control={ form.control }
                                        name="sku"
                                        render={ ( { field } ) => (
                                            <FormItem>
                                                <FormLabel>Mã SKU *</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        disabled={ createProductMutation.isPending }
                                                        placeholder="Nhập mã SKU sản phẩm"
                                                        { ...field }
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        ) }
                                    />
                                </div>
                                <FormField
                                    control={ form.control }
                                    name="price"
                                    render={ ( { field } ) => (
                                        <FormItem>
                                            <FormLabel>Giá gốc *</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="number"
                                                    disabled={ createProductMutation.isPending }
                                                    placeholder="0"
                                                    { ...field }
                                                    onChange={ ( e ) => field.onChange( Number( e.target.value ) ) }
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    ) }
                                />
                                <FormField
                                    control={ form.control }
                                    name="name"
                                    render={ ( { field } ) => (
                                        <FormItem>
                                            <FormLabel>Tên Sản Phẩm *</FormLabel>
                                            <FormControl>
                                                <Input disabled={ createProductMutation.isPending } placeholder="Nhập tên sản phẩm" { ...field } />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    ) }
                                />
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <FormField
                                        control={ form.control }
                                        name="description"
                                        render={ ( { field } ) => (
                                            <FormItem>
                                                <FormLabel>Mô Tả *</FormLabel>
                                                <FormControl>
                                                    <Textarea
                                                        disabled={ createProductMutation.isPending }
                                                        placeholder="Nhập mô tả sản phẩm"
                                                        className="min-h-[100px]"
                                                        { ...field }
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        ) }
                                    />
                                    <FormField
                                        control={ form.control }
                                        name="note"
                                        render={ ( { field } ) => (
                                            <FormItem>
                                                <FormLabel>Ghi chú</FormLabel>
                                                <FormControl>
                                                    <Textarea
                                                        disabled={ createProductMutation.isPending }
                                                        placeholder="Nhập ghi chú cho sản phẩm"
                                                        className="min-h-[100px]"
                                                        { ...field }
                                                        value={ field.value ?? "" }
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        ) }
                                    />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <FormField
                                        control={ form.control }
                                        name="categoryId"
                                        render={ ( { field } ) => (
                                            <FormItem className='grid grid-cols-1 lg:grid-cols-2 items-center'>
                                                <FormLabel>Danh Mục *</FormLabel>
                                                <Select disabled={ createProductMutation.isPending || isLoading } onValueChange={ field.onChange } defaultValue={ field.value }>
                                                    <FormControl>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Chọn danh mục" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        {
                                                            data?.data.data.items.map( ( category ) => (
                                                                <SelectItem key={ category.id } value={ category.id }>
                                                                    { category.name }
                                                                </SelectItem>
                                                            ) )
                                                        }
                                                        { data?.data.data.items.length === 0 && (
                                                            <SelectItem disabled value="">
                                                                Không có danh mục nào
                                                            </SelectItem>
                                                        )
                                                        }
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        ) }
                                    />
                                    <FormField
                                        control={ form.control }
                                        name="displayOrder"
                                        render={ ( { field } ) => (
                                            <FormItem className='grid grid-cols-1 lg:grid-cols-2 items-center'>
                                                <FormLabel>Thứ tự hiển thị *</FormLabel>
                                                <FormControl>
                                                    <Input disabled={ createProductMutation.isPending } placeholder="Thứ tự hiển thị" { ...field } onChange={ ( e ) => field.onChange( Number( e.target.value ) ) } />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        ) }
                                    />
                                </div>
                            </CardContent>
                        </Card>
                        <div className='grid lg:col-span-2 xl:col-span-1 gap-4'>
                            {/* Product Images */ }
                            <Card className='shadow-none bg-white border-none'>
                                <CardHeader>
                                    <CardTitle className="flex items-center justify-between">
                                        Ảnh Sản Phẩm
                                        <div>
                                            <input
                                                type="file"
                                                multiple
                                                accept="image/*"
                                                onChange={ ( e ) =>
                                                {
                                                    console.log( "File input changed:", e.target.files );
                                                    handleImageUpload( e )
                                                } }
                                                className="hidden"
                                                id="image-upload"
                                            />
                                        </div>
                                        <Button
                                            type='button'
                                            disabled={ createProductMutation.isPending }
                                            variant="outline"
                                            size="sm"
                                            className="h-8"
                                            onClick={ () =>
                                            {
                                                console.log( "Upload button clicked" );
                                                document.getElementById( 'image-upload' )?.click();
                                            } }
                                        >
                                            <Upload className="w-4 h-4 mr-2" />
                                            Tải lên ảnh
                                        </Button>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    { imageFields.length > 0 ? (
                                        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                                            <PhotoProvider>
                                                { imageFields.map( ( field, index ) => (
                                                    <div key={ field.id } className="relative">
                                                        <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                                                            { imagePreviewUrls[ index ] && (
                                                                <PhotoView src={ imagePreviewUrls[ index ] }>
                                                                    <img
                                                                        src={ imagePreviewUrls[ index ] }
                                                                        alt={ `Preview ${ index }` }
                                                                        className="w-full h-full object-cover hover:cursor-pointer"
                                                                    />
                                                                </PhotoView>
                                                            ) }
                                                        </div>
                                                        <Button
                                                            disabled={ createProductMutation.isPending }
                                                            type="button"
                                                            variant="destructive"
                                                            size="sm"
                                                            className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0"
                                                            onClick={ () => removeImagePreview( index ) }
                                                        >
                                                            <X className="w-3 h-3" />
                                                        </Button>
                                                        <div className="mt-2 space-y-2">
                                                            <FormField
                                                                control={ form.control }
                                                                name={ `productImages.${ index }.isMainImage` }
                                                                render={ ( { field } ) => (
                                                                    <FormItem className="flex flex-row items-start space-x-2 space-y-0">
                                                                        <FormControl>
                                                                            <Checkbox
                                                                                disabled={ createProductMutation.isPending }
                                                                                checked={ field.value }
                                                                                onCheckedChange={ ( checked ) =>
                                                                                {
                                                                                    handleMainImageChange( index, checked as boolean );
                                                                                } }
                                                                            />
                                                                        </FormControl>
                                                                        <FormLabel className="text-xs">Ảnh chính</FormLabel>
                                                                    </FormItem>
                                                                ) }
                                                            />
                                                            <FormField
                                                                control={ form.control }
                                                                name={ `productImages.${ index }.altText` }
                                                                render={ ( { field } ) => (
                                                                    <FormItem>
                                                                        <FormControl>
                                                                            <Input
                                                                                disabled={ createProductMutation.isPending }
                                                                                placeholder="Alt text"
                                                                                className="text-xs"
                                                                                { ...field }
                                                                            />
                                                                        </FormControl>
                                                                    </FormItem>
                                                                ) }
                                                            />
                                                        </div>
                                                    </div>
                                                ) ) }
                                            </PhotoProvider>
                                        </div>
                                    ) : (
                                        <div
                                            className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors cursor-pointer"
                                            onClick={ () => document.getElementById( 'image-upload' )?.click() }
                                        >
                                            <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                                            <p className="text-sm text-gray-600">
                                                Kéo thả thêm ảnh hoặc click để chọn
                                            </p>
                                            <p className="text-xs text-gray-500 mt-1">
                                                Hỗ trợ: JPG, PNG, GIF (tối đa 5MB mỗi file)
                                            </p>
                                        </div>
                                    ) }
                                </CardContent>
                            </Card>
                            <Card className='shadow-none border-none bg-white '>
                                <CardHeader className='grid grid-cols-1 md:grid-cols-2 items-center gap-4'>
                                    <CardTitle>
                                        Tùy chọn sản phẩm
                                    </CardTitle>
                                    <ModifierGroupsDialog
                                        isOpen={ isModifierGroupsDialogOpen }
                                        onOpenChange={ setIsModifierGroupsDialogOpen }
                                        initialData={ modifierGroupFields }
                                        onSave={ handleSaveModifierGroup }
                                        isSubmitting={ createProductMutation.isPending }
                                    >
                                        <Button variant="outline" size="sm" className="ml-auto" type="button" disabled={ createProductMutation.isPending } onClick={ () =>
                                        {
                                            setIsModifierGroupsDialogOpen( true )
                                        } }>
                                            {
                                                modifierGroupFields?.length > 0 ? "Chỉnh sửa" : "Thêm"
                                            }
                                            <CircleArrowOutUpRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </ModifierGroupsDialog>
                                </CardHeader>
                                <CardContent className=''>
                                    {
                                        modifierGroupFields.length > 0 ? (
                                            <div className="p-3 border rounded-lg relative group bg-secondary/30 hover:cursor-pointer" onClick={ () =>
                                            {
                                                setIsModifierGroupsDialogOpen( true );
                                            } }>
                                                <Button
                                                    type="button"
                                                    variant="ghost"
                                                    size="icon"
                                                    className="absolute top-1 right-1 h-6 w-6 text-muted-foreground opacity-50 group-hover:opacity-100 transition-opacity"
                                                    onClick={ ( e ) =>
                                                    {
                                                        e.stopPropagation();
                                                        form.setValue( 'modifierGroups', [] );
                                                    } }
                                                >
                                                    <X className="h-4 w-4" />
                                                    <span className="sr-only">Remove modifier</span>
                                                </Button>
                                                <p className="text-sm font-semibold pr-6">
                                                    Các sản phẩm tùy chọn thuộc sản phẩm gốc này.
                                                </p>
                                                <div className="mt-2 space-y-1">
                                                    <p className="text-xs text-muted-foreground">
                                                        { modifierGroupFields.length } tùy chọn sản phẩm đã được thêm: <span className="font-semibold text-blue-500">{ modifierGroupFields.map( ( group ) => group.name ).join( ', ' ) }</span>
                                                    </p>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="flex items-center justify-center text-gray-500 text-sm text-center min-h-10">
                                                Chưa có tùy chọn sản phẩm nào được thêm.
                                            </div>
                                        )
                                    }
                                </CardContent>


                            </Card>
                        </div>
                        { isHasVariants &&
                            <Card className='shadow-none border-none bg-white grid lg:col-span-3 xl:col-span-3 gap-4'>
                                <CardHeader className='grid grid-cols-1 md:grid-cols-2 items-center gap-4'>
                                    <CardTitle>Biến thể sản phẩm</CardTitle>
                                    <ProductVariantDialog
                                        isOpen={ isVariantDialogOpen }
                                        onOpenChange={ setIsVariantDialogOpen }
                                        initialData={ editingVariantIndex !== null ? variantFields[ editingVariantIndex ] : undefined }
                                        onSave={ handleSaveVariant }
                                        isSubmitting={ createProductMutation.isPending }
                                    >
                                        <Button variant="outline" size="sm" className="ml-auto" type="button" disabled={ createProductMutation.isPending } onClick={ () =>
                                        {
                                            handleOpenVariantDialog();
                                        } }>
                                            Thêm biến thể
                                            <CircleArrowOutUpRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </ProductVariantDialog>
                                </CardHeader>
                                <CardContent>
                                    {
                                        variantFields.length > 0 ? (
                                            <div className="space-y-3">
                                                { variantFields.map( ( variant, index ) => (
                                                    <div key={ variant.id } className="p-3 border rounded-lg relative group bg-secondary/30 hover:cursor-pointer" onClick={ () => handleOpenVariantDialog( index ) }>
                                                        <Button
                                                            type="button"
                                                            variant="ghost"
                                                            size="icon"
                                                            className="absolute top-1 right-1 h-6 w-6 text-muted-foreground opacity-50 group-hover:opacity-100 transition-opacity"
                                                            onClick={ ( e ) =>
                                                            {
                                                                e.stopPropagation();
                                                                removeVariant( index );
                                                            } }
                                                        >
                                                            <X className="h-4 w-4" />
                                                            <span className="sr-only">Remove variant</span>
                                                        </Button>
                                                        <p className="text-sm font-semibold pr-6">{ variant.name }</p>
                                                        <div className="mt-2 space-y-1 text-xs text-muted-foreground grid grid-cols-2 gap-x-4">
                                                            <p>Mã: <span className="font-mono text-blue-500">{ variant.code }</span></p>
                                                            <p>SKU: <span className="font-mono text-green-500">{ variant.sku }</span></p>
                                                            <p>Giá: <span className="font-mono font-semibold text-red-500">{ formatPrice( variant.brandPrice ) }</span></p>
                                                        </div>
                                                    </div>
                                                ) ) }
                                            </div>
                                        ) : (
                                            <div className="flex items-center justify-center text-gray-500 text-sm text-center min-h-20">
                                                Chưa có biến thể sản phẩm nào được thêm.
                                            </div>
                                        )
                                    }
                                </CardContent>
                            </Card>
                        }
                    </div>
                </div>
                <div className="flex justify-end h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear sticky bottom-0 bg-transparent z-10">
                    <Button className='mr-8 py-5 px-10' type="submit" disabled={ createProductMutation.isPending }>
                        Tạo
                    </Button>
                </div>
            </form>
        </Form >
    );
};

export default CreateProductPage;