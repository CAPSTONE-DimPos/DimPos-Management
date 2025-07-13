import { z } from "zod";

export const OrderItemSchema = z.object({
    id: z.string().uuid(),
    productVariantNameSnapshot: z.string().min(1, { message: "Không được bỏ trống" }).max(50, { message: "Không được quá 50 ký tự" }),
    quantity: z.number().int().min(1, { message: "Số lượng không dưới 1" }),
    unitPriceSnapshot: z.number().min(0,{message: "Giá không dưới 0" }),
    totalPriceBeforeItemDiscount: z.number().min(0,{message: "Giá không dưới 0" }),
    note: z.string().nullable(),
});
export type TOrderItem = z.infer<typeof OrderItemSchema>;