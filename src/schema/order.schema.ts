import { OrderTypeEnum } from '@/types/enums/order-type.enum';
import { OrderItemSchema } from './order-item.schema';
import { z } from "zod";
import { OrderStatusEnum } from '@/types/enums/order-status.enum';

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
export type TBrandOrder= z.infer<typeof BrandOrderSchema>;