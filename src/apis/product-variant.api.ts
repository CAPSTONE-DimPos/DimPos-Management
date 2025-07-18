import { apiRequest } from "@/lib/http";
import { API_SUFFIX } from "./util.api";

import type {
    TProductVariantResponse,
    TRecipeItemResponse,
    TRequestRecipeItem
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
const getRecipeItemsByProductVariantId = async (id: string, params?: any) =>
    await apiRequest.catalog.get<BaseResponse<PaginationResponse<TRecipeItemResponse>>>(
        `${API_SUFFIX.PRODUCT_VARIANT_API}/${id}/recipe-items`,
        { params }
    );
const addRecipeItemToProductVariant = async (id: string, data: TRequestRecipeItem) =>
    await apiRequest.catalog.post<BaseResponse<TRecipeItemResponse>>(
        `${API_SUFFIX.PRODUCT_VARIANT_API}/${id}/recipe-items`,
        data
    );
const deleteRecipeItemFromProductVariant = async (productVariantId: string, recipeItemId: string) =>
    await apiRequest.catalog.delete(
        `${API_SUFFIX.PRODUCT_VARIANT_API}/${productVariantId}/recipe-items/${recipeItemId}`
    );
const updateRecipeItemInProductVariant = async (productVariantId: string, recipeItemId: string, data: Pick<TRequestRecipeItem, "quantity">) =>
    await apiRequest.catalog.put(
        `${API_SUFFIX.PRODUCT_VARIANT_API}/${productVariantId}/recipe-items/${recipeItemId}`,
        data
    );

export const productVariantApi = {
    getProductVariants,
    getProductVariantById,
    updateProductVariantApi,
    getRecipeItemsByProductVariantId,

    addRecipeItemToProductVariant,
    deleteRecipeItemFromProductVariant,
    updateRecipeItemInProductVariant,
}