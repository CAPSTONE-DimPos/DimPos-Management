import DetailCard from "../store-overview/store-information";
import PaymentMethodConfigCard from "./payment-method-config/payment-method-card";


const ShiftConfigPage = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <DetailCard />
        <PaymentMethodConfigCard />
      </div>
    </div>
  );
};

export default ShiftConfigPage;
