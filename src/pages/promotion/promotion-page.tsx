import { Button } from "@/components/ui/button"
import { CirclePlusIcon } from "lucide-react"
import PromotionTable from "./components/promotion-table"

type Props = {}

const PromotionPage = ( _: Props ) =>
{
    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Quản lý Khuyến mãi</h1>
                <Button>
                    <CirclePlusIcon className="h-6 w-6" />
                    Tạo khuyến mãi mới
                </Button>
            </div>

            <PromotionTable />
        </div>
    )
}

export default PromotionPage