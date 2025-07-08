import { ProductVariantStatusEnum } from "@/types/enums/product-variant-status.enum";
import { z } from "zod";

export const ProductVariantSchema = z.object({
    id: z.string().uuid(),
    code: z.string(),
    alternativeCode: z.string().optional(),
    name: z.string(),
    discountPercent: z.number().nullable().optional(),
    discountPrice: z.number().nullable().optional(),
    price: z.number().min(0),
    priceCOGS: z.number().min(0).optional(),
    isActive: z.boolean(),
    size: z.string().nullable().optional(),
    isMenuDisplay: z.boolean(),
    sku: z.string().nullable().optional(),
    status: z.nativeEnum(ProductVariantStatusEnum),
    productId: z.string().uuid(),
    categoryId: z.string().uuid(),
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

export const UpdateProductVariantSchema = z.object({
    code: z.string(),
    alternativeCode: z.string().max(100, { message: "Mã thay thế của biến thể sản phẩm không được vượt quá 100 ký tự" }).optional(),
    name: z.string({ message: "Tên của biến thể sản phẩm không được bỏ trống" }).min(1, { message: "Tên của biến thể sản phẩm phải có ít nhất 1 ký tự" }).max(200, { message: "Tên của biến thể sản phẩm không được vượt quá 200 ký tự" }),
    discountPercent: z.number().nullable().optional(),
    discountPrice: z.number().nullable().optional(),
    price: z.number().min(0, { message: "Giá brand của biến thể sản phẩm không được bỏ trống" }),
    isActive: z.boolean(),
    isMenuDisplay: z.boolean(),
    priceCOGS: z.number().optional(),
    size: z.string().nullable().optional(),
    displayOrder: z.number().int().optional(),
    sku: z.string().nullable().optional(),
    status: z.nativeEnum(ProductVariantStatusEnum)
});

export type TProductVariantResponse = z.infer<typeof ProductVariantSchema>;
export type TCreateProductVariantRequest = z.infer<typeof CreateProductVariantSchema>;
export type TUpdateProductVariantRequest = z.infer<typeof UpdateProductVariantSchema>;
