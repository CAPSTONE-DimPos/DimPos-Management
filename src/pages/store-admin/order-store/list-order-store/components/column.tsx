import type { ColumnDef } from "@tanstack/react-table";
import { Eye } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import type { TOrderResponse } from "@/schema/order.schema";

// Hàm ánh xạ trạng thái đơn hàng sang nhãn và class tương ứng
const mapStatusToClass = (status: number) => {
  switch (status) {
    case 0:
      return {
        label: "Chờ xử lý",
        className: "bg-yellow-100 text-yellow-800",
      };
    case 1:
      return {
        label: "Đang xử lý",
        className: "bg-blue-100 text-blue-800",
      };
    case 2:
      return {
        label: "Hoàn tất",
        className: "bg-green-100 text-green-800",
      };
    case 3:
      return {
        label: "Đã huỷ",
        className: "bg-red-100 text-red-800",
      };
    default:
      return {
        label: "Không xác định",
        className: "bg-gray-200 text-gray-700",
      };
  }
};

export const columns = (
  onViewOrder: (data: TOrderResponse) => void
): ColumnDef<TOrderResponse>[] => [
  {
    accessorKey: "id",
    header: () => (
      <div className="font-semibold text-base text-left">Mã đơn hàng</div>
    ),
    cell: (info) => {
      const id = info.getValue() as string;
      return (
        <div className="text-sm font-medium text-left text-foreground truncate max-w-[160px]">
          {id}
        </div>
      );
    },
  },
  {
    accessorKey: "totalAmount",
    header: () => (
      <div className="font-semibold text-base text-right">Tổng tiền</div>
    ),
    cell: (info) => {
      const amount = info.getValue() as number;
      return (
        <div className="text-sm text-right text-foreground">
          {amount.toLocaleString("vi-VN")} ₫
        </div>
      );
    },
  },
  {
    accessorKey: "createdDate",
    header: () => (
      <div className="font-semibold text-base text-left">Ngày tạo</div>
    ),
    cell: (info) => {
      const raw = info.getValue() as string;
      const date = new Date(raw).toLocaleString("vi-VN");
      return <div className="text-sm text-left text-foreground">{date}</div>;
    },
  },
  {
    accessorKey: "status",
    header: () => (
      <div className="text-center font-semibold text-base">Trạng thái</div>
    ),
    cell: (info) => {
      const status = info.getValue() as number;
      const { label, className } = mapStatusToClass(status);

      return (
        <div className="flex justify-center">
          <div className={`px-3 py-1 rounded text-sm font-medium ${className}`}>
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
              <TooltipTrigger asChild>
                <Eye
                  className="h-4 w-4 hover:cursor-pointer"
                  onClick={() => onViewOrder(order)}
                />
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
