import { Badge } from "@/components/ui/badge";
import type { TModifierOptionResponse } from "@/schema/product.schema";
import type { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<TModifierOptionResponse>[] = [
    {
        accessorKey: "name",
        header: () => (
            <div className="font-semibold">
                Tên Tùy Chọn
            </div>
        ),
        cell: ( info ) =>
        {
            const name = info.getValue() as string;
            return (
                <div className="max-w-[200px]">
                    <div
                        className="font-medium text-foreground truncate cursor-pointer hover:text-primary transition-colors"
                    >
                        { name }
                    </div>
                </div>
            );
        },
    },
    {
        accessorKey: "description",
        header: () => (
            <div className="font-semibold">
                Mô Tả
            </div>
        ),
        cell: ( info ) =>
        {
            const description = info.getValue() as string;
            return (
                <div className="max-w-[200px]">
                    <div className="text-muted-foreground text-sm">
                        { description || "Không có mô tả" }
                    </div>
                </div>
            );
        },
    },
    {
        accessorKey: "status",
        header: () => (
            <div className="text-center font-semibold">
                Trạng Thái
            </div>
        ),
        cell: ( info ) =>
        {
            const status = info.getValue() as number;
            const isActive = status === 0;

            return (
                <div className="flex justify-center">
                    <Badge
                        variant={ isActive ? "default" : "destructive" }
                        className={ `${ isActive
                            ? "bg-green-100 text-green-800 hover:bg-green-200"
                            : "bg-red-100 text-red-800 hover:bg-red-200"
                            }` }
                    >
                        <div className={ `w-2 h-2 rounded-full mr-2 ${ isActive ? "bg-green-500" : "bg-red-500"
                            }` } />
                        { isActive ? "Kích Hoạt" : "Không Kích Hoạt" }
                    </Badge>
                </div>
            );
        },
    },

] 