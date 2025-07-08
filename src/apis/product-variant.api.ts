import { apiRequest } from "@/lib/http";
import { API_SUFFIX } from "./util.api";

import type {
    TProductVariantResponse
} from "@/schema/product-variant.schema";

import type { BaseResponse, PaginationResponse } from "@/types/response.type";

const getProductVariants = async (params?: any) =>
    await apiRequest.catalog.get<BaseResponse<PaginationResponse<TProductVariantResponse>>>(
        API_SUFFIX.PRODUCT_VARIANT_API,
        { params }
    );

const getProductVariantById = async (id: string) =>
    await apiRequest.catalog.get<BaseResponse<TProductVariantResponse>>(
        `${API_SUFFIX.PRODUCT_VARIANT_API}/${id}`
    );
const updateProductVariantApi = async (id: string, params?: any) =>
    await apiRequest.catalog.patch<BaseResponse<TProductVariantResponse>>(
        `${API_SUFFIX.PRODUCT_VARIANT_API}/${id}`,
        params
    );

export const productVariantApi = {
    getProductVariants,
    getProductVariantById,
    updateProductVariantApi,
}