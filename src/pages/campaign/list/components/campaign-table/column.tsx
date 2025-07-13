import { SortableHeader } from "@/components/table/sortable-header";
import { PATH_BRAND_DASHBOARD } from "@/routes/path";
import type { TCampaignResponse } from "@/schema/campaign.schema";
import type { ColumnDef } from "@tanstack/react-table";
import { Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const columns: ColumnDef<TCampaignResponse>[] = [
  {
    accessorKey: "name",
    header: ( { column } ) => (
      <SortableHeader column={ column }>Tên chiến dịch</SortableHeader>
    ),
    cell: ( info ) =>
    {
      const name = info.getValue() as string;
      return (
        <div className="max-w-[250px]">
          <div
            className="font-medium text-foreground truncate cursor-pointer hover:text-primary transition-colors text-sm"
            title={ name } // Tooltip for full name on hover
          >
            { name }
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "description",
    header: () => <div className="font-semibold text-base">Mô tả</div>,
    cell: ( info ) =>
    {
      const description = info.getValue() as string;
      return (
        <div className="flex justify-start">
          <div
            // variant="secondary"
            className={ `flex items-center gap-1.5 max-w-[400px] truncate text-sm font-normal` }
            title={ description }
          >
            { description }
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "priority",
    // header: () => <div className="font-semibold text-base">Độ ưu tiên</div>,
    header: ( { column } ) => (
      <SortableHeader column={ column }>Độ ưu tiên</SortableHeader>
    ),
    cell: ( info ) =>
    {
      const priority = info.getValue() as string;
      return (
        <div className="flex justify-center">
          <div
            // variant="secondary"
            className={ `flex items-center gap-1.5 max-w-[400px] truncate text-sm font-normal` }
            title={ priority }
          >
            { priority }
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: () => (
      <div className="text-center font-semibold text-base">Trạng Thái</div>
    ),
    cell: ( info ) =>
    {
      const status = info.getValue() as number;
      // Corrected logic: 0 typically means active/visible, 1 means inactive/hidden
      const isVisible = status === 1;

      return (
        <div className="flex justify-center">
          <div
            // variant={ isVisible ? "default" : "secondary" }
            className={ `flex items-center gap-1.5 px-3 py-1 rounded text-sm ${
              isVisible
                ? "bg-green-mint-10 text-green-mint-100"
                : "bg-neutral-10 text-neutral-100"
            }` }
          >
            {/* Status indicator with both visual and text cues */ }
            { isVisible ? <>Hoạt động</> : <>Không hoạt động</> }
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
    cell: ( { row } ) =>
    {
      const campaign = row.original;
      const navigate = useNavigate();

      return (
        <div className="flex justify-center">
          <div
            className="group relative flex items-center cursor-pointer"
            onClick={ () =>
              navigate( PATH_BRAND_DASHBOARD.campaign.editCampaign( campaign.id ) )
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
export const campaignTableConfig = {
  // Enable sorting for columns that benefit from it
  enableSorting: true,
  sortableColumns: [ "description", "name", "priority" ],

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
    pageSizeOptions: [ 15, 30, 50, 100 ],
  },
};
