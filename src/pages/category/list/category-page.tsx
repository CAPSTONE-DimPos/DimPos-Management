import { Button } from "@/components/ui/button";
import { PATH_DASHBOARD } from "@/routes/path";
import { CirclePlus } from "lucide-react";
import { Link } from "react-router-dom";
import CategoryTable from "./components/category-table";

const CategoryPage = () =>
{

    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-semibold">Quản lý Danh mục</h1>
                <Link to={ PATH_DASHBOARD.category.create }>
                    <Button>
                        <CirclePlus className="mr-2 h-5 w-5" />
                        Tạo danh mục
                    </Button>
                </Link>
            </div>
            <CategoryTable />
        </div>
    );
};

export default CategoryPage;
