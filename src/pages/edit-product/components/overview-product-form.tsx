import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { useCategory } from '@/hooks/use-category';
import { handleApiError } from '@/lib/error';
import { UpdateProductSchema, type TProductRequest, type TUpdateProductRequest } from "@/schema/product.schema";
import { zodResolver } from '@hookform/resolvers/zod';
import { Upload, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { toast } from 'sonner';

type Props = {
    initialData: TUpdateProductRequest;
};

// Helper function to validate file size and type
const validateImageFile = ( file: File ): string | null =>
{
    const maxSize = 5 * 1024 * 1024; // 5MB in bytes
    const allowedTypes = [ 'image/jpeg', 'image/jpg', 'image/png', 'image/gif' ];

    if ( file.size > maxSize )
    {
        return 'File size must be less than 5MB';
    }

    if ( !allowedTypes.includes( file.type ) )
    {
        return 'Only JPG, PNG, and GIF files are allowed';
    }

    return null;
};

// Helper function to create preview URL for existing images
const getImagePreviewUrl = ( image: any ): string =>
{
    // If it's a File object (new upload), create blob URL
    if ( image instanceof File )
    {
        return URL.createObjectURL( image );
    }
    // If it's an existing image with URL property
    if ( typeof image === 'string' )
    {
        return image;
    }
    // If it's an object with url property (adjust based on your API structure)
    if ( image && image.url )
    {
        return image.url;
    }
    return '';
};

const EditProductForm = ( { initialData }: Props ) =>
{
    console.log( "EditProductForm initialData:", initialData );

    const form = useForm<TUpdateProductRequest>( {
        resolver: zodResolver( UpdateProductSchema ),
        defaultValues: initialData,
    } );

    const { getCategories } = useCategory();
    const { data, error: cateError, isError: isCateError, isLoading } = getCategories( {
        size: 10000,
        page: 1,
    } );

    if ( cateError && isCateError )
    {
        handleApiError( cateError );
    }

    // Manage preview URLs for both existing and new images
    const [ previewUrls, setPreviewUrls ] = useState<string[]>( [] );
    // Keep track of blob URLs to clean them up later
    const [ blobUrls, setBlobUrls ] = useState<string[]>( [] );

    const {
        fields: imageFields,
        remove: removeImage,
    } = useFieldArray( {
        control: form.control,
        name: 'productImages',
    } );

    const {
        fields: newImageFields,
        append: appendNewImage,
        remove: removeUpdatedImage,
    } = useFieldArray( {
        control: form.control,
        name: 'newProductImages',
    } );

    // Initialize preview URLs when component mounts or fields change
    useEffect( () =>
    {
        const urls: string[] = [];
        const newBlobUrls: string[] = [];

        // Add existing image URLs
        imageFields.forEach( ( field ) =>
        {
            const url = getImagePreviewUrl( field );
            if ( url )
            {
                urls.push( url );
            }
        } );

        // Add new image URLs (create blob URLs for File objects)
        newImageFields.forEach( ( field ) =>
        {
            if ( field.image instanceof File )
            {
                const blobUrl = URL.createObjectURL( field.image );
                urls.push( blobUrl );
                newBlobUrls.push( blobUrl );
            }
        } );

        setPreviewUrls( urls );

        // Clean up old blob URLs
        blobUrls.forEach( url => URL.revokeObjectURL( url ) );
        setBlobUrls( newBlobUrls );

        // Cleanup function to revoke blob URLs when component unmounts
        return () =>
        {
            newBlobUrls.forEach( url => URL.revokeObjectURL( url ) );
        };
    }, [ imageFields, newImageFields ] );

    const handleImageUpload = ( event: React.ChangeEvent<HTMLInputElement> ) =>
    {
        const files = event.target.files;
        if ( !files ) return;

        const totalImages = imageFields.length + newImageFields.length;
        const availableSlots = 4 - totalImages;

        if ( availableSlots <= 0 )
        {
            toast.error( 'Bạn chỉ có thể tải lên tối đa 4 hình ảnh.' );
            return;
        }

        const filesToProcess = Array.from( files ).slice( 0, availableSlots );

        filesToProcess.forEach( ( file ) =>
        {
            // Validate each file
            const validationError = validateImageFile( file );
            if ( validationError )
            {
                toast.error( `${ file.name }: ${ validationError }` );
                return;
            }

            // Determine if this should be the main image
            // (first image uploaded when no existing main image)
            const isMainImage = totalImages === 0 && newImageFields.length === 0;

            appendNewImage( {
                image: file,
                isMainImage,
                altText: '',
            } );
        } );

        // Reset the input value so the same file can be selected again if needed
        event.target.value = '';
    };

    const removeExistingImage = ( index: number ) =>
    {
        removeImage( index );
        toast.success( 'Ảnh đã được xóa' );
    };

    const removeNewImage = ( index: number ) =>
    {
        removeUpdatedImage( index );
        toast.success( 'Ảnh đã được xóa' );
    };

    // Handle main image selection - ensure only one image is marked as main
    const handleMainImageChange = ( imageIndex: number, isExisting: boolean, isChecked: boolean ) =>
    {
        if ( isChecked )
        {
            // Uncheck all existing images
            imageFields.forEach( ( _, index ) =>
            {
                form.setValue( `productImages.${ index }.isMainImage`, false );
            } );

            // Uncheck all new images
            newImageFields.forEach( ( _, index ) =>
            {
                form.setValue( `newProductImages.${ index }.isMainImage`, false );
            } );

            // Check the selected image
            if ( isExisting )
            {
                form.setValue( `productImages.${ imageIndex }.isMainImage`, true );
            } else
            {
                form.setValue( `newProductImages.${ imageIndex }.isMainImage`, true );
            }
        }
    };

    const onSubmit = async ( data: TProductRequest ) =>
    {
        console.log( "Submitting data:", data );

        // Validate that at least one image is marked as main
        // const hasMainImage = data.productImages?.some(img => img.isMainImage) || 
        //                    data.newProductImages?.some(img => img.isMainImage);

        // if (!hasMainImage && (data.productImages?.length > 0 || data.newProductImages?.length > 0)) {
        //     toast.error('Vui lòng chọn một ảnh làm ảnh chính');
        //     return;
        // }

        // Here you would typically send the data to your API
        // For FormData with files, you'd need to construct it properly:
        /*
        const formData = new FormData();
        
        // Add text fields
        Object.keys(data).forEach(key => {
            if (key !== 'newProductImages' && data[key] !== undefined) {
                formData.append(key, data[key]);
            }
        });
        
        // Add new image files
        data.newProductImages?.forEach((imageData, index) => {
            if (imageData.image instanceof File) {
                formData.append(`newImages`, imageData.image);
                formData.append(`newImageData[${index}]`, JSON.stringify({
                    isMainImage: imageData.isMainImage,
                    altText: imageData.altText
                }));
            }
        });
        
        try {
            const response = await api.updateProduct(formData);
            toast.success("Product updated successfully!");
        } catch (error) {
            toast.error("Failed to update product.");
        }
        */
    };

    const totalImages = imageFields.length + newImageFields.length;

    return (
        <Form { ...form }>
            <form className='relative' onSubmit={ form.handleSubmit( onSubmit ) } noValidate>
                <div className="container pb-6">

                    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
                        {/* Basic Information */ }
                        <Card className='shadow-none border-none bg-white lg:col-span-2 2xl:col-span-2'>
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
                                                    disabled={ false }
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
                                                    <Input disabled={ false } placeholder="Nhập mã sản phẩm" { ...field } />
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
                                                    <Input disabled={ false } placeholder="Nhập mã thay thế" { ...field } />
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
                                                <Input disabled={ false } placeholder="Nhập tên sản phẩm" { ...field } />
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
                                                        disabled={ false }
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
                                                        disabled={ false }
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
                                                <Select disabled={ false || isLoading } onValueChange={ field.onChange } defaultValue={ field.value }>
                                                    <FormControl>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Chọn danh mục" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        { data?.data.data.items.map( ( category ) => (
                                                            <SelectItem key={ category.id } value={ category.id }>
                                                                { category.name }
                                                            </SelectItem>
                                                        ) ) }
                                                        { data?.data.data.items.length === 0 && (
                                                            <SelectItem disabled value="">
                                                                Không có danh mục nào
                                                            </SelectItem>
                                                        ) }
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
                                                <Select disabled={ false } onValueChange={ ( value ) => field.onChange( Number( value ) ) } defaultValue={ field.value?.toString() }>
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
                            <Card className='shadow-none border-none bg-white'>
                                <CardHeader>
                                    <CardTitle className="flex items-center justify-between">
                                        Ảnh Sản Phẩm ({ totalImages }/4)
                                        <div>
                                            <input
                                                type="file"
                                                multiple
                                                accept="image/*"
                                                onChange={ handleImageUpload }
                                                className="hidden"
                                                id="image-upload"
                                                disabled={ totalImages >= 4 }
                                            />
                                        </div>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    { totalImages > 0 ? (
                                        <div className="space-y-4">
                                            {/* Existing Images */ }
                                            { imageFields.length > 0 && (
                                                <div>
                                                    <h4 className="text-sm font-medium mb-2">Ảnh hiện tại</h4>
                                                    <div className="grid grid-cols-2 gap-4">
                                                        { imageFields.map( ( field, index ) => (
                                                            <div key={ field.id } className="relative">
                                                                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                                                                    <img
                                                                        src={ previewUrls[ index ] }
                                                                        alt={ `Existing ${ index }` }
                                                                        className="w-full h-full object-cover"
                                                                    />
                                                                </div>
                                                                <Button
                                                                    type="button"
                                                                    variant="destructive"
                                                                    size="sm"
                                                                    className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0"
                                                                    onClick={ () => removeExistingImage( index ) }
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
                                                                                        checked={ field.value }
                                                                                        onCheckedChange={ ( checked ) =>
                                                                                            handleMainImageChange( index, true, checked as boolean )
                                                                                        }
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
                                                </div>
                                            ) }

                                            {/* New Images */ }
                                            { newImageFields.length > 0 && (
                                                <div>
                                                    <h4 className="text-sm font-medium mb-2">Ảnh mới</h4>
                                                    <div className="grid grid-cols-2 gap-4">
                                                        { newImageFields.map( ( field, index ) =>
                                                        {
                                                            const previewIndex = imageFields.length + index;
                                                            return (
                                                                <div key={ field.id } className="relative">
                                                                    <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                                                                        <img
                                                                            src={ previewUrls[ previewIndex ] }
                                                                            alt={ `New ${ index }` }
                                                                            className="w-full h-full object-cover"
                                                                        />
                                                                    </div>
                                                                    <Button
                                                                        type="button"
                                                                        variant="destructive"
                                                                        size="sm"
                                                                        className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0"
                                                                        onClick={ () => removeNewImage( index ) }
                                                                    >
                                                                        <X className="w-3 h-3" />
                                                                    </Button>
                                                                    <div className="mt-2 space-y-2">
                                                                        <FormField
                                                                            control={ form.control }
                                                                            name={ `newProductImages.${ index }.isMainImage` }
                                                                            render={ ( { field } ) => (
                                                                                <FormItem className="flex flex-row items-start space-x-2 space-y-0">
                                                                                    <FormControl>
                                                                                        <Checkbox
                                                                                            checked={ field.value }
                                                                                            onCheckedChange={ ( checked ) =>
                                                                                                handleMainImageChange( index, false, checked as boolean )
                                                                                            }
                                                                                        />
                                                                                    </FormControl>
                                                                                    <FormLabel className="text-xs">Ảnh chính</FormLabel>
                                                                                </FormItem>
                                                                            ) }
                                                                        />
                                                                        <FormField
                                                                            control={ form.control }
                                                                            name={ `newProductImages.${ index }.altText` }
                                                                            render={ ( { field } ) => (
                                                                                <FormItem>
                                                                                    <FormControl>
                                                                                        <Input
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
                                                            );
                                                        } ) }
                                                    </div>
                                                </div>
                                            ) }

                                            {/* Upload button for additional images */ }
                                            { totalImages < 4 && (
                                                <div
                                                    className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-gray-400 transition-colors cursor-pointer"
                                                    onClick={ () => document.getElementById( 'image-upload' )?.click() }
                                                >
                                                    <Upload className="w-6 h-6 mx-auto mb-1 text-gray-400" />
                                                    <p className="text-xs text-gray-600">
                                                        Thêm ảnh ({ 4 - totalImages } còn lại)
                                                    </p>
                                                </div>
                                            ) }
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
                            <Card className='shadow-none border-none bg-white'>
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
                                                        disabled={ false }
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
                                                        disabled={ false }
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
                                                        disabled={ false }
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
                                                        disabled={ false }
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
                    <Button className='mr-8 py-5 px-10' type="submit" disabled={ false }>
                        Cập Nhật
                    </Button>
                </div>
            </form>
        </Form>
    );
};

export default EditProductForm;