import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { copyToClipboard } from "@/lib/utils";
import { PATH_DASHBOARD } from "@/routes/path";
import type { TProductResponse } from "@/schema/product.schema";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import type { ColumnDef } from "@tanstack/react-table";
import { Copy, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";


export const columns: ColumnDef<TProductResponse>[] = [
    {
        accessorKey: "code",
        header: () => (
            <div className="font-semibold">
                Mã SKU
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
        accessorKey: "isHasVariants",
        header: () => (
            <div className="text-center font-semibold">
                Biến Thể
            </div>
        ),
        cell: ( info ) =>
        {
            const hasVariants = info.getValue() as boolean;
            return (
                <div className="flex justify-center">
                    <Badge
                        variant={ hasVariants ? "default" : "secondary" }
                        className={ `${ hasVariants
                            ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                            }` }
                    >
                        { hasVariants ? "Có Biến Thể" : "Không Biến Thể" }
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
    {
        id: "actions",
        header: () => (
            <div className="text-center font-semibold">
                Thao Tác
            </div>
        ),
        cell: ( { row } ) =>
        {
            const product = row.original;

            return (
                <div className="flex justify-center">
                    <TooltipProvider>
                        <Tooltip>
                            <Link to={ PATH_DASHBOARD.product.editProduct( product.id ) }>
                                <TooltipTrigger >
                                    <Eye className="h-4 w-4 hover:cursor-pointer" />
                                    <TooltipContent>
                                        <div className="text-sm">
                                            Xem chi tiết
                                        </div>
                                    </TooltipContent>
                                </TooltipTrigger>
                            </Link>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            );
        },
        size: 80, // Fixed width for consistent layout
    },

];