import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { copyToClipboard } from "@/lib/utils";
import type { TProductResponse } from "@/schema/product.schema";
import type { ColumnDef } from "@tanstack/react-table";
import { Copy, Edit, Eye, EyeOff, MoreHorizontal, Trash2 } from "lucide-react";


export const columns: ColumnDef<TProductResponse>[] = [
    {
        accessorKey: "id",
        header: () => (
            <div className="text-center font-semibold text-muted-foreground">
                STT
            </div>
        ),
        cell: ( info ) => (
            <div className="text-center">
                <Badge variant="outline" className="font-mono text-xs">
                    { Number( info.row.id ) + 1 }
                </Badge>
            </div>
        ),
        size: 80,
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
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="h-8 w-8 p-0 hover:bg-muted"
                                        >
                                            <span className="sr-only">Thao tác</span>
                                            <MoreHorizontal className="h-4 w-4" />
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        Thêm thao tác
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-48">
                            <DropdownMenuLabel className="text-xs text-muted-foreground">
                                Thao tác cho "{ product.name }"
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />

                            {/* Edit action with visual hierarchy */ }
                            <DropdownMenuItem
                                className="cursor-pointer hover:bg-blue-50 focus:bg-blue-50"
                                onClick={ () =>
                                {
                                    // Handle edit action here
                                    console.log( 'Edit product:', product.id );
                                } }
                            >
                                <Edit className="mr-2 h-4 w-4 text-blue-600" />
                                <span className="text-blue-700">Chỉnh sửa</span>
                            </DropdownMenuItem>

                            {/* Copy code action for quick reference */ }
                            <DropdownMenuItem
                                className="cursor-pointer hover:bg-gray-50 focus:bg-gray-50"
                                onClick={ () => copyToClipboard( product.code, "Mã danh mục" ) }
                            >
                                <Copy className="mr-2 h-4 w-4 text-gray-600" />
                                <span className="text-gray-700">Sao chép mã</span>
                            </DropdownMenuItem>

                            <DropdownMenuSeparator />

                            {/* Delete action with warning colors */ }
                            <DropdownMenuItem
                                className="cursor-pointer hover:bg-red-50 focus:bg-red-50"
                                onClick={ () =>
                                {
                                    // Handle delete action here - should show confirmation dialog
                                    console.log( 'Delete product:', product.id );
                                } }
                            >
                                <Trash2 className="mr-2 h-4 w-4 text-red-600" />
                                <span className="text-red-700">Xóa sản phẩm</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            );
        },
        size: 80, // Fixed width for consistent layout
    },

];

// Optional: Export additional configuration for the table
export const tableConfig = {
    // Enable sorting for specific columns
    enableSorting: true,
    sortableColumns: [ 'name', 'code', 'price' ],

    // Default column sizing
    defaultColumnSizing: {
        id: 80,
        name: 200,
        code: 150,
        alternativeCode: 150,
        price: 120,
        isMenuDisplay: 140,
        status: 140,
    },

    // Pagination settings
    pagination: {
        pageSize: 10,
        pageSizeOptions: [ 10, 20, 50, 100 ],
    }
};