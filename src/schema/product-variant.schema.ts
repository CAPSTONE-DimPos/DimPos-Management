import { z } from "zod";
import { IngredientSchema } from "./ingredients.schema";

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
    brandPrice: z.number({message: "Giá của biến thể sản phẩm không được bỏ trống"}).min(1, { message: "Giá của biến thể sản phẩm phải lớn hơn 0" }),
    size: z.string({message: "Kích thước của biến thể sản phẩm không được bỏ trống"}).min(1, { message: "Kích thước của biến thể sản phẩm không được bỏ trống" }).max(50, { message: "Kích thước của biến thể sản phẩm không được vượt quá 50 ký tự" }),
    displayOrder: z.number().int().optional(),
});

export const UpdateProductVariantSchema = z.object({
    code: z.string(),
    name: z.string({ message: "Tên của biến thể sản phẩm không được bỏ trống" }).min(1, { message: "Tên của biến thể sản phẩm phải có ít nhất 1 ký tự" }).max(200, { message: "Tên của biến thể sản phẩm không được vượt quá 200 ký tự" }),
    price: z.number().min(0, { message: "Giá brand của biến thể sản phẩm không được bỏ trống" }),
    isActive: z.boolean(),
    size: z.string().nullable(),
    sku: z.string().nullable(),
});

export const RecipeItemSchema = z.object({
    id: z.string().uuid(),
    quantity: z.number().min(1, { message: "Số lượng phải lớn hơn 0" }),
    ingredient: IngredientSchema.omit({
        description: true,
    })
})

export const RequestRecipeItemSchema = z.object({
    quantity: z.number({message:"Số lượng không được để trống"}).min(0, { message: "Số lượng phải lớn hơn hoặc bằng 0" }),
    ingredientId: z.string({message: "Vui lòng chọn thành phần"}).uuid({ message: "ID thành phần không hợp lệ" }),
});

export type TProductVariantResponse = z.infer<typeof ProductVariantSchema>;
export type TCreateProductVariantRequest = z.infer<typeof CreateProductVariantSchema>;
export type TUpdateProductVariantRequest = z.infer<typeof UpdateProductVariantSchema>;
export type TRecipeItemResponse = z.infer<typeof RecipeItemSchema>;
export type TRequestRecipeItem = z.infer<typeof RequestRecipeItemSchema>;
