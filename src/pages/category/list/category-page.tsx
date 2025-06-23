import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import CategoryTable from "./components/category-table"; 
import { PATH_DASHBOARD } from "@/routes/path";

const CategoryPage = () => {
    const navigate = useNavigate();

    const handleCreateClick = () => {
        navigate(PATH_DASHBOARD.category.create);
    };

    return (
        <div className="p-4">
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-semibold">Quản lý Danh mục</h1>
                <Button onClick={handleCreateClick}>
                    <CirclePlus className="mr-2 h-5 w-5" />
                    Tạo danh mục
                </Button>
            </div>
            <CategoryTable />
        </div>
    );
};

export default CategoryPage;
