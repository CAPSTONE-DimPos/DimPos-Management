import { apiRequest } from "@/lib/http";
import { API_SUFFIX } from "./util.api";

import type { BaseResponse, PaginationResponse } from "@/types/response.type";
import type { TStore } from "@/schema/store.schema";

// ==== Store ====
const getStores = async (params?: any) =>
  await apiRequest.catalog.get<BaseResponse<PaginationResponse<TStore>>>(
    API_SUFFIX.STORE_API,
    { params }
  );

const getStoreById = async (id: string) =>
  await apiRequest.catalog.get<BaseResponse<TStore>>(
    `${API_SUFFIX.STORE_API}/${id}`
  );

const updateStoreMutation = async (id: string, data: FormData) =>
  await apiRequest.catalog.patch<BaseResponse<TStore>>(
    `${API_SUFFIX.STORE_API}/${id}`,
    data
  );

const createStoreMutation = async (data: FormData) =>
  await apiRequest.catalog.post<BaseResponse<TStore>>(
    API_SUFFIX.STORE_API,
    data
  );

export const storeApi = {
  getStores,
  getStoreById,
  updateStoreMutation,
  createStoreMutation,
};
