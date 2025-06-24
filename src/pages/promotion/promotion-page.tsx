import { Button } from "@/components/ui/button"
import { CirclePlusIcon } from "lucide-react"

type Props = {}

const PromotionPage = ( _: Props ) =>
{
    return (
        <div className="px-8 py-4">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Quản lý Khuyến mãi</h1>
                <Button>
                    <CirclePlusIcon className="h-6 w-6" />
                    Tạo khuyến mãi mới
                </Button>
            </div>
        </div>
    )
}

export default PromotionPage