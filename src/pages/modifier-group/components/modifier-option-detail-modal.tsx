import { useForm, useFieldArray, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery, useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { handleApiError } from "@/lib/error";
import {
  CreateModifierGroupSchema,
  type TCreateModifierGroupRequest,
  type TUpdateModifierGroupRequest,
  type TModifierOptionResponse,
} from "@/schema/product.schema";
import { productApi } from "@/apis/product.api";

interface Props {
  id: string;
  open: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

const EditModifierGroupModal = ({ id, open, onClose, onSuccess }: Props) => {
  const { data, isLoading } = useQuery({
    queryKey: ["modifier-group", id],
    queryFn: () => productApi.getModifierGroupById(id),
    enabled: open,
  });

  const { data: optionList } = useQuery({
    queryKey: ["modifier-group-options", id],
    queryFn: () => productApi.getModifierOptionsByGroupId(id),
    enabled: open,
  });

  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<TCreateModifierGroupRequest>({
    resolver: zodResolver(CreateModifierGroupSchema),
    defaultValues: {
      name: "",
      description: "",
      selectedType: 1,
      displayOrder: 0,
      isActive: true,
      modifierOptions: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "modifierOptions",
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: TUpdateModifierGroupRequest }) =>
      productApi.updateModifierGroup(id, data),
    onSuccess: () => {
      toast.success("Cập nhật nhóm tùy chọn thành công!");
      onSuccess?.();
      onClose();
    },
    onError: handleApiError,
  });

  React.useEffect(() => {
    const groupData = data?.data.data;
    const optionData = optionList?.data.data;

    if (groupData && optionData) {
      reset({
        name: groupData.name,
        description: groupData.description ?? "",
        selectedType: groupData.selectedType,
        displayOrder: groupData.displayOrder ?? 0,
        isActive: groupData.isActive,
        modifierOptions: optionData.items.map((opt: TModifierOptionResponse) => ({
          name: opt.name || "",
          description: opt.description || "",
          priceDelta: opt.priceDelta || 0,
          isActive: opt.isActive,
        })),
      });
    }
  }, [data, optionList, reset]);

  const onSubmit = (formData: TCreateModifierGroupRequest) => {
    const payload: TUpdateModifierGroupRequest = {
      id,
      ...formData,
    };
    updateMutation.mutate({ id, data: payload });
  };

  if (isLoading) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="!w-full !max-w-[90vw] lg:!max-w-[1280px] h-[95vh] overflow-y-auto p-6 bg-background border-none rounded-xl shadow-xl">
        <DialogHeader className="flex flex-row justify-between items-center mb-4">
          <DialogTitle className="text-2xl font-semibold">
            Cập Nhật Nhóm Tùy Chọn
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <Card>
            <CardHeader className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <CardTitle className="text-lg">Thông Tin Chung</CardTitle>
              <div className="flex items-center space-x-2 mt-2 md:mt-0">
                <span className="text-sm font-medium">Hiển thị</span>
                <Controller
                  control={control}
                  name="isActive"
                  render={({ field }) => (
                    <Switch checked={field.value} onCheckedChange={field.onChange} />
                  )}
                />
              </div>
            </CardHeader>
            <CardContent className="grid grid-cols-1 gap-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div>
                  <label className="text-sm font-medium">Tên nhóm *</label>
                  <Input {...register("name")} />
                  {errors.name && (
                    <p className="text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label className="text-sm font-medium">Hình thức chọn *</label>
                  <Controller
                    control={control}
                    name="selectedType"
                    render={({ field }) => (
                      <Select
                        value={String(field.value)}
                        onValueChange={(val) => field.onChange(Number(val))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Chọn hình thức" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">Một</SelectItem>
                          <SelectItem value="2">Nhiều</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.selectedType && (
                    <p className="text-sm text-red-500">
                      {errors.selectedType.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="text-sm font-medium">Thứ tự hiển thị</label>
                  <Input type="number" {...register("displayOrder")} />
                  {errors.displayOrder && (
                    <p className="text-sm text-red-500">
                      {errors.displayOrder.message}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">Mô tả</label>
                <Textarea {...register("description")} />
                {errors.description && (
                  <p className="text-sm text-red-500">
                    {errors.description.message}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex justify-between items-center">
              <CardTitle>Tùy Chọn</CardTitle>
              <Button
                type="button"
                variant="outline"
                onClick={() =>
                  append({
                    name: "",
                    description: "",
                    priceDelta: 0,
                    isActive: true,
                  })
                }
              >
                Thêm tùy chọn
              </Button>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="hidden lg:grid grid-cols-4 gap-4 px-1 text-sm font-medium text-muted-foreground">
                <span>Tên</span>
                <span>Mô tả</span>
                <span>Giá cộng thêm</span>
                <span>Trạng thái</span>
              </div>
              <div className="space-y-4">
                {fields.map((field, index) => (
                  <div
                    key={field.id}
                    className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-center"
                  >
                    <Input {...register(`modifierOptions.${index}.name`)} />
                    <Input {...register(`modifierOptions.${index}.description`)} />
                    <Input
                      type="number"
                      step="0.01"
                      {...register(`modifierOptions.${index}.priceDelta`)}
                    />
                    <div className="flex items-center gap-2">
                      <Controller
                        control={control}
                        name={`modifierOptions.${index}.isActive`}
                        render={({ field }) => (
                          <Switch checked={field.value} onCheckedChange={field.onChange} />
                        )}
                      />
                      <Button
                        type="button"
                        variant="secondary"
                        size="sm"
                        onClick={() => remove(index)}
                      >
                        Xóa
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end pt-4">
            <Button type="submit" disabled={updateMutation.isPending}>
              {updateMutation.isPending ? "Đang cập nhật..." : "Cập nhật Nhóm Tùy Chọn"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditModifierGroupModal;
