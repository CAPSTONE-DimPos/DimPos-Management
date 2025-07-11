import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { PATH_BRAND_DASHBOARD } from "@/routes/path";
import type { TBrandMenu } from "@/schema/menu.schema";
import type { ColumnDef } from "@tanstack/react-table";
import { Eye } from "lucide-react";
import { Link } from "react-router-dom";

export const columns: ColumnDef<TBrandMenu>[] = [
  {
    accessorKey: "id",
    header: () => <div className="font-semibold text-base">STT</div>,
    cell: (info) => {
      return (
        <div className="flex items-center gap-2 ">
          {/* <Badge variant="secondary" className="font-mono text-xs">
                        { info.row.index + 1 }
                    </Badge> */}
          {info.row.index + 1}
        </div>
      );
    },
  },
  {
    accessorKey: "name",
    header: () => <div className="font-semibold text-base">Tên thực đơn</div>,
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
    header: () => <div className="font-semibold text-base">Mô tả</div>,
    cell: (info) => {
      const description = info.getValue() as string;
      return (
        <div className="max-w-[200px]">
          <div className="font-normal text-sm text-foreground truncate cursor-pointer hover:text-primary transition-colors">
            {description}
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "isActiveByBrand",
    header: () => (
      <div className="text-center font-semibold text-base">Trạng thái</div>
    ),
    cell: (info) => {
      const isActiveByBrand = info.getValue() as boolean;
      return (
        <div className="flex justify-center">
          <div
            className={`flex items-center gap-1.5 px-3 py-1 rounded text-sm ${
              isActiveByBrand ? "bg-green-mint-10 text-green-mint-100" : "bg-rambutan-10 text-rambutan-100"
            }`}
          >
            {isActiveByBrand ? <>Hiển thị</> : <>Ẩn</>}
          </div>
          {/* <Badge
                        variant={ isActiveByBrand ? "default" : "destructive" }
                        className={ `${ isActiveByBrand
                            ? "bg-green-100 text-green-800 hover:bg-green-200"
                            : "bg-red-100 text-red-800 hover:bg-red-200"
                            }` }
                    >
                        <div className={ `w-2 h-2 rounded-full mr-2 ${ isActiveByBrand ? "bg-green-500" : "bg-red-500"
                            }` } />
                        { isActiveByBrand ? "Kích Hoạt" : "Không Kích Hoạt" }
                    </Badge> */}
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
      const menu = row.original;

      return (
        <div className="flex justify-center">
          <TooltipProvider>
            <Tooltip>
              <Link to={PATH_BRAND_DASHBOARD.product.editMenu(menu.id)}>
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
