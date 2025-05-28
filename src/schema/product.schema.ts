import { z } from "zod";

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
})

export type TProductVariantResponse = z.infer<typeof ProductVariantSchema>;