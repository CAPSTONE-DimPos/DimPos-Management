import { OrderTypeEnum } from '@/types/enums/order-type.enum';
import { OrderItemSchema } from './order-item.schema';
import { z } from "zod";
import { OrderStatusEnum } from '@/types/enums/order-status.enum';

export interface TGetStoreOrdersQuery {
  page?: number;
  pageSize?: number;
  status?: number;
  type?: number;
  sortBy?: string;
  isAsc?: boolean;
}
// ===== ENUM =====
export const StoreOrderTypeEnum = z.union([
  z.literal(0, { message: "Loại đơn hàng không hợp lệ" }),
  z.literal(1, { message: "Loại đơn hàng không hợp lệ" }),
  z.literal(2, { message: "Loại đơn hàng không hợp lệ" }),
]);

export const StoreOrderStatusEnum = z.union([
  z.literal(0, { message: "Trạng thái đơn hàng không hợp lệ" }),
  z.literal(1, { message: "Trạng thái đơn hàng không hợp lệ" }),
  z.literal(2, { message: "Trạng thái đơn hàng không hợp lệ" }),
  z.literal(3, { message: "Trạng thái đơn hàng không hợp lệ" }),
]);

// ===== ORDER ITEM =====
export const StoreOrderItemSchema = z.object({
  id: z.string().uuid({ message: "ID sản phẩm không hợp lệ" }),
  productNameSnapshot: z.string({ message: "Tên sản phẩm không hợp lệ" }),
  productVariantNameSnapshot: z.string({ message: "Tên biến thể không hợp lệ" }),
  quantity: z.number({ message: "Số lượng không hợp lệ" }).int(),
  unitPriceSnapshot: z.number({ message: "Đơn giá không hợp lệ" }),
  totalPriceBeforeItemDiscount: z.number({ message: "Tổng tiền trước chiết khấu không hợp lệ" }),
  note: z.string({ message: "Ghi chú không hợp lệ" }),
});

// ===== PROMOTION =====
export const StoreOrderPromotionSchema = z.object({
  id: z.string().uuid({ message: "ID khuyến mãi không hợp lệ" }),
  promotionNameSnapshot: z.string({ message: "Tên khuyến mãi không hợp lệ" }),
  promotionTypeSnapshot: z.string({ message: "Loại khuyến mãi không hợp lệ" }),
  promotionDescriptionSnapshot: z.string({ message: "Mô tả khuyến mãi không hợp lệ" }).nullable().optional(),
  discountAmountApplied: z.number({ message: "Số tiền giảm không hợp lệ" }),
});

// ===== ORDER DETAIL =====
export const StoreOrderResponseSchema = z.object({
  id: z.string().uuid({ message: "ID đơn hàng không hợp lệ" }),
  type: StoreOrderTypeEnum,
  status: StoreOrderStatusEnum,
  customerNameSnapshot: z.string({ message: "Tên khách hàng không hợp lệ" }).nullable(),
  subTotalAmount: z.number({ message: "Tổng phụ không hợp lệ" }),
  discountAmount: z.number({ message: "Chiết khấu không hợp lệ" }),
  taxAmount: z.number({ message: "Thuế không hợp lệ" }),
  totalAmount: z.number({ message: "Tổng tiền không hợp lệ" }),
  amountPaid: z.number({ message: "Tiền đã trả không hợp lệ" }),
  cashRoundingAmount: z.number({ message: "Làm tròn tiền không hợp lệ" }),
  pickupTime: z.string({ message: "Thời gian nhận không hợp lệ" }).nullable(),
  note: z.string({ message: "Ghi chú không hợp lệ" }).nullable(),
  systemPaymentMethodNameSnapshot: z.string({ message: "Phương thức thanh toán không hợp lệ" }),
  createdDate: z.string({ message: "Ngày tạo không hợp lệ" }),
  orderItems: z.array(StoreOrderItemSchema, { message: "Danh sách sản phẩm không hợp lệ" }),
  appliedOrderPromotions: z.array(StoreOrderPromotionSchema, { message: "Danh sách khuyến mãi không hợp lệ" }),
});

export const BrandOrderSchema = z.object({
    id: z.string().uuid(),
    type: z.nativeEnum(OrderTypeEnum),
    status: z.nativeEnum(OrderStatusEnum),
    customerNameSnapshot: z.string().nullable(),
    totalAmount: z.number().min(1, { message: "Tổng được bỏ trống" }),
    note: z.string().nullable(),
    createdDate: z.date(),
    completedAt: z.date().nullable().optional(),
    tableNumberDineIn: z.number().int().optional().nullable(),
    pickupTime: z.date().nullable().optional(),
    orderItems: z.array(OrderItemSchema),
});

// ===== RESPONSE TYPE =====
export type TStoreOrderItem = z.infer<typeof StoreOrderItemSchema>;
export type TStoreOrderPromotion = z.infer<typeof StoreOrderPromotionSchema>;
export type TStoreOrderResponse = z.infer<typeof StoreOrderResponseSchema>;
export type TBrandOrder= z.infer<typeof BrandOrderSchema>;
