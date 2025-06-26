import { useState } from "react";
import { Button } from "@/components/ui/button";
import ModifierGroupTable from "./components/modifier-group-table";
import ModifierGroupModal from "./components/modifier-group-modal";
import { CirclePlus } from "lucide-react";
import { useProduct } from "@/hooks/use-product";

const ModifierGroupPage = () => {
    const [open, setOpen] = useState(false);
    const { getModifierGroups } = useProduct();
    const { refetch } = getModifierGroups();
    return (
        <div className="p-4">
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-semibold">Quản lý Tùy Chọn</h1>
                <Button onClick={() => setOpen(true)}>
                    <CirclePlus className="mr-2 h-5 w-5" />
                    Tạo tùy chọn
                </Button>
            </div>

            <ModifierGroupTable />

            <ModifierGroupModal
                open={open}
                onClose={() => setOpen(false)}
                onSuccess={() => {
                    refetch();       
                    setOpen(false); 
                }}
            />
        </div>
    );
};

export default ModifierGroupPage;
