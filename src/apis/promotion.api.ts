import { apiRequest } from "@/lib/http";
import { API_SUFFIX } from "./util.api";
import type { BaseResponse, PaginationResponse } from "@/types/response.type";
import type { TCreatePromotionRuleRequest, TEditRuleCondition, TPromotionRuleResponse } from "@/schema/promotion-rule.schema";

const getPromotionRules = async (params: any) =>
    await apiRequest.promotion.get<BaseResponse<PaginationResponse<TPromotionRuleResponse>>>(
        API_SUFFIX.PROMOTION_RULE_API,
        { params }
    );
const updatePromotionRule = async (id: string, data: TCreatePromotionRuleRequest) =>
    await apiRequest.promotion.patch(
        `${API_SUFFIX.PROMOTION_RULE_API}/${id}`,
        data
    );
const getPromotionRulesById = async (id: string) =>
    await apiRequest.promotion.get<BaseResponse<TPromotionRuleResponse>>(
        `${API_SUFFIX.PROMOTION_RULE_API}/${id}`
    );
const createPromotionRule = async (data: TCreatePromotionRuleRequest) =>
    await apiRequest.promotion.post(
        API_SUFFIX.PROMOTION_RULE_API,
        data
    );
const deleteConditionRule = async (promotionRuleId: string, conditionRuleId: string) =>
    await apiRequest.promotion.delete(
        `${API_SUFFIX.PROMOTION_RULE_API}/${promotionRuleId}/rule-conditions/${conditionRuleId}`
    );
const updateConditionRule = async (promotionRuleId: string, conditionRuleId: string, data: TEditRuleCondition) =>
    await apiRequest.promotion.put(
        `${API_SUFFIX.PROMOTION_RULE_API}/${promotionRuleId}/rule-conditions/${conditionRuleId}`,
        data
    );
export const promotionApi = {
    getPromotionRules,
    createPromotionRule,
    updatePromotionRule,
    getPromotionRulesById,

    deleteConditionRule,
    updateConditionRule,
}