import { useForm, useFieldArray, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

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

const CreateModifierGroupPage = () => {
    const navigate = useNavigate();

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
            selectedType: 1 as const,
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
    });

    const onSubmit = async (data: TCreateModifierGroupRequest) => {
        try {
            await createModifierGroupMutation.mutateAsync(data);
            toast.success("Tạo nhóm tùy chọn thành công!");
            navigate("/dashboard/modifier-groups");
        } catch (error) {
            handleApiError(error);
        }
    };

    return (
        <div className="w-full p-6">
            <h1 className="text-3xl font-bold mb-6">Tạo Nhóm Tùy Chọn</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <Card className="w-full">
                    <CardHeader className="flex flex-col md:flex-row md:items-start md:justify-between">
                        <CardTitle>Thông Tin Chung</CardTitle>
                        <div className="flex items-center space-x-2 mt-4 md:mt-0">
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
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div>
                                <label className="block text-sm font-medium mb-1">Tên nhóm *</label>
                                <Input
                                    {...register("name")}
                                    placeholder="Nhập tên nhóm tùy chọn"
                                />
                                {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Hình thức chọn *</label>
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
                                <label className="block text-sm font-medium mb-1">Thứ tự hiển thị</label>
                                <Input
                                    type="number"
                                    {...register("displayOrder")}
                                    placeholder="VD: 1, 2, 3..."
                                />
                                {errors.displayOrder && (
                                    <p className="text-sm text-red-500">{errors.displayOrder.message}</p>
                                )}
                            </div>
                            <div className="md:col-span-2 lg:col-span-3">
                                <label className="block text-sm font-medium mb-1">Mô tả</label>
                                <Textarea
                                    {...register("description")}
                                    placeholder="Nhập mô tả (tùy chọn)"
                                />
                                {errors.description && (
                                    <p className="text-sm text-red-500">{errors.description.message}</p>
                                )}
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="w-full">
                    <CardHeader className="flex justify-between items-center">
                        <CardTitle>Danh Sách Tùy Chọn</CardTitle>
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

                    <CardContent className="space-y-4">
                        {fields.map((field, index) => (
                            <Card key={field.id} className="p-4 border">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
                                    <div>
                                        <label className="text-sm font-medium">Tên</label>
                                        <Input
                                            {...register(`modifierOptions.${index}.name`)}
                                            placeholder="Tên tùy chọn"
                                        />
                                        {errors.modifierOptions?.[index]?.name && (
                                            <p className="text-sm text-red-500">
                                                {errors.modifierOptions[index]?.name?.message}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="text-sm font-medium">Mô tả</label>
                                        <Input
                                            {...register(`modifierOptions.${index}.description`)}
                                            placeholder="Mô tả tùy chọn"
                                        />
                                        {errors.modifierOptions?.[index]?.description && (
                                            <p className="text-sm text-red-500">
                                                {errors.modifierOptions[index]?.description?.message}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="text-sm font-medium">Giá cộng thêm</label>
                                        <Input
                                            type="number"
                                            step="0.01"
                                            {...register(`modifierOptions.${index}.priceDelta`)}
                                            placeholder="VD: 5.000"
                                        />
                                        {errors.modifierOptions?.[index]?.priceDelta && (
                                            <p className="text-sm text-red-500">
                                                {errors.modifierOptions[index]?.priceDelta?.message}
                                            </p>
                                        )}
                                    </div>

                                    <div className="flex items-center justify-between gap-2 mt-6">
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm font-medium">Hiển thị</span>
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
                                        </div>
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
                            </Card>
                        ))}
                    </CardContent>
                </Card>


                <div className="flex justify-end">
                    <Button type="submit" disabled={createModifierGroupMutation.isPending}>
                        {createModifierGroupMutation.isPending
                            ? "Đang lưu..."
                            : "Lưu Nhóm Tùy Chọn"}
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default CreateModifierGroupPage;