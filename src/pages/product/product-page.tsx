import { Button } from "@/components/ui/button"
import ProductTable from "./components/product-table"
import { Link } from "react-router-dom"
import { PATH_DASHBOARD } from "@/routes/path"

const ProductPage = () =>
{
    return (
        <div className="p-4">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Quản lý Sản phẩm</h1>
                <Link to={ PATH_DASHBOARD.product.createProduct }>
                    <Button>
                        Thêm sản phẩm
                    </Button>
                </Link>
            </div>
            <ProductTable />
        </div>
    )
}

export default ProductPage