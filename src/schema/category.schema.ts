import { z } from "zod";

export const allowedExtensions = [".jpeg", ".png", ".jpg", ".gif", ".bmp", ".webp"];

export const CategoryResponseSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1, { message: "Tên danh mục không được bỏ trống" }).max(50, { message: "Tên danh mục không được quá 50 ký tự" }),
  code: z.string().min(1, { message: "Mã danh mục không được bỏ trống" }).max(20, { message: "Mã danh mục không được quá 20 ký tự" }),
  description: z.string().optional(),
  type: z.number().int().min(0),
  displayOrder: z.number().int().min(0, { message: "Thứ tự hiển thị phải là số nguyên không âm" }),
  pictureUrl: z.string().url().optional(),
  hasChildCategory: z.boolean().default(false),
  parentCategory: z
    .object({
      id: z.string().uuid(),
      name: z.string(),
      code: z.string(),
      description: z.string().optional(),
      type: z.number(),
      displayOrder: z.number(),
      pictureUrl: z.string().nullable().optional(),
      hasChildCategory: z.boolean(),
      status: z.number(),
    })
    .nullable()
    .optional(),
  status: z.number().int().min(0),
});

const CategoryTypeEnum = z.union([z.literal(1), z.literal(2)]);
const CategoryStatusEnum = z.union([z.literal(0), z.literal(1)]);

export const CreateCategorySchema = z.object({
  code: z.string()
  .min(1, { message: "Mã danh mục không được để trống" })
  .max(5, { message: "Mã danh mục không được quá 5 ký tự" }),

  name: z.string()
    .min(1, { message: "Tên của danh mục không được ít hơn 1 ký tự" })
    .max(200, { message: "Tên của danh mục không được quá 200 ký tự" })
    .nonempty({ message: "Tên của danh mục không được để trống" }),

  description: z.string()
    .max(1000, { message: "Mô tả của danh mục không được quá 1000 ký tự" })
    .optional(),

  type: CategoryTypeEnum,

  status: CategoryStatusEnum,

  displayOrder: z.number()
    .int({ message: "Thứ tự hiển thị phải là số nguyên" })
    .min(0, { message: "Thứ tự hiển thị phải là số dương hoặc bằng 0" })
    .optional(),

  parentId: z.string()
    .uuid({ message: "ID danh mục cha không hợp lệ" })
    .nullable()
    .optional(),

  hasChildCategory: z.boolean().optional(),

  image: z
    .any()
    .refine(file => {
      if (!file) return true; 
      if (typeof file !== "object" || !("name" in file)) return false;
      const extension = (file.name as string).toLowerCase().split(".").pop();
      return allowedExtensions.includes(`.${extension}`);
    }, {
      message: "Chỉ các định dạng tệp .jpeg, .png, .jpg, .gif, .bmp, .webp được phép tải lên.",
    })
    .optional(),
});

export const UpdateCategorySchema = CreateCategorySchema.extend({
  id: z.string().uuid({ message: "ID không hợp lệ" }),
});

export type TCategoryResponse = z.infer<typeof CategoryResponseSchema>;
export type TCreateCategoryRequest = z.infer<typeof CreateCategorySchema>;
export type TUpdateCategoryRequest = z.infer<typeof UpdateCategorySchema>;
