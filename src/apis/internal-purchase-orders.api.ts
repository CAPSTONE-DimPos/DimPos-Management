// import { apiRequest } from "@/lib/http";
// import { API_SUFFIX } from "./util.api";

// import type {
//   TStorePurchaseOrder,
//   TStorePurchaseOrderListItem,
//   TCreateStorePurchaseOrderRequest,
//   TUpdateStorePurchaseOrderRequest,
// } from "@/schema/internal-purchase-orders.schema";
// import type { BaseResponse, PaginationResponse } from "@/types/response.type";

// // ==== INTERNAL PURCHASE ORDERS ====

// const getList = async (params?: any) =>
//   await apiRequest.inventory.get<BaseResponse<PaginationResponse<TStorePurchaseOrderListItem>>>(
//     API_SUFFIX.INTERNAL_PURCHASE_ORDER_API,
//     { params }
//   );

// const getById = async (id: string) =>
//   await apiRequest.inventory.get<BaseResponse<TStorePurchaseOrder>>(
//     `${API_SUFFIX.INTERNAL_PURCHASE_ORDER_API}/${id}`
//   );

// const create = async (data: TCreateStorePurchaseOrderRequest) =>
//   await apiRequest.inventory.post<BaseResponse<TStorePurchaseOrder>>(
//     API_SUFFIX.INTERNAL_PURCHASE_ORDER_API,
//     data
//   );

// const update = async (id: string, data: Partial<TUpdateStorePurchaseOrderRequest>) =>
//   await apiRequest.inventory.patch<BaseResponse<TStorePurchaseOrder>>(
//     `${API_SUFFIX.INTERNAL_PURCHASE_ORDER_API}/${id}`,
//     data
//   );

// const requestCancel = async (id: string, reason: string) =>
//   await apiRequest.inventory.patch<BaseResponse<TStorePurchaseOrder>>(
//     `${API_SUFFIX.INTERNAL_PURCHASE_ORDER_API}/${id}/cancel`,
//     { reason }
//   );

// // ==== EXPORT COMBINED API ====

// export const internalPOApi = {
//   getList,
//   getById,
//   create,
//   update,
//   requestCancel,
// };
