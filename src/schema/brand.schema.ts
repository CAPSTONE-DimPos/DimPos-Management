import { z } from "zod";

export const BrandSchema = z.object({
    id: z.string().uuid(),
    code: z.string().min(1, { message: "Mã thương hiệu không được bỏ trống" }).max(50, { message: "Mã thương hiệu không được quá 50 ký tự" }),
    name: z.string().min(1, { message: "Tên thương hiệu không được bỏ trống" }).max(100, { message: "Tên thương hiệu không được quá 100 ký tự" }),
    email: z.string().email({ message: "Email không hợp lệ" }).max(100, { message: "Email không được quá 100 ký tự" }),
    address: z.string().min(1, { message: "Địa chỉ không được bỏ trống" }).max(200, { message: "Địa chỉ không được quá 200 ký tự" }),
    phone: z.string().min(1, { message: "Số điện thoại không được bỏ trống" }).max(15, { message: "Số điện thoại không được quá 15 ký tự" }),
    pictureUrl: z.string().url({ message: "URL hình ảnh không hợp lệ" }).optional(),
    archivedAt: z.date().optional(),
    status: z.number().int(),
    createdDate: z.date(),
    lastModifiedDate: z.date(),
});
export type TBrand = z.infer<typeof BrandSchema>;