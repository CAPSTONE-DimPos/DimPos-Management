import { usePaymentMethodConfig } from "@/hooks/use-payment-method-config";
import PaymentMethodConfigView from "./payment-method-config-view";

const PaymentMethodConfigCard = () => {
  const { getConfigs } = usePaymentMethodConfig();
  const { data: response, isLoading, isError } = getConfigs();

  if (isLoading || isError || !response?.data) {
    return null;
  }

  const configs = response.data;

  return <PaymentMethodConfigView data={configs.data} />;
};

export default PaymentMethodConfigCard;
