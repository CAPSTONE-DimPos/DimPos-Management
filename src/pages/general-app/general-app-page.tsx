import KPICard from "./components/kpi-card";
import PaymentMethodCard from "./components/payment-method-revenue";
import RevenueChart from "./components/revenue-chart";
import RunningPromotionTable from "./components/running-promotion-table";
import TopProductCard from "./components/top-product-card";
import TopStoresCard from "./components/top-stores-card";

const GeneralAppPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Tổng quan</h1>
      <KPICard />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <RevenueChart />
        <PaymentMethodCard />
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <TopProductCard />
        <TopStoresCard />
      </div>

      {/* Campaign Section*/}
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 mb-8">
        <RunningPromotionTable/>
      </div>
    </div>
  );
};

export default GeneralAppPage;
