import { apiRequest } from "@/lib/http";
import type { TProductVariantResponse } from "@/schema/product.schema";
import type { BaseResponse, PaginationResponse } from "@/types/response.type";
import { API_SUFFIX } from "./util.api";

const getProductVariants = async (params?: any) => 
    await apiRequest.catalog.get<BaseResponse<PaginationResponse<TProductVariantResponse>>>(API_SUFFIX.PRODUCT_VARIANT_API, { params});

export const productApi = {
    getProductVariants,
};