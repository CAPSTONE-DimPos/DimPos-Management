import { SortableHeader } from "@/components/table/sortable-header";
import { Badge } from "@/components/ui/badge";
import { PATH_BRAND_DASHBOARD } from "@/routes/path";
import type { TPromotionRuleResponse } from "@/schema/promotion-rule.schema";
import type { ColumnDef } from "@tanstack/react-table";
import { Eye } from "lucide-react";
import { Link } from "react-router-dom";

export const columns: ColumnDef<TPromotionRuleResponse>[] = [
    {
        accessorKey: "name",
        header: () => <div className="font-semibold text-base ">Tên khuyến mãi</div>,
        cell: ( { row } ) =>
        {
            const name = row.original.name;
            const shortDescription = row.original.shortDescription;
            return (
                <div className="flex flex-col">
                    <span className="font-medium">{ name }</span>
                    <span className="text-sm text-muted-foreground">{ shortDescription }</span>
                </div>
            )
        }
    },
    {
        accessorKey: "description",
        header: () => <div className="font-semibold text-base">Mô tả</div>,
        cell: ( info ) =>
        {
            const description = info.getValue() as string;
            return (
                <div className="flex justify-start">
                    <div
                        className={ `flex items-center gap-1.5 max-w-[400px] truncate text-sm font-normal` }
                        title={ description }
                    >
                        { description }
                    </div>
                </div>
            );
        },
    },
    {
        accessorKey: "priority",
        header: ( { column } ) =>
        (
            <SortableHeader column={ column }>Độ ưu tiên</SortableHeader>
        ),
        cell: ( { row } ) =>
        {
            const priority = row.original.priority;
            const variant = priority > 5 ? "destructive" : priority > 2 ? "default" : "secondary";

            return <Badge variant={ variant } className="w-16 justify-center">{ priority }</Badge>
        }
    },
    {
        id: "actions",
        header: () => (
            <div className="text-center font-semibold text-base">Thao Tác</div>
        ),
        cell: ( { row } ) =>
        {
            const promotion = row.original;
            return (
                <div className="flex justify-center">
                    <Link to={ PATH_BRAND_DASHBOARD.promotion.editPromotion( promotion.id ) }>
                        <div
                            className="group relative flex items-center cursor-pointer"
                        >
                            <Eye className="h-4 w-4 text-blue-600" />

                            <span
                                className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-gray-800 text-white text-xs
                          whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 z-10"
                            >
                                Xem chi tiết
                            </span>
                        </div>
                    </Link>
                </div>
            )
        },
    },
]