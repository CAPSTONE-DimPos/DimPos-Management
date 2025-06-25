import InventoryReportIcon from '@/assets/icons/inventory-report-icon'
import ShoppingBagIcon from '@/assets/icons/shopping-bag-icon'
import TotalOrderIcon from '@/assets/icons/total-order-icon'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { TrendingUp } from 'lucide-react'
import { formatPrice } from '../../../lib/utils';

type Props = {}

const KPICard = ( _: Props ) =>
{
    return (
        <Card className="w-full shadow-none border-none bg-white mb-6 gap-3">
            {/* Main Header Section */ }
            <CardHeader>
                <h2 className="text-xl font-semibold text-gray-900">
                    Doanh thu trong ngày
                </h2>
                <p className="text-sm text-gray-500">
                    Tổng doanh thu trong ngày của tất cả các cửa hàng
                </p>
            </CardHeader>

            {/* KPI Cards Grid */ }
            <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
                {/* Daily Revenue Card */ }
                <Card className="bg-white shadow-none border border-gray-200 gap-1 py-3">
                    <CardHeader>
                        <InventoryReportIcon className="size-12 text-orange-500" />
                    </CardHeader>
                    <CardContent className="flex flex-col items-start gap-1">
                        <div className="text-2xl font-bold text-gray-900">
                            { formatPrice( 23000000 ) }
                        </div>
                        <div className="text-sm text-gray-600">
                            Tổng doanh thu
                        </div>
                        <div className="text-xs text-orange-500 flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" />
                            +10% so với hôm qua
                        </div>
                    </CardContent>
                </Card>

                {/* Total Orders Card */ }
                <Card className="bg-white shadow-none border border-gray-200 gap-1 py-3">
                    <CardHeader>
                        <TotalOrderIcon className="size-12 text-green-600" />
                    </CardHeader>
                    <CardContent className="flex flex-col items-start gap-1">
                        <div className="text-2xl font-bold text-gray-900">
                            90
                        </div>
                        <div className="text-sm text-gray-600">
                            Tổng đơn hàng
                        </div>
                        <div className="text-xs text-green-500 flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" />
                            +10% so với hôm qua
                        </div>
                    </CardContent>
                </Card>

                {/* Products Sold Card */ }
                <Card className="bg-white shadow-none border border-gray-200 gap-1 py-3">
                    <CardHeader>
                        <ShoppingBagIcon className="size-12 text-blue-500" />
                    </CardHeader>
                    <CardContent className="flex flex-col items-start gap-1">
                        <div className="text-2xl font-bold text-gray-900">
                            122
                        </div>
                        <div className="text-sm text-gray-600">
                            Sản phẩm đã bán
                        </div>
                        <div className="text-xs text-blue-500 flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" />
                            +10% so với hôm qua
                        </div>
                    </CardContent>
                </Card>
            </CardContent>
        </Card>
    )
}

export default KPICard