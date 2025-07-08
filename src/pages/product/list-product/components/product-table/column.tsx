import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { copyToClipboard } from "@/lib/utils";
import { PATH_BRAND_DASHBOARD } from "@/routes/path";
import type { TProductResponse } from "@/schema/product.schema";
import { AppColors } from "@/themes/colors";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import type { ColumnDef } from "@tanstack/react-table";
import { Copy, Eye } from "lucide-react";
import { Link } from "react-router-dom";

export const columns: ColumnDef<TProductResponse>[] = [
  {
    accessorKey: "code",
    header: () => <div className="font-semibold text-base">SKU</div>,
    cell: (info) => {
      const code = info.getValue() as string;
      return (
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-sm font-normal">
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
    header: () => <div className="font-semibold text-base ">Tên sản phẩm</div>,
    cell: (info) => {
      const name = info.getValue() as string;
      return (
        <div className="max-w-[200px]">
          <div className="font-medium text-foreground truncate cursor-pointer hover:text-primary transition-colors font-normal text-sm">
            {name}
          </div>
        </div>
      );
    },
  },
  // {
  //     accessorKey: "alternativeCode",
  //     header: () => (
  //         <div className="font-semibold">
  //             Mã Thay Thế
  //         </div>
  //     ),
  //     cell: ( info ) =>
  //     {
  //         const altCode = info.getValue() as string;

  //         // Handle case where alternative code might be empty or null
  //         if ( !altCode )
  //         {
  //             return (
  //                 <Badge variant="outline" className="text-muted-foreground">
  //                     Không có
  //                 </Badge>
  //             );
  //         }

  //         return (
  //             <div className="flex items-center gap-2">
  //                 <Badge variant="secondary" className="font-mono text-xs">
  //                     { altCode }
  //                 </Badge>
  //                 <Button
  //                     variant="ghost"
  //                     size="sm"
  //                     className="h-6 w-6 p-0 hover:bg-muted"
  //                     onClick={ () => copyToClipboard( altCode, "Mã thay thế" ) }
  //                 >
  //                     <Copy className="h-3 w-3" />
  //                 </Button>
  //             </div>
  //         );
  //     },
  // },
  {
    accessorKey: "isMenuDisplay",
    header: () => (
      <div className="text-center font-semibold text-base">Hiển thị menu</div>
    ),
    cell: (info) => {
      const isDisplayed = info.getValue() as boolean;
      return (
        <div className="flex justify-center">
          <div
            className="flex items-center gap-1.5 px-3 py-1 rounded text-sm font-normal"
            style={{
              backgroundColor: isDisplayed
                ? AppColors.greenMint[10]
                : AppColors.neutral[10],
              color: isDisplayed
                ? AppColors.greenMint[100]
                : AppColors.neutral[90],
            }}
          >
            {isDisplayed ? <>Hiển thị</> : <>Ẩn</>}
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "isHasVariants",
    header: () => (
      <div className="text-center font-semibold text-base">Biến Thể</div>
    ),
    cell: (info) => {
      const hasVariants = info.getValue() as boolean;
      return (
        <div className="flex justify-center">
          <div
            className="flex items-center gap-1.5 px-3 py-1 rounded text-sm font-normal"
            style={{
              backgroundColor: hasVariants
                ? AppColors.cempedak[10]
                : AppColors.neutral[10],
              color: hasVariants
                ? AppColors.cempedak[100]
                : AppColors.neutral[90],
            }}
          >
            {hasVariants ? <>Có biến thể</> : <>Không biến thể</>}
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: () => (
      <div className="text-center font-semibold text-base">Trạng Thái</div>
    ),
    cell: (info) => {
      const status = info.getValue() as number;
      const isActive = status === 0;

      return (
        <div className="flex justify-center">
          <div
            className="flex items-center gap-1.5 px-3 py-1 rounded text-sm font-normal"
            style={{
              backgroundColor: isActive
                ? AppColors.greenMint[10]
                : AppColors.rambutan[10],
              color: isActive
                ? AppColors.greenMint[100]
                : AppColors.rambutan[90],
            }}
          >
            {isActive ? <>Hoạt động</> : <>Không hoạt động</>}
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
      const product = row.original;

      return (
        <div className="flex justify-center">
          <TooltipProvider>
            <Tooltip>
              <Link to={PATH_BRAND_DASHBOARD.product.editProduct(product.id)}>
                <TooltipTrigger>
                  <Eye className="h-4 w-4 hover:cursor-pointer" />
                  <TooltipContent>
                    <div className="text-sm">Xem chi tiết</div>
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
