import { z } from "zod";
export interface TGetOrdersQuery {
  page?: number;
  size?: number;
  status?: number;
  type?: number;
  sortBy?: string;
  isAsc?: boolean;
}

// ===== ENUM =====
export const OrderTypeEnum = z.union([z.literal(0), z.literal(1), z.literal(2)]);
export const OrderStatusEnum = z.union([
  z.literal(0),
  z.literal(1),
  z.literal(2),
  z.literal(3),
]);

// ===== ORDER ITEM =====
export const OrderItemSchema = z.object({
  id: z.string().uuid({ message: "ID sản phẩm không hợp lệ" }),
  productNameSnapshot: z.string({ message: "Tên sản phẩm không hợp lệ" }),
  productVariantNameSnapshot: z.string({ message: "Tên biến thể không hợp lệ" }),
  quantity: z.number({ message: "Số lượng không hợp lệ" }).int(),
  unitPriceSnapshot: z.number({ message: "Đơn giá không hợp lệ" }),
  totalPriceBeforeItemDiscount: z.number({
    message: "Tổng tiền trước chiết khấu không hợp lệ",
  }),
  note: z.string().nullable().optional(),
});

// ===== PROMOTION =====
export const OrderPromotionSchema = z.object({
  id: z.string().uuid({ message: "ID khuyến mãi không hợp lệ" }),
  promotionNameSnapshot: z.string({ message: "Tên khuyến mãi không hợp lệ" }),
  promotionTypeSnapshot: z.string({ message: "Loại khuyến mãi không hợp lệ" }),
  promotionDescriptionSnapshot: z.string().nullable().optional(),
  discountAmountApplied: z.number({ message: "Số tiền giảm không hợp lệ" }),
});

// ===== ORDER DETAIL =====
export const OrderResponseSchema = z.object({
  id: z.string().uuid({ message: "ID đơn hàng không hợp lệ" }),
  type: OrderTypeEnum,
  status: OrderStatusEnum,
  customerNameSnapshot: z.string().nullable(),
  subTotalAmount: z.number({ message: "Tổng phụ không hợp lệ" }),
  discountAmount: z.number({ message: "Chiết khấu không hợp lệ" }),
  taxAmount: z.number({ message: "Thuế không hợp lệ" }),
  totalAmount: z.number({ message: "Tổng tiền không hợp lệ" }),
  amountPaid: z.number({ message: "Tiền đã trả không hợp lệ" }),
  cashRoundingAmount: z.number({ message: "Làm tròn tiền không hợp lệ" }),
  pickupTime: z.string().nullable(),
  note: z.string().nullable().optional(),
  systemPaymentMethodNameSnapshot: z.string({
    message: "Phương thức thanh toán không hợp lệ",
  }),
  createdDate: z.string({ message: "Ngày tạo không hợp lệ" }),
  orderItems: z.array(OrderItemSchema),
  appliedOrderPromotions: z.array(OrderPromotionSchema).nullable(),
});

// ===== PAGINATION RESPONSE =====
export const GetOrdersResponseSchema = z.object({
  size: z.number(),
  page: z.number(),
  total: z.number(),
  totalPages: z.number(),
  items: z.array(OrderResponseSchema),
});

// ===== TYPES =====
export type TOrderResponse = z.infer<typeof OrderResponseSchema>;
export type TOrderItem = z.infer<typeof OrderItemSchema>;
export type TOrderPromotion = z.infer<typeof OrderPromotionSchema>;
export type TGetOrdersResponse = z.infer<typeof GetOrdersResponseSchema>;

