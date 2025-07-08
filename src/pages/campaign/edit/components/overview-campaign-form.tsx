import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCampaign } from "@/hooks/use-campaign";
import {
  UpdateCampaignSchema,
  type TUpdateCampaignRequest,
} from "@/schema/campaign.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Switch } from "@radix-ui/react-switch";
import { useEffect, useState } from "react";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";


type Props = {
  initialData: TUpdateCampaignRequest;
};

const EditCampaignForm = ({ initialData }: Props) => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    // watch,
    formState: { errors },
  } = useForm<TUpdateCampaignRequest>({
    resolver: zodResolver(UpdateCampaignSchema),
    defaultValues: {
      id: "",
      name: "",
      description: "",
      status: 1,
      startDate: undefined,
      endDate: undefined,
      maxTotalUsageLimit: undefined,
      maxUsagePerCustomerLimit: undefined,
      priority: undefined,
    },
  });

  useEffect(() => {
    if (initialData) {
      // //console.log(campaign);
      setValue("id", initialData.id);
      setValue("name", initialData.name);
      setValue("description", initialData.description ?? "");
      setValue("startDate", initialData.startDate ?? undefined);
      setValue("endDate", initialData.endDate ?? undefined);
      setValue("priority", initialData.priority ?? undefined);
      setValue("maxTotalUsageLimit", initialData.maxTotalUsageLimit ?? 0);
      setValue(
        "maxUsagePerCustomerLimit",
        initialData.maxUsagePerCustomerLimit ?? 0
      ),
        setValue("status", initialData.status as 0 | 1);
    }
  }, [initialData, setValue]);

  const onSubmit: SubmitHandler<TUpdateCampaignRequest> = async (data) => {
    // console.log(campaignData?.data.data.promotionRules);
    // const formData = new FormData();
    // formData.append("id", data.id);
    // formData.append("name", data.name);
    // formData.append("description", data.description ?? "");

    // // Chuyển đổi ngày thành chuỗi ISO để gửi lên server
    // formData.append("startDate", data.startDate.toISOString());
    // formData.append("endDate", data.endDate.toISOString());

    // formData.append("priority", data.priority.toString());
    // formData.append("maxTotalUsageLimit", data.maxTotalUsageLimit.toString());
    // formData.append(
    //   "maxUsagePerCustomerLimit",
    //   data.maxUsagePerCustomerLimit.toString()
    // );

    // formData.append("status", data.status.toString());

    // try {
    //   await campaignApi.updateCampaign(data.id, formData);
    //   toast.success("Cập nhật chiến dịch thành công!");
    //   navigate(-1);
    // } catch (error) {
    //   handleApiError(error);
    // }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid gap-6 grid-cols-1 lg:grid-cols-1"
    >
      <div className="container pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-1 gap-4">
          <Card className="shadow-none border-none bg-white">
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">Hoạt động</span>
                <Controller
                  control={control}
                  name="status"
                  render={({ field }) => (
                    <Switch
                      checked={field.value === 1}
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

              <div>
                <label className="block text-sm font-medium">
                  Tên chiến dịch *
                </label>
                <Input
                  {...register("name")}
                  placeholder="Nhập tên chiến dịch"
                />
                {errors.name && (
                  <p className="text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium">Mô tả</label>
                <Textarea
                  {...register("description")}
                  placeholder="Mô tả chiến dịch"
                />
                {errors.description && (
                  <p className="text-sm text-red-500">
                    {errors.description.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium">
                  Thứ tự hiển thị
                </label>
                <Input
                  type="number"
                  {...register("priority", { valueAsNumber: true })}
                />
                {errors.priority && (
                  <p className="text-sm text-red-500">
                    {errors.priority.message}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="grid grid-cols-1 lg:grid-cols-1 items-center">
                  <label className="block text-sm font-medium">
                    Ngày bắt đầu
                  </label>
                  <Input
                    type="datetime-local"
                    step="60"
                    {...register("startDate", { valueAsDate: true })}
                  />
                  {errors.startDate && (
                    <p className="text-sm text-red-500">
                      {errors.startDate.message}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-1 items-center">
                  <label className="block text-sm font-medium">
                    Ngày kết thúc
                  </label>
                  <Input
                    type="datetime-local"
                    step="60"
                    {...register("endDate", { valueAsDate: true })}
                  />
                  {errors.endDate && (
                    <p className="text-sm text-red-500">
                      {errors.endDate.message}
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="flex justify-end mt-6 mr-16">
        <Button type="submit">Lưu thay đổi</Button>
      </div>
    </form>
  );
};

export default EditCampaignForm;