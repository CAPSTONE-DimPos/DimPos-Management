import { z } from "zod";
import { allowedExtensions } from "./category.schema";

export const ProductSchema = z.object({
  id: z.string().uuid(),
  code: z.string(),
  alternativeCode: z.string().optional(),
  name: z.string(),
  description: z.string(),
  isHasVariants: z.boolean().default(false),
  isHasRecipe: z.boolean().default(false),
  status: z.number().int().optional(),
  isAvailable: z.boolean().default(true),
  displayOrder: z.number().int().optional(),
  isMenuDisplay: z.boolean().optional(),
  saleType: z.number().optional(),
  isMostOrdered: z.boolean(),
  note: z.string().optional(),
  numOfUserVoted: z.number().int().optional(),
  createdDate: z.string().datetime().optional(),
  lastModifiedDate: z.string().datetime().optional(),
  productVariants: z.array(z.lazy(() => ProductVariantSchema)).optional(),
  productImages: z.array(z.lazy(() => ProductImageSchema)).optional(),
});

export const ProductImageSchema = z.object({
  id: z.string().uuid(),
  imageUrl: z.string().url(),
  isMainImage: z.boolean(),
  altText: z.string().optional(),
});

export const ProductVariantSchema = z.object({
  id: z.string().uuid(),
  code: z.string(),
  alternativeCode: z.string().optional(),
  name: z.string(),
  discountPercent: z.number().optional(),
  discountPrice: z.number().optional(),
  price: z.number().min(0),
  priceCOGS: z.number().min(0).optional(),
  isActive: z.boolean(),
  size: z.string().optional(),
  isMenuDisplay: z.boolean().optional(),
  status: z.number().int().optional(),
});

export const ModifierOptionSchema = z.object({
  id: z.string({ message: "ID không hợp lệ" }).uuid({ message: "ID phải là UUID hợp lệ" }),
  name: z.string({ message: "Tên tùy chọn không hợp lệ" })
    .max(100, { message: "Tên tùy chọn không được quá 100 ký tự" })
    .nullable()
    .optional(),

  description: z.string({ message: "Mô tả không hợp lệ" })
    .max(500, { message: "Mô tả không được quá 500 ký tự" })
    .nullable()
    .optional(),

  isActive: z.boolean({ message: "Trạng thái hoạt động là bắt buộc" }),

  priceDelta: z.number({ message: "Giá cộng thêm phải là một số" })
    .min(0, { message: "Giá cộng thêm phải lớn hơn hoặc bằng 0" })
    .optional(),
});
export const CreateModifierGroupSchema = z.object({
  name: z.string({ message: "Tên nhóm tùy chọn không được để trống" })
    .min(1, { message: "Tên nhóm tùy chọn phải có ít nhất 1 ký tự" })
    .max(100, { message: "Tên nhóm tùy chọn không được quá 100 ký tự" }),

  description: z.string({ message: "Mô tả không hợp lệ" })
    .max(500, { message: "Mô tả không được quá 500 ký tự" })
    .nullable()
    .optional(),

  selectedType: z.union([
    z.literal(1),
    z.literal(2),
  ], {
    invalid_type_error: "Hình thức chọn phải là 1 (Một) hoặc 2 (Nhiều)"
  }),

  displayOrder: z.number()
    .int()
    .min(0, { message: "Thứ tự hiển thị phải ≥ 0" }),

  isActive: z.boolean({ message: "Trạng thái hoạt động là bắt buộc" }),

  modifierOptions: z
    .array(ModifierOptionSchema.omit({ id: true }), {
      invalid_type_error: "Danh sách tùy chọn phải là một mảng hợp lệ",
    })
    .nullable()
    .optional(),
});
export const ModifierGroupSchema = z.object({
  id: z.string({ message: "ID không hợp lệ" }).uuid({ message: "ID phải là UUID hợp lệ" }),

  name: z.string({ message: "Tên nhóm tùy chọn không hợp lệ" })
    .min(1, { message: "Tên nhóm tùy chọn không được để trống" })
    .max(100, { message: "Tên nhóm tùy chọn không được quá 100 ký tự" }),

  description: z.string({ message: "Mô tả không hợp lệ" })
    .max(500, { message: "Mô tả không được quá 500 ký tự" })
    .nullable()
    .optional(),

  selectedType: z.number({ message: "Hình thức chọn không hợp lệ" })
    .int({ message: "Hình thức chọn phải là số nguyên" })
    .refine(val => val === 1 || val === 2, {
      message: "Hình thức chọn phải là 1 (Một) hoặc 2 (Nhiều)",
    }),

  displayOrder: z.number({ message: "Thứ tự hiển thị không hợp lệ" })
    .int({ message: "Thứ tự hiển thị phải là số nguyên" })
    .min(0, { message: "Thứ tự hiển thị phải lớn hơn hoặc bằng 0" })
    .optional(),

  isActive: z.boolean({ message: "Trạng thái hoạt động là bắt buộc" }),

  modifierOptions: z
    .array(z.lazy(() => ModifierOptionSchema), {
      invalid_type_error: "Danh sách tùy chọn phải là một mảng hợp lệ",
    })
    .nullable()
    .optional(),
});


