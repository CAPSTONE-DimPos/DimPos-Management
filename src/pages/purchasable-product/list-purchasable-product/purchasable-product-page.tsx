import { Button } from "@/components/ui/button";
import StoreTable from "./components/purchasable-product-table";
import { CirclePlusIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { PATH_BRAND_DASHBOARD } from "@/routes/path";

type Props = {};

const PurchasableProduct = (_: Props) => {
  return (
    <div>
      <div className="flex justify-between items-center  mb-6">
        <h1 className="text-2xl font-bold">Danh sách sản phẩm nhập hàng</h1>
        <Link to={PATH_BRAND_DASHBOARD.purchasableProduct.create}>
          <Button>
            <CirclePlusIcon className="h-6 w-6" />
            Tạo sản phẩm nhập hàng mới
          </Button>
        </Link>
      </div>
      <StoreTable />
    </div>
  );
};

export default PurchasableProduct;
