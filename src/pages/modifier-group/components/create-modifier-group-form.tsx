import { useForm, useFieldArray, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

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

import { handleApiError } from "@/lib/error";
import {
    CreateModifierGroupSchema,
    type TCreateModifierGroupRequest,
} from "@/schema/product.schema";
import { productApi } from "@/apis/product.api";

interface Props {
    onSuccess?: () => void;
}

const CreateModifierGroupForm = ({ onSuccess }: Props) => {
    const {
        control,
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<TCreateModifierGroupRequest>({
        resolver: zodResolver(CreateModifierGroupSchema),
        defaultValues: {
            name: "",
            description: "",
            selectedType: 1,
            displayOrder: 1,
            isActive: true,
            modifierOptions: [
                { name: "", description: "", priceDelta: 0, isActive: true },
            ],
        },
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "modifierOptions",
    });

    const createModifierGroupMutation = useMutation({
        mutationFn: productApi.createModifierGroup,
        onSuccess: () => {
            toast.success("Tạo nhóm tùy chọn thành công!");
            onSuccess?.();
        },
        onError: handleApiError,
    });

    const onSubmit = (data: TCreateModifierGroupRequest) => {
        createModifierGroupMutation.mutate(data);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-screen-xl space-y-6 p-4"
        >
            <Card>
                <CardHeader className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <CardTitle className="text-lg">Thông Tin Chung</CardTitle>
                    <div className="flex items-center space-x-2 mt-2 md:mt-0">
                        <span className="text-sm font-medium">Hiển thị</span>
                        <Controller
                            control={control}
                            name="isActive"
                            render={({ field }) => (
                                <Switch
                                    checked={field.value}
                                    onCheckedChange={(val) => field.onChange(val)}
                                />
                            )}
                        />
                    </div>
                </CardHeader>

                <CardContent className="grid grid-cols-1 gap-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div>
                            <label className="text-sm font-medium">Tên nhóm *</label>
                            <Input
                                {...register("name")}
                                placeholder="Nhập tên nhóm tùy chọn"
                            />
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
                                <p className="text-sm text-red-500">{errors.selectedType.message}</p>
                            )}
                        </div>

                        <div>
                            <label className="text-sm font-medium">Thứ tự hiển thị</label>
                            <Input
                                type="number"
                                {...register("displayOrder")}
                                placeholder="VD: 1, 2, 3..."
                            />
                            {errors.displayOrder && (
                                <p className="text-sm text-red-500">{errors.displayOrder.message}</p>
                            )}
                        </div>
                    </div>

                    <div>
                        <label className="text-sm font-medium">Mô tả</label>
                        <Textarea
                            {...register("description")}
                            placeholder="Nhập mô tả (tùy chọn)"
                        />
                        {errors.description && (
                            <p className="text-sm text-red-500">{errors.description.message}</p>
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
                    {/* Header hàng đầu */}
                    <div className="hidden lg:grid grid-cols-4 gap-4 px-1 text-sm font-medium text-muted-foreground">
                        <span>Tên</span>
                        <span>Mô tả</span>
                        <span>Giá cộng thêm</span>
                        <span>Trạng thái</span>
                    </div>

                    {/* Danh sách tùy chọn */}
                    <div className="space-y-4">
                        {fields.map((field, index) => (
                            <div
                                key={field.id}
                                className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-center"
                            >
                                <Input
                                    {...register(`modifierOptions.${index}.name`)}
                                    placeholder="Tên tùy chọn"
                                />

                                <Input
                                    {...register(`modifierOptions.${index}.description`)}
                                    placeholder="Mô tả tùy chọn"
                                />

                                <Input
                                    type="number"
                                    step="0.01"
                                    {...register(`modifierOptions.${index}.priceDelta`)}
                                    placeholder="VD: 5.000"
                                />

                                <div className="flex items-center gap-2">
                                    <Controller
                                        control={control}
                                        name={`modifierOptions.${index}.isActive`}
                                        render={({ field }) => (
                                            <Switch
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
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
                <Button type="submit" disabled={createModifierGroupMutation.isPending}>
                    {createModifierGroupMutation.isPending
                        ? "Đang lưu..."
                        : "Lưu Nhóm Tùy Chọn"}
                </Button>
            </div>
        </form>
    );
};

export default CreateModifierGroupForm;
