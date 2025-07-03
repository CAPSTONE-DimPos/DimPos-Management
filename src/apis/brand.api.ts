import { apiRequest } from "@/lib/http";
import { API_SUFFIX } from "./util.api";
import type { BaseResponse } from "@/types/response.type";
import type {
  TBrandResponse,
  TUpdateBrandRequest,
} from "@/schema/brand-management.schema";
import type { TBrand } from "@/schema/brand.schema";

// GET all brands
const getAllBrands = async (params?: any) =>
  await apiRequest.brand.get<BaseResponse<TBrandResponse[]>>(API_SUFFIX.BRAND_API.BRAND, { params });

// GET brand by id
const getBrandById = async (id: string) =>
  await apiRequest.brand.get<BaseResponse<TBrandResponse>>(`${API_SUFFIX.BRAND_API.BRAND}/${id}`);

// GET current brand details
const getBrandDetails = async () =>
  await apiRequest.brand.get<BaseResponse<TBrand>>(API_SUFFIX.BRAND_API.BRAND_DETAIL);

// POST create brand
const createBrand = async (data: FormData) =>
  await apiRequest.brand.post<BaseResponse<TBrandResponse>>(
    API_SUFFIX.BRAND_API.BRAND,
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
// PUT update brand
const updateBrand = async (id: string, data: TUpdateBrandRequest) =>
  await apiRequest.brand.put<BaseResponse<TBrandResponse>>(`${API_SUFFIX.BRAND_API.BRAND}/${id}`, data);

export const brandApi = {
  getAllBrands,
  getBrandById,      
  getBrandDetails,   
  createBrand,
  updateBrand,
};
