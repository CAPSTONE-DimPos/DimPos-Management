import { useQuery } from "@tanstack/react-query";
import { paymentMethodConfigApi } from "@/apis/payment-method-config.api";

export const usePaymentMethodConfig = () => {
  const getConfigs = () =>
    useQuery({
      queryKey: ["payment-method-configs"],
      queryFn: () => paymentMethodConfigApi.getPaymentMethodConfigByStore(),
    });

  return {
    getConfigs,
  };
};
