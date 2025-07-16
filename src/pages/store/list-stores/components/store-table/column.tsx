import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { PATH_BRAND_DASHBOARD } from "@/routes/path";
import type { TStore } from "@/schema/store.schema";
import type { ColumnDef } from "@tanstack/react-table";
import { Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const columns: ColumnDef<TStore>[] = [
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
    accessorKey: "code",
    header: () => <div className="font-semibold text-base">Mã cửa hàng</div>,
    cell: ({ row }) => {
      const code = row.getValue("code") as string;
      return (
        <div className={`font-normal font-medium text-blueberry-100`}>
          {code}
        </div>
      );
    },
    size: 120,
  },
  {
    accessorKey: "name",
    header: () => <div className="font-semibold text-base">Tên cửa hàng</div>,
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
    accessorKey: "phone",
    header: () => <div className="font-semibold text-base">Số điện thoại</div>,
    cell: ({ row }) => {
      const phone = row.getValue("phone") as string;
      return <div className="font-normal text-gray-700">{phone}</div>;
    },
    size: 130,
  },
  {
    accessorKey: "email",
    header: () => <div className="font-semibold text-base">Email</div>,
    cell: ({ row }) => {
      const email = row.getValue("email") as string;
      return <div className="font-normal text-gray-700">{email}</div>;
    },
    size: 130,
  },
  {
    accessorKey: "managerName",
    header: () => <div className="font-semibold text-base">Quản lý</div>,
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
    header: () => (
      <div className="text-center font-semibold text-base">Thao tác</div>
    ),
    cell: ({ row }) => {
      const store = row.original;
      const navigate = useNavigate();

      return (
        <div className="flex justify-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div
                  className="group relative flex items-center cursor-pointer"
                  onClick={() =>
                    navigate(PATH_BRAND_DASHBOARD.store.edit(store.id))
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
