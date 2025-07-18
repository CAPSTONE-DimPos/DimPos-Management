import { z } from "zod";

export const StaffSchema = z.object({
  id: z.string(),
  code: z.string(),
  username: z.string(),
  email: z.string(),
  status: z.number(),
  assignAt: z.string(), 
});

export const CreateAccountSchema = z.object({
  code: z.string().min(1, "Mã nhân viên không được để trống"),
  username: z.string().min(1, "Tên đăng nhập không được để trống"),
  password: z.string().min(1, "Mật khẩu không được để trống"),
  email: z.string().nullable(),
});

export type TCreateAccount = z.infer<typeof CreateAccountSchema>;
export type TStaff = z.infer<typeof StaffSchema>;
