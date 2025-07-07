import { Button } from "@/components/ui/button";
import {
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
import { useNavigate } from "react-router-dom";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpDown,
  Copy,
  Eye,
  Folder,
  FolderOpen,
  MoreHorizontal,
} from "lucide-react";
import { AppColors } from "@/themes/colors";
import { PATH_BRAND_DASHBOARD } from "@/routes/path";

// Enhanced sortable header component that provides visual feedback for all sorting states
const SortableHeader = ({
  column,
  children,
}: {
  column: any;
  children: React.ReactNode;
}) => {
  const sorted = column.getIsSorted();

  return (
    <Button
      variant="ghost"
      onClick={() => column.toggleSorting(sorted === "asc")}
      className="hover:bg-muted/50 -ml-3 h-8 data-[state=open]:bg-accent"
    >
      <span className="font-semibold text-base">{children}</span>
      {/* Visual indicator for sorting state - shows all three states clearly */}
      {sorted === "asc" ? (
        <ArrowUp className="ml-2 h-4 w-4" />
      ) : sorted === "desc" ? (
        <ArrowDown className="ml-2 h-4 w-4" />
      ) : (
        <ArrowUpDown className="ml-2 h-4 w-4 opacity-50" />
      )}
    </Button>
  );
};

export const columns: ColumnDef<TCategoryResponse>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <SortableHeader column={column}>Tên danh mục</SortableHeader>
    ),
    cell: (info) => {
      const name = info.getValue() as string;
      return (
        <div className="max-w-[250px]">
          <div
            className="font-medium text-foreground truncate cursor-pointer hover:text-primary transition-colors text-sm"
            title={name} // Tooltip for full name on hover
          >
            {name}
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "code",
    header: ({ column }) => (
      <SortableHeader column={column}>Mã danh mục</SortableHeader>
    ),
    cell: (info) => {
      const code = info.getValue() as string;
      return (
        <div className="flex items-center gap-2 max-w-[180px] text-sm">
          {code}
        </div>
      );
    },
  },
  {
    accessorKey: "type",
    header: () => <div className="font-semibold text-base">Loại danh mục</div>,
    cell: (info) => {
      const type = info.getValue() as number;
      const isParentCategory = type === 1;

      return (
        <div className="flex justify-center">
          <div
            className="flex items-center gap-1.5 px-3 py-1 rounded text-sm"
            style={{
              backgroundColor: isParentCategory
                ? AppColors.indigo[10]
                : AppColors.blueberry[10],
              color: isParentCategory
                ? AppColors.indigo[100]
                : AppColors.blueberry[90],
            }}
          >
            {isParentCategory ? (
              <>
                <FolderOpen className="h-3 w-3" />
                Danh mục cha
              </>
            ) : (
              <>
                <Folder className="h-3 w-3" />
                Danh mục con
              </>
            )}
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "displayOrder",
    header: () => (
      <div className="text-center font-semibold text-base">Sắp xếp</div>
    ),
    cell: (info) => (
      <div className="text-center text-sm">{info.getValue() as number}</div>
    ),
    size: 120, // Fixed width for consistent alignment
  },
  {
    accessorKey: "status",
    header: () => (
      <div className="text-center font-semibold text-base">Trạng Thái</div>
    ),
    cell: (info) => {
      const status = info.getValue() as number;
      // Corrected logic: 0 typically means active/visible, 1 means inactive/hidden
      const isVisible = status === 0;

      return (
        <div className="flex justify-center">
          <div
            // variant={ isVisible ? "default" : "secondary" }
            className={`flex items-center gap-1.5 px-3 py-1 rounded text-sm`}
            style={{
              backgroundColor: isVisible
                ? AppColors.greenMint[10]
                : AppColors.neutral[10],
              color: isVisible
                ? AppColors.greenMint[100]
                : AppColors.neutral[90],
            }}
          >
            {/* Status indicator with both visual and text cues */}
            {isVisible ? <>Hoạt động</> : <>Không hoạt động</>}
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
    cell: ({ row }) => {
      const category = row.original;
      const navigate = useNavigate();

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
                Thao tác cho "{category.name}"
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              {/* Xem chi tiết thay cho Chỉnh sửa */}
              <DropdownMenuItem
                className="cursor-pointer hover:bg-blue-50 focus:bg-blue-50"
                onClick={() =>
                  navigate(PATH_BRAND_DASHBOARD.category.edit(category.id))
                }
              >
                <Eye className="mr-2 h-4 w-4 text-blue-600" />
                <span className="text-blue-700">Xem chi tiết</span>
              </DropdownMenuItem>

              <DropdownMenuItem
                className="cursor-pointer hover:bg-gray-50 focus:bg-gray-50"
                onClick={() => copyToClipboard(category.code, "Mã danh mục")}
              >
                <Copy className="mr-2 h-4 w-4 text-gray-600" />
                <span className="text-gray-700">Sao chép mã</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
    size: 80,
  },
];

// Enhanced table configuration with category-specific optimizations
export const categoryTableConfig = {
  // Enable sorting for columns that benefit from it
  enableSorting: true,
  sortableColumns: ["displayOrder", "name", "code"],

  // Optimized column sizing for category data
  defaultColumnSizing: {
    // displayOrder: 120,
    // name: 250,
    // code: 180,
    // type: 160,
    // status: 140,
    // actions: 80,
  },

  // Pagination settings suitable for category management
  pagination: {
    pageSize: 15, // Slightly larger for category overview
    pageSizeOptions: [15, 30, 50, 100],
  },

  // Filter configuration for category-specific needs
  filtering: {
    enableGlobalFilter: true,
    searchPlaceholder: "Tìm kiếm danh mục...",
    enableColumnFilters: true,
    filterableColumns: ["type", "status"],
  },
};
