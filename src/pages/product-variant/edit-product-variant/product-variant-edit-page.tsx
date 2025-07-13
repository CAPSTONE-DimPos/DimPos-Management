// src/pages/ProductVariant/edit/ProductVariant-edit-page.tsx
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import ImageNotFound from "@/assets/illustration/image-not-found";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useCategory } from "@/hooks/use-category";
import { useProduct } from "@/hooks/use-product";
import { useProductVariant } from "@/hooks/use-product-variant";
import { handleApiError } from "@/lib/error";
import {
  UpdateProductVariantSchema,
  type TUpdateProductVariantRequest,
} from "@/schema/product-variant.schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const ProductVariantEditPage = () => {
  const { id } = useParams<{ id: string }>();

  const { getProductVariantById, updateProductVariantMutation } =
    useProductVariant();
  const { getProductById } = useProduct();
  const { getCategoryById } = useCategory();
  const { data: productVariantData } = getProductVariantById(id as string);
  const productId = productVariantData?.data?.data?.productId;
  const categoryId = productVariantData?.data?.data?.categoryId;
  const { data: productOfVariantData } = getProductById(productId!);
  const { data: categoryOfVariantData } = getCategoryById(categoryId!);

  const form = useForm<TUpdateProductVariantRequest>({
    resolver: zodResolver(UpdateProductVariantSchema),
    defaultValues: {
      code: productVariantData.data.data.code,
      isActive: productVariantData.data.data.isActive,
      name: productVariantData.data.data.name,
      price: productVariantData.data.data.price,
      size: productVariantData.data.data.size,
      sku: productVariantData.data.data.sku,
    },
  });

  useEffect(() => {
    if (productVariantData?.data?.data) {
      const productVariant = productVariantData.data.data;
      form.reset({
        id: productVariant.id,
        code: productVariant.code,
        isActive: productVariant.isActive,
        name: productVariant.name,
        price: productVariant.price,
        size: productVariant.size,
        sku: productVariant.sku,
      });
      // setValue("id", productVariant.id);
      // setValue( "code", productVariant.code );
      // setValue( "name", productVariant.name );
      // setValue( "price", productVariant.price ?? undefined );
      // setValue( "isActive", productVariant.isActive ?? undefined );
      // setValue( "size", productVariant.size );
      // setValue( "sku", productVariant.sku );
    }
  }, [productVariantData]);

  const onSubmit: SubmitHandler<TUpdateProductVariantRequest> = async (
    data
  ) => {
    const payload = {
      code: data.code,
      name: data.name,
      price: data.price,
      isActive: data.isActive,
      sku: data.sku ?? undefined,
      size: data.size,
    };

    try {
      await updateProductVariantMutation.mutateAsync({
        id: productVariantData.data.data.id,
        data: payload,
      });
      toast.success("Cập nhật chiến dịch thành công!");
      // navigate(-1);
    } catch (error) {
      handleApiError(error);
    }
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Chi tiết biến thể sản phẩm</h1>
      </div>
      <Form {...form}>
        <form
          className="relative"
          onSubmit={form.handleSubmit(onSubmit, (errors) => {
            console.error("Form validation errors:", errors);
          })}
        >
          <div className="container pb-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
              <Card className="shadow-none border-none bg-white lg:col-span-2 2xl:col-span-2">
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <FormField
                        control={form.control}
                        name="id"
                        render={({ field }) => {
                          return (
                            <FormItem>
                              <FormLabel>Mã biến thể *</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  placeholder="Nhập mã biến thể"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          );
                        }}
                      />
                      {/* <Input
                        {...register("code")}
                        placeholder="Nhập mã biến thể"
                      />
                      {errors.name && (
                        <p className="text-sm text-red-500">
                          {errors.name.message}
                        </p>
                      )} */}
                    </div>
                    <div>
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => {
                          return (
                            <FormItem>
                              <FormLabel>Tên biến thể *</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  placeholder="Nhập tên biến thể"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          );
                        }}
                      />
                      {/* <Input
                        {...register("name")}
                        placeholder="Nhập tên biến thể"
                      />
                      {errors.name && (
                        <p className="text-sm text-red-500">
                          {errors.name.message}
                        </p>
                      )} */}
                    </div>
                    <div>
                      <FormField
                        control={form.control}
                        name="sku"
                        render={({ field }) => {
                          return (
                            <FormItem>
                              <FormLabel>SKU*</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  placeholder="Nhập SKU biến thể"
                                  value={field.value ?? ""}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          );
                        }}
                      />
                      {/* <Input
                        {...register("sku")}
                        placeholder="Nhập mã SKU biến thể"
                      />
                      {errors.name && (
                        <p className="text-sm text-red-500">
                          {errors.name.message}
                        </p>
                      )} */}
                    </div>
                    <div>
                      <FormField
                        control={form.control}
                        name="price"
                        render={({ field }) => {
                          return (
                            <FormItem>
                              <FormLabel>Giá gốc *</FormLabel>
                              <FormControl>
                                <Input {...field} placeholder="Nhập giá gốc" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          );
                        }}
                      />
                      {/* <label className="block text-sm font-medium">
                        Giá gốc *
                      </label>
                      <Input
                        {...register("price", { valueAsNumber: true })}
                        placeholder="Nhập giá gốc"
                      />
                      {errors.name && (
                        <p className="text-sm text-red-500">
                          {errors.name.message}
                        </p>
                      )} */}
                    </div>
                    <div>
                      <FormField
                        control={form.control}
                        name="size"
                        render={({ field }) => {
                          return (
                            <FormItem>
                              <FormLabel>Kích cỡ *</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  placeholder="Nhập kích cỡ"
                                  value={field.value ?? ""}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          );
                        }}
                      />
                      {/* <label className="block text-sm font-medium">
                        Kích cỡ *
                      </label>
                      <Input {...register("size")} placeholder="Nhập kích cỡ" />
                      {errors.name && (
                        <p className="text-sm text-red-500">
                          {errors.name.message}
                        </p>
                      )} */}
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-1 items-center">
                      <label className="block text-sm font-medium">
                        Sản phẩm
                      </label>
                      <Input
                        value={productOfVariantData.data.data.name ?? ""}
                        placeholder="Nhập kích cỡ"
                        disabled
                      />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-1 items-center">
                      <label className="block text-sm font-medium">
                        Danh mục
                      </label>
                      <Input
                        value={categoryOfVariantData?.data.data.name ?? ""}
                        placeholder="Nhập kích cỡ"
                        disabled
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-row items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <FormField
                      control={form.control}
                      name="isActive"
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormLabel>Đã áp dụng tại cửa hàng</FormLabel>
                            <FormControl>
                              <Switch
                                checked={!!field.value}
                                onCheckedChange={(checked) =>
                                  field.onChange(checked)
                                }
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        );
                      }}
                    />
                    {/* <span className="text-sm font-medium">
                      Đã áp dụng tại cửa hàng
                    </span>
                    <Controller
                      control={control}
                      name="isActive"
                      render={({ field }) => (
                        <Switch
                          checked={!!field.value}
                          onCheckedChange={(checked) => field.onChange(checked)}
                        />
                      )}
                    /> */}
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
                      {(productOfVariantData.data?.data?.productImages
                        ?.length ?? 0) > 0 ? (
                        <div>
                          <h4 className="text-sm font-medium mb-2">
                            Ảnh hiện tại
                          </h4>
                          <div className="grid grid-cols-2 gap-4">
                            {productOfVariantData.data?.data?.productImages?.map(
                              (field, index) => (
                                <div key={field.id} className="relative">
                                  <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                                    <img
                                      src={field.imageUrl}
                                      alt={`Existing ${index}`}
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      ) : (
                        <div className="aspect-square rounded-lg overflow-hidden flex items-center justify-center">
                          <ImageNotFound />
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-6 mr-16">
            <Button type="submit">Lưu thay đổi</Button>
          </div>
        </form>
      </Form>

      {/* <form
        className="relative"
        onSubmit={handleSubmit(onSubmit, (errors) => {
          console.error("Form validation errors:", errors);
        })}
      >
        <div className="container pb-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
            <Card className="shadow-none border-none bg-white lg:col-span-2 2xl:col-span-2">
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium">
                      Mã biến thể *
                    </label>
                    <Input
                      {...register("code")}
                      placeholder="Nhập mã biến thể"
                    />
                    {errors.name && (
                      <p className="text-sm text-red-500">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium">
                      Tên biến thể *
                    </label>
                    <Input
                      {...register("name")}
                      placeholder="Nhập tên biến thể"
                    />
                    {errors.name && (
                      <p className="text-sm text-red-500">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium">SKU *</label>
                    <Input
                      {...register("sku")}
                      placeholder="Nhập mã SKU biến thể"
                    />
                    {errors.name && (
                      <p className="text-sm text-red-500">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium">
                      Giá gốc *
                    </label>
                    <Input
                      {...register("price", { valueAsNumber: true })}
                      placeholder="Nhập giá gốc"
                    />
                    {errors.name && (
                      <p className="text-sm text-red-500">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium">
                      Kích cỡ *
                    </label>
                    <Input {...register("size")} placeholder="Nhập kích cỡ" />
                    {errors.name && (
                      <p className="text-sm text-red-500">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-1 items-center">
                    <label className="block text-sm font-medium">
                      Sản phẩm
                    </label>
                    <Input
                      value={productOfVariantData.data.data.name ?? ""}
                      placeholder="Nhập kích cỡ"
                      disabled
                    />
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-1 items-center">
                    <label className="block text-sm font-medium">
                      Danh mục
                    </label>
                    <Input
                      value={categoryOfVariantData?.data.data.name ?? ""}
                      placeholder="Nhập kích cỡ"
                      disabled
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-row items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium">
                    Đã áp dụng tại cửa hàng
                  </span>
                  <Controller
                    control={control}
                    name="isActive"
                    render={({ field }) => (
                      <Switch
                        checked={!!field.value}
                        onCheckedChange={(checked) => field.onChange(checked)}
                      />
                    )}
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
                    {(productOfVariantData.data?.data?.productImages?.length ??
                      0) > 0 ? (
                      <div>
                        <h4 className="text-sm font-medium mb-2">
                          Ảnh hiện tại
                        </h4>
                        <div className="grid grid-cols-2 gap-4">
                          {productOfVariantData.data?.data?.productImages?.map(
                            (field, index) => (
                              <div key={field.id} className="relative">
                                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                                  <img
                                    src={field.imageUrl}
                                    alt={`Existing ${index}`}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    ) : (
                      <div className="aspect-square rounded-lg overflow-hidden flex items-center justify-center">
                        <ImageNotFound />
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-6 mr-16">
          <Button type="submit">Lưu thay đổi</Button>
        </div>
      </form> */}
    </div>
  );
};

export default ProductVariantEditPage;
