import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { copyToClipboard, formatPrice } from "@/lib/utils";
import { PATH_BRAND_DASHBOARD } from "@/routes/path";
import type { TProductVariantResponse } from "@/schema/product-variant.schema";
import type { ColumnDef } from "@tanstack/react-table";
import { Copy, Eye } from "lucide-react";
import { Link } from "react-router-dom";

export const columns: ColumnDef<TProductVariantResponse>[] = [
  {
    accessorKey: "code",
    header: () => <div className="font-semibold text-base">Mã sản phẩm</div>,
    cell: (info) => {
      const code = info.getValue() as string;
      return (
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="font-normal text-sm">
            {code}
          </Badge>
          <Button
            variant="ghost"
            size="sm"
            className="h-6 w-6 p-0 hover:bg-muted"
            onClick={() => copyToClipboard(code, "Mã sản phẩm")}
          >
            <Copy className="h-3 w-3" />
          </Button>
        </div>
      );
    },
  },
  {
    accessorKey: "name",
    header: () => <div className="font-semibold text-base">Tên sản phẩm</div>,
    cell: (info) => {
      const name = info.getValue() as string;
      return (
        <div className="max-w-[200px]">
          <div className="font-normal text-sm text-foreground truncate cursor-pointer hover:text-primary transition-colors">
            {name}
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "price",
    header: () => (
      <div className="text-right font-semibold text-base">Giá bán</div>
    ),
    cell: (info) => {
      const price = info.getValue() as number;
      return (
        <div className="text-right font-normal text-sm">
          {formatPrice(price)}
          {/* <Badge
                        variant="default"
                        className="bg-green-100 text-green-800 hover:bg-green-200 font-mono"
                    >
                        { formatPrice( price ) }
                    </Badge> */}
        </div>
      );
    },
  },
  {
    accessorKey: "isActive",
    header: () => (
      <div className="text-center font-semibold text-base">Trạng Thái</div>
    ),
    cell: (info) => {
      const status = info.getValue() as boolean;
      return (
        <div className="flex justify-center">
          <div
            className={`flex items-center gap-1.5 px-3 py-1 rounded text-sm ${
              status
                ? "bg-green-mint-10 text-green-mint-100"
                : "bg-neutral-10 text-neutral-100"
            }`}
          >
            {status ? <>Kích hoạt</> : <>Không kích hoạt</>}
          </div>
          {/* <Badge
            variant={isActive ? "default" : "destructive"}
            className={`${
              isActive
                ? "bg-green-100 text-green-800 hover:bg-green-200"
                : "bg-red-100 text-red-800 hover:bg-red-200"
            }`}
          >
            <div
              className={`w-2 h-2 rounded-full mr-2 ${
                isActive ? "bg-green-500" : "bg-red-500"
              }`}
            />
            {isActive ? "Kích Hoạt" : "Không Kích Hoạt"}
          </Badge> */}
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
      const variant = row.original;
      return (
        <div className="flex justify-center">
          <TooltipProvider>
            <Tooltip>
              <Link to={PATH_BRAND_DASHBOARD.product.editVariant(variant.id)}>
                <TooltipTrigger>
                  <Eye className="h-4 w-4 hover:cursor-pointer" />
                  <TooltipContent>
                    <div className="text-sm">Xem chi tiết</div>
                  </TooltipContent>
                </TooltipTrigger>
              </Link>
            </Tooltip>
          </TooltipProvider>
          {/* <DropdownMenu>
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
                  <TooltipContent>Thêm thao tác</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuLabel className="text-xs text-muted-foreground">
                Thao tác cho "{product.name}"
              </DropdownMenuLabel>
              <DropdownMenuSeparator />

              <DropdownMenuItem
                className="cursor-pointer hover:bg-blue-50 focus:bg-blue-50"
                onClick={() => {
                  // Handle edit action here
                  //console.log("Edit product:", product.id);
                }}
              >
                <Edit className="mr-2 h-4 w-4 text-blue-600" />
                <span className="text-blue-700">Chỉnh sửa</span>
              </DropdownMenuItem>

              <DropdownMenuItem
                className="cursor-pointer hover:bg-gray-50 focus:bg-gray-50"
                onClick={() => copyToClipboard(product.code, "Mã danh mục")}
              >
                <Copy className="mr-2 h-4 w-4 text-gray-600" />
                <span className="text-gray-700">Sao chép mã</span>
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuItem
                className="cursor-pointer hover:bg-red-50 focus:bg-red-50"
                onClick={() => {
                  // Handle delete action here - should show confirmation dialog
                  //console.log("Delete product:", product.id);
                }}
              >
                <Trash2 className="mr-2 h-4 w-4 text-red-600" />
                <span className="text-red-700">Xóa sản phẩm</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
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
  sortableColumns: ["name", "code", "price"],

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
    pageSizeOptions: [10, 20, 50, 100],
  },
};
