import { RowSelectCell, RowSelectHeader } from "@/components/table/row-select";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { copyToClipboard, formatPrice } from "@/lib/utils";
import type { TProductVariantResponse } from "@/schema/product-variant.schema";
import type { ColumnDef } from "@tanstack/react-table";
import { Copy, Eye, EyeOff } from "lucide-react";


export const columns: ColumnDef<TProductVariantResponse>[] = [
    {
        id: "select",
        header: ( { table } ) => (
            <RowSelectHeader table={ table } />
        ),
        cell: ( { row } ) => (
            <RowSelectCell row={ row } />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "code",
        header: () => (
            <div className="font-semibold">
                Mã Sản Phẩm
            </div>
        ),
        cell: ( info ) =>
        {
            const code = info.getValue() as string;
            return (
                <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="font-mono text-xs">
                        { code }
                    </Badge>
                    <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0 hover:bg-muted"
                        onClick={ () => copyToClipboard( code, "Mã sản phẩm" ) }
                    >
                        <Copy className="h-3 w-3" />
                    </Button>
                </div>
            );
        },
    },
    {
        accessorKey: "name",
        header: () => (
            <div className="font-semibold">
                Tên Sản Phẩm
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
        accessorKey: "alternativeCode",
        header: () => (
            <div className="font-semibold">
                Mã Thay Thế
            </div>
        ),
        cell: ( info ) =>
        {
            const altCode = info.getValue() as string;

            // Handle case where alternative code might be empty or null
            if ( !altCode )
            {
                return (
                    <Badge variant="outline" className="text-muted-foreground">
                        Không có
                    </Badge>
                );
            }

            return (
                <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="font-mono text-xs">
                        { altCode }
                    </Badge>
                    <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0 hover:bg-muted"
                        onClick={ () => copyToClipboard( altCode, "Mã thay thế" ) }
                    >
                        <Copy className="h-3 w-3" />
                    </Button>
                </div>
            );
        },
    },
    {
        accessorKey: "price",
        header: () => (
            <div className="text-right font-semibold">
                Giá Bán
            </div>
        ),
        cell: ( info ) =>
        {
            const price = info.getValue() as number;
            return (
                <div className="text-right">
                    <Badge
                        variant="default"
                        className="bg-green-100 text-green-800 hover:bg-green-200 font-mono"
                    >
                        { formatPrice( price ) }
                    </Badge>
                </div>
            );
        },
    },
    {
        accessorKey: "isMenuDisplay",
        header: () => (
            <div className="text-center font-semibold">
                Hiển Thị Menu
            </div>
        ),
        cell: ( info ) =>
        {
            const isDisplayed = info.getValue() as boolean;
            return (
                <div className="flex justify-center">
                    <Badge
                        variant={ isDisplayed ? "default" : "secondary" }
                        className={ `flex items-center gap-1 ${ isDisplayed
                            ? "bg-blue-100 text-blue-800 hover:bg-blue-200"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                            }` }
                    >
                        { isDisplayed ? (
                            <>
                                <Eye className="h-3 w-3" />
                                Hiển thị
                            </>
                        ) : (
                            <>
                                <EyeOff className="h-3 w-3" />
                                Ẩn
                            </>
                        ) }
                    </Badge>
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
];