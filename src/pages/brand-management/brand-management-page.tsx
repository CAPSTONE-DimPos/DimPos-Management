import { Button } from "@/components/ui/button";
import { PATH_ADMIN_DASHBOARD } from "@/routes/path";
import { CirclePlus } from "lucide-react";
import { Link } from "react-router-dom";
import BrandTable from "./components/brand-table";

const BrandManagementPage = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Quản lý Thương hiệu</h1>
        <Link to={PATH_ADMIN_DASHBOARD.brand.create}>
          <Button>
            <CirclePlus className="mr-2 h-5 w-5" />
            Tạo thương hiệu
          </Button>
        </Link>
      </div>
      <BrandTable />
    </div>
  );
};

export default BrandManagementPage;