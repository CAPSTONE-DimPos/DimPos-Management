import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

type TPaymentMethodConfig = {
  id: string;
  name: string;
  isActiveByStore: boolean;
};

type Props = {
  data: TPaymentMethodConfig[];
};

const PaymentMethodConfigView = ({ data }: Props) => {
  return (
    <Card className="col-span-full w-full bg-white shadow-none border-none">
      <CardHeader className="pb-2">
        <CardTitle className="text-base">Phương thức thanh toán</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 pt-0">
        {data.map((config) => (
          <div
            key={config.id}
            className="flex items-center justify-between py-2 border-b last:border-b-0"
          >
            <span className="font-medium">{config.name}</span>
            <Switch checked={config.isActiveByStore} disabled />
          </div>
        ))}
      </CardContent>
    </Card>

  );
};

export default PaymentMethodConfigView;
