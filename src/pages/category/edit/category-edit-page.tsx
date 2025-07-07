// src/pages/category/edit/category-edit-page.tsx
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import type { SubmitHandler } from "react-hook-form";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

import { useCategory } from "@/hooks/use-category";
import { categoryApi } from "@/apis/category.api";
import { handleApiError } from "@/lib/error";
import {
  UpdateCategorySchema,
  type TUpdateCategoryRequest,
  type TCategoryResponse,
} from "@/schema/category.schema";
import { Upload } from "lucide-react";

const CategoryEditPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<1 | 2>(1);

  const { getCategoryById, getParentCategories } = useCategory();
  const { data: categoryData } = getCategoryById(id!);
  const { data: parentCategoriesResponse } = getParentCategories();
  const parentCategories: TCategoryResponse[] =
    parentCategoriesResponse?.data?.data?.items ?? [];

  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm<TUpdateCategoryRequest>({
    resolver: zodResolver(UpdateCategorySchema),
    defaultValues: {
      id: "",
      code: "",
      name: "",
      description: "",
      type: 1,
      status: 1,
      displayOrder: 0,
      parentId: null,
      image: undefined,
      hasChildCategory: false,
    },
  });

  useEffect(() => {
    if (categoryData?.data?.data) {
      const category = categoryData.data.data;
      // //console.log(category);
      setValue("id", category.id);
      setValue("code", category.code);
      setValue("name", category.name);
      setValue("description", category.description ?? "");
      setValue("displayOrder", category.displayOrder ?? 0);
      setValue("status", category.status as 0 | 1);
      setValue("type", category.type as 1 | 2);
      setValue("parentId", category.parentCategory?.id ?? null);
      setValue("hasChildCategory", category.hasChildCategory);
      setImagePreview(category.pictureUrl ?? null);
      setSelectedType(category.type as 1 | 2);
    }
  }, [categoryData, setValue]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setImagePreview(reader.result as string);
    reader.readAsDataURL(file);
    setValue("image", file);
  };

  const handleRemoveImage = () => {
    setImagePreview(null);
    setValue("image", undefined);
    const input = document.getElementById(
      "upload-image"
    ) as HTMLInputElement | null;
    if (input) input.value = "";
  };

  const onSubmit: SubmitHandler<TUpdateCategoryRequest> = async (data) => {
    const formData = new FormData();
    formData.append("id", data.id);
    formData.append("code", data.code);
    formData.append("name", data.name);
    formData.append("description", data.description ?? "");
    formData.append("displayOrder", data.displayOrder?.toString() || "0");
    formData.append("status", data.status.toString());
    if (data.parentId) {
      formData.append("parentCategoryId", data.parentId);
    }
    if (data.image instanceof File) formData.append("image", data.image);

    try {
      await categoryApi.updateCategory(data.id, formData);
      toast.success("Cập nhật danh mục thành công!");
      navigate(-1);
    } catch (error) {
      handleApiError(error);
    }
  };

  const watchType = watch("type");

  useEffect(() => {
    setSelectedType(watchType);
    if (watchType === 1) setValue("parentId", null);
  }, [watchType, setValue]);

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Thông tin danh mục</h1>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        // className="grid gap-6 grid-cols-1 lg:grid-cols-4"
      >
        <div className="container pb-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
            <Card className="shadow-none border-none bg-white lg:col-span-2 2xl:col-span-2">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium">Hoạt động</span>
                  <Controller
                    control={control}
                    name="status"
                    render={({ field }) => (
                      <Switch
                        checked={field.value === 0}
                        onCheckedChange={(checked) =>
                          field.onChange(checked ? 0 : 1)
                        }
                      />
                    )}
                  />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input {...register("id")} type="hidden" />
                <Input {...register("hasChildCategory")} type="hidden" />

                <div>
                  <label className="block text-sm font-medium">
                    Mã danh mục
                  </label>
                  <Input
                    {...register("code")}
                    readOnly
                    className="bg-muted cursor-not-allowed"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium">
                    Tên danh mục *
                  </label>
                  <Input
                    {...register("name")}
                    placeholder="Nhập tên danh mục"
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium">Mô tả</label>
                  <Textarea
                    {...register("description")}
                    placeholder="Mô tả danh mục"
                  />
                  {errors.description && (
                    <p className="text-sm text-red-500">
                      {errors.description.message}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="grid grid-cols-1 lg:grid-cols-1 items-center">
                    <label className="block text-sm font-medium">
                      Thứ tự hiển thị
                    </label>
                    <Input
                      type="number"
                      {...register("displayOrder", { valueAsNumber: true })}
                    />
                    {errors.displayOrder && (
                      <p className="text-sm text-red-500">
                        {errors.displayOrder.message}
                      </p>
                    )}
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-1 items-center">
                    <label className="block text-sm font-medium">
                      Loại danh mục
                    </label>
                    <Controller
                      control={control}
                      name="type"
                      render={({ field }) => (
                        <Select value={field.value?.toString()} disabled>
                          <SelectTrigger className="w-full">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">Danh mục cha</SelectItem>
                            <SelectItem value="2">Danh mục con</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-1 items-center">
                    {selectedType === 2 && (
                      <div>
                        <label className="block text-sm font-medium">
                          Danh mục cha *
                        </label>
                        <Controller
                          control={control}
                          name="parentId"
                          render={({ field }) => {
                            const selectedCat = parentCategories.find(
                              (cat) => cat.id === field.value
                            );

                            return (
                              <Select
                                value={field.value || ""}
                                onValueChange={(val) => field.onChange(val)}
                              >
                                <SelectTrigger className="w-full">
                                  <div className="truncate">
                                    {selectedCat
                                      ? `${selectedCat.name} - ${selectedCat.code}`
                                      : "Chọn danh mục cha"}
                                  </div>
                                </SelectTrigger>
                                <SelectContent>
                                  {parentCategories.map((cat) => (
                                    <SelectItem key={cat.id} value={cat.id}>
                                      {`${cat.code} - ${cat.name}`}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            );
                          }}
                        />
                        {errors.parentId && (
                          <p className="text-sm text-red-500">
                            {errors.parentId.message}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
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
                    <div className="lg:col-span-1">
                      <Card className="shadow-none border-none bg-white">
                        <CardHeader>
                          <CardTitle className="flex justify-between items-center">
                            Hình Ảnh
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <input
                            type="file"
                            id="upload-image"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="hidden"
                          />
                          {imagePreview ? (
                            <img
                              src={imagePreview}
                              alt="Preview"
                              className="w-full h-auto rounded-lg"
                            />
                          ) : (
                            <div className="text-center text-muted-foreground py-12">
                              <Upload className="w-12 h-12 mx-auto mb-2 opacity-40" />
                              <p>Chưa chọn hình ảnh</p>
                            </div>
                          )}
                          {errors.image && (
                            <p className="text-sm text-red-500 mt-2">
                              {errors.image.message as string}
                            </p>
                          )}
                        </CardContent>
                        <CardFooter>
                          <div className="flex gap-2">
                            <Button
                              type="button"
                              variant="outline"
                              onClick={() =>
                                document.getElementById("upload-image")?.click()
                              }
                            >
                              {" "}
                              <Upload className="w-4 h-4 mr-2" /> Tải lên{" "}
                            </Button>
                            {imagePreview && (
                              <Button
                                type="button"
                                variant="destructive"
                                onClick={handleRemoveImage}
                              >
                                Xóa
                              </Button>
                            )}
                          </div>
                        </CardFooter>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </form>
    </div>

    // <div className="container max-w-6xl mx-auto p-6">
    //   <h1 className="text-3xl font-bold mb-6">Chi Tiết danh mục</h1>
    //   <form
    //     onSubmit={handleSubmit(onSubmit)}
    //     className="grid gap-6 grid-cols-1 lg:grid-cols-4"
    //   >
    //     <div className="lg:col-span-1">
    //       <Card className="shadow-none border-none bg-white">
    //         <CardHeader>
    //           <CardTitle className="flex justify-between items-center">
    //             Hình Ảnh
    //           </CardTitle>
    //         </CardHeader>
    //         <CardContent>
    //           <input
    //             type="file"
    //             id="upload-image"
    //             accept="image/*"
    //             onChange={handleImageChange}
    //             className="hidden"
    //           />
    //           {imagePreview ? (
    //             <img
    //               src={imagePreview}
    //               alt="Preview"
    //               className="w-full h-auto rounded-lg"
    //             />
    //           ) : (
    //             <div className="text-center text-muted-foreground py-12">
    //               <Upload className="w-12 h-12 mx-auto mb-2 opacity-40" />
    //               <p>Chưa chọn hình ảnh</p>
    //             </div>
    //           )}
    //           {errors.image && (
    //             <p className="text-sm text-red-500 mt-2">
    //               {errors.image.message as string}
    //             </p>
    //           )}
    //         </CardContent>
    //         <CardFooter>
    //           <div className="flex gap-2">
    //             <Button
    //               type="button"
    //               variant="outline"
    //               onClick={() =>
    //                 document.getElementById("upload-image")?.click()
    //               }
    //             >
    //               {" "}
    //               <Upload className="w-4 h-4 mr-2" /> Tải lên{" "}
    //             </Button>
    //             {imagePreview && (
    //               <Button
    //                 type="button"
    //                 variant="destructive"
    //                 onClick={handleRemoveImage}
    //               >
    //                 Xóa
    //               </Button>
    //             )}
    //           </div>
    //         </CardFooter>
    //       </Card>
    //     </div>

    //     <div className="lg:col-span-3 space-y-6">
    //       <Card className="shadow-none border-none bg-white">
    //         <CardHeader className="flex flex-row items-center justify-between">
    //           <CardTitle>Thông tin danh mục</CardTitle>
    //           <div className="flex items-center space-x-2">
    //             <span className="text-sm font-medium">Hoạt động</span>
    //             <Controller
    //               control={control}
    //               name="status"
    //               render={({ field }) => (
    //                 <Switch
    //                   checked={field.value === 0}
    //                   onCheckedChange={(checked) =>
    //                     field.onChange(checked ? 0 : 1)
    //                   }
    //                 />
    //               )}
    //             />
    //           </div>
    //         </CardHeader>
    //         <CardContent className="space-y-4">
    //           <Input {...register("id")} type="hidden" />
    //           <Input {...register("hasChildCategory")} type="hidden" />

    //           <div>
    //             <label className="block text-sm font-medium">Mã danh mục</label>
    //             <Input
    //               {...register("code")}
    //               readOnly
    //               className="bg-muted cursor-not-allowed"
    //             />
    //           </div>

    //           <div>
    //             <label className="block text-sm font-medium">
    //               Tên danh mục *
    //             </label>
    //             <Input {...register("name")} placeholder="Nhập tên danh mục" />
    //             {errors.name && (
    //               <p className="text-sm text-red-500">{errors.name.message}</p>
    //             )}
    //           </div>

    //           <div>
    //             <label className="block text-sm font-medium">Mô tả</label>
    //             <Textarea
    //               {...register("description")}
    //               placeholder="Mô tả danh mục"
    //             />
    //             {errors.description && (
    //               <p className="text-sm text-red-500">
    //                 {errors.description.message}
    //               </p>
    //             )}
    //           </div>

    //           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    //             <div className="grid grid-cols-1 lg:grid-cols-1 items-center">
    //               <label className="block text-sm font-medium">
    //                 Thứ tự hiển thị
    //               </label>
    //               <Input
    //                 type="number"
    //                 {...register("displayOrder", { valueAsNumber: true })}
    //               />
    //               {errors.displayOrder && (
    //                 <p className="text-sm text-red-500">
    //                   {errors.displayOrder.message}
    //                 </p>
    //               )}
    //             </div>
    //             <div className="grid grid-cols-1 lg:grid-cols-1 items-center">
    //               <label className="block text-sm font-medium">
    //                 Loại danh mục
    //               </label>
    //               <Controller
    //                 control={control}
    //                 name="type"
    //                 render={({ field }) => (
    //                   <Select value={field.value?.toString()} disabled>
    //                     <SelectTrigger className="w-full">
    //                       <SelectValue />
    //                     </SelectTrigger>
    //                     <SelectContent>
    //                       <SelectItem value="1">Danh mục cha</SelectItem>
    //                       <SelectItem value="2">Danh mục con</SelectItem>
    //                     </SelectContent>
    //                   </Select>
    //                 )}
    //               />
    //             </div>
    //             <div className="grid grid-cols-1 lg:grid-cols-1 items-center">
    //               {selectedType === 2 && (
    //                 <div>
    //                   <label className="block text-sm font-medium">
    //                     Danh mục cha *
    //                   </label>
    //                   <Controller
    //                     control={control}
    //                     name="parentId"
    //                     render={({ field }) => {
    //                       const selectedCat = parentCategories.find(
    //                         (cat) => cat.id === field.value
    //                       );

    //                       return (
    //                         <Select
    //                           value={field.value || ""}
    //                           onValueChange={(val) => field.onChange(val)}
    //                         >
    //                           <SelectTrigger className="w-full">
    //                             <div className="truncate">
    //                               {selectedCat
    //                                 ? `${selectedCat.name} - ${selectedCat.code}`
    //                                 : "Chọn danh mục cha"}
    //                             </div>
    //                           </SelectTrigger>
    //                           <SelectContent>
    //                             {parentCategories.map((cat) => (
    //                               <SelectItem key={cat.id} value={cat.id}>
    //                                 {`${cat.code} - ${cat.name}`}
    //                               </SelectItem>
    //                             ))}
    //                           </SelectContent>
    //                         </Select>
    //                       );
    //                     }}
    //                   />
    //                   {errors.parentId && (
    //                     <p className="text-sm text-red-500">
    //                       {errors.parentId.message}
    //                     </p>
    //                   )}
    //                 </div>
    //               )}
    //             </div>
    //           </div>
    //         </CardContent>
    //       </Card>

    //       <div className="flex justify-end">
    //         <Button type="submit">Lưu Thay Đổi</Button>
    //       </div>
    //     </div>
    //   </form>
    // </div>
  );
};

export default CategoryEditPage;
