import { z } from "zod";

export const StoreSchema = z.object({
    id: z.string().uuid(),
    code: z.string().min(1, { message: "Mã cửa hàng không được bỏ trống" }).max(50, { message: "Mã cửa hàng không được quá 50 ký tự" }),
    name: z.string().min(1, { message: "Tên cửa hàng không được bỏ trống" }).max(100, { message: "Tên cửa hàng không được quá 100 ký tự" }),
    phone: z.string().min(1, { message: "Số điện thoại không được bỏ trống" }).max(15, { message: "Số điện thoại không được quá 15 ký tự" }),
    email: z.string().email({ message: "Email không hợp lệ" }).max(100, { message: "Email không được quá 100 ký tự" }),
    shortName: z.string().min(1, { message: "Tên viết tắt không được bỏ trống" }).max(50, { message: "Tên viết tắt không được quá 50 ký tự" }),
    description: z.string().max(500, { message: "Mô tả không được quá 500 ký tự" }).optional(),
    address: z.string().min(1, { message: "Địa chỉ không được bỏ trống" }).max(200, { message: "Địa chỉ không được quá 200 ký tự" }),
    latitude: z.string().optional(),
    longitude: z.string().optional(),
    wifiName: z.string().max(100, { message: "Tên WiFi không được quá 100 ký tự" }).optional(),
    wifiPassword: z.string().max(100, { message: "Mật khẩu WiFi không được quá 100 ký tự" }).optional(),
    index: z.number().int().optional(),
    localPasscode: z.string().max(20, { message: "Mã truy cập nội bộ không được quá 20 ký tự" }).optional(),
    managerName: z.string().max(100, { message: "Tên quản lý không được quá 100 ký tự" }).optional(),
    type: z.number().int().optional(),
    username: z.string().max(50, { message: "Tên đăng nhập không được quá 50 ký tự" }).optional(),
    password: z.string().max(50, { message: "Mật khẩu không được quá 50 ký tự" }).optional(),
});


export type TStore = z.infer<typeof StoreSchema>;