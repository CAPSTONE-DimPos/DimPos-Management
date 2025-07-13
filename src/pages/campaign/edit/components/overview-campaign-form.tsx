import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { useCampaign } from "@/hooks/use-campaign";
import { handleApiError } from "@/lib/error";
import {
  UpdateCampaignSchema,
  type TUpdateCampaignRequest,
} from "@/schema/campaign.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
// import { useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

type Props = {
  initialData: TUpdateCampaignRequest;
};

const EditCampaignForm = ({ initialData }: Props) => {
  const { updateCampaign } = useCampaign();

  const form = useForm<TUpdateCampaignRequest>({
    resolver: zodResolver(UpdateCampaignSchema),
    defaultValues: initialData,
  });

  useEffect(() => {
    if (initialData) {
      form.reset({
        ...initialData,
        startDate: new Date(initialData.startDate),
        endDate: new Date(initialData.endDate),
      });
    }
  }, [initialData]);

  const onSubmit: SubmitHandler<TUpdateCampaignRequest> = async (data) => {
    // console.log(campaignData?.data.data.promotionRules);
    const formData = new FormData();
    // formData.append("id", data.id);
    formData.append("name", data.name);
    formData.append("description", data.description ?? "");
    formData.append("startDate", data.startDate.toISOString());
    formData.append("endDate", data.endDate.toISOString());
    formData.append("priority", data.priority.toString());
    formData.append(
      "maxTotalUsageLimit",
      (data.maxTotalUsageLimit ?? 0).toString()
    );
    formData.append(
      "maxUsagePerCustomerLimit",
      data.maxUsagePerCustomerLimit.toString()
    );
    formData.append("status", data.status.toString());
    try {
      const campaignResult = await updateCampaign.mutateAsync({
        id: data.id,
        data: formData,
      });
      if (campaignResult.status >= 200 && campaignResult.status < 300) {
        toast.success("Cập nhật chiến dịch thành công!");
      }
    } catch (error) {
      handleApiError(error);
    }
  };
  return (
    <Form {...form}>
      <form
        className="relative"
        onSubmit={form.handleSubmit(onSubmit, (errors) => {
          console.error("Form validation errors:", errors);
        })}
      >
        <div className="container pb-6">
          <div className="grid grid-cols-1 lg:grid-cols-1 2xl:grid-cols-1 gap-4">
            <Card className="shadow-none border-none bg-white">
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="id"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel></FormLabel>
                        <FormControl>
                          <Input
                            type="hidden"
                            {...field}
                            value={field.value ?? ""}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <div>
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormLabel>Tên chiến dịch *</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              value={field.value ?? ""}
                              placeholder="Nhập tên chiến dịch"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                </div>

                <div>
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormLabel>Mô tả</FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              value={field.value ?? ""}
                              placeholder="Mô tả chiến dịch"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                </div>
                <div>
                  <FormField
                    control={form.control}
                    name="priority"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormLabel>Thứ tự hiển thị</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="number"
                              value={field.value ?? ""}
                              placeholder="Độ ưu tiên"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="grid grid-cols-1 lg:grid-cols-1 items-center">
                    <FormField
                      control={form.control}
                      name="startDate"
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormLabel>Ngày bắt đầu</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                type="datetime-local"
                                placeholder="Ngày bắt đầu"
                                value={
                                  field.value
                                    ? new Date(field.value)
                                        .toISOString()
                                        .slice(0, 16)
                                    : ""
                                }
                                onChange={(e) => {
                                  const date = new Date(e.target.value);
                                  field.onChange(date);
                                }}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        );
                      }}
                    />
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-1 items-center">
                    <FormField
                      control={form.control}
                      name="endDate"
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormLabel>Ngày kết thúc</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                type="datetime-local"
                                placeholder="Ngày kết thúc"
                                value={
                                  field.value
                                    ? new Date(field.value)
                                        .toISOString()
                                        .slice(0, 16)
                                    : ""
                                }
                                onChange={(e) => {
                                  const date = new Date(e.target.value);
                                  field.onChange(date);
                                }}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        );
                      }}
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-row items-center justify-start">
                <FormField
                  control={form.control}
                  name="status"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormControl>
                          <div className="text-sm font-medium flex flex-row items-center gap-x-2">
                            <span>Hoạt động</span>
                            <Switch
                              checked={field.value === 1}
                              onCheckedChange={(checked) =>
                                field.onChange(checked ? 0 : 1)
                              }
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
              </CardFooter>
            </Card>
          </div>
        </div>
        <div className="flex justify-end mt-6 mr-16">
          <Button type="submit">Lưu thay đổi</Button>
        </div>
      </form>
    </Form>
  );
};

export default EditCampaignForm;
