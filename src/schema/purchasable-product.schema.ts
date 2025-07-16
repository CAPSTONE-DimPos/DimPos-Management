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
  isActive: z.boolean().default(false),
});
export const CreatePurchasableProductRequestSchema = z.object({
  code: z.string(),
  name: z.string(),
  description: z.string().nullable(),
  displayOrder: z.number().int(),
  note: z.string().nullable().optional(),
  sku: z.string().nullable(),
  price: z.number(),
  productImages: z.array(CreateProductImageSchema).nullable(),
});
export const UpdatePurchasableProductRequestSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  code: z.string(),
  sku: z.string().nullable(),
  price: z.number(),
  description: z.string().nullable(),
  displayOrder: z.number().int(),
  isActive: z.boolean().default(false),
  productImages: z.array(ProductImageSchema).nullable(),
  newProductImages: z.array(CreateProductImageSchema).nullable(),
});

export type TPurchasableProduct = z.infer<typeof PurchasableProductSchema>;
export type TCreatePurchasableProductRequest = z.infer<typeof CreatePurchasableProductRequestSchema>;
export type TUpdatePurchasableProductRequest = z.infer<typeof UpdatePurchasableProductRequestSchema>;