import { z } from "zod";

const allowedExtensions = [".jpeg", ".png", ".jpg", ".gif", ".bmp", ".webp"];

export const CategoryResponseSchema = z.object({
    id: z.string().uuid(),
    name: z.string().min(1, { message: "Tên danh mục không được bỏ trống" }).max(50, { message: "Tên danh mục không được quá 50 ký tự" }),
    code: z.string().min(1, { message: "Mã danh mục không được bỏ trống" }).max(20, { message: "Mã danh mục không được quá 20 ký tự" }),
    description: z.string().optional(),
    type: z.number().int().min(0),
    displayOrder: z.number().int().min(0, { message: "Thứ tự hiển thị phải là số nguyên không âm" }),
    pictureUrl: z.string().url().optional(),
    hasChildCategory: z.boolean().default(false),
    status: z.number().int().min(0),
})

export const CreateCategorySchema = z.object({
  code: z.string()
    .max(50, { message: "Mã danh mục không được quá 50 ký tự" })
    .optional(), // No NotEmpty rule in validator

  name: z.string()
    .min(1, { message: "Tên của danh mục không được ít hơn 1 ký tự" })
    .max(200, { message: "Tên của danh mục không được quá 200 ký tự" })
    .nonempty({ message: "Tên của danh mục không được để trống" }),

  description: z.string()
    .max(1000, { message: "Mô tả của danh mục không được quá 1000 ký tự" })
    .optional(),

  type: z.nativeEnum({ 1: "Parent", 2: "Child" } as const)
    .or(z.number().int().refine(val => val === 1 || val === 2, {
      message: "Loại danh mục không hợp lệ"
    })),

  status: z.nativeEnum({ 0: "Active", 1: "Inactive" } as const)
    .or(z.number().int().refine(val => val === 0 || val === 1, {
    message: "Trạng thái của danh mục không hợp lệ"
  })),

  image: z
    .any()
    .refine(file => {
      if (!file) return true; // allow null
      if (typeof file !== "object" || !("name" in file)) return false;
      const extension = (file.name as string).toLowerCase().split(".").pop();
      return allowedExtensions.includes(`.${extension}`);
    }, {
      message: "Chỉ các định dạng tệp .jpeg, .png, .jpg, .gif, .bmp, .webp được phép tải lên.",
    })
    .optional(),
});

export type TCategoryResponse = z.infer<typeof CategoryResponseSchema>;
export type TCreateCategoryRequest = z.infer<typeof CreateCategorySchema>;