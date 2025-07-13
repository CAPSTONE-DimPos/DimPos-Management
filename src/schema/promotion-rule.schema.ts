import { z } from "zod";

export const RuleActionsSchema = z.object({
    id: z.string().uuid(),
    actionType: z.number().int(),
    value: z.string().min(1, { message: "Giá trị không được để trống" }),
    targetCriteriaForItemAction: z.string().nullable(),
    maxDiscountAmountForPercentage: z.number().nullable(),
})

export const RuleConditionsSchema = z.object({
    id: z.string().uuid(),
    conditionType: z.number().int(),
    operator: z.number().int(),
    value: z.string().min(1, { message: "Giá trị không được để trống" }),
})

export const CreateRuleConditionSchema = RuleConditionsSchema.omit({ id: true });
export const CreateRuleActionSchema = RuleActionsSchema.omit({ id: true }).extend({
    targetCriteriaForItemAction: z.array(z.string().uuid()).nullable().optional(),
});

export const EditRuleActionSchema = RuleActionsSchema.extend({
    targetCriteriaForItemAction: z.array(z.string().uuid()).nullable().optional(),
});


export const PromotionRuleBaseSchema = z.object({
    id: z.string().uuid(),
    name: z.string(),
    shortDescription: z.string(),
    description: z.string().optional(),
    priority: z.number().int(),
    ruleActions: RuleActionsSchema.optional(),
    ruleConditions: z.array(RuleConditionsSchema).optional(),
})

export const CreatePromotionRuleSchema = PromotionRuleBaseSchema.omit({ id: true }).extend({
    ruleActions: CreateRuleActionSchema.optional(),
    ruleConditions: z.array(CreateRuleConditionSchema).optional(),
})


export type TPromotionRuleResponse = z.infer<typeof PromotionRuleBaseSchema>;
export type TRuleActions = z.infer<typeof RuleActionsSchema>;
export type TRuleConditions = z.infer<typeof RuleConditionsSchema>;
export type TCreatePromotionRuleRequest = z.infer<typeof CreatePromotionRuleSchema>;
export type TCreateRuleCondition = z.infer<typeof CreateRuleConditionSchema>;
export type TCreateRuleAction = z.infer<typeof CreateRuleActionSchema>;
export type TEditRuleAction = z.infer<typeof EditRuleActionSchema>;


export const getActionTypeName = (actionType: number | undefined): string => {
    if (actionType === undefined) return "N/A";

    switch (actionType) {
        case 0: return "Khuyến mãi theo phần trăm toàn giỏ hàng";
        case 1: return "Khuyến mãi cố định toàn giỏ hàng";
        case 2: return "Khuyến mãi theo phần trăm cho từng sản phẩm";
        case 3: return "Khuyến mãi theo phần trăm cho một sản phẩm";
        case 4: return "Khuyến mãi cố định cho từng sản phẩm";
        case 5: return "Khuyến mãi cố định cho một sản phẩm";
        case 6: return "Tặng sản phẩm";
        default: return "Không xác định";
    }
};
