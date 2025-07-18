import ImageNotFound from "@/assets/illustration/image-not-found";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { useProductVariant } from "@/hooks/use-product-variant";
import { handleApiError } from "@/lib/error";
import type { TCategoryResponse } from "@/schema/category.schema";
import { UpdateProductVariantSchema, type TUpdateProductVariantRequest } from "@/schema/product-variant.schema";
import type { TProductResponse } from "@/schema/product.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { toast } from "sonner";

type Props = {
    productVariantId: string;
    initialData: TUpdateProductVariantRequest,
    productOfVariantData: TProductResponse;
    categoryOfVariantData: TCategoryResponse;
}

const OverviewProductVariant = ( {
    productVariantId,
    initialData,
    productOfVariantData,
    categoryOfVariantData,
}: Props ) =>
{
    const { updateProductVariantMutation } = useProductVariant();
    const form = useForm<TUpdateProductVariantRequest>( {
        resolver: zodResolver( UpdateProductVariantSchema ),
        defaultValues: {
            code: initialData.code,
            isActive: initialData.isActive,
            name: initialData.name,
            price: initialData.price,
            size: initialData.size,
            sku: initialData.sku,
        },
    } );

    const onSubmit = async (
        data: TUpdateProductVariantRequest
    ) =>
    {
        const payload = {
            code: data.code,
            name: data.name,
            price: data.price,
            isActive: data.isActive,
            sku: data.sku ?? undefined,
            size: data.size,
        };

        try
        {
            await updateProductVariantMutation.mutateAsync( {
                id: productVariantId,
                data: payload,
            } );
            toast.success( "Cập nhật biến thể thành công!" );
            // navigate(-1);
        } catch ( error )
        {
            handleApiError( error );
        }
    };
    return (
        <Form { ...form }>
            <form
                className="relative"
                onSubmit={ form.handleSubmit( onSubmit, ( errors ) =>
                {
                    console.error( "Form validation errors:", errors );
                } ) }
            >
                <div className="container pb-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
                        <Card className="shadow-none border-none bg-white lg:col-span-2 2xl:col-span-2">
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <FormField
                                            control={ form.control }
                                            name="code"
                                            render={ ( { field } ) =>
                                            {
                                                return (
                                                    <FormItem>
                                                        <FormLabel>Mã biến thể *</FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                { ...field }
                                                                placeholder="Nhập mã biến thể"
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                );
                                            } }
                                        />
                                    </div>
                                    <div>
                                        <FormField
                                            control={ form.control }
                                            name="name"
                                            render={ ( { field } ) =>
                                            {
                                                return (
                                                    <FormItem>
                                                        <FormLabel>Tên biến thể *</FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                { ...field }
                                                                placeholder="Nhập tên biến thể"
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                );
                                            } }
                                        />
                                    </div>
                                    <div>
                                        <FormField
                                            control={ form.control }
                                            name="sku"
                                            render={ ( { field } ) =>
                                            {
                                                return (
                                                    <FormItem>
                                                        <FormLabel>SKU*</FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                { ...field }
                                                                placeholder="Nhập SKU biến thể"
                                                                value={ field.value ?? "" }
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                );
                                            } }
                                        />
                                    </div>
                                    <div>
                                        <FormField
                                            control={ form.control }
                                            name="price"
                                            render={ ( { field } ) =>
                                            {
                                                return (
                                                    <FormItem>
                                                        <FormLabel>Giá gốc *</FormLabel>
                                                        <FormControl>
                                                            <Input { ...field } placeholder="Nhập giá gốc" onChange={ ( e ) => { field.onChange( Number( e.target.value ) ); } } />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                );
                                            } }
                                        />
                                    </div>
                                    <div>
                                        <FormField
                                            control={ form.control }
                                            name="size"
                                            render={ ( { field } ) =>
                                            {
                                                return (
                                                    <FormItem>
                                                        <FormLabel>Kích cỡ *</FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                { ...field }
                                                                placeholder="Nhập kích cỡ"
                                                                value={ field.value ?? "" }
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                );
                                            } }
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 lg:grid-cols-1 items-center">
                                        <label className="block text-sm font-medium">
                                            Sản phẩm
                                        </label>
                                        <Input
                                            value={ productOfVariantData.name ?? "" }
                                            disabled
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 lg:grid-cols-1 items-center">
                                        <label className="block text-sm font-medium">
                                            Danh mục
                                        </label>
                                        <Input
                                            value={ categoryOfVariantData.name ?? "" }
                                            disabled
                                        />
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="flex flex-row items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <FormField
                                        control={ form.control }
                                        name="isActive"
                                        render={ ( { field } ) =>
                                        {
                                            return (
                                                <FormItem>
                                                    <FormLabel>Đã áp dụng tại cửa hàng</FormLabel>
                                                    <FormControl>
                                                        <Switch
                                                            disabled
                                                            checked={ !!field.value }
                                                            onCheckedChange={ ( checked ) =>
                                                                field.onChange( checked )
                                                            }
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            );
                                        } }
                                    />
                                </div>
                            </CardFooter>
                        </Card>
                        <div className="grid lg:col-span-2 2xl:col-span-1 gap-4">
                            <Card className="shadow-none border-none bg-white">
                                <CardHeader>
                                    <CardTitle className="flex items-center justify-between">
                                        Ảnh sản phẩm
                                        <div>
                                            <input
                                                type="file"
                                                multiple
                                                accept="image/*"
                                                className="hidden"
                                                id="image-upload"
                                                disabled
                                            />
                                        </div>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        { ( productOfVariantData.productImages
                                            ?.length ?? 0 ) > 0 ? (
                                            <div>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <PhotoProvider>
                                                        { productOfVariantData.productImages?.map(
                                                            ( field, index ) => (
                                                                <div key={ field.id } className="relative">
                                                                    <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                                                                        <PhotoView src={ field.imageUrl } >
                                                                            <img
                                                                                src={ field.imageUrl }
                                                                                alt={ `Existing ${ index }` }
                                                                                className="w-full h-full object-cover hover:cursor-pointer"
                                                                            />
                                                                        </PhotoView>
                                                                    </div>
                                                                </div>
                                                            )
                                                        ) }
                                                    </PhotoProvider>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="aspect-square rounded-lg overflow-hidden flex items-center justify-center">
                                                <ImageNotFound />
                                            </div>
                                        ) }
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear sticky bottom-0 bg-transparent z-10">
                    <Button className='mr-8 py-5 px-10' type="submit" disabled={ updateProductVariantMutation.isPending }>
                        Lưu
                    </Button>
                </div>
            </form>
        </Form>
    )
}

export default OverviewProductVariant