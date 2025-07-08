import { z } from "zod";

export const PromotionRuleBaseSchema = z.object({
    id: z.string().uuid(),
    name: z.string(),
    shortDescription: z.string(),
    description: z.string().nullable(),
    isActive: z.boolean(), 
    priority: z.number().int(),
})


export type TPromotionRuleBaseSchema = z.infer<typeof PromotionRuleBaseSchema>;
