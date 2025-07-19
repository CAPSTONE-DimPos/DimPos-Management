import { apiRequest } from "@/lib/http";
import { API_SUFFIX } from "./util.api";

import type { BaseResponse } from "@/types/response.type";
import type { TStorePaymentMethodConfig } from "@/schema/payment-method-config.schema";


const getPaymentMethodConfigByStore = async () =>
  await apiRequest.store.get<BaseResponse<TStorePaymentMethodConfig[]>>(
    API_SUFFIX.STORE_PAYMENT_METHOD_CONFIG_API
  );

export const paymentMethodConfigApi = {
  getPaymentMethodConfigByStore,
};
