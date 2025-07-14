import type { ColumnDef } from "@tanstack/react-table";
import { Eye } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import type { TStoreOrderResponse } from "@/schema/order.schema";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import {
  getOrderTypeLabel,
  type TOrderTypeEnum,
} from "@/types/enums/order-type.enum";
import {
  getOrderStatusLabel,
  type TOrderStatusEnum,
} from "@/types/enums/order-status.enum";
import { PATH_STORE_DASHBOARD } from "@/routes/path";
import { Link } from "react-router-dom";
export const storeOrderColumns = (): ColumnDef<TStoreOrderResponse>[] => [
  {
    accessorKey: "index",
    header: () => (
      <div className="flex font-semibold text-base justify-center max-w-[50px]">STT</div>
    ),
    cell: ({ row, table }) => {
      const currentPage = table.getState().pagination.pageIndex;
      const currentSize = table.getState().pagination.pageSize;
      return (
        <div className="flex items-center justify-center text-base max-w-[50px]">
          {row.index + 1 + currentPage * currentSize}
        </div>
      );
    },
  },
  {
    accessorKey: "type",
    header: () => (
      <div className="text-center font-semibold text-base">Loại đơn hàng</div>
    ),
    cell: (info) => {
      const type = info.getValue() as TOrderTypeEnum;
      const label = getOrderTypeLabel(type);
      return (
        <div className="flex justify-center">
          <div className="px-3 py-1 rounded text-sm font-normal">{label}</div>
        </div>
      );
    },
  },
  {
    accessorKey: "createdDate",
    header: () => (
      <div className="text-center font-semibold text-base">Thời gian tạo</div>
    ),
    cell: (info) => {
      const date = new Date(info.getValue() as string);
      return (
        <div className="flex justify-center">
          <div className="px-3 py-1 rounded text-sm font-normal">
            {format(date, "dd/MM/yyyy hh:mm aa", { locale: vi })}
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "totalAmount",
    header: () => (
      <div className="max-w-[100px] flex font-semibold text-base justify-center">
        Tổng đơn hàng
      </div>
    ),
    cell: (info) => {
      const total = info.getValue() as number;
      return (
        <div className="max-w-[100px] font-medium text-center text-sm text-foreground">
          {total.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: () => (
      <div className="text-center font-semibold text-base">Trạng thái</div>
    ),
    cell: (info) => {
      const status = info.getValue() as TOrderStatusEnum;
      const { label, colorClassName, backgroundColorName } = getOrderStatusLabel(status);
      return (
        <div className="flex justify-center">
          <div className={`px-3 py-1 rounded text-sm font-medium ${colorClassName} ${backgroundColorName}`}>
            {label}
          </div>
        </div>
      );
    },
  },
  {
  id: "actions",
  header: () => (
    <div className="text-center font-semibold text-base">Thao tác</div>
  ),
  cell: ({ row }) => {
    const order = row.original;

    return (
      <div className="flex justify-center">
        <TooltipProvider>
          <Tooltip>
            <Link to={PATH_STORE_DASHBOARD.order.detail(order.id)}>
              <TooltipTrigger>
                <Eye className="h-4 w-4 hover:cursor-pointer" />
              </TooltipTrigger>
              <TooltipContent>
                <div className="text-sm">Xem chi tiết</div>
              </TooltipContent>
            </Link>
          </Tooltip>
        </TooltipProvider>
      </div>
    );
  },
  size: 80,
}
];
