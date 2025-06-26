import { Button } from "@/components/ui/button"
import { CirclePlusIcon } from "lucide-react"
import MenuTable from "./components/menu-table"
import { Link } from "react-router-dom"
import { PATH_DASHBOARD } from "@/routes/path"

type Props = {}

const MenuPage = ( _: Props ) =>
{
    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Quản lý Thực đơn</h1>
                <Link to={ PATH_DASHBOARD.product.createMenu }>
                    <Button>
                        <CirclePlusIcon className="h-6 w-6" />
                        Tạo Thực đơn mới
                    </Button>
                </Link>
            </div>

            <MenuTable />
        </div>
    )
}

export default MenuPage