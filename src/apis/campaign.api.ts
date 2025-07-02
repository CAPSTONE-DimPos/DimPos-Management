import { apiRequest } from "@/lib/http";

import type { BaseResponse, PaginationResponse } from "@/types/response.type";
import { API_SUFFIX } from "./util.api";
import type { TCampaignResponse } from "@/schema/campaign.schema";

const getCampaigns = async (params?: any) =>
  await apiRequest.promotion.get<BaseResponse<PaginationResponse<TCampaignResponse>>>(API_SUFFIX.CAMPAIGN_API, { params });
const getCampaignById = async (id: string) =>
  await apiRequest.promotion.get<BaseResponse<TCampaignResponse>>(`${API_SUFFIX.CAMPAIGN_API}/${id}`);
const createCampaign = async (request: FormData) =>
  await apiRequest.promotion.post<BaseResponse<TCampaignResponse>>(API_SUFFIX.CAMPAIGN_API, request);
const updateCampaign = async (id: string, request: FormData) =>
  await apiRequest.promotion.patch<BaseResponse<TCampaignResponse>>(
    `${API_SUFFIX.CAMPAIGN_API}/${id}`,
    request
  );
export const campaignApi = {
  getCampaigns,
  getCampaignById,
  createCampaign,
  updateCampaign,
};