import { apiRequest } from "@/lib/http";
import { API_SUFFIX } from "./util.api";

import type { TOrderResponse } from "@/schema/order.schema";
import type { BaseResponse, PaginationResponse } from "@/types/response.type";


const getOrders = async (params?: any) =>
  await apiRequest.order.get<BaseResponse<PaginationResponse<TOrderResponse>>>(
    API_SUFFIX.ORDER_API,
    { params }
  );


const getOrderById = async (id: string) =>
  await apiRequest.order.get<BaseResponse<TOrderResponse>>(
    `${API_SUFFIX.ORDER_API}/${id}`
  );

export const orderApi = {
  getOrders,
  getOrderById,
};
