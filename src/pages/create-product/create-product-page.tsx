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
import { handleChangeModalState } from '@/redux/modal/modal-slice';
import type { RootState } from '@/redux/store';
import { CreateProductSchema, type TProductRequest } from '@/schema/product.schema';
import { zodResolver } from "@hookform/resolvers/zod";
import { Upload, X } from 'lucide-react';
import React, { useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const CreateProductPage = () =>
{
    const { isOpen } = useSelector( ( state: RootState ) => state.modal );
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

    const [ imagePreview, setImagePreview ] = useState<string[]>( [] );

    const form = useForm<TProductRequest>( {
        resolver: zodResolver( CreateProductSchema ),
        defaultValues: {
            code: '',
            alternativeCode: '',
            name: '',
            description: '',
            isAvailable: true,
            saleType: 0,
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

    const handleImageUpload = ( event: React.ChangeEvent<HTMLInputElement>, index?: number ) =>
    {
        const files = event.target.files;
        if ( !files ) return;
        if ( imageFields.length >= 4 )
        {
            toast.error( 'Bạn chỉ có thể tải lên tối đa 4 hình ảnh.' );
            return;
        }

        Array.from( files ).forEach( ( file ) =>
        {
            const reader = new FileReader();
            reader.onload = ( e ) =>
            {
                const result = e.target?.result as string;
                setImagePreview( prev => [ ...prev, result ] );
            };
            reader.readAsDataURL( file );

            if ( index !== undefined )
            {
                form.setValue( `productImages.${ index }.image`, file );
            } else
            {
                appendImage( {
                    image: file,
                    isMainImage: imageFields.length === 0,
                    altText: '',
                } );
            }
        } );
    };

    const removeImagePreview = ( index: number ) =>
    {
        setImagePreview( prev => prev.filter( ( _, i ) => i !== index ) );
        removeImage( index );
    };

    const onSubmit = async ( data: TProductRequest ) =>
    {
        // toast.success( 'Tạo sản phẩm thành công!' );
        console.log( "Submitting product data:", data );
        if ( createProductMutation.isPending ) return;
        const formData = new FormData();
        formData.append( 'Code', data.code );
        formData.append( 'Name', data.name );
        formData.append( 'Price', data.price?.toString() || "0" );
        formData.append( 'Description', data.description );
        formData.append( 'IsAvailable', data.isAvailable.toString() );
        formData.append( 'SaleType', data.saleType.toString() );
        formData.append( 'CategoryId', data.categoryId );

        // Optional fields
        if ( data.alternativeCode )
        {
            formData.append( 'AlternativeCode', data.alternativeCode );
        }
        if ( data.discountPrice !== undefined )
        {
            formData.append( 'DiscountPrice', data.discountPrice?.toString() || "0" );
        }
        if ( data.discountPercent !== undefined )
        {
            formData.append( 'DiscountPercent', data.discountPercent?.toString() || "0" );
        }
        if ( data.priceCOGS !== undefined )
        {
            formData.append( 'PriceCOGS', data.priceCOGS?.toString() || "0" );
        }
        if ( data.displayOrder !== undefined )
        {
            formData.append( 'DisplayOrder', data.displayOrder?.toString() || "0" );
        }
        if ( data.note )
        {
            formData.append( 'Note', data.note );
        }

        // Handle product images array
        if ( data.productImages && data.productImages.length > 0 )
        {
            data.productImages.forEach( ( imageData, index ) =>
            {
                // Append the actual file
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

        console.log( "Submitting form data:", formData );
        try
        {
            await createProductMutation.mutateAsync( formData );
            if ( createProductMutation.isSuccess )
            {
                dispatch( handleChangeModalState( true ) );
            }
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
                onAction={ () => navigation( -1 ) }
            />
            <form className='relative h-[calc(100vh-5.5rem)]' onSubmit={ form.handleSubmit( onSubmit ) } noValidate>
                <div className="container px-10 pb-6">
                    <div className="my-6">
                        <h1 className="text-2xl font-semibold">Tạo Sản Phẩm Mới</h1>
                    </div>


                    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4" >
                        {/* Basic Information */ }
                        <Card className='shadow-muted lg:col-span-2 2xl:col-span-2'>
                            <CardHeader className='grid grid-cols-1 md:grid-cols-2 items-center gap-4'>
                                <CardTitle>Thông Tin Cơ Bản</CardTitle>
                                <FormField
                                    control={ form.control }
                                    name="isAvailable"
                                    render={ ( { field } ) => (
                                        <FormItem className="flex flex-row md:justify-end items-center space-x-3 space-y-0">
                                            <div className="space-y-1 leading-none">
                                                <FormLabel>Có sẵn</FormLabel>
                                            </div>
                                            <FormControl>
                                                <Switch
                                                    disabled={ createProductMutation.isPending }
                                                    checked={ field.value }
                                                    onCheckedChange={ field.onChange }
                                                />
                                            </FormControl>
                                        </FormItem>
                                    ) }
                                />
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <FormField
                                        control={ form.control }
                                        name="code"
                                        render={ ( { field } ) => (
                                            <FormItem>
                                                <FormLabel>Mã Sản Phẩm *</FormLabel>
                                                <FormControl>
                                                    <Input disabled={ createProductMutation.isPending } placeholder="Nhập mã sản phẩm" { ...field } />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        ) }
                                    />
                                    <FormField
                                        control={ form.control }
                                        name="alternativeCode"
                                        render={ ( { field } ) => (
                                            <FormItem>
                                                <FormLabel>Mã Thay Thế</FormLabel>
                                                <FormControl>
                                                    <Input disabled={ createProductMutation.isPending } placeholder="Nhập mã thay thế" { ...field } />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        ) }
                                    />

                                </div>

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
                                        name="saleType"
                                        render={ ( { field } ) => (
                                            <FormItem className='grid grid-cols-1 lg:grid-cols-2 items-center'>
                                                <FormLabel>Loại Hình Bán *</FormLabel>
                                                <Select disabled={ createProductMutation.isPending } onValueChange={ ( value ) => field.onChange( Number( value ) ) } defaultValue={ field.value?.toString() }>
                                                    <FormControl>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Chọn loại hình" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="0">Hoàn thiện khi đặt</SelectItem>
                                                        <SelectItem value="1">Sản phẩm bán sẵn</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        ) }
                                    />
                                </div>
                            </CardContent>
                        </Card>
                        <div className='grid lg:col-span-2 2xl:col-span-1 gap-4'>
                            {/* Product Images */ }
                            <Card className='shadow-muted'>
                                <CardHeader>
                                    <CardTitle className="flex items-center justify-between">
                                        Ảnh Sản Phẩm
                                        <div>
                                            <input
                                                type="file"
                                                multiple
                                                accept="image/*"
                                                onChange={ ( e ) => handleImageUpload( e ) }
                                                className="hidden"
                                                id="image-upload"
                                            />
                                        </div>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    { imageFields.length > 0 ? (
                                        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                                            { imageFields.map( ( field, index ) => (
                                                <div key={ field.id } className="relative">
                                                    <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                                                        { imagePreview[ index ] && (
                                                            <img
                                                                src={ imagePreview[ index ] }
                                                                alt={ `Preview ${ index }` }
                                                                className="w-full h-full object-cover"
                                                            />
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
                                                                            onCheckedChange={ field.onChange }
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


                            {/* Pricing */ }
                            <Card className='shadow-muted'>
                                <CardHeader>
                                    <CardTitle>Giá Cả</CardTitle>
                                </CardHeader>
                                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <FormField
                                        control={ form.control }
                                        name="price"
                                        render={ ( { field } ) => (
                                            <FormItem>
                                                <FormLabel>Giá Bán *</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        disabled={ createProductMutation.isPending }
                                                        type="number"
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
                                        name="discountPrice"
                                        render={ ( { field } ) => (
                                            <FormItem>
                                                <FormLabel>Giá Giảm</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        disabled={ createProductMutation.isPending }
                                                        type="number"
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
                                        name="discountPercent"
                                        render={ ( { field } ) => (
                                            <FormItem>
                                                <FormLabel>% Giảm Giá</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        disabled={ createProductMutation.isPending }
                                                        type="number"
                                                        placeholder="0"
                                                        min="0"
                                                        max="100"
                                                        { ...field }
                                                        onChange={ ( e ) => field.onChange( e.target.value ? Number( e.target.value ) : undefined ) }
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        ) }
                                    />
                                    <FormField
                                        control={ form.control }
                                        name="priceCOGS"
                                        render={ ( { field } ) => (
                                            <FormItem>
                                                <FormLabel>Giá COGS</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        disabled={ createProductMutation.isPending }
                                                        type="number"
                                                        placeholder="0"
                                                        min="0"
                                                        max="100"
                                                        { ...field }
                                                        onChange={ ( e ) => field.onChange( e.target.value ? Number( e.target.value ) : undefined ) }
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        ) }
                                    />
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear sticky bottom-0 bg-transparent z-10">
                    <Button className='mr-8 py-5 px-10' type="submit" disabled={ createProductMutation.isPending }>
                        Tạo
                    </Button>
                </div>
            </form>
        </Form>
    );
};

export default CreateProductPage;