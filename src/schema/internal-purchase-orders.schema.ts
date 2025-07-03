import { z } from "zod";

// ENUM
export const PurchaseOrderStatusEnum = z.enum([
  'DRAFT',
  'PENDING_BRAND_CONFIRMATION',
  'BRAND_CONFIRMED_PROCESSING',
  'REJECTED_BY_BRAND',
  'AWAITING_CANCELLATION_APPROVAL_BY_BRAND',
  'SHIPPED_BY_BRAND',
  'PARTIALLY_RECEIVED_BY_STORE',
  'FULLY_RECEIVED_BY_STORE',
  'CANCELLED_BY_STORE',
  'CANCELLED_BY_BRAND',
], {
  required_error: "Trạng thái đơn hàng là bắt buộc",
});

// MAIN ENTITY
export const StorePurchaseOrderSchema = z.object({
  id: z.string().uuid({ message: "ID đơn hàng không hợp lệ" }),
  storeId: z.string().uuid({ message: "ID cửa hàng không hợp lệ" }),
  brandId: z.string().uuid({ message: "ID thương hiệu không hợp lệ" }),
  purchaseOrderNumber: z.string().max(100, { message: "Mã đơn hàng tối đa 100 ký tự" }),
  status: PurchaseOrderStatusEnum,

  cancellationRequestReasonByStore: z.string().nullable().optional(),
  cancellationReasonByBrand: z.string().nullable().optional(),
  notesFromStore: z.string().nullable().optional(),
  notesFromBrand: z.string().nullable().optional(),

  requestedDeliveryDate: z.string({ required_error: "Ngày giao hàng dự kiến không hợp lệ" }).nullable().optional(),
  estimatedTotalValue: z.number({ invalid_type_error: "Tổng giá trị phải là số" }).nullable().optional(),

  createdAt: z.string({ required_error: "Ngày tạo không hợp lệ" }),
  submittedAt: z.string().nullable().optional(),
  confirmedByBrandAt: z.string().nullable().optional(),
  shippedByBrandAt: z.string().nullable().optional(),
  completedOrCancelledAt: z.string().nullable().optional(),

  createdByAccountId: z.string().uuid({ message: "ID người tạo không hợp lệ" }),
});

// LIST ITEM
export const StorePurchaseOrderListItemSchema = z.object({
  id: z.string().uuid({ message: "ID không hợp lệ" }),
  purchaseOrderNumber: z.string().max(100, { message: "Mã đơn hàng tối đa 100 ký tự" }),
  storeId: z.string().uuid({ message: "ID cửa hàng không hợp lệ" }),
  brandId: z.string().uuid({ message: "ID thương hiệu không hợp lệ" }),
  status: PurchaseOrderStatusEnum,
  requestedDeliveryDate: z.string().nullable().optional(),
  estimatedTotalValue: z.number({ invalid_type_error: "Tổng giá trị phải là số" }).nullable().optional(),
  submittedAt: z.string().nullable().optional(),
  createdAt: z.string({ required_error: "Ngày tạo không hợp lệ" }),
});

// PAGINATION
export const StorePurchaseOrderListResponseSchema = z.object({
  data: z.array(StorePurchaseOrderListItemSchema),
  total: z.number({ message: "Tổng bản ghi phải là số" }),
  page: z.number({ message: "Trang hiện tại phải là số" }),
  pageSize: z.number({ message: "Số bản ghi mỗi trang phải là số" }),
});

// QUERY PARAMS
export const GetAllStorePurchaseOrdersQuerySchema = z.object({
  page: z.coerce.number().min(1).default(1),
  pageSize: z.coerce.number().min(1).max(100).default(10),
  status: PurchaseOrderStatusEnum.optional(),
  storeId: z.string().uuid().optional(),
  fromDate: z.string().optional(),
  toDate: z.string().optional(),

  sortBy: z.string().optional(),
  isAsc: z.boolean().optional(),

  purchaseOrderNumber: z.string().optional(),
});

// CREATE / UPDATE
export const CreateStorePurchaseOrderSchema = z.object({
  storeId: z.string().uuid({ message: "Vui lòng chọn cửa hàng hợp lệ" }),
  brandId: z.string().uuid({ message: "Vui lòng chọn thương hiệu hợp lệ" }),
  purchaseOrderNumber: z.string().max(100, { message: "Mã đơn hàng tối đa 100 ký tự" }),
  requestedDeliveryDate: z.string({ message: "Ngày giao hàng dự kiến không hợp lệ" }).nullable().optional(),
  notesFromStore: z.string().nullable().optional(),
  items: z.array(
    z.object({
      ingredientId: z.string().uuid({ message: "Nguyên liệu không hợp lệ" }),
      requestedQuantity: z.number().positive({ message: "Số lượng yêu cầu phải lớn hơn 0" }),
    })
  ).min(1, { message: "Đơn hàng phải có ít nhất một nguyên liệu" }),
});

export const UpdateStorePurchaseOrderSchema = CreateStorePurchaseOrderSchema.partial();

// EXPORT TYPES
export type TStorePurchaseOrder = z.infer<typeof StorePurchaseOrderSchema>;
export type TStorePurchaseOrderListItem = z.infer<typeof StorePurchaseOrderListItemSchema>;
export type TStorePurchaseOrderListResponse = z.infer<typeof StorePurchaseOrderListResponseSchema>;
export type TGetAllStorePurchaseOrdersQuery = z.infer<typeof GetAllStorePurchaseOrdersQuerySchema>;
export type TCreateStorePurchaseOrderRequest = z.infer<typeof CreateStorePurchaseOrderSchema>;
export type TUpdateStorePurchaseOrderRequest = z.infer<typeof UpdateStorePurchaseOrderSchema>;
