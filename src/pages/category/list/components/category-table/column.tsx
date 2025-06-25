import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import
{
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { copyToClipboard } from "@/lib/utils";
import type { TCategoryResponse } from "@/schema/category.schema";
import type { ColumnDef } from "@tanstack/react-table";
import
{
    ArrowDown,
    ArrowUp,
    ArrowUpDown,
    Copy,
    Edit,
    Eye,
    EyeOff,
    Folder,
    FolderOpen,
    MoreHorizontal,
} from "lucide-react";

// Enhanced sortable header component that provides visual feedback for all sorting states
const SortableHeader = ( { column, children }: { column: any, children: React.ReactNode } ) =>
{
    const sorted = column.getIsSorted();

    return (
        <Button
            variant="ghost"
            onClick={ () => column.toggleSorting( sorted === "asc" ) }
            className="hover:bg-muted/50 -ml-3 h-8 data-[state=open]:bg-accent"
        >
            <span className="font-semibold">{ children }</span>
            {/* Visual indicator for sorting state - shows all three states clearly */ }
            { sorted === "asc" ? (
                <ArrowUp className="ml-2 h-4 w-4" />
            ) : sorted === "desc" ? (
                <ArrowDown className="ml-2 h-4 w-4" />
            ) : (
                <ArrowUpDown className="ml-2 h-4 w-4 opacity-50" />
            ) }
        </Button>
    );
};

export const columns: ColumnDef<TCategoryResponse>[] = [
    {
        accessorKey: "displayOrder",
        header: () => (
            <div className="text-center font-semibold text-muted-foreground">
                STT
            </div>
        ),
        cell: ( info ) => (
            <div className="text-center">
                <Badge variant="outline" className="font-mono text-xs">
                    { info.getValue() as number }
                </Badge>
            </div>
        ),
        size: 120, // Fixed width for consistent alignment
    },
    {
        accessorKey: "name",
        header: ( { column } ) => (
            <SortableHeader column={ column }>
                Tên Danh Mục
            </SortableHeader>
        ),
        cell: ( info ) =>
        {
            const name = info.getValue() as string;
            return (
                <div className="max-w-[250px]">
                    <div
                        className="font-medium text-foreground truncate cursor-pointer hover:text-primary transition-colors"
                        title={ name } // Tooltip for full name on hover
                    >
                        { name }
                    </div>
                </div>
            );
        },
    },
    {
        accessorKey: "code",
        header: ( { column } ) => (
            <SortableHeader column={ column }>
                Mã Danh Mục
            </SortableHeader>
        ),
        cell: ( info ) =>
        {
            const code = info.getValue() as string;
            return (
                <div className="flex items-center gap-2 max-w-[180px]">
                    <Badge variant="secondary" className="font-mono text-xs truncate">
                        { code }
                    </Badge>
                    <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0 hover:bg-muted flex-shrink-0"
                        onClick={ () => copyToClipboard( code, "Mã danh mục" ) }
                        title="Sao chép mã danh mục"
                    >
                        <Copy className="h-3 w-3" />
                    </Button>
                </div>
            );
        },
    },
    {
        accessorKey: "type",
        header: () => (
            <div className="font-semibold">
                Loại Danh Mục
            </div>
        ),
        cell: ( info ) =>
        {
            const type = info.getValue() as number;
            const isParentCategory = type === 1;

            return (
                <div className="flex justify-start">
                    <Badge
                        variant="secondary"
                        className={ `flex items-center gap-1.5 ${ isParentCategory
                            ? "bg-purple-100 text-purple-800 hover:bg-purple-200"
                            : "bg-blue-100 text-blue-800 hover:bg-blue-200"
                            }` }
                    >
                        {/* Visual icons help users quickly distinguish category types */ }
                        { isParentCategory ? (
                            <>
                                <FolderOpen className="h-3 w-3" />
                                Danh mục cha
                            </>
                        ) : (
                            <>
                                <Folder className="h-3 w-3" />
                                Danh mục con
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
            // Corrected logic: 0 typically means active/visible, 1 means inactive/hidden
            const isVisible = status === 0;

            return (
                <div className="flex justify-center">
                    <Badge
                        variant={ isVisible ? "default" : "secondary" }
                        className={ `flex items-center gap-1.5 ${ isVisible
                            ? "bg-green-100 text-green-800 hover:bg-green-200"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                            }` }
                    >
                        {/* Status indicator with both visual and text cues */ }
                        <div className={ `w-2 h-2 rounded-full ${ isVisible ? "bg-green-500" : "bg-gray-400"
                            }` } />
                        { isVisible ? (
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
        id: "actions",
        header: () => (
            <div className="text-center font-semibold">
                Thao Tác
            </div>
        ),
        cell: ( { row } ) =>
        {
            const category = row.original;

            return (
                <div className="flex justify-center">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                className="h-8 w-8 p-0 hover:bg-muted"
                                title="Xem thêm thao tác"
                            >
                                <span className="sr-only">Mở menu thao tác</span>
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-48">
                            <DropdownMenuLabel className="text-xs text-muted-foreground">
                                Thao tác cho "{ category.name }"
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />

                            {/* Edit action with visual hierarchy */ }
                            <DropdownMenuItem
                                className="cursor-pointer hover:bg-blue-50 focus:bg-blue-50"
                                onClick={ () =>
                                {
                                    // Handle edit action here
                                    console.log( 'Edit category:', category.id );
                                } }
                            >
                                <Edit className="mr-2 h-4 w-4 text-blue-600" />
                                <span className="text-blue-700">Chỉnh sửa</span>
                            </DropdownMenuItem>

                            {/* Copy code action for quick reference */ }
                            <DropdownMenuItem
                                className="cursor-pointer hover:bg-gray-50 focus:bg-gray-50"
                                onClick={ () => copyToClipboard( category.code, "Mã danh mục" ) }
                            >
                                <Copy className="mr-2 h-4 w-4 text-gray-600" />
                                <span className="text-gray-700">Sao chép mã</span>
                            </DropdownMenuItem>
                            <>
                                {/* <DropdownMenuSeparator />

                            <DropdownMenuItem
                                className="cursor-pointer hover:bg-red-50 focus:bg-red-50"
                                onClick={ () =>
                                {
                                    // Handle delete action here - should show confirmation dialog
                                    console.log( 'Delete category:', category.id );
                                } }
                            >
                                <Trash2 className="mr-2 h-4 w-4 text-red-600" />
                                <span className="text-red-700">Xóa danh mục</span>
                            </DropdownMenuItem> */ }
                            </>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            );
        },
        size: 80, // Fixed width for consistent layout
    },
];

// Enhanced table configuration with category-specific optimizations
export const categoryTableConfig = {
    // Enable sorting for columns that benefit from it
    enableSorting: true,
    sortableColumns: [ 'displayOrder', 'name', 'code' ],

    // Optimized column sizing for category data
    defaultColumnSizing: {
        displayOrder: 120,
        name: 250,
        code: 180,
        type: 160,
        status: 140,
        actions: 80,
    },

    // Pagination settings suitable for category management
    pagination: {
        pageSize: 15, // Slightly larger for category overview
        pageSizeOptions: [ 15, 30, 50, 100 ],
    },

    // Filter configuration for category-specific needs
    filtering: {
        enableGlobalFilter: true,
        searchPlaceholder: "Tìm kiếm danh mục...",
        enableColumnFilters: true,
        filterableColumns: [ 'type', 'status' ],
    }
};