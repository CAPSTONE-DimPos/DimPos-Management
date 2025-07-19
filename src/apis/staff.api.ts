import { apiRequest } from "@/lib/http";
import { API_SUFFIX } from "./util.api";
import type { BaseResponse } from "@/types/response.type";
import type { TCreateAccount, TStaff } from "@/schema/staff.schema";

const getStaffsByStore = async () =>
  await apiRequest.store.get<BaseResponse<TStaff[]>>(
    API_SUFFIX.STAFF_API
  );


  const createStaffsByStore = async (data: TCreateAccount) =>
  await apiRequest.store.post<BaseResponse<TStaff>>(
    API_SUFFIX.STAFF_API,
    data
);

export const staffApi = {
  getStaffsByStore,
  createStaffsByStore,
};
