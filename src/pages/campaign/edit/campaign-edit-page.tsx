// src/pages/campaign/edit/campaign-edit-page.tsx
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import type { SubmitHandler } from "react-hook-form";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
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

import { useCampaign } from "@/hooks/use-campaign";
import { campaignApi } from "@/apis/campaign.api";
import { handleApiError } from "@/lib/error";
import {
  UpdateCampaignSchema,
  type TUpdateCampaignRequest,
  type TCampaignResponse,
} from "@/schema/campaign.schema";

const CampaignEditPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { getCampaignById } = useCampaign();
  const { data: campaignData } = getCampaignById(id!);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
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
    if (campaignData?.data?.data) {
      const campaign = campaignData.data.data;
      console.log(campaign);
      setValue("id", campaign.id);
      setValue("name", campaign.name);
      setValue("description", campaign.description ?? "");
      setValue("startDate", campaign.startDate ?? undefined);
      setValue("endDate", campaign.endDate ?? undefined);
      setValue("priority", campaign.priority ?? undefined);
      setValue("maxTotalUsageLimit", campaign.maxTotalUsageLimit ?? 0);
      setValue(
        "maxUsagePerCustomerLimit",
        campaign.maxUsagePerCustomerLimit ?? 0
      ),
      setValue("status", campaign.status as 0 | 1);
    }
  }, [campaignData, setValue]);

  const onSubmit: SubmitHandler<TUpdateCampaignRequest> = async (data) => {
    const formData = new FormData();
    formData.append("id", data.id);
    formData.append("name", data.name);
    formData.append("description", data.description ?? "");

    // Chuyển đổi ngày thành chuỗi ISO để gửi lên server
    formData.append("startDate", data.startDate.toISOString());
    formData.append("endDate", data.endDate.toISOString());

    formData.append("priority", data.priority.toString());
    formData.append("maxTotalUsageLimit", data.maxTotalUsageLimit.toString());
    formData.append(
      "maxUsagePerCustomerLimit",
      data.maxUsagePerCustomerLimit.toString()
    );

    formData.append("status", data.status.toString());

    try {
      await campaignApi.updateCampaign(data.id, formData);
      toast.success("Cập nhật chiến dịch thành công!");
      navigate(-1);
    } catch (error) {
      handleApiError(error);
    }
  };
  return (
    <div className="container max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Chi tiết chiến dịch</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-6 grid-cols-1 lg:grid-cols-1"
      >
        <div className="lg:col-span-3 space-y-6">
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

          <div className="flex justify-end">
            <Button type="submit">Lưu Thay Đổi</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CampaignEditPage;
