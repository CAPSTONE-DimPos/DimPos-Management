import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";

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
import { Upload } from "lucide-react";
import { Switch } from "@/components/ui/switch";

import {
  CreateCategorySchema,
  type TCreateCategoryRequest,
  type TCategoryResponse,
} from "@/schema/category.schema";
import { useMutation } from "@tanstack/react-query";
import { categoryApi } from "@/apis/category.api";
import { handleApiError } from "@/lib/error";
import { useCategory } from "@/hooks/use-category";
import {
  handleChangeModalState,
  handleSetCreatedId,
} from "@/redux/modal/modal-slice";

const CreateCategoryPage = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<number>(1);
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  // const { isOpen, createdId } = useSelector((state: RootState) => state.modal);

  const { getParentCategories } = useCategory();
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
  } = useForm<TCreateCategoryRequest>({
    resolver: zodResolver(CreateCategorySchema),
    defaultValues: {
      code: "",
      name: "",
      description: "",
      type: 1,
      displayOrder: 1,
      image: undefined,
      status: 0,
      parentId: null,
    },
  });

  const createCategoryMutation = useMutation({
    mutationFn: (formData: FormData) => categoryApi.createCategory(formData),
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result as string);
    };
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

  const onSubmit = async (data: TCreateCategoryRequest) => {
    const formData = new FormData();
    formData.append("code", data.code ?? "");
    formData.append("name", data.name);
    formData.append("description", data.description ?? "");
    formData.append("type", data.type.toString());
    formData.append("status", data.status.toString());
    formData.append("displayOrder", data.displayOrder?.toString() || "0");
    if (data.parentId != null) {
      formData.append("parentId", data.parentId);
    }
    if (data.image instanceof File) {
      formData.append("image", data.image);
    }

    try {
      const result = await createCategoryMutation.mutateAsync(formData);
      dispatch(handleSetCreatedId(result.data.data.id));
      dispatch(handleChangeModalState(true));
      toast.success("Tạo danh mục thành công!");
    } catch (error) {
      handleApiError(error);
    }
  };

  const watchType = watch("type");

  useEffect(() => {
    setSelectedType(watchType);
    if (watchType === 1) {
      setValue("parentId", null);
    }
  }, [watchType, setValue]);

  return (
    <div className="container max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Tạo Danh Mục Mới</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-6 grid-cols-1 lg:grid-cols-4"
      >
        {/* Hình ảnh */}
        <div className="lg:col-span-1 lg:order-first">
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
              <div className="flex gap-2 items-center">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() =>
                    document.getElementById("upload-image")?.click()
                  }
                >
                  <Upload className="w-4 h-4 mr-2" /> Tải lên
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

        {/* Thông tin chính */}
        <div className="lg:col-span-3 space-y-6">
          <Card className="shadow-none border-none bg-white">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Thông tin danh mục</CardTitle>
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
              <div>
                <label className="block text-sm font-medium">
                  Mã danh mục *
                </label>
                <Input {...register("code")} placeholder="Nhập mã danh mục" />
                {errors.code && (
                  <p className="text-sm text-red-500">{errors.code.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium">
                  Tên danh mục *
                </label>
                <Input {...register("name")} placeholder="Nhập tên danh mục" />
                {errors.name && (
                  <p className="text-sm text-red-500">{errors.name.message}</p>
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
                    Loại danh mục *
                  </label>
                  <Controller
                    control={control}
                    name="type"
                    render={({ field }) => (
                      <Select
                        value={String(field.value)}
                        onValueChange={(val) => field.onChange(Number(val))}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Chọn loại" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">Danh mục cha</SelectItem>
                          <SelectItem value="2">Danh mục con</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.type && (
                    <p className="text-sm text-red-500">
                      {errors.type.message}
                    </p>
                  )}
                </div>

                {selectedType === 2 && (
                  <div className="grid grid-cols-1 lg:grid-cols-1 items-center">
                    <label className="block text-sm font-medium">
                      Danh mục cha *
                    </label>
                    <Controller
                      control={control}
                      name="parentId"
                      render={({ field }) => (
                        <Select
                          value={field.value || ""}
                          onValueChange={(val) => field.onChange(val)}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Chọn danh mục cha" />
                          </SelectTrigger>
                          <SelectContent>
                            {parentCategories.map((cat) => (
                              <SelectItem key={cat.id} value={cat.id}>
                                {`${cat.code} - ${cat.name}`}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    />
                    {errors.parentId && (
                      <p className="text-sm text-red-500">
                        {errors.parentId.message}
                      </p>
                    )}
                  </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-1 items-center">
                  <label className="block text-sm font-medium">
                    Thứ tự hiển thị
                  </label>
                  <Input type="number" {...register("displayOrder" as const)} />
                  {errors.displayOrder && (
                    <p className="text-sm text-red-500">
                      {errors.displayOrder.message}
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end">
            <Button type="submit" disabled={createCategoryMutation.isPending}>
              {createCategoryMutation.isPending
                ? "Đang lưu..."
                : "Lưu Danh Mục"}
            </Button>
          </div>
        </div>
      </form>

      {/* Dialog xác nhận thành công */}
      {/* <Dialog
        open={isOpen}
        onOpenChange={(open) => dispatch(handleChangeModalState(open))}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Tạo danh mục thành công</DialogTitle>
          </DialogHeader>
          <p>Bạn có muốn chuyển đến trang chỉnh sửa danh mục vừa tạo không?</p>
          <DialogFooter className="mt-4 flex justify-end gap-2">
            <Button
              variant="outline"
              onClick={() => dispatch(handleChangeModalState(false))}
            >
              Ở lại
            </Button>
            <Button
              onClick={() => {
                if (createdId) {
                  dispatch(handleChangeModalState(false));
                  navigate(PATH_BRAND_DASHBOARD.category.edit(createdId));
                }
              }}
            >
              Xem danh mục
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog> */}
    </div>
  );
};

export default CreateCategoryPage;
