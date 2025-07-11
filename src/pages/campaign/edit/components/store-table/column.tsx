import { Button } from "@/components/ui/button";
import type { ColumnDef } from "@tanstack/react-table";
import { useNavigate } from "react-router-dom";
import { ArrowDown, ArrowUp, ArrowUpDown, Copy, Eye, MapPin, Phone } from "lucide-react";
import { PATH_BRAND_DASHBOARD } from "@/routes/path";
import type { TStore } from "@/schema/store.schema";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { copyToClipboard } from "@/lib/utils";

// Enhanced sortable header component that provides visual feedback for all sorting states
const SortableHeader = ({
  column,
  children,
}: {
  column: any;
  children: React.ReactNode;
}) => {
  const sorted = column.getIsSorted();

  return (
    <Button
      variant="ghost"
      onClick={() => column.toggleSorting(sorted === "asc")}
      className="hover:bg-muted/50 -ml-3 h-8 data-[state=open]:bg-accent"
    >
      <span className="font-semibold text-base">{children}</span>
      {/* Visual indicator for sorting state - shows all three states clearly */}
      {sorted === "asc" ? (
        <ArrowUp className="ml-2 h-4 w-4" />
      ) : sorted === "desc" ? (
        <ArrowDown className="ml-2 h-4 w-4" />
      ) : (
        <ArrowUpDown className="ml-2 h-4 w-4 opacity-50" />
      )}
    </Button>
  );
};

export const columns: ColumnDef<TStore>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <SortableHeader column={column}>Tên cửa hàng</SortableHeader>
    ),
    cell: (info) => {
      const name = info.getValue() as string;
      return (
        <div className="max-w-[250px]">
          <div
            className="font-medium text-foreground truncate cursor-pointer hover:text-primary transition-colors text-sm font-normal"
            title={name} // Tooltip for full name on hover
          >
            {name}
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "address",
    header: () => <div className="font-semibold">Địa Chỉ</div>,
    cell: (info) => {
      const address = info.getValue() as string;
      const row = info.row.original;
      const hasCoordinates = row.latitude && row.longitude;

      return (
        <div className="max-w-[250px]">
          <div className="flex items-start gap-2">
            <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="text-sm text-foreground truncate" title={address}>
                {address}
              </div>
              {hasCoordinates && (
                <Badge variant="outline" className="mt-1 text-xs">
                  Có tọa độ
                </Badge>
              )}
            </div>
          </div>
        </div>
      );
    },
  },
  {
        accessorKey: "phone",
        header: () => (
            <div className="font-semibold">
                Số Điện Thoại
            </div>
        ),
        cell: ( info ) =>
        {
            const phone = info.getValue() as string;

            if ( !phone )
            {
                return (
                    <Badge variant="outline" className="text-muted-foreground">
                        Chưa có
                    </Badge>
                );
            }

            return (
                <div className="flex items-center gap-2 max-w-[140px]">
                    <div className="flex items-center gap-1 flex-1 min-w-0">
                        <Phone className="h-3 w-3 text-muted-foreground flex-shrink-0" />
                        <span className="font-mono text-sm truncate" title={ phone }>{ phone }</span>
                    </div>
                    <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0 hover:bg-muted flex-shrink-0"
                        onClick={ () => copyToClipboard( phone, "Số điện thoại" ) }
                    >
                        <Copy className="h-3 w-3" />
                    </Button>
                </div>
            );
        },
    },
  {
    accessorKey: "isActive",
    header: () => (
      <div className="text-center font-semibold text-base">Trạng thái</div>
    ),
    cell: (info) => {
      const status = info.getValue() as number;
      // Corrected logic: 0 typically means active/visible, 1 means inactive/hidden
      const isVisible = status === 1;

      return (
        <div className="flex justify-center">
          <div
            className={`flex items-center gap-1.5 px-3 py-1 rounded text-sm ${
              isVisible
                ? "bg-green-mint-10 text-green-mint-100"
                : "bg-neutral-10 text-neutral-100"
            }`}
          >
            {/* Status indicator with both visual and text cues */}
            {isVisible ? <>Hoạt động</> : <>Không hoạt động</>}
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
      const campaign = row.original;
      const navigate = useNavigate();

      return (
        <div className="flex justify-center">
          <div
            className="group relative flex items-center cursor-pointer"
            onClick={() =>
              navigate(PATH_BRAND_DASHBOARD.campaign.editCampaign(campaign.id))
            }
          >
            <Eye className="h-4 w-4 text-blue-600" />

            <span
              className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-gray-800 text-white text-xs
                          whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 z-10"
            >
              Xem chi tiết
            </span>
          </div>
        </div>
      );
    },
    size: 80,
  },
];

// Enhanced table configuration with campaign-specific optimizations
export const campaignStoreTableConfig = {
  // Enable sorting for columns that benefit from it
  enableSorting: true,
  sortableColumns: ["description", "name", "priority"],

  // Optimized column sizing for campaign data
  defaultColumnSizing: {
    // displayOrder: 120,
    // name: 250,
    // code: 180,
    // type: 160,
    // status: 140,
    // actions: 80,
  },

  // Pagination settings suitable for campaign management
  pagination: {
    pageSize: 15, // Slightly larger for campaign overview
    pageSizeOptions: [15, 30, 50, 100],
  },
};
