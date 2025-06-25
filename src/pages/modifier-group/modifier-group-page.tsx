import { Button } from "@/components/ui/button"
import ModifierGroupTable from "./components/modifier-group-table"
import { CirclePlus } from "lucide-react"

const ModifierGroupPage = () =>
{
    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-semibold">Quản lý Tùy chọn</h1>
                {/* <Link to={ PATH_DASHBOARD.category.create }> */ }
                <Button>
                    <CirclePlus className="mr-2 h-5 w-5" />
                    Tạo tùy chọn
                </Button>
                {/* </Link> */ }
            </div>
            <ModifierGroupTable />
        </div>
    )
}

export default ModifierGroupPage