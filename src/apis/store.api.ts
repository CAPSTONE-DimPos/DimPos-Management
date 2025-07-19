import { apiRequest } from "@/lib/http";
import { API_SUFFIX } from "./util.api";

import type { BaseResponse, PaginationResponse } from "@/types/response.type";
import type { TCreateStoreRequest, TStore, TStoreResponse } from "@/schema/store.schema";

// ==== Store ====
const getStores = async (params?: any) =>
  await apiRequest.store.get<BaseResponse<PaginationResponse<TStore>>>(
    API_SUFFIX.STORE_API,
    { params }
  );

const getStoreById = async (id: string) =>
  await apiRequest.store.get<BaseResponse<TStore>>(
    `${API_SUFFIX.STORE_API}/${id}`
  );

const updateStoreMutation = async (id: string, data: FormData) =>
  await apiRequest.store.patch<BaseResponse<TStore>>(
    `${API_SUFFIX.STORE_API}/${id}`,
    data
  );

const createStoreMutation = async (data: TCreateStoreRequest) =>
  await apiRequest.store.post<BaseResponse<TStore>>(
    API_SUFFIX.STORE_API,
    data
  );

const getStoreDetail = async () =>
  await apiRequest.store.get<BaseResponse<TStoreResponse>>(API_SUFFIX.STORE_DETAIL_API);

export const storeApi = {
  getStores,
  getStoreById,
  getStoreDetail,
  updateStoreMutation,
  createStoreMutation,
};
