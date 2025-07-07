import type { TModifierGroupResponse} from "@/schema/product.schema";
import type { ColumnDef } from "@tanstack/react-table";
import { Eye } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { AppColors } from "@/themes/colors";

export const columns = (
  onViewOption: (data: TModifierGroupResponse) => void
): ColumnDef<TModifierGroupResponse>[] => [
  {
    accessorKey: "name",
    header: () => <div className="font-semibold text-base">Tên tùy chọn</div>,
    cell: (info) => {
      const name = info.getValue() as string;
      return (
        <div className="max-w-[200px]">
          <div className="font-normal text-sm text-foreground truncate cursor-pointer hover:text-primary transition-colors">
            {name}
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "description",
    header: () => <div className="font-semibold text-base">Mô Tả</div>,
    cell: (info) => {
      const description = info.getValue() as string;
      return (
        <div className="max-w-[200px]">
          <div className="font-normal text-sm text-foreground truncate cursor-pointer hover:text-primary transition-colors">
            {description || "Không có mô tả"}
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "selectedType",
    header: () => <div className="font-semibold text-base">Hình thức chọn</div>,
    cell: (info) => {
      const selectedType = info.getValue() as number;
      const label =
        selectedType === 1
          ? "Một"
          : selectedType === 2
          ? "Nhiều"
          : "Không xác định";

      return (
        <div className="font-normal text-sm text-foreground truncate cursor-pointer hover:text-primary transition-colors">
          {label}
        </div>
      );
    },
  },
  {
    accessorKey: "isActive",
    header: () => <div className="text-center font-semibold text-base ">Trạng Thái</div>,
    cell: (info) => {
      const status = info.getValue() as boolean;

      return (
        <div className="flex justify-center">
          <div
            className="flex items-center gap-1.5 px-3 py-1 rounded text-sm"
            style={{
              backgroundColor: status
                ? AppColors.greenMint[10]
                : AppColors.neutral[10],
              color: status
                ? AppColors.greenMint[100]
                : AppColors.neutral[90],
            }}
          >
            {status ? <>Hiển thị</> : <>Ẩn</>}
          </div>
          {/* <Badge
            variant={status ? "default" : "destructive"}
            className={`${
              status
                ? "bg-green-100 text-green-800 hover:bg-green-200"
                : "bg-red-100 text-red-800 hover:bg-red-200"
            }`}
          >
            <div
              className={`w-2 h-2 rounded-full mr-2 ${
                status ? "bg-green-500" : "bg-red-500"
              }`}
            />
            {status ? "Hiển Thị" : "Ẩn"}
          </Badge> */}
        </div>
      );
    },
  },
  {
    id: "actions",
    header: () => <div className="text-center font-semibold text-base">Thao Tác</div>,
    cell: ({ row }) => {
      const option = row.original;

      return (
        <div className="flex justify-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Eye
                  className="h-4 w-4 hover:cursor-pointer"
                  onClick={() => onViewOption(option)}
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
