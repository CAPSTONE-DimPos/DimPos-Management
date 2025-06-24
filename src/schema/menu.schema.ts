import { z } from "zod";
import { ProductVariantSchema } from "./product.schema";


export const BrandMenuSchema = z.object({
    id: z.string().uuid(),
    name: z.string().min(1, { message: "Tên menu không được bỏ trống" }).max(100, { message: "Tên menu không được quá 100 ký tự" }),
    description: z.string().max(500, { message: "Mô tả không được quá 500 ký tự" }).optional(),
    type: z.number().int().optional(),
    isActiveByBrand: z.boolean(),
    validFrom: z.date().optional(),
    validTo: z.date().optional(),
    productVariants: z.array(ProductVariantSchema).optional(),
});

export const BrandStoreSchema = z.object({
    id: z.string().uuid(),
    name: z.string().min(1, { message: "Tên cửa hàng không được bỏ trống" }).max(100, { message: "Tên cửa hàng không được quá 100 ký tự" }),
    phone: z.string().optional(),
    email: z.string().optional(),
    description: z.string().optional(),
    address: z.string().min(1, { message: "Địa chỉ không được bỏ trống" }).max(200, { message: "Địa chỉ không được quá 200 ký tự" }),
    latitude: z.string().optional(),
    longitude: z.string().optional(),
    isSelected: z.boolean().optional(),
})

export const UpdateProductSchema = z.object({
    id: z.string().uuid(),
    isSelected: z.boolean().optional(),
})
export const UpdateBrandProductSchema = z.object({
    brandMenuId: z.string().uuid(),
    productList: z.array(UpdateProductSchema),
})



export type TBrandMenu = z.infer<typeof BrandMenuSchema>;
export type TBrandStore = z.infer<typeof BrandStoreSchema>;
export type TUpdateBrandProduct = z.infer<typeof UpdateBrandProductSchema>;