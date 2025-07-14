// src/pages/category/edit/category-edit-page.tsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

import { handleApiError } from "@/lib/error";

import { CalendarIcon } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Popover, PopoverContent } from "@/components/ui/popover";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { vi } from "date-fns/locale";
import {
  mapToUpdateStorePurchaseOrder,
  StorePurchaseOrder,
  type TStorePurchaseOrder,
} from "@/schema/internal-purchase-orders.schema";
import { useInternalPurchaseOrders } from "@/hooks/use-internal-purchase-orders";
import {
  getStorePurchaseOrderStatusLabel,
  StorePurchaseOrderStatusEnum,
  type TStorePurchaseOrderStatusEnum,
} from "@/types/enums/store-purchase-order-status.enum";
import { DataTable } from "@/components/table/data-table";
import { columns } from "./components/po-item/columns";
import { handleChangeModalState } from "@/redux/modal/modal-slice";
import { useDispatch, useSelector } from "react-redux";
import type { TStorePurchaseOrderItem } from "@/schema/internal-purchase-order-items.schema";
import ConfirmDialog from "@/components/dialog/confirm-dialog";
import type { RootState } from "@/redux/store";
import { toast } from "sonner";
// import { useStore } from "@/hooks/use-store";
// import type { TStore } from "@/schema/store.schema";

