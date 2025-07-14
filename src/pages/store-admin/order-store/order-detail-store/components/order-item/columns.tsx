import type { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import type { TStoreOrderItem } from "@/schema/order.schema";

export const columns: ColumnDef<TStoreOrderItem>[] = [
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
        <div className="flex justify-center max-w-[50px] text-sm">
          {row.index + currentPage * currentSize + 1}
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
      return (
        <div className="flex justify-center">
          {unitPriceSnapshot.toLocaleString("vi-VN", {
            style: "currency",
            currency: "VND",
          })}
        </div>
      );
    },
  },
  {
    accessorKey: "quantity",
    header: () => (
      <div className="text-center font-semibold text-base">Số lượng</div>
    ),
    cell: (info) => {
      const quantity = info.getValue() as number;
      return <div className="flex justify-center">{quantity}</div>;
    },
  },
  {
    accessorKey: "totalPriceBeforeItemDiscount",
    header: () => (
      <div className="text-center font-semibold text-base">Tổng</div>
    ),
    cell: (info) => {
      const total = info.getValue() as number;
      return (
        <div className="flex justify-center">
          {total.toLocaleString("vi-VN", {
            style: "currency",
            currency: "VND",
          })}
        </div>
      );
    },
  },
];
