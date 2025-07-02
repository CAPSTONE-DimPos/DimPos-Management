import React from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

import { handleApiError } from "@/lib/error";
import { productApi } from "@/apis/product.api";
import {
  CreateModifierGroupSchema,
  type TCreateModifierGroupRequest,
  type TUpdateModifierGroupRequest,
  type TUpdateModifierOptionRequest,
} from "@/schema/product.schema";

interface Props {
  id: string;
  open: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

const EditModifierGroupModal = ({ id, open, onClose, onSuccess }: Props) => {
  const { data: groupRes } = useQuery({
    queryKey: ["modifier-group", id],
    queryFn: () => productApi.getModifierGroupById(id),
    enabled: open,
  });

  const { data: optionRes } = useQuery({
    queryKey: ["modifier-group-options", id],
    queryFn: () => productApi.getModifierOptionsByGroupId(id),
    enabled: open,
  });

  const {
    control,
    handleSubmit,
    register,
    reset,
    formState: { errors },
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

  const { fields, append } = useFieldArray({
    control,
    name: "modifierOptions",
  });

  const updateGroupMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: TUpdateModifierGroupRequest }) =>
      productApi.updateModifierGroup(id, data),
    onSuccess: () => {
      toast.success("Cập nhật nhóm tùy chọn thành công");
      onSuccess?.();
      onClose();
    },
    onError: handleApiError,
  });

  const updateOptionMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: TUpdateModifierOptionRequest }) =>
      productApi.updateModifierOption(id, data),
    onSuccess: () => toast.success("Cập nhật tùy chọn thành công"),
    onError: handleApiError,
  });

  const createOptionMutation = useMutation({
    mutationFn: (data: TUpdateModifierOptionRequest) =>
      productApi.createModifierOption(id, data),
    onSuccess: () => toast.success("Tạo tùy chọn mới thành công"),
    onError: handleApiError,
  });

  React.useEffect(() => {
    const group = groupRes?.data.data;
    const options = optionRes?.data.data.items;
    if (group && options) {
      reset({
        name: group.name,
        description: group.description ?? "",
        selectedType: group.selectedType,
        displayOrder: group.displayOrder ?? 0,
        isActive: group.isActive,
        modifierOptions: options.map((opt) => ({
          name: opt.name ?? "",
          description: opt.description ?? "",
          priceDelta: opt.priceDelta ?? 0,
          isActive: opt.isActive,
        })),
      });
    }
  }, [groupRes, optionRes, reset]);

  const onSubmit = (data: TCreateModifierGroupRequest) => {
    const payload: TUpdateModifierGroupRequest = { id, ...data };
    updateGroupMutation.mutate({ id, data: payload });
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="!w-full !max-w-[90vw] lg:!max-w-[1280px] h-[95vh] overflow-y-auto p-6">
        <DialogHeader className="flex justify-between items-center mb-4">
          <DialogTitle className="text-2xl font-semibold">Cập Nhật Nhóm Tùy Chọn</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <Card>
            <CardHeader className="flex justify-between items-center">
              <CardTitle>Thông Tin Chung</CardTitle>
              <div className="flex items-center gap-2">
                <span className="text-sm">Hiển thị</span>
                <Controller
                  control={control}
                  name="isActive"
                  render={({ field }) => (
                    <Switch checked={field.value} onCheckedChange={field.onChange} />
                  )}
                />
              </div>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="text-sm font-medium">Tên nhóm *</label>
                <Input {...register("name")} />
                {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
              </div>
              <div>
                <label className="text-sm font-medium">Hình thức chọn *</label>
                <Controller
                  control={control}
                  name="selectedType"
                  render={({ field }) => (
                    <Select value={String(field.value)} onValueChange={(val) => field.onChange(Number(val))}>
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
                {errors.selectedType && <p className="text-sm text-red-500">{errors.selectedType.message}</p>}
              </div>
              <div>
                <label className="text-sm font-medium">Thứ tự hiển thị</label>
                <Input type="number" {...register("displayOrder")} />
                {errors.displayOrder && <p className="text-sm text-red-500">{errors.displayOrder.message}</p>}
              </div>
            </CardContent>
            <CardContent>
              <label className="text-sm font-medium">Mô tả</label>
              <Textarea {...register("description")} />
              {errors.description && <p className="text-sm text-red-500">{errors.description.message}</p>}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex justify-between items-center">
              <CardTitle>Tùy Chọn</CardTitle>
              <Button
                type="button"
                variant="outline"
                onClick={() =>
                  append({ name: "", description: "", priceDelta: 0, isActive: true })
                }
              >
                Thêm tùy chọn
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {fields.map((field, index) => (
                <div key={field.id} className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-center">
                  <Input {...register(`modifierOptions.${index}.name`)} placeholder="Tên tùy chọn" />
                  <Input {...register(`modifierOptions.${index}.description`)} placeholder="Mô tả" />
                  <Input
                    type="number"
                    step="0.01"
                    {...register(`modifierOptions.${index}.priceDelta`)}
                    placeholder="Giá cộng thêm"
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
                      size="sm"
                      variant="secondary"
                      onClick={() => {
                        const opt = optionRes?.data.data.items[index];
                        const formValues = control._formValues.modifierOptions[index];
                        if (opt?.id) {
                          const payload: TUpdateModifierOptionRequest = {
                            name: formValues.name,
                            description: formValues.description,
                            isActive: formValues.isActive,
                            priceDelta: formValues.priceDelta,
                          };
                          updateOptionMutation.mutate({ id: opt.id, data: payload });
                        } else {
                          const payload: TUpdateModifierOptionRequest = {
                            name: formValues.name,
                            description: formValues.description,
                            isActive: formValues.isActive,
                            priceDelta: formValues.priceDelta,
                          };
                          createOptionMutation.mutate(payload);
                        }
                      }}
                    >
                      Lưu
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="flex justify-end">
            <Button type="submit" disabled={updateGroupMutation.isPending}>
              {updateGroupMutation.isPending ? "Đang cập nhật..." : "Cập nhật Nhóm Tùy Chọn"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditModifierGroupModal;