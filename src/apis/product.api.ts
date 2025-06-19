import { apiRequest } from "@/lib/http";
import type { TModifierOptionResponse, TProductResponse, TProductVariantResponse } from "@/schema/product.schema";
import type { BaseResponse, PaginationResponse } from "@/types/response.type";
import { API_SUFFIX } from "./util.api";

const getProducts = async (params?: any) =>
    await apiRequest.catalog.get<BaseResponse<PaginationResponse<TProductResponse>>>(API_SUFFIX.PRODUCT_API, { params });

const getProductById = async (id: string) =>
    await apiRequest.catalog.get<BaseResponse<TProductResponse>>(`${API_SUFFIX.PRODUCT_API}/${id}`);

const getProductVariants = async (params?: any) => 
    await apiRequest.catalog.get<BaseResponse<PaginationResponse<TProductVariantResponse>>>(API_SUFFIX.PRODUCT_VARIANT_API, { params});
const getModifierGroups = async (params?: any) =>
    await apiRequest.catalog.get<BaseResponse<PaginationResponse<TModifierOptionResponse>>>(API_SUFFIX.MODIFIER_GROUP_API, { params });

const createProductApi = async (data: FormData) =>
    await apiRequest.catalog.post<BaseResponse<TProductResponse>>(API_SUFFIX.PRODUCT_API, data);

export const productApi = {
    getProducts,
    getProductVariants,
    getModifierGroups,
    createProductApi,
    getProductById,
};