import { apiRequest } from "@/lib/http";
import type { BaseResponse, PaginationResponse } from "@/types/response.type";
import { API_SUFFIX } from "./util.api";
import type { TBrandOrder } from "@/schema/order.schema";

const getBrandOrders = async (params: any) => 
    await apiRequest.order.get<BaseResponse<PaginationResponse<TBrandOrder>>>(`${API_SUFFIX.ORDER_API}`, {params});

const getBrandOrderById = async (id: string) =>
    await apiRequest.order.get<BaseResponse<TBrandOrder>>(`${API_SUFFIX.ORDER_API}/${id}`);

// const updateBrandOrderId = async (id: string, data: { productVariantIds: string[] }) =>
//     await apiRequest.order.patch<BaseResponse<TBrandOrder>>(`${API_SUFFIX.ORDER_API}/${id}`, data);


export const orderApi = {
    getBrandOrders,
    getBrandOrderById,
    // updateBrandOrderId,
};