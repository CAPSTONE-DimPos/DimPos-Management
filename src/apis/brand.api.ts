import { apiRequest } from "@/lib/http";
import { API_SUFFIX } from "./util.api";
import type { BaseResponse } from "@/types/response.type";
import type { TBrand } from "@/schema/brand.schema";

const getBrandDetails = async () =>
    await apiRequest.brand.get<BaseResponse<TBrand>>(API_SUFFIX.BRAND_API.BRAND_DETAIL);

export const brandApi = {
    getBrandDetails,
};