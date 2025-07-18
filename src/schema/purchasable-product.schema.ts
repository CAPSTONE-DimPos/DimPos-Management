import { z } from "zod";
import { CreateProductImageSchema, ProductImageSchema } from "./product.schema";

export const PurchasableProductSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  code: z.string(),
  sku: z.string().nullable(),
  price: z.number(),
  description: z.string().nullable(),
  displayOrder: z.number().int(),
  isActive: z.boolean(),
});
export const CreatePurchasableProductRequestSchema = z.object({
  code: z.string(),
  name: z.string(),
  description: z.string().nullable().optional(),
  displayOrder: z.number().int(),
  note: z.string().nullable().optional(),
  sku: z.string().nullable(),
  price: z.number(),
  productImages: z.array(CreateProductImageSchema).nullable().optional(),
});
export const UpdatePurchasableProductRequestSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  code: z.string(),
  sku: z.string().nullable(),
  price: z.number(),
  description: z.string().nullable(),
  displayOrder: z.number().int(),
  isActive: z.boolean(),
  existInternalProductImages: z.array(ProductImageSchema).nullable(),
  newInternalProductImages: z.array(CreateProductImageSchema).nullable(),
});

export function mapPurchasableProductToUpdateRequest(
  internalProduct: TPurchasableProduct
): TUpdatePurchasableProductRequest {
  return {
    id: internalProduct.id,
    code: internalProduct.code,
    name: internalProduct.name,
    sku: internalProduct.sku,
    price: internalProduct.price,
    description: internalProduct.description,
    displayOrder: internalProduct.displayOrder,
    isActive: internalProduct.isActive ?? false,
    existInternalProductImages: [],
    newInternalProductImages: [],
  };
}

export type TPurchasableProduct = z.infer<typeof PurchasableProductSchema>;
export type TCreatePurchasableProductRequest = z.infer<typeof CreatePurchasableProductRequestSchema>;
export type TUpdatePurchasableProductRequest = z.infer<typeof UpdatePurchasableProductRequestSchema>;