import { z } from "zod";

export const allowedExtensions = [".jpeg", ".png", ".jpg", ".gif", ".bmp", ".webp"];


const CampaignStatusEnum = z.union([z.literal(0), z.literal(1)]);

export const CampaignResponseSchema = z.object({
  id: z.string().uuid(),
  name: z.string()
    .min(1, { message: "Tên của chiến dịch không được ít hơn 1 ký tự" })
    .max(200, { message: "Tên của chiến dịch không được quá 200 ký tự" }),

  description: z.string()
    .max(1000, { message: "Mô tả của chiến dịch không được quá 1000 ký tự" })
    .optional(),

  startDate: z.string()
    .nonempty({ message: "Ngày bắt đầu không được để trống" })
    .transform((val) => new Date(val)),

  endDate: z.string()
    .nonempty({ message: "Ngày kết thúc không được để trống" })
    .transform((val) => new Date(val)),

  priority: z.number().int().min(0, { message: "Độ ưu tiên không được để trống" }),

  maxTotalUsageLimit: z.number().int(),

  maxUsagePerCustomerLimit: z.number().int(),
  status: CampaignStatusEnum,
});


const BaseCampaignSchema = z.object({
  name: z.string()
    .min(1, { message: "Tên của chiến dịch không được ít hơn 1 ký tự" })
    .max(200, { message: "Tên của chiến dịch không được quá 200 ký tự" }),

  description: z.string()
    .max(1000, { message: "Mô tả của chiến dịch không được quá 1000 ký tự" })
    .optional(),

  startDate: z.string()
    .nonempty({ message: "Ngày bắt đầu không được để trống" })
    .transform((val) => new Date(val)),

  endDate: z.string()
    .nonempty({ message: "Ngày kết thúc không được để trống" })
    .transform((val) => new Date(val)),

  priority: z.number().int().min(0, { message: "Độ ưu tiên không được để trống" }),

  maxTotalUsageLimit: z.number().int(),

  maxUsagePerCustomerLimit: z.number().int(),

  status: CampaignStatusEnum,
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

// export const CreateCampaignSchema = z.object({
//   name: z.string()
//     .min(1, { message: "Tên của chiến dịch không được ít hơn 1 ký tự" })
//     .max(200, { message: "Tên của chiến dịch không được quá 200 ký tự" })
//     .nonempty({ message: "Tên của chiến dịch không được để trống" }),
//   description: z.string()
//     .max(1000, { message: "Mô tả của chiến dịch không được quá 1000 ký tự" })
//     .optional(),
//   startDate: z.date(),
//   endDate: z.date(),
//   priority: z.number().int().min(0, {message: "Độ ưu tiên không được để trống"}),
//   maxTotalUsageLimit: z.number().int(),
//   maxUsagePerCustomerLimit: z.number().int(),
//   status: CampaignStatusEnum,
// });

// const CampaignResponseSchema = z.object({
//   id: z.string().uuid(),
//   name: z
//     .string()
//     .min(1, { message: "Tên của chiến dịch không được ít hơn 1 ký tự" })
//     .max(200, { message: "Tên của chiến dịch không được quá 200 ký tự" }),

//   description: z
//     .string()
//     .max(1000, { message: "Mô tả của chiến dịch không được quá 1000 ký tự" })
//     .optional(),

//   startDate: z.date({ required_error: "Ngày bắt đầu không được để trống" }),
//   endDate: z.date({ required_error: "Ngày kết thúc không được để trống" }),

//   priority: z
//     .number({ required_error: "Độ ưu tiên không được để trống" })
//     .int()
//     .min(0, { message: "Độ ưu tiên phải là số nguyên không âm" }),

//   maxTotalUsageLimit: z
//     .number({ required_error: "Giới hạn tổng không được để trống" })
//     .int(),

//   maxUsagePerCustomerLimit: z
//     .number({ required_error: "Giới hạn theo khách không được để trống" })
//     .int(),

//   status: CampaignStatusEnum,
// });

// export const CreateCampaignSchema = CampaignResponseSchema.refine(
//   (data) => data.startDate < data.endDate,
//   {
//     path: ["endDate"],
//     message: "Ngày kết thúc phải sau ngày bắt đầu",
//   }
// );

// export const UpdateCampaignSchema = CampaignResponseSchema.extend({
//   id: z.string().uuid({ message: "ID không hợp lệ" }),
// }).refine(
//   (data) => data.startDate < data.endDate,
//   {
//     path: ["endDate"],
//     message: "Ngày kết thúc phải sau ngày bắt đầu",
//   }
// );

export type TCampaignResponse = z.infer<typeof CampaignResponseSchema>;
export type TCreateCampaignRequest = z.infer<typeof CreateCampaignSchema>;
export type TUpdateCampaignRequest = z.infer<typeof UpdateCampaignSchema>;
