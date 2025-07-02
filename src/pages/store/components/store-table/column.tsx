import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { TStore } from "@/schema/store.schema";
import { AppColors } from "@/themes/colors";
import type { ColumnDef } from "@tanstack/react-table";
import { Eye } from "lucide-react";

export const columns: ColumnDef<TStore>[] = [
  {
    accessorKey: "index",
    header: () => (<div className="text-center font-semibold text-base">STT</div>),
    cell: ({ row }) => {
      return (
        <div className="text-center font-medium">{row.getValue("index")}</div>
      );
    },
    size: 60,
  },
  {
    accessorKey: "code",
    header: () => (<div className="font-semibold text-base">Mã cửa hàng</div>),
    cell: ({ row }) => {
      const code = row.getValue("code") as string;
      return (
        <div
          className="font-normal font-medium"
          style={{ color: AppColors.blueberry[100] }}
        >
          {code}
        </div>
      );
    },
    size: 120,
  },
  {
    accessorKey: "name",
    header: () => (<div className="font-semibold text-base">Tên cửa hàng</div>),
    cell: ({ row }) => {
      const name = row.getValue("name") as string;
      const shortName = row.original.shortName;
      return (
        <div className="space-y-1">
          <div className="font-medium text-gray-900">{name}</div>
          <div className="text-sm text-gray-500">({shortName})</div>
        </div>
      );
    },
    size: 100,
  },
  {
    accessorKey: "phone",
    header: () => (<div className="font-semibold text-base">Số điện thoại</div>),
    cell: ({ row }) => {
      const phone = row.getValue("phone") as string;
      return <div className="font-normal text-gray-700">{phone}</div>;
    },
    size: 130,
  },
  {
    accessorKey: "email",
    header: () =>  (<div className="font-semibold text-base">Email</div>),
    cell: ({ row }) => {
      const email = row.getValue("email") as string;
      return <div className="font-normal text-gray-700">{email}</div>;
    },
    size: 130,
  },
  {
    accessorKey: "managerName",
    header: () => (<div className="font-semibold text-base">Quản lý</div>),
    cell: ({ row }) => {
      const managerName = row.getValue("managerName") as string;
      return (
        <div className="text-gray-900">
          {managerName || (
            <span className="text-gray-400 italic">Chưa phân công</span>
          )}
        </div>
      );
    },
    size: 150,
  },
  {
    id: "actions",
    header: () => (<div className="text-center font-semibold text-base">Thao tác</div>),
    cell: ({}) => {
      // const store = row.original;

      return (
        <div className="flex justify-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Eye className="h-4 w-4 hover:cursor-pointer" />
                <TooltipContent>
                  <div className="text-sm">Xem chi tiết</div>
                </TooltipContent>
              </TooltipTrigger>
            </Tooltip>
          </TooltipProvider>
        </div>
      );
    },
    size: 80,
  },
];