export const CreateProductVariantSchema = z.object({
  code: z.string({ message: "Mã của biến thể sản phẩm không được bỏ trống" }).min(1, { message: "Mã của biến thể sản phẩm phải có ít nhất 1 ký tự" }).max(50, { message: "Mã của biến thể sản phẩm không được vượt quá 50 ký tự" }),
  alternativeCode: z.string().max(100, { message: "Mã thay thế của biến thể sản phẩm không được vượt quá 100 ký tự" }).optional(),
  name: z.string({ message: "Tên của biến thể sản phẩm không được bỏ trống" }).min(1, { message: "Tên của biến thể sản phẩm phải có ít nhất 1 ký tự" }).max(200, { message: "Tên của biến thể sản phẩm không được vượt quá 200 ký tự" }),
  discountPercent: z.number().optional(),
  discountPrice: z.number().optional(),
  brandPrice: z.number().min(0, { message: "Giá brand của biến thể sản phẩm không được bỏ trống" }),
  priceCOGS: z.number().optional(),
  size: z.string().optional(),
  displayOrder: z.number().int().optional(),
});

export const CreateProductImageSchema = z.object({
  image: z.any().refine(file => {
    if (!file) return true;
    if (typeof file !== "object" || !("name" in file)) return false;
    const extension = (file.name as string).toLowerCase().split(".").pop();
    return allowedExtensions.includes(`.${extension}`);
  }, {
    message: "Chỉ các định dạng tệp .jpeg, .png, .jpg, .gif, .bmp, .webp được phép tải lên.",
  }),
  isMainImage: z.boolean(),
  altText: z.string().optional(),
});

export const CreateProductSchema = z.object({
  code: z.string({ message: "Mã của sản phẩm không được bỏ trống" }).min(1, { message: "Mã của sản phẩm phải có ít nhất 1 ký tự" }).max(50, { message: "Mã của sản phẩm không được vượt quá 50 ký tự  " }),
  alternativeCode: z.string().max(100, { message: "Mã thay thế của sản phẩm không được vượt quá 100 ký tự" }),
  name: z.string({ message: "Tên của sản phẩm không được bỏ trống" }).min(1, { message: "Tên của sản phẩm phải có ít nhất 1 ký tự" }).max(200, { message: "Tên của sản phẩm không được vượt quá 200 ký tự" }),
  price: z.number().min(0, { message: "Giá của sản phẩm không được bỏ trống" }),
  discountPrice: z.number().optional(),
  discountPercent: z.number().optional(),
  priceCOGS: z.number().optional(),
  description: z.string({ message: "Mô tả của sản phẩm không được bỏ trống" }).min(1, { message: "Mô tả của sản phẩm phải có ít nhất 1 ký tự" }).max(1000, { message: "Mô tả của sản phẩm không được vượt quá 1000 ký tự" }),
  isAvailable: z.boolean({ message: "Trạng thái khả dụng của sản phẩm không được bỏ trống" }),
  displayOrder: z.number().int().optional(),
  saleType: z.number().int({ message: "Loại hình bán hàng của sản phẩm không được bỏ trống" }),
  note: z.string().optional(),
  categoryId: z.string().uuid(),
  productImages: z.array(CreateProductImageSchema).nullable(),
});

export const UpdateProductSchema = CreateProductSchema.extend({
  productImages: z.array(ProductImageSchema).nullable(),
  newProductImages: z.array(CreateProductImageSchema).nullable(),
});

export const UpdateProductModifierOptionSchema = z.object({
  productId: z.string().uuid(),
  modifierGroupIds: z.array(z.string().uuid()).optional(),
});

export const UpdateModifierGroupSchema = CreateModifierGroupSchema.extend({
  id: z.string().uuid({ message: "ID không hợp lệ" }),
});

export const UpdateModifierOptionSchema = ModifierOptionSchema.omit({ id: true });

export type TProductVariantResponse = z.infer<typeof ProductVariantSchema>;
export type TProductImageResponse = z.infer<typeof ProductImageSchema>;
export type TProductResponse = z.infer<typeof ProductSchema>;
export type TModifierOptionResponse = z.infer<typeof ModifierOptionSchema>;
export type TModifierGroupResponse = z.infer<typeof ModifierGroupSchema>;

export type TCreateModifierGroupRequest = z.infer<typeof CreateModifierGroupSchema>;
export type TUpdateModifierGroupRequest = z.infer<typeof UpdateModifierGroupSchema>;
export type TUpdateModifierOptionRequest = z.infer<typeof UpdateModifierOptionSchema>;
export type TProductRequest = z.infer<typeof CreateProductSchema>;
export type TUpdateProductRequest = z.infer<typeof UpdateProductSchema>;
export type TProductVariantRequest = z.infer<typeof ProductVariantSchema>;
export type TProductModifierOptionRequest = z.infer<typeof UpdateProductModifierOptionSchema>;
