// import { Button } from "@/components/ui/button";
import type { ColumnDef } from "@tanstack/react-table";
// import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";
// import { Checkbox } from "@/components/ui/checkbox";
import type { TOrderItem } from "@/schema/order-item.schema";

// Enhanced sortable header component that provides visual feedback for all sorting states
// const SortableHeader = ({
//   column,
//   children,
// }: {
//   column: any;
//   children: React.ReactNode;
// }) => {
//   const sorted = column.getIsSorted();

//   return (
//     <Button
//       variant="ghost"
//       onClick={() => column.toggleSorting(sorted === "asc")}
//       className="hover:bg-muted/50 -ml-3 h-8 data-[state=open]:bg-accent"
//     >
//       <span className="font-semibold text-base">{children}</span>
//       {/* Visual indicator for sorting state - shows all three states clearly */}
//       {sorted === "asc" ? (
//         <ArrowUp className="ml-2 h-4 w-4" />
//       ) : sorted === "desc" ? (
//         <ArrowDown className="ml-2 h-4 w-4" />
//       ) : (
//         <ArrowUpDown className="ml-2 h-4 w-4 opacity-50" />
//       )}
//     </Button>
//   );
// };

export const columns: ColumnDef<TOrderItem>[] = [
  // {
  //   id: "select",
  //   header: ({ table }) => (
  //     <Checkbox
  //       checked={
  //         table.getIsAllPageRowsSelected() ||
  //         (table.getIsSomePageRowsSelected() && "indeterminate")
  //       }
  //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //       aria-label="Select all"
  //     />
  //   ),
  //   cell: ({ row }) => (
  //     <Checkbox
  //       checked={row.getIsSelected()}
  //       onCheckedChange={(value) => row.toggleSelected(!!value)}
  //       aria-label="Select row"
  //     />
  //   ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  {
    accessorKey: "index",
    header: () => (
      <div className="flex items-center justify-center max-w-[50px]">STT</div>
    ),
    cell: (info) => {
      const table = info.table;
      const row = info.row;
      const currentPage = table.getState().pagination.pageIndex;
      const currentSize = table.getState().pagination.pageSize;
      return (
        <div className="">
          <div
            className="font-medium text-foreground truncate cursor-pointer hover:text-primary transition-colors text-sm font-normal flex justify-center max-w-[50px]"
          >
            {row.index + currentPage * currentSize + 1}
          </div>
        </div>
      );
    },
  },

  {
    accessorKey: "productVariantNameSnapshot",
    header: () => (
      <div className="text-center font-semibold text-base">Sản phẩm</div>
    ),
    cell: (info) => {
      const productVariantName = info.getValue() as string;
      // Corrected logic: 0 typically means active/visible, 1 means inactive/hidden

      return <div className="flex justify-start">{productVariantName}</div>;
    },
  },
  {
    accessorKey: "unitPriceSnapshot",
    header: () => (
      <div className="text-center font-semibold text-base">Giá sản phẩm</div>
    ),
    cell: (info) => {
      const unitPriceSnapshot = info.getValue() as number;
      // Corrected logic: 0 typically means active/visible, 1 means inactive/hidden

      return <div className="flex justify-center">{unitPriceSnapshot}</div>;
    },
  },
  {
    accessorKey: "quantity",
    header: () => (
      <div className="text-center font-semibold text-base">Số lượng</div>
    ),
    cell: (info) => {
      const quantity = info.getValue() as number;
      // Corrected logic: 0 typically means active/visible, 1 means inactive/hidden

      return <div className="flex justify-center">{quantity}</div>;
    },
  },
  {
    accessorKey: "totalPriceBeforeItemDiscount",
    header: () => (
      <div className="text-center font-semibold text-base">Tổng</div>
    ),
    cell: (info) => {
      const totalPriceBeforeItemDiscount = info.getValue() as number;
      // Corrected logic: 0 typically means active/visible, 1 means inactive/hidden

      return (
        <div className="flex justify-center">
          {totalPriceBeforeItemDiscount}
        </div>
      );
    },
  },
  //   {
  //     id: "actions",
  //     header: () => (
  //       <div className="text-center font-semibold text-base">Thao Tác</div>
  //     ),
  //     cell: ({ row }) => {
  //       const campaign = row.original;
  //       const navigate = useNavigate();

  //       return (
  //         <div className="flex justify-center">
  //           <div
  //             className="group relative flex items-center cursor-pointer"
  //             onClick={() =>
  //               navigate(PATH_BRAND_DASHBOARD.campaign.editCampaign(campaign.id))
  //             }
  //           >
  //             <Eye className="h-4 w-4 text-blue-600" />

  //             <span
  //               className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-gray-800 text-white text-xs
  //                           whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 z-10"
  //             >
  //               Xem chi tiết
  //             </span>
  //           </div>
  //         </div>
  //       );
  //     },
  //     size: 80,
  //   },
];

// Enhanced table configuration with campaign-specific optimizations
export const brandOrderTableConfig = {
  // Enable sorting for columns that benefit from it
  enableSorting: true,
  //   sortableColumns: ["description", "name", "priority"],

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
