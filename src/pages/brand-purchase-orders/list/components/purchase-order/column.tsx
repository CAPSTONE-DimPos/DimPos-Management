// src/pages/internal-purchase-orders/list/components/column.tsx

import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { Eye } from "lucide-react";
import { Link } from "react-router-dom";
import type { ColumnDef } from "@tanstack/react-table";
import { formatCurrency, formatDate } from "@/lib/utils";
import type { TStorePurchaseOrder } from "@/schema/internal-purchase-orders.schema";
import {
  getStorePurchaseOrderStatusLabel,
  type TStorePurchaseOrderStatusEnum,
} from "@/types/enums/store-purchase-order-status.enum";
import { PATH_BRAND_DASHBOARD } from "@/routes/path";

export const columns: ColumnDef<TStorePurchaseOrder>[] = [
  {
    accessorKey: "index",
    header: () => (
      <div className="flex font-semibold text-base justify-center max-w-[50px]">
        STT
      </div>
    ),
    cell: (info) => {
      const table = info.table;
      const row = info.row;
      const currentPage = table.getState().pagination.pageIndex;
      const currentSize = table.getState().pagination.pageSize;
      return (
        <div className="">
          <div className="flex items-center gap-2 text-base justify-center  max-w-[50px]">
            {row.index + currentPage * currentSize + 1}
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "createdDate",
    header: () => <div className="text-center font-semibold">Ngày tạo</div>,
    cell: (info) => {
      const date = info.getValue() as string;
      return <div className="text-center">{date ? formatDate(date) : "-"}</div>;
    },
  },
  {
    accessorKey: "estimatedTotalValue",
    header: () => <div className="text-center font-semibold">Tạm tính</div>,
    cell: (info) => {
      const value = info.getValue() as number;
      return (
        <div className="text-center font-medium">
          {value ? formatCurrency(value) : "0 đ"}
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: () => <div className="text-center font-semibold">Trạng thái</div>,
    cell: (info) => {
      const status = info.getValue() as TStorePurchaseOrderStatusEnum;
      const statusAttribute = getStorePurchaseOrderStatusLabel(status);
      const label = statusAttribute.label;
      const color = statusAttribute.colorClassName;
      const backgroundColor = statusAttribute.backgroundColorName;
      return (
        <div className="flex justify-center">
          <div
            className={`flex items-center gap-1.5 px-3 py-1 rounded text-sm font-normal ${color} ${backgroundColor}`}
          >
            {label}
          </div>
        </div>
      );
    },
  },
  {
    id: "actions",
    header: () => <div className="text-center font-semibold">Thao tác</div>,
    cell: ({ row }) => {
      const po = row.original;
      return (
        <div className="flex justify-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  to={PATH_BRAND_DASHBOARD.internalPurchaseOrders.detail(po.id)}
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
    size: 80,
  },
];
