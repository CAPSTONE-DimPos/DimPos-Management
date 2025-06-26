import KPICard from "./components/kpi-card";
import ProductCategoryCard from "./components/product-category-card";
import RecentTransactionCard from "./components/recent-transaction-card";
import RevenueChart from "./components/revenue-chart";
import TopStoresCard from "./components/top-stores-card";


const GeneralAppPage = () =>
{
    return (
        <div>
            <h1 className="text-2xl font-semibold mb-6">Tổng quan</h1>
            <KPICard />

            {/* Main Content Grid */ }
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <RevenueChart />
                <RecentTransactionCard />
            </div>

            {/* Bottom Section */ }
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <ProductCategoryCard />
                <TopStoresCard />
            </div>
        </div>
    )
}

export default GeneralAppPage