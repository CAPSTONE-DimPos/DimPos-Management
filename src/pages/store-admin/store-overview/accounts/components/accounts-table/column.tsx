import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Eye } from "lucide-react";
import type { ColumnDef } from "@tanstack/react-table";
import type { TStaff } from "@/schema/staff.schema";

const STATUS_MAP: Record<number, { label: string; className: string }> = {
  0: { label: "Đang hoạt động", className: "text-green-600" },
  1: { label: "Ngừng hoạt động", className: "text-red-500" },
};

export const staffColumns: ColumnDef<TStaff>[] = [
  {
    accessorKey: "index",
    header: () => <div className="text-center font-semibold text-base">STT</div>,
    cell: ({ row }) => <div className="text-center font-medium">{row.index + 1}</div>,
    size: 50,
  },
  {
    accessorKey: "code",
    header: () => <div className="font-semibold text-base">Mã nhân viên</div>,
    cell: ({ row }) => <div className="font-medium text-blueberry-100">{row.getValue("code")}</div>,
    size: 200,
  },
  {
    accessorKey: "username",
    header: () => <div className="font-semibold text-base">Tên đăng nhập</div>,
    cell: ({ row }) => <div className="font-normal text-gray-900">{row.getValue("username")}</div>,
    size: 200,
  },
  {
    accessorKey: "email",
    header: () => <div className="font-semibold text-base">Email</div>,
    cell: ({ row }) => <div className="font-normal text-gray-700">{row.getValue("email")}</div>,
    size: 200,
  },
  {
    accessorKey: "status",
    header: () => <div className="font-semibold text-base">Trạng thái</div>,
    cell: ({ row }) => {
      const status = row.getValue("status") as number;
      const { label, className } = STATUS_MAP[status] || { label: "Không xác định", className: "text-gray-400" };
      return <div className={`font-medium ${className}`}>{label}</div>;
    },
    size: 150,
  },
  {
    id: "actions",
    header: () => <div className="text-center font-semibold text-base">Thao tác</div>,
    cell: ({ row }) => {
      const staff = row.original;
      return (
        <div className="flex justify-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button onClick={() => alert(`Xem chi tiết: ${staff.username}`)}>
                  <Eye className="h-4 w-4 hover:cursor-pointer" />
                </button>
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
