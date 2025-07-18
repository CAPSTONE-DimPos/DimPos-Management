import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { PATH_BRAND_DASHBOARD } from "@/routes/path";
import type { TPurchasableProduct } from "@/schema/purchasable-product.schema";
import type { ColumnDef } from "@tanstack/react-table";
import { Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const columns: ColumnDef<TPurchasableProduct>[] = [
  {
    accessorKey: "index",
    header: () => (
      <div className="text-center font-semibold text-base">STT</div>
    ),
    cell: (info) => {
      const table = info.table;
      const row = info.row;
      const currentPage = table.getState().pagination.pageIndex;
      const currentSize = table.getState().pagination.pageSize;
      return (
        <div className="">
          <div className="font-medium text-foreground truncate cursor-pointer hover:text-primary transition-colors text-sm font-normal flex justify-center max-w-[50px]">
            {row.index + currentPage * currentSize + 1}
          </div>
        </div>
      );
    },
    size: 60,
  },
  {
    accessorKey: "sku",
    header: () => (
      <div className="font-semibold text-base text-center">SKU</div>
    ),
    cell: ({ row }) => {
      const code = row.getValue("code") as string;
      return (
        <div className={`font-normal font-medium text-center`}>{code}</div>
      );
    },
    size: 120,
  },
  {
    accessorKey: "name",
    header: () => <div className="font-semibold text-base">Tên sản phẩm</div>,
    cell: ({ row }) => {
      const name = row.getValue("name") as string;
      // const shortName = row.original.shortName;
      return (
        <div className="space-y-1">
          <div className="font-medium text-gray-900">{name}</div>
          {/* <div className="text-sm text-gray-500">({shortName})</div> */}
        </div>
      );
    },
    size: 100,
  },
  {
    accessorKey: "price",
    header: () => (
      <div className="font-semibold text-base text-center">Giá nhập</div>
    ),
    cell: ({ row }) => {
      const price = row.getValue("price") as number;
      return (
        <div className="font-normal text-gray-700 text-center">{price}</div>
      );
    },
    size: 130,
  },
  {
    accessorKey: "displayOrder",
    header: () => (
      <div className="font-semibold text-base text-center">Độ ưu tiên</div>
    ),
    cell: ({ row }) => {
      const displayOrder = row.getValue("displayOrder") as number;
      return (
        <div className="font-normal text-gray-700 text-center">
          {displayOrder}
        </div>
      );
    },
    size: 130,
  },
  {
    accessorKey: "isActive",
    header: () => <div className="font-semibold text-base text-center">Trạng thái</div>,
    cell: ({ row }) => {
      const isActive = row.getValue("isActive") as boolean;
      return (
        <div className="flex justify-center">
          <div
            className={`flex items-center gap-1.5 px-3 py-1 rounded text-sm ${
              isActive
                ? "bg-green-mint-10 text-green-mint-100"
                : "bg-neutral-10 text-neutral-100"
            }`}
          >
            {isActive ? <>Kích hoạt</> : <>Không kích hoạt</>}
          </div>
        </div>
      );
    },
    size: 150,
  },
  {
    id: "actions",
    header: () => (
      <div className="text-center font-semibold text-base">Thao tác</div>
    ),
    cell: ({ row }) => {
      const purchasableProduct = row.original;
      const navigate = useNavigate();

      return (
        <div className="flex justify-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div
                  className="group relative flex items-center cursor-pointer"
                  onClick={() =>
                    navigate(PATH_BRAND_DASHBOARD.purchasableProduct.edit(purchasableProduct.id))
                  }
                >
                  <Eye className="h-4 w-4 hover:cursor-pointer" />
                  <TooltipContent>
                    <div className="text-sm">Xem chi tiết</div>
                  </TooltipContent>
                </div>
              </TooltipTrigger>
            </Tooltip>
          </TooltipProvider>
        </div>
      );
    },
    size: 80,
  },
];
