// src/pages/internal-purchase-orders/list/components/column.tsx

import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import { Eye } from "lucide-react";
import { Link } from "react-router-dom";
import type { ColumnDef } from "@tanstack/react-table";
import type { TStorePurchaseOrderListItem } from "@/schema/internal-purchase-orders.schema";
import { formatCurrency, formatDate } from "@/lib/utils";

export const columns: ColumnDef<TStorePurchaseOrderListItem>[] = [
  {
    accessorKey: "purchaseOrderNumber",
    header: () => <div className="font-semibold">Mã đơn hàng</div>,
    cell: (info) => {
      const value = info.getValue() as string;
      return (
        <Badge variant="secondary" className="font-mono text-xs">
          {value}
        </Badge>
      );
    },
  },
  {
    accessorKey: "status",
    header: () => <div className="text-center font-semibold">Trạng thái</div>,
    cell: (info) => {
      const status = info.getValue() as string;

      const getStatusBadge = () => {
        switch (status) {
          case "DRAFT":
            return <Badge variant="outline">Nháp</Badge>;
          case "PENDING_BRAND_CONFIRMATION":
            return <Badge className="bg-yellow-100 text-yellow-800">Chờ xác nhận</Badge>;
          case "BRAND_CONFIRMED_PROCESSING":
            return <Badge className="bg-blue-100 text-blue-800">Đang xử lý</Badge>;
          case "REJECTED_BY_BRAND":
            return <Badge variant="destructive">Bị từ chối</Badge>;
          case "AWAITING_CANCELLATION_APPROVAL_BY_BRAND":
            return <Badge className="bg-orange-100 text-orange-800">Chờ hủy</Badge>;
          case "SHIPPED_BY_BRAND":
            return <Badge className="bg-green-100 text-green-800">Đã giao</Badge>;
          case "PARTIALLY_RECEIVED_BY_STORE":
            return <Badge variant="secondary">Nhận một phần</Badge>;
          case "FULLY_RECEIVED_BY_STORE":
            return <Badge variant="default">Đã nhận</Badge>;
          case "CANCELLED_BY_STORE":
            return <Badge variant="outline">Đã hủy (store)</Badge>;
          case "CANCELLED_BY_BRAND":
            return <Badge variant="outline">Đã hủy (brand)</Badge>;
          default:
            return <Badge variant="secondary">Không xác định</Badge>;
        }
      };

      return <div className="text-center">{getStatusBadge()}</div>;
    },
  },
  {
    accessorKey: "requestedDeliveryDate",
    header: () => <div className="text-center font-semibold">Ngày giao yêu cầu</div>,
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
        <div className="text-right font-medium">
          {value ? formatCurrency(value) : "0 đ"}
        </div>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: () => <div className="text-center font-semibold">Ngày tạo</div>,
    cell: (info) => {
      const date = info.getValue() as string;
      return <div className="text-center">{formatDate(date)}</div>;
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
                <Link to={`/dashboard/internal-purchase-orders/${po.id}`}>
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
