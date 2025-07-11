import { apiRequest } from "@/lib/http";
import { API_SUFFIX } from "./util.api";
import type { BaseResponse, PaginationResponse } from "@/types/response.type";
import type { TCreatePromotionRuleRequest, TPromotionRuleResponse } from "@/schema/promotion-rule.schema";

const getPromotionRules = async (params: any) =>
    await apiRequest.promotion.get<BaseResponse<PaginationResponse<TPromotionRuleResponse>>>(
        API_SUFFIX.PROMOTION_RULE_API,
        { params }
    );
const createPromotionRule = async (data: TCreatePromotionRuleRequest) =>
    await apiRequest.promotion.post(
        API_SUFFIX.PROMOTION_RULE_API,
        data
    );
export const promotionApi = {
    getPromotionRules,
    createPromotionRule,
}