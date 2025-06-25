import { Button } from "@/components/ui/button"
import ProductTable from "./components/product-table"
import { Link } from "react-router-dom"
import { PATH_DASHBOARD } from "@/routes/path"
import { CirclePlusIcon } from "lucide-react"

const ProductPage = () =>
{
    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold">Quản lý Sản phẩm</h1>
                <Link to={ PATH_DASHBOARD.product.createProduct }>
                    <Button>
                        <CirclePlusIcon className="h-6 w-6" />
                        Tạo sản phẩm mới
                    </Button>
                </Link>
            </div>
            <ProductTable />
        </div>
    )
}

export default ProductPage