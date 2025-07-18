import { Button } from "@/components/ui/button"
import { CirclePlusIcon } from "lucide-react"
import IngredientTable from "./components/ingredient-table"
import { Link } from "react-router-dom"
import { PATH_BRAND_DASHBOARD } from "@/routes/path"

const IngredientPage = () =>
{
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Quản lý thành phần</h1>
        <Link to={ PATH_BRAND_DASHBOARD.ingredient.create }>
          <Button>
            <CirclePlusIcon className="h-6 w-6" />
            Tạo thành phần mới
          </Button>
        </Link>
      </div>
      <IngredientTable />
    </div>
  )
}

export default IngredientPage