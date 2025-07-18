export const OrderStatusEnum = {
  PendingPayment: 0,
  Confirmed: 1,
  ReadyForPickup: 2,
  Completed: 3,
  Cancelled: 4,
} as const;
export type TOrderStatusEnum = typeof OrderStatusEnum[keyof typeof OrderStatusEnum];
export function getOrderStatusLabel(status: TOrderStatusEnum): {
  label: string;
  colorClassName: string;
  backgroundColorName: string;
} {
  switch (status) {
    case OrderStatusEnum.PendingPayment:
      return {
        label: 'Đang trả',
        colorClassName: "text-cempedak-100",
        backgroundColorName: "bg-cempedak-10",
      };
    case OrderStatusEnum.Confirmed:
      return {
        label: 'Đã xác nhận',
        colorClassName: "text-blueberry-100",
        backgroundColorName: "bg-blueberry-10",
      };
    case OrderStatusEnum.ReadyForPickup:
      return {
        label: 'Đã chuẩn bị',
        colorClassName: "text-teal-100",
        backgroundColorName: "bg-teal-10",
      };
    case OrderStatusEnum.Completed:
      return {
        label: 'Hoàn thành',
        colorClassName: "text-green-mint-100",
        backgroundColorName: "bg-green-mint-10",
      };
    case OrderStatusEnum.Cancelled:
      return {
        label: 'Hủy',
        colorClassName: "text-rambutant-100",
        backgroundColorName: "bg-rambutant-10",
      };
    default:
      return {
        label: 'Không xác định',
        colorClassName: "text-neutral-100",
        backgroundColorName: "bg-neutral-10",
      };
  }
}