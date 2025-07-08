// src/pages/ProductVariant/edit/ProductVariant-edit-page.tsx
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import type { SubmitHandler } from "react-hook-form";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { handleApiError } from "@/lib/error";
import { useProductVariant } from "@/hooks/use-product-variant";
import {
  UpdateProductVariantSchema,
  type TUpdateProductVariantRequest,
} from "@/schema/product-variant.schema";
import { productVariantApi } from "@/apis/product-variant.api";
import {
  getProductVariantStatusLabel,
  ProductVariantStatusEnum,
} from "@/types/enums/product-variant-status.enum";
import { useProduct } from "@/hooks/use-product";
import { useCategory } from "@/hooks/use-category";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import ImageNotFound from "@/assets/illustration/image-not-found";
import { Button } from "@/components/ui/button";

const ProductVariantEditPage = () => {
  const { id } = useParams<{ id: string }>();

  const { getProductVariantById } = useProductVariant();
  const { getProductById } = useProduct();
  const { getCategoryById } = useCategory();
  const { data: productVariantData } = getProductVariantById(id as string);
  const productId = productVariantData?.data?.data?.productId;
  const categoryId = productVariantData?.data?.data?.categoryId;
  const { data: productOfVariantData } = getProductById(productId);
  const { data: categoryOfVariantData } = getCategoryById(categoryId);

  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TUpdateProductVariantRequest>({
    resolver: zodResolver(UpdateProductVariantSchema),
    defaultValues: {
      code: productVariantData.data.data.code,
      alternativeCode: productVariantData.data.data.alternativeCode,
      discountPercent: productVariantData.data.data.discountPercent,
      discountPrice: productVariantData.data.data.discountPrice,
      displayOrder: 0,
      isActive: productVariantData.data.data.isActive,
      isMenuDisplay: productVariantData.data.data.isMenuDisplay,
      name: productVariantData.data.data.name,
      price: productVariantData.data.data.price,
      priceCOGS: productVariantData.data.data.priceCOGS,
      size: productVariantData.data.data.size,
      sku: productVariantData.data.data.sku,
      status: productVariantData.data.data.status,
    },
  });

  useEffect(() => {
    if (productVariantData?.data?.data) {
      const productVariant = productVariantData.data.data;
      // setValue("id", productVariant.id);
      setValue("code", productVariant.code);
      setValue("alternativeCode", productVariant.alternativeCode);
      setValue("name", productVariant.name);
      setValue("discountPercent", productVariant.discountPercent);
      setValue("discountPrice", productVariant.discountPrice ?? undefined);
      setValue("price", productVariant.price ?? undefined);
      setValue("priceCOGS", productVariant.priceCOGS ?? 0);
      setValue("isActive", productVariant.isActive ?? undefined);
      setValue("size", productVariant.size);
      setValue("isMenuDisplay", productVariant.isMenuDisplay);
      setValue("sku", productVariant.sku);
      setValue("status", productVariant.status);
    }
  }, [productVariantData, setValue]);

  const onSubmit: SubmitHandler<TUpdateProductVariantRequest> = async (
    data
  ) => {
    const payload: TUpdateProductVariantRequest = {
      code: data.code,
      alternativeCode: data.alternativeCode ?? "",
      name: data.name,
      discountPercent: data.discountPercent ?? null,
      discountPrice: data.discountPrice ?? null,
      price: data.price,
      priceCOGS: data.priceCOGS,
      isActive: data.isActive,
      isMenuDisplay: data.isMenuDisplay,
      displayOrder: data.displayOrder,
      sku: data.sku,
      status: data.status,
      size: data.size,
    };

    try {
      await productVariantApi.updateProductVariantApi(
        productVariantData.data.data.id,
        payload
      );
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
      <form
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
                      Trạng thái *
                    </label>
                    <Controller
                      control={control}
                      name="status"
                      render={({ field }) => {
                        return (
                          <Select
                            {...register("status", { valueAsNumber: true })}
                            value={String(field.value)}
                            onValueChange={(val) => field.onChange(Number(val))}
                          >
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Chọn loại" />
                            </SelectTrigger>
                            <SelectContent>
                              {Object.values(ProductVariantStatusEnum).map(
                                (value) => (
                                  <SelectItem key={value} value={String(value)}>
                                    {getProductVariantStatusLabel(value)}
                                  </SelectItem>
                                )
                              )}
                            </SelectContent>
                            {/* <option value="">Chọn trạng thái</option>
                             {Object.values(ProductVariantStatusEnum).map(
                               (value) => (
                                 <option key={value} value={value}>
                                   {getProductVariantStatusLabel(value)}
                                 </option>
                               )
                             )} */}
                          </Select>
                        );
                      }}
                    />
                    {errors.status && (
                      <p className="text-sm text-red-500">
                        {errors.status.message}
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
                    Đã dùng trong thực đơn
                  </span>
                  <Controller
                    control={control}
                    name="isMenuDisplay"
                    render={({ field }) => (
                      <Switch
                        checked={!!field.value}
                        onCheckedChange={(checked) =>
                          field.onChange(checked ? 0 : 1)
                        }
                      />
                    )}
                  />
                </div>
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
                        onCheckedChange={(checked) =>
                          field.onChange(checked ? 0 : 1)
                        }
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
      </form>
    </div>
    // <div className="container pb-6">
    //   <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
    //     <div className="container max-w-6xl mx-auto p-6">
    //       <h1 className="text-3xl font-bold mb-6">
    //         Chi tiết biến thể sản phẩm
    //       </h1>
    //       <form
    //         onSubmit={handleSubmit(onSubmit)}
    //         className="grid gap-6 grid-cols-1 lg:grid-cols-1"
    //       >
    //         <div className="lg:col-span-3 space-y-6">
    //           <Card className="shadow-none border-none bg-white">
    //             <CardContent className="space-y-4">
    //               <Input {...register("id")} type="hidden" />
    //               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    //                 <div>
    //                   <label className="block text-sm font-medium">
    //                     Mã biến thể *
    //                   </label>
    //                   <Input
    //                     {...register("code")}
    //                     placeholder="Nhập mã biến thể"
    //                   />
    //                   {errors.name && (
    //                     <p className="text-sm text-red-500">
    //                       {errors.name.message}
    //                     </p>
    //                   )}
    //                 </div>
    //                 <div>
    //                   <label className="block text-sm font-medium">
    //                     Tên biến thể *
    //                   </label>
    //                   <Input
    //                     {...register("name")}
    //                     placeholder="Nhập tên biến thể"
    //                   />
    //                   {errors.name && (
    //                     <p className="text-sm text-red-500">
    //                       {errors.name.message}
    //                     </p>
    //                   )}
    //                 </div>
    //                 <div>
    //                   <label className="block text-sm font-medium">SKU *</label>
    //                   <Input
    //                     {...register("sku")}
    //                     placeholder="Nhập mã SKU biến thể"
    //                   />
    //                   {errors.name && (
    //                     <p className="text-sm text-red-500">
    //                       {errors.name.message}
    //                     </p>
    //                   )}
    //                 </div>
    //                 <div>
    //                   <label className="block text-sm font-medium">
    //                     Giá gốc *
    //                   </label>
    //                   <Input
    //                     {...register("price")}
    //                     placeholder="Nhập giá gốc"
    //                   />
    //                   {errors.name && (
    //                     <p className="text-sm text-red-500">
    //                       {errors.name.message}
    //                     </p>
    //                   )}
    //                 </div>
    //                 <div>
    //                   <label className="block text-sm font-medium">
    //                     Kích cỡ *
    //                   </label>
    //                   <Input {...register("size")} placeholder="Nhập kích cỡ" />
    //                   {errors.name && (
    //                     <p className="text-sm text-red-500">
    //                       {errors.name.message}
    //                     </p>
    //                   )}
    //                 </div>
    //                 <div className="grid grid-cols-1 lg:grid-cols-1 items-center">
    //                   <label className="block text-sm font-medium">
    //                     Trạng thái *
    //                   </label>
    //                   <Controller
    //                     control={control}
    //                     name="status"
    //                     render={({ field }) => {
    //                       return (
    //                         <Select
    //                           {...register("status", { valueAsNumber: true })}
    //                           value={String(field.value)}
    //                           onValueChange={(val) =>
    //                             field.onChange(Number(val))
    //                           }
    //                         >
    //                           <SelectTrigger className="w-full">
    //                             <SelectValue placeholder="Chọn loại" />
    //                           </SelectTrigger>
    //                           <SelectContent>
    //                             {Object.values(ProductVariantStatusEnum).map(
    //                               (value) => (
    //                                 <SelectItem
    //                                   key={value}
    //                                   value={String(value)}
    //                                 >
    //                                   {getProductVariantStatusLabel(value)}
    //                                 </SelectItem>
    //                               )
    //                             )}
    //                           </SelectContent>
    //                           {/* <option value="">Chọn trạng thái</option>
    //                         {Object.values(ProductVariantStatusEnum).map(
    //                           (value) => (
    //                             <option key={value} value={value}>
    //                               {getProductVariantStatusLabel(value)}
    //                             </option>
    //                           )
    //                         )} */}
    //                         </Select>
    //                       );
    //                     }}
    //                   />
    //                   {errors.status && (
    //                     <p className="text-sm text-red-500">
    //                       {errors.status.message}
    //                     </p>
    //                   )}
    //                 </div>
    //                 <div className="grid grid-cols-1 lg:grid-cols-1 items-center">
    //                   <label className="block text-sm font-medium">
    //                     Sản phẩm
    //                   </label>
    //                   <Input
    //                     value={productOfVariantData.data.data.name ?? ""}
    //                     placeholder="Nhập kích cỡ"
    //                     disabled
    //                   />
    //                 </div>
    //                 <div className="grid grid-cols-1 lg:grid-cols-1 items-center">
    //                   <label className="block text-sm font-medium">
    //                     Danh mục
    //                   </label>
    //                   <Input
    //                     value={categoryOfVariantData?.data.data.name ?? ""}
    //                     placeholder="Nhập kích cỡ"
    //                     disabled
    //                   />
    //                 </div>
    //               </div>
    //             </CardContent>
    //             <CardFooter className="flex flex-row items-center justify-between">
    //               <div className="flex items-center space-x-2">
    //                 <span className="text-sm font-medium">
    //                   Đã dùng trong thực đơn
    //                 </span>
    //                 <Controller
    //                   control={control}
    //                   name="isMenuDisplay"
    //                   render={({ field }) => (
    //                     <Switch
    //                       checked={field.value}
    //                       onCheckedChange={(checked) =>
    //                         field.onChange(checked ? 0 : 1)
    //                       }
    //                     />
    //                   )}
    //                 />
    //               </div>
    //               <div className="flex items-center space-x-2">
    //                 <span className="text-sm font-medium">
    //                   Đã áp dụng tại cửa hàng
    //                 </span>
    //                 <Controller
    //                   control={control}
    //                   name="isActive"
    //                   render={({ field }) => (
    //                     <Switch
    //                       checked={field.value}
    //                       onCheckedChange={(checked) =>
    //                         field.onChange(checked ? 0 : 1)
    //                       }
    //                     />
    //                   )}
    //                 />
    //               </div>
    //             </CardFooter>
    //           </Card>
    //           <div className="flex justify-end">
    //             <Button type="submit">Lưu Thay Đổi</Button>
    //           </div>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ProductVariantEditPage;
