import { apiRequest } from "@/lib/http";
import type { TBrandMenu, TBrandStore } from "@/schema/menu.schema";
import type { BaseResponse, PaginationResponse } from "@/types/response.type";
import { API_SUFFIX } from "./util.api";
import type { TProductVariantResponse } from "@/schema/product-variant.schema";

const getBrandMenu = async (params: any) => 
    await apiRequest.menu.get<BaseResponse<PaginationResponse<TBrandMenu>>>(`${API_SUFFIX.BRAND_MENU_API}`, {params});
const createBrandMenu = async (data: TBrandMenu) =>
    await apiRequest.menu.post<BaseResponse<TBrandMenu>>(`${API_SUFFIX.BRAND_MENU_API}`, data);
const getBrandMenuById = async (id: string) =>
    await apiRequest.menu.get<BaseResponse<TBrandMenu>>(`${API_SUFFIX.BRAND_MENU_API}/${id}`);
const getProductsByBrandMenuId = async (id: string, params?: any) =>
    await apiRequest.menu.get<BaseResponse<PaginationResponse<TProductVariantResponse>>>(`${API_SUFFIX.BRAND_MENU_API}/${id}/product-variants`, {params});
const updateProductsByBrandMenuId = async (id: string, data: { productVariantIds: string[] }) =>
    await apiRequest.menu.patch<BaseResponse<TBrandMenu>>(`${API_SUFFIX.BRAND_MENU_API}/${id}/product-variants`, data);
const getStoresByBrandMenuId = async (id: string, params?: any) =>
    await apiRequest.menu.get<BaseResponse<PaginationResponse<TBrandStore>>>(`${API_SUFFIX.BRAND_MENU_API}/${id}/stores`, {params});
const updateStoresByBrandMenuId = async (id: string, data: { storeIds: string[] }) =>
    await apiRequest.menu.patch<BaseResponse<TBrandMenu>>(`${API_SUFFIX.BRAND_MENU_API}/${id}/stores`, data);

export const brandMenuApi = {
    getBrandMenu,
    createBrandMenu,
    getBrandMenuById,
    getProductsByBrandMenuId,
    getStoresByBrandMenuId,
    updateProductsByBrandMenuId,
    updateStoresByBrandMenuId,
};