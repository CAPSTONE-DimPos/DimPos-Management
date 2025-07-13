import { apiRequest } from "@/lib/http";
import { API_SUFFIX } from "./util.api";

import type { TStoreOrderResponse } from "@/schema/order.schema";
import type { BaseResponse, PaginationResponse } from "@/types/response.type";

const getStoreOrders = async (params?: any) =>
  await apiRequest.order.get<BaseResponse<PaginationResponse<TStoreOrderResponse>>>(
    API_SUFFIX.ORDER_API,
    { params }
  );

const getStoreOrderById = async (id: string) =>
  await apiRequest.order.get<BaseResponse<TStoreOrderResponse>>(
    `${API_SUFFIX.ORDER_API}/${id}`
  );

export const storeOrderApi = {
  getStoreOrders,
  getStoreOrderById,
};
