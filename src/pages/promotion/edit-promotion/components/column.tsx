import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { copyToClipboard, formatPrice } from "@/lib/utils";
import type { TProductVariantResponse } from "@/schema/product-variant.schema";
import type { ColumnDef } from "@tanstack/react-table";
import { Copy } from "lucide-react";
import type { TProductQuantity } from "./rule-condition-dialog";

declare module "@tanstack/react-table" {
  interface TableMeta<TData extends unknown> {
    quantityValues?: TProductQuantity[];
    onQuantityChange?: (productVariantId: string, quantity: number) => void;
    conditionType?: number;
  }
}

export const columns: ColumnDef<TProductVariantResponse>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        color=""
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
    accessorKey: "code",
    header: () => <div className="font-semibold text-base">Mã sản phẩm</div>,
    cell: (info) => {
      const code = info.getValue() as string;
      return (
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="font-normal text-sm">
            {code}
          </Badge>
          <Button
            variant="ghost"
            size="sm"
            className="h-6 w-6 p-0 hover:bg-muted"
            onClick={() => copyToClipboard(code, "Mã sản phẩm")}
          >
            <Copy className="h-3 w-3" />
          </Button>
        </div>
      );
    },
  },
  {
    accessorKey: "sku",
    header: () => <div className="font-semibold text-base">Mã SKU</div>,
    cell: (info) => {
      const sku = info.getValue() as string;
      return (
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="font-normal text-sm">
            {sku}
          </Badge>
          <Button
            variant="ghost"
            size="sm"
            className="h-6 w-6 p-0 hover:bg-muted"
            onClick={() => copyToClipboard(sku, "Mã SKU")}
          >
            <Copy className="h-3 w-3" />
          </Button>
        </div>
      );
    },
  },
  {
    accessorKey: "name",
    header: () => <div className="font-semibold text-base">Tên sản phẩm</div>,
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
    accessorKey: "price",
    header: () => (
      <div className="text-right font-semibold text-base">Giá bán</div>
    ),
    cell: (info) => {
      const price = info.getValue() as number;
      return (
        <div className="text-right font-normal text-sm">
          {formatPrice(price)}
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: () => (
      <div className="text-center font-semibold text-base">Trạng Thái</div>
    ),
    cell: (info) => {
      const status = info.getValue() as number;
      const isActive = status === 0;

      return (
        <div className="flex justify-center">
          <div
            className={`flex items-center gap-1.5 px-3 py-1 rounded text-sm ${
              isActive
                ? "bg-green-mint-10 text-green-mint-100"
                : "bg-neutral-10 text-neutral-100"
            }`}
          >
            {isActive ? <>Kích hoạt</> : <>Không kích hoạt</>}
          </div>
        </div>
      );
    },
  },
  {
    id: "quantity",
    header: ({ table }) => {
      if (table.options.meta?.conditionType !== 2) return null;
      return <div className="text-center font-semibold">Số lượng</div>;
    },
    cell: ({ row, table }) => {
      const isSelected = row.getIsSelected();
      const { onQuantityChange, quantityValues, conditionType } =
        table.options.meta || {};

      if (conditionType !== 2) {
        return null;
      }

      const product = row.original;

      const currentQuantity =
        quantityValues?.find((q) => q.productVariantId === product.id)
          ?.quantity || 1;

      return (
        <div className="flex justify-center">
          <Input
            type="number"
            // Prevent non-integer values and values less than 1
            min="1"
            step="1" // Only allow whole number increments
            className="w-20 text-center"
            value={currentQuantity}
            onChange={(e) => {
              // Parse the value as a float first to handle empty input
              const rawValue = e.target.valueAsNumber;
              // If the input is empty or NaN, don't trigger an update yet
              if (isNaN(rawValue)) return;

              // Ensure it's a positive integer
              const newQuantity = Math.max(1, Math.floor(rawValue));
              onQuantityChange?.(product.id, newQuantity);
            }}
            disabled={!isSelected}
            onKeyDown={(e) => {
              // Prevent typing decimals, 'e', '+', '-'
              if ([".", "e", "+", "-"].includes(e.key)) {
                e.preventDefault();
              }
              if (e.key === "Enter") {
                e.preventDefault();
              }
            }}
          />
        </div>
      );
    },
    size: 100,
  },
];
