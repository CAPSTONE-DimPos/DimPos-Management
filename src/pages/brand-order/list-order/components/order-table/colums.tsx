import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { PATH_BRAND_DASHBOARD } from "@/routes/path";
import type { TBrandOrder } from "@/schema/order.schema";
import {
  getOrderStatusLabel,
  type TOrderStatusEnum,
} from "@/types/enums/order-status.enum";
import {
  getOrderTypeLabel,
  type TOrderTypeEnum,
} from "@/types/enums/order-type.enum";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import type { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import { Eye } from "lucide-react";
import { Link } from "react-router-dom";

export const columns: ColumnDef<TBrandOrder>[] = [
  {
    accessorKey: "index",
    header: () => (
      <div className="flex font-semibold text-base justify-center max-w-[50px]">
        STT
      </div>
    ),
    cell: ({ row, table }) => {
      const currentPage = table.getState().pagination.pageIndex;
      const currentSize = table.getState().pagination.pageSize;
      return (
        <div className="flex items-center gap-2 text-base justify-center  max-w-[50px]">
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
      const orderType = info.getValue() as TOrderTypeEnum;
      const label = getOrderTypeLabel(orderType);
      return (
        <div className="flex justify-center">
          <div
            className={`flex items-center gap-1.5 px-3 py-1 rounded text-sm font-normal`}
          >
            {label}
          </div>
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
      const orderType = info.getValue() as Date;
      // const label = getOrderTypeLabel(orderType);
      return (
        <div className="flex justify-center">
          <div
            className={`flex items-center gap-1.5 px-3 py-1 rounded text-sm font-normal`}
          >
            {format(orderType, "dd/MM/yyyy hh:mm aa", { locale: vi })}
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
      const totalAmount = info.getValue() as number;
      return (
        <div
          className="max-w-[100px] font-medium text-foreground truncate
                        cursor-pointer hover:text-primary transition-colors
                        text-sm flex justify-center"
        >
          {totalAmount}
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
      const orderStatus = info.getValue() as TOrderStatusEnum;
      const orderAttribute = getOrderStatusLabel(orderStatus);
      const label = orderAttribute.label;
      const color = orderAttribute.colorClassName;
      const background = orderAttribute.backgroundColorName;

      return (
        <div className="flex justify-center">
          <div
            className={`flex items-center gap-1.5 px-3 py-1 rounded text-sm font-normal ${color} ${background}`}
          >
            {label}
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
      const order = row.original;

      return (
        <div className="flex justify-center">
          <TooltipProvider>
            <Tooltip>
              <Link to={PATH_BRAND_DASHBOARD.order.edit(order.id)}>
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
