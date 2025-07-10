import { z } from "zod";

export const RuleActionsSchema = z.object({
    id: z.string().uuid(),
    actionType: z.number().int(),
    value: z.string().nullable(),
    targetCriteriaForItemAction: z.string().nullable(),
    maxDiscountAmountForPercentage: z.number().nullable(),
})

export const RuleConditionsSchema = z.object({
    id: z.string().uuid(),
    conditionType: z.number().int(),
    operator: z.number().int(),
    value: z.string().nullable(),
})


export const PromotionRuleBaseSchema = z.object({
    id: z.string().uuid(),
    name: z.string(),
    shortDescription: z.string(),
    description: z.string().nullable(),
    priority: z.number().int(),
    ruleActions: RuleActionsSchema.optional(),
    ruleConditions: z.array(RuleConditionsSchema).optional(),
})


export type TPromotionRuleResponse = z.infer<typeof PromotionRuleBaseSchema>;