const BrandPurchaseEditPage = () => {
  const { id } = useParams<{ id: string }>();
  //   const navigate = useNavigate();
  const { getInternalPurchaseOrderById, updateInternalPurchaseOrderMutation } =
    useInternalPurchaseOrders();
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state: RootState) => state.modal);

  // const { getStoreById } = useStore();
  const {
    data: brandPurchaseData,
    error: orderError,
    isError: isOrderError,
    isLoading: isOrderLoading,
  } = getInternalPurchaseOrderById(id as string);

  // var store = undefined as Partial<TStore> | undefined;

  if (isOrderError && orderError) {
    handleApiError(orderError);
  }
  const initialData = (brandPurchaseData?.data.data ||
    {}) as Partial<TStorePurchaseOrder>;
  // const {
  //   data: storeData,
  //   error: storeError,
  //   isError: isStoreError,
  // } = getStoreById(initialData.storeId as string);

  const form = useForm<TStorePurchaseOrder>({
    resolver: zodResolver(StorePurchaseOrder),
    defaultValues: initialData,
  });

  useEffect(() => {
    if (initialData && !isOrderLoading) {
      form.reset({
        ...initialData,
        createdDate: initialData.createdDate
          ? new Date(initialData.createdDate)
          : undefined,
        completedAt: initialData.completedAt
          ? new Date(initialData.completedAt)
          : undefined,
        confirmedByBrandAt: initialData.confirmedByBrandAt
          ? new Date(initialData.confirmedByBrandAt)
          : undefined,
        cancelledAt: initialData.cancelledAt
          ? new Date(initialData.cancelledAt)
          : undefined,
        lastModifiedDate: initialData.lastModifiedDate
          ? new Date(initialData.lastModifiedDate)
          : undefined,
        storePurchaseOrderItems: initialData.storePurchaseOrderItems?.map(
          (item) => ({
            ...item,
            approvedQuantityByBrand:
              item.approvedQuantityByBrand ?? item.requestedQuantity,
          })
        ),
      });
    }
  }, [initialData, isOrderLoading]);

  const onSubmit: SubmitHandler<TStorePurchaseOrder> = async (data) => {
    //Find and update approvedQuantityByBrand of purchase order item
    const updatedItems = data.storePurchaseOrderItems?.map((item) => {
      const updated = poQuantity.find((q) => q.id === item.id);
      return updated
        ? {
            ...item,
            approvedQuantityByBrand:
              updated.approvedQuantityByBrand ??
              item.approvedQuantityByBrand ??
              item.requestedQuantity,
          }
        : item;
    });

    //Get remain data
    const finalData = {
      ...data,
      storePurchaseOrderItems: updatedItems,
    };
    // console.log(finalData);

    const updateStorePurchaseOrder = mapToUpdateStorePurchaseOrder(finalData);
    console.log(updateStorePurchaseOrder);
    try {
      await updateInternalPurchaseOrderMutation.mutateAsync({
        id: finalData.id,
        data: updateStorePurchaseOrder,
      });
      toast.success("Cập nhật phiếu yêu cầu nhập hàng thành công!");
      // navigate(-1);
    } catch (error) {
      handleApiError(error);
    }
  };

  const [poQuantity, setPoQuantity] = useState<
    Pick<TStorePurchaseOrderItem, "id" | "approvedQuantityByBrand">[]
  >([]);
  const handleConfirmSubmit = (cancellationReasonByBrand?: string) => {
    form.handleSubmit(
      (data) => {
        const updatedData = {
          ...data,
          cancellationReasonByBrand:
            cancellationReasonByBrand || data.cancellationReasonByBrand,
        };
        onSubmit(updatedData);
      },
      (errors) => {
        console.log("Validation errors:", errors);
      }
    )();
  };
  const handlePoQuantityChange = (id: string, value: number) => {
    setPoQuantity((prev) => {
      const exists = prev.find((item) => item.id === id);
      if (exists) {
        return prev.map((item) =>
          item.id === id ? { ...item, approvedQuantityByBrand: value } : item
        );
      } else {
        return [...prev, { id, approvedQuantityByBrand: value }];
      }
    });
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Thông tin yêu cầu</h1>
      </div>
      <div className="grid grid-cols-1 gap-4 mb-6">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit, (errors) =>
              console.log(errors)
            )}
          >
            <ConfirmDialog
              open={isOpen}
              onOpenChange={(open) => dispatch(handleChangeModalState(open))}
              title="Xác nhận cập nhật các cửa hàng sử dụng thực đơn"
              description="Bạn có chắc chắn muốn cập nhật các cửa hàng sử dụng thực đơn này không?"
              actionLabel="Xác nhận"
              onAction={(reason) => handleConfirmSubmit(reason)}
              hasTextArea={
                form.getValues("status") ===
                  StorePurchaseOrderStatusEnum.CancelledByBrand ||
                form.getValues("status") ===
                  StorePurchaseOrderStatusEnum.RejectedByBrand
              }
              textPlaceHolder="Nhập lý do..."
            />
            <Card className="bg-neutral-0 mb-10">
              <CardHeader className="font-medium text-xl">Tổng quan</CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-6">
                  <div className="grid grid-cols-1 lg:grid-cols-1 items-center">
                    <FormField
                      control={form.control}
                      name={`storeId`}
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormLabel>Cửa hàng</FormLabel>
                            <FormControl>
                              <Input
                                disabled={true}
                                {...field}
                                value={field.value}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        );
                      }}
                    />
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-1 items-center">
                    <FormField
                      control={form.control}
                      name={`createdByAccountId`}
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormLabel>Người tạo</FormLabel>
                            <FormControl>
                              <Input
                                disabled={true}
                                {...field}
                                value={field.value}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        );
                      }}
                    />
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-1 items-center">
                    <FormField
                      control={form.control}
                      name="createdDate"
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormLabel>Ngày tạo</FormLabel>
                            <Popover>
                              <PopoverTrigger asChild disabled>
                                <FormControl>
                                  <Button
                                    variant={"outline"}
                                    className={cn(
                                      "w-full pl-3 text-left font-normal",
                                      !field.value && "text-muted-foreground"
                                    )}
                                  >
                                    {field.value ? (
                                      format(
                                        field.value,
                                        "EEEE, dd 'tháng' MM, yyyy hh:mm aa",
                                        { locale: vi }
                                      )
                                    ) : (
                                      <span>Chưa hoàn thành</span>
                                    )}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent
                                className="w-auto p-0"
                                align="start"
                              >
                                <Calendar
                                  mode="single"
                                  selected={field.value ?? undefined}
                                  onSelect={field.onChange}
                                  disabled={(date) =>
                                    date > new Date() ||
                                    date < new Date("1900-01-01")
                                  }
                                  captionLayout="dropdown"
                                />
                              </PopoverContent>
                            </Popover>

                            <FormMessage />
                          </FormItem>
                        );
                      }}
                    />
                  </div>
                  {(initialData.status ==
                    StorePurchaseOrderStatusEnum.CancelledByStore ||
                    initialData.status ==
                      StorePurchaseOrderStatusEnum.CancelledByBrand ||
                    initialData.status ==
                      StorePurchaseOrderStatusEnum.RejectedByBrand) && (
                    <div className="grid grid-cols-1 lg:grid-cols-1 items-center">
                      <FormField
                        control={form.control}
                        name="cancelledAt"
                        render={({ field }) => {
                          return (
                            <FormItem>
                              <FormLabel>Ngày hủy</FormLabel>
                              <Popover>
                                <PopoverTrigger asChild disabled>
                                  <FormControl>
                                    <Button
                                      variant={"outline"}
                                      className={cn(
                                        "w-full pl-3 text-left font-normal",
                                        !field.value && "text-muted-foreground"
                                      )}
                                    >
                                      {field.value ? (
                                        format(
                                          field.value,
                                          "EEEE, dd 'tháng' MM, yyyy hh:mm aa",
                                          { locale: vi }
                                        )
                                      ) : (
                                        <span>Chưa hoàn thành</span>
                                      )}
                                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                  </FormControl>
                                </PopoverTrigger>
                                <PopoverContent
                                  className="w-auto p-0"
                                  align="start"
                                >
                                  <Calendar
                                    mode="single"
                                    selected={field.value ?? undefined}
                                    onSelect={field.onChange}
                                    disabled={(date) =>
                                      date > new Date() ||
                                      date < new Date("1900-01-01")
                                    }
                                    captionLayout="dropdown"
                                  />
                                </PopoverContent>
                              </Popover>

                              <FormMessage />
                            </FormItem>
                          );
                        }}
                      />
                    </div>
                  )}
                  {initialData.status ==
                    StorePurchaseOrderStatusEnum.DoneByStore && (
                    <div className="grid grid-cols-1 lg:grid-cols-1 items-center">
                      <FormField
                        control={form.control}
                        name="completedAt"
                        render={({ field }) => {
                          return (
                            <FormItem>
                              <FormLabel>Ngày hoàn thành</FormLabel>
                              <Popover>
                                <PopoverTrigger asChild disabled>
                                  <FormControl>
                                    <Button
                                      variant={"outline"}
                                      className={cn(
                                        "w-full pl-3 text-left font-normal",
                                        !field.value && "text-muted-foreground"
                                      )}
                                    >
                                      {field.value ? (
                                        format(
                                          field.value,
                                          "EEEE, dd 'tháng' MM, yyyy hh:mm aa",
                                          { locale: vi }
                                        )
                                      ) : (
                                        <span>Chưa hoàn thành</span>
                                      )}
                                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                  </FormControl>
                                </PopoverTrigger>
                                <PopoverContent
                                  className="w-auto p-0"
                                  align="start"
                                >
                                  <Calendar
                                    mode="single"
                                    selected={field.value ?? undefined}
                                    onSelect={field.onChange}
                                    disabled={(date) =>
                                      date > new Date() ||
                                      date < new Date("1900-01-01")
                                    }
                                    captionLayout="dropdown"
                                  />
                                </PopoverContent>
                              </Popover>
                              <FormMessage />
                            </FormItem>
                          );
                        }}
                      />
                    </div>
                  )}
                  {initialData.status ==
                    StorePurchaseOrderStatusEnum.BrandConfirmed && (
                    <div className="grid grid-cols-1 lg:grid-cols-1 items-center">
                      <FormField
                        control={form.control}
                        name="confirmedByBrandAt"
                        render={({ field }) => {
                          return (
                            <FormItem>
                              <FormLabel>Ngày chấp nhận</FormLabel>
                              <Popover>
                                <PopoverTrigger asChild disabled>
                                  <FormControl>
                                    <Button
                                      variant={"outline"}
                                      className={cn(
                                        "w-full pl-3 text-left font-normal",
                                        !field.value && "text-muted-foreground"
                                      )}
                                    >
                                      {field.value ? (
                                        format(
                                          field.value,
                                          "EEEE, dd 'tháng' MM, yyyy hh:mm aa",
                                          { locale: vi }
                                        )
                                      ) : (
                                        <span>Chưa hoàn thành</span>
                                      )}
                                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                  </FormControl>
                                </PopoverTrigger>
                                <PopoverContent
                                  className="w-auto p-0"
                                  align="start"
                                >
                                  <Calendar
                                    mode="single"
                                    selected={field.value ?? undefined}
                                    onSelect={field.onChange}
                                    disabled={(date) =>
                                      date > new Date() ||
                                      date < new Date("1900-01-01")
                                    }
                                    captionLayout="dropdown"
                                  />
                                </PopoverContent>
                              </Popover>

                              <FormMessage />
                            </FormItem>
                          );
                        }}
                      />
                    </div>
                  )}
                  <div className="grid grid-cols-1 lg:grid-cols-1 items-center">
                    <FormField
                      control={form.control}
                      name={`status`}
                      render={({ field }) => {
                        // Chỉ dùng status ban đầu để quyết định các option có thể chọn
                        const initialStatus = initialData.status;

                        let allowedStatuses: TStorePurchaseOrderStatusEnum[] =
                          [];

                        if (
                          initialStatus === StorePurchaseOrderStatusEnum.New
                        ) {
                          allowedStatuses = [
                            StorePurchaseOrderStatusEnum.New,
                            StorePurchaseOrderStatusEnum.BrandConfirmed,
                            StorePurchaseOrderStatusEnum.RejectedByBrand,
                          ];
                        } else if (
                          initialStatus ===
                          StorePurchaseOrderStatusEnum.BrandConfirmed
                        ) {
                          allowedStatuses = [
                            StorePurchaseOrderStatusEnum.BrandConfirmed,
                            StorePurchaseOrderStatusEnum.CancelledByBrand,
                          ];
                        } else if (initialStatus !== undefined) {
                          allowedStatuses = [initialStatus];
                        }

                        // Đảm bảo giá trị hiện tại cũng nằm trong option (phòng trường hợp quay lại)
                        if (!allowedStatuses.includes(field.value)) {
                          allowedStatuses.push(
                            field.value as TStorePurchaseOrderStatusEnum
                          );
                        }

                        return (
                          <FormItem>
                            <FormLabel>Trạng thái *</FormLabel>
                            <Select
                              onValueChange={(value) =>
                                field.onChange(Number(value))
                              }
                              value={String(field.value)}
                            >
                              <FormControl>
                                <SelectTrigger className="w-full">
                                  <SelectValue placeholder="Chọn trạng thái" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {allowedStatuses.map((val) => (
                                  <SelectItem key={val} value={String(val)}>
                                    {
                                      getStorePurchaseOrderStatusLabel(val)
                                        .label
                                    }
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        );
                      }}
                    />
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-1 items-center">
                    <FormField
                      control={form.control}
                      name={`estimatedTotalValue`}
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormLabel>Tổng đơn</FormLabel>
                            <FormControl>
                              <Input
                                disabled={true}
                                {...field}
                                value={field.value ?? ""}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        );
                      }}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-1 items-center pb-6">
                  <FormField
                    control={form.control}
                    name={`noteFromStore`}
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormLabel>Ghi chú từ cửa hàng</FormLabel>
                          <FormControl>
                            <Textarea
                              disabled={true}
                              {...field}
                              value={field.value ?? ""}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-1 items-center pb-6">
                  <FormField
                    control={form.control}
                    name={`noteFromBrand`}
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormLabel>Ghi chú từ thương hiệu</FormLabel>
                          <FormControl>
                            <Textarea
                              disabled={false}
                              {...field}
                              value={field.value ?? ""}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                </div>
                {initialData.status ==
                  StorePurchaseOrderStatusEnum.CancelledByStore && (
                  <div className="grid grid-cols-1 lg:grid-cols-1 items-center pb-6">
                    <FormField
                      control={form.control}
                      name={`cancellationRequestReasonByStore`}
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormLabel>Lý do hủy của cửa hàng</FormLabel>
                            <FormControl>
                              <Textarea
                                disabled={false}
                                {...field}
                                value={field.value ?? ""}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        );
                      }}
                    />
                  </div>
                )}
                {initialData.status ==
                  StorePurchaseOrderStatusEnum.CancelledByStore && (
                  <div className="grid grid-cols-1 lg:grid-cols-1 items-center pb-6">
                    <FormField
                      control={form.control}
                      name={`cancellationReasonByBrand`}
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormLabel>Lý do hủy của thương hiệu</FormLabel>
                            <FormControl>
                              <Textarea
                                disabled={false}
                                {...field}
                                value={field.value ?? ""}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        );
                      }}
                    />
                  </div>
                )}
                {/* <div className="mt-6 flex justify-end">
                  <Button className="py-5 px-10" type="submit" disabled={false}>
                    Lưu
                  </Button>
                </div> */}
              </CardContent>
            </Card>
            <Card className="bg-neutral-0">
              <CardHeader className="font-medium text-xl">
                Sản phẩm trong đơn hàng
              </CardHeader>
              <CardContent>
                <DataTable
                  columns={columns}
                  data={
                    (initialData.storePurchaseOrderItems ??
                      []) as TStorePurchaseOrderItem[]
                  }
                  totalItems={initialData.storePurchaseOrderItems?.length ?? 0}
                  currentPage={1}
                  pageSize={initialData.storePurchaseOrderItems?.length ?? 0}
                  onPageChange={() => {}}
                  onPageSizeChange={() => {}}
                  isPagingProp={false}
                  meta={{
                    poQuantityValues: poQuantity,
                    onPoQuantityChange: handlePoQuantityChange,
                    poStatus: initialData.status,
                  }}
                  rowSelection={(
                    initialData.storePurchaseOrderItems ?? []
                  ).reduce<Record<string, boolean>>((acc, item) => {
                    acc[item.id] = poQuantity.some(
                      (changedItem) =>
                        changedItem.id === item.id &&
                        changedItem.approvedQuantityByBrand !==
                          item.approvedQuantityByBrand
                    );
                    return acc;
                  }, {})}
                />
              </CardContent>
              <CardFooter></CardFooter>
            </Card>
            {(initialData.status === StorePurchaseOrderStatusEnum.New ||
              initialData.status ===
                StorePurchaseOrderStatusEnum.BrandConfirmed) && (
              <div className="flex justify-end h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear sticky bottom-0 bg-transparent z-10">
                <Button
                  type="button"
                  onClick={() => dispatch(handleChangeModalState(true))}
                >
                  Cập nhật
                </Button>
              </div>
            )}
          </form>
        </Form>
      </div>
    </div>
  );
};

export default BrandPurchaseEditPage;
