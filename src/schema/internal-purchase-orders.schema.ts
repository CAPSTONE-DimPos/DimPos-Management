import { StorePurchaseOrderStatusEnum } from "@/types/enums/store-purchase-order-status.enum";
import { z } from "zod";
import { StorePurchaseOrderItem, UpdateStorePurchaseOrderItem } from "./internal-purchase-order-items.schema";

export interface TGetPurchaseOrderQuery {
  page?: number;
  size?: number;
  sortBy?: string;
  isAsc?: boolean;
}
// MAIN ENTITY
export const StorePurchaseOrder = z.object({
  id: z.string().uuid({ message: "ID đơn hàng không hợp lệ" }),
  storeId: z.string().uuid({ message: "ID cửa hàng không hợp lệ" }),
  status: z.nativeEnum(StorePurchaseOrderStatusEnum),
  cancellationRequestReasonByStore: z.string().nullable().optional(),
  cancellationReasonByBrand: z.string().nullable().optional(),
  noteFromStore: z.string().nullable().optional(),
  noteFromBrand: z.string().nullable().optional(),
  estimatedTotalValue: z.number({ invalid_type_error: "Tổng giá trị phải là số" }).nullable().optional(),
  confirmedByBrandAt: z.date().nullable().optional(),
  cancelledAt: z.date().nullable().optional(),
  completedAt: z.date().nullable().optional(),
  createdByAccountId: z.string().uuid({ message: "ID tài khoản tạo đơn hàng không hợp lệ" }),
  createdDate: z.date(),
  lastModifiedDate: z.date().nullable().optional(),
  storePurchaseOrderItems: z.array(StorePurchaseOrderItem)
});

export const UpdateStorePurchaseOrder = z.object({
  cancellationRequestReasonByStore: z.string().nullable().optional(),
  cancellationReasonByBrand: z.string().nullable().optional(),
  status: z.nativeEnum(StorePurchaseOrderStatusEnum),
  storePurchaseOrderItemRequests: z.array(UpdateStorePurchaseOrderItem)
});

export type TStorePurchaseOrder = z.infer<typeof StorePurchaseOrder>;
export type TUpdateStorePurchaseOrder = z.infer<typeof UpdateStorePurchaseOrder>;

export function mapToUpdateStorePurchaseOrder(
  full: TStorePurchaseOrder
): TUpdateStorePurchaseOrder {
  return {
    cancellationRequestReasonByStore: full.cancellationRequestReasonByStore,
    cancellationReasonByBrand: full.cancellationReasonByBrand,
    status: full.status,
    storePurchaseOrderItemRequests: full.storePurchaseOrderItems.map((item) => ({
      id: item.id,
      approvedQuantityByBrand: item.approvedQuantityByBrand,
    })),
  };
}


