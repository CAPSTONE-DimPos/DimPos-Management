import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import
{
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { copyToClipboard } from "@/lib/utils";
import { PATH_BRAND_DASHBOARD } from "@/routes/path";
import type { TIngredientResponse } from "@/schema/ingredients.schema";
import type { ColumnDef } from "@tanstack/react-table";
import { Copy, Eye } from "lucide-react";
import { Link } from "react-router-dom";

export const columns: ColumnDef<TIngredientResponse>[] = [
    {
        accessorKey: "code",
        header: () => <div className="font-semibold text-base">Mã</div>,
        cell: ( info ) =>
        {
            const code = info.getValue() as string;
            return (
                <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-sm font-normal">
                        { code }
                    </Badge>
                    <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0 hover:bg-muted"
                        onClick={ () => copyToClipboard( code, "Mã thành phần" ) }
                    >
                        <Copy className="h-3 w-3" />
                    </Button>
                </div>
            );
        },
    },
    {
        accessorKey: "name",
        header: () => <div className="font-semibold text-base">Tên thành phần</div>,
        cell: ( info ) =>
        {
            const name = info.getValue() as string;
            return (
                <div className="max-w-[250px]">
                    <div className="font-medium text-foreground truncate cursor-pointer hover:text-primary transition-colors text-sm">
                        { name }
                    </div>
                </div>
            );
        },
    },
    {
        accessorKey: "sku",
        header: () => <div className="font-semibold text-base">Mã SKU</div>,
        cell: ( info ) =>
        {
            const sku = info.getValue() as string;
            return (
                <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-sm font-normal">
                        { sku }
                    </Badge>
                    <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0 hover:bg-muted"
                        onClick={ () => copyToClipboard( sku, "Mã SKU" ) }
                    >
                        <Copy className="h-3 w-3" />
                    </Button>
                </div>
            );
        },
    },
    {
        accessorKey: "measureUnit",
        header: () => <div className="font-semibold text-base">Đơn vị tính</div>,
        cell: ( info ) =>
        {
            const measureUnit = info.getValue() as string;
            return <div className="text-sm">{ measureUnit }</div>;
        },
    },
    {
        accessorKey: "isActive",
        header: () => (
            <div className="text-center font-semibold text-base">Trạng Thái</div>
        ),
        cell: ( info ) =>
        {
            const isActive = info.getValue() as boolean;

            return (
                <div className="flex justify-center">
                    <div
                        className={ `flex items-center gap-1.5 px-3 py-1 rounded text-sm font-normal ${ isActive
                            ? "bg-green-mint-10 text-green-mint-100"
                            : "bg-rambutan-10 text-rambutan-100"
                            }` }
                    >
                        { isActive ? <>Hoạt động</> : <>Không hoạt động</> }
                    </div>
                </div>
            );
        },
    },
    {
        id: "actions",
        header: () => (
            <div className="text-center font-semibold text-base">Thao Tác</div>
        ),
        cell: ( { row } ) =>
        {
            const ingredient = row.original;

            return (
                <div className="flex justify-center">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                {/* Ensure the path exists in your path object */ }
                                <Link
                                    to={ PATH_BRAND_DASHBOARD.ingredient.edit(
                                        ingredient.id
                                    ) }
                                >
                                    <Eye className="h-4 w-4 hover:cursor-pointer" />
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                <div className="text-sm">Xem chi tiết</div>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            );
        },
        size: 80, // Fixed width for consistent layout
    },
];