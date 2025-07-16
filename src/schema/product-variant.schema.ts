import { z } from "zod";

export const ProductVariantSchema = z.object({
    id: z.string().uuid(),
    code: z.string(),
    name: z.string(),
    description: z.string().nullable(),
    price: z.number( {message: "Giá phải là số"} ).min(0),    
    isActive: z.boolean(),
    size: z.string().nullable(),
    sku: z.string().nullable(),
    categoryId: z.string().uuid().optional(),
    productId: z.string().uuid().optional(),
});

export const CreateProductVariantSchema = z.object({
    code: z.string({ message: "Mã của biến thể sản phẩm không được bỏ trống" }).min(1, { message: "Mã của biến thể sản phẩm phải có ít nhất 1 ký tự" }).max(50, { message: "Mã của biến thể sản phẩm không được vượt quá 50 ký tự" }),
    name: z.string({ message: "Tên của biến thể sản phẩm không được bỏ trống" }).min(1, { message: "Tên của biến thể sản phẩm phải có ít nhất 1 ký tự" }).max(200, { message: "Tên của biến thể sản phẩm không được vượt quá 200 ký tự" }),
    description: z.string().nullable(),
    sku: z.string({message: "Mã SKU của biến thể sản phẩm không được bỏ trống"}).min(1, { message: "Mã SKU của biến thể sản phẩm có ít nhất 1 ký tự" }).max(100, { message: "Mã SKU của biến thể sản phẩm không được vượt quá 100 ký tự" }).optional(),
    brandPrice: z.number().min(0, { message: "Giá brand của biến thể sản phẩm không được bỏ trống" }),
    size: z.string().optional(),
    displayOrder: z.number().int().optional(),
});

export const UpdateProductVariantSchema = z.object({
    id: z.string().uuid(),
    code: z.string(),
    name: z.string({ message: "Tên của biến thể sản phẩm không được bỏ trống" }).min(1, { message: "Tên của biến thể sản phẩm phải có ít nhất 1 ký tự" }).max(200, { message: "Tên của biến thể sản phẩm không được vượt quá 200 ký tự" }),
    price: z.number().min(0, { message: "Giá brand của biến thể sản phẩm không được bỏ trống" }),
    isActive: z.boolean(),
    size: z.string().nullable(),
    sku: z.string().nullable(),
});

export type TProductVariantResponse = z.infer<typeof ProductVariantSchema>;
export type TCreateProductVariantRequest = z.infer<typeof CreateProductVariantSchema>;
export type TUpdateProductVariantRequest = z.infer<typeof UpdateProductVariantSchema>;
