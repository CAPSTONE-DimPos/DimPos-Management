import { CampaignStatusEnum } from "@/types/enums/campaign-status.enum";
import { z } from "zod";
import { PromotionRuleBaseSchema } from "./promotion-rule.schema";

export const allowedExtensions = [".jpeg", ".png", ".jpg", ".gif", ".bmp", ".webp"];

export const CampaignResponseSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  description: z.string().nullable(),
  startDate: z.date(),
  endDate: z.date(),
  priority: z.number().int().min(0, { message: "Độ ưu tiên không được để trống" }),
  maxTotalUsageLimit: z.number().int(),
  maxUsagePerCustomerLimit: z.number().int(),
  status: z.nativeEnum(CampaignStatusEnum),
  promotionRules: z.array(z.lazy(() => PromotionRuleBaseSchema)).nullable(),
  storeIds: z.array(z.string()).nullable(),
});


const BaseCampaignSchema = z.object({
  name: z.string()
    .min(1, { message: "Tên của chiến dịch không được ít hơn 1 ký tự" })
    .max(200, { message: "Tên của chiến dịch không được quá 200 ký tự" }),
  description: z.string()
    .max(1000, { message: "Mô tả của chiến dịch không được quá 1000 ký tự" })
    .nullable(),
  startDate: z.date(),
  endDate: z.date(),
  priority: z.number().int().min(0, { message: "Độ ưu tiên không được để trống" }),
  maxTotalUsageLimit: z.number().int().nullable(),
  maxUsagePerCustomerLimit: z.number().int(),
  status: z.nativeEnum(CampaignStatusEnum),
});

export const CreateCampaignSchema = BaseCampaignSchema.refine(
  (data) => data.startDate < data.endDate,
  {
    path: ["endDate"],
    message: "Ngày kết thúc phải sau ngày bắt đầu",
  }
);

export const UpdateCampaignSchema = BaseCampaignSchema.extend({
  id: z.string().uuid({ message: "ID không hợp lệ" }),
}).refine(
  (data) => data.startDate < data.endDate,
  {
    path: ["endDate"],
    message: "Ngày kết thúc phải sau ngày bắt đầu",
  }
);

export type TCampaignResponse = z.infer<typeof CampaignResponseSchema>;
export type TCreateCampaignRequest = z.infer<typeof CreateCampaignSchema>;
export type TUpdateCampaignRequest = z.infer<typeof UpdateCampaignSchema>;
