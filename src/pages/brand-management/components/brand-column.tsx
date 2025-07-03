import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { copyToClipboard } from "@/lib/utils";
import { PATH_ADMIN_DASHBOARD } from "@/routes/path";
import type { ColumnDef } from "@tanstack/react-table";
import { Eye, Copy, MoreHorizontal } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { TBrandResponse } from "@/schema/brand-management.schema";

export const columns: ColumnDef<TBrandResponse>[] = [
  {
    accessorKey: "name",
    header: "Tên thương hiệu",
    cell: (info) => {
      const name = info.getValue() as string;
      return <div className="font-medium truncate">{name}</div>;
    },
  },
  {
    accessorKey: "code",
    header: "Mã thương hiệu",
    cell: (info) => {
      const code = info.getValue() as string;
      return (
        <div className="flex items-center gap-2 max-w-[180px]">
          <Badge variant="secondary" className="font-mono text-xs truncate">
            {code}
          </Badge>
          <Button
            variant="ghost"
            size="sm"
            className="h-6 w-6 p-0"
            onClick={() => copyToClipboard(code, "Mã thương hiệu")}
          >
            <Copy className="h-3 w-3" />
          </Button>
        </div>
      );
    },
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone",
    header: "SĐT",
  },
  {
    accessorKey: "status",
    header: "Trạng thái",
    cell: (info) => {
      const status = info.getValue() as number;
      return (
        <Badge
          className={
            status === 0
              ? "bg-green-100 text-green-800"
              : "bg-gray-100 text-gray-600"
          }
        >
          {status === 0 ? "Hoạt động" : "Ngừng hoạt động"}
        </Badge>
      );
    },
  },
  {
    id: "actions",
    header: "Thao tác",
    cell: ({ row }) => {
      const brand = row.original;
      const navigate = useNavigate();

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuLabel>Thao tác</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() =>
                navigate(PATH_ADMIN_DASHBOARD.brand.edit(brand.id))
              }
            >
              <Eye className="h-4 w-4 mr-2 text-blue-600" />
              Xem chi tiết
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => copyToClipboard(brand.code, "Mã thương hiệu")}
            >
              <Copy className="h-4 w-4 mr-2" />
              Sao chép mã
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];