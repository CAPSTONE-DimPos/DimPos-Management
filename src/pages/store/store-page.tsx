import { Button } from "@/components/ui/button"
import StoreTable from "./components/store-table"
import { CirclePlusIcon } from "lucide-react"

type Props = {}

const StorePage = ( _: Props ) =>
{
    return (
        <div className="px-8 py-4">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Danh sách Cửa hàng</h1>
                <Button>
                    <CirclePlusIcon className="h-6 w-6" />
                    Tạo cửa hàng mới
                </Button>
            </div>
            <StoreTable />
        </div>
    )
}

export default StorePage