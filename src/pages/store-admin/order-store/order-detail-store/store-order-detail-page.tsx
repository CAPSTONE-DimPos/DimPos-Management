import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Card,
  CardHeader,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";
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
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { useStoreOrder } from "@/hooks/use-order";
import { StoreOrderResponseSchema, type TStoreOrderResponse } from "@/schema/order.schema";
import { getOrderTypeLabel } from "@/types/enums/order-type.enum";
import {
  getOrderStatusLabel
} from "@/types/enums/order-status.enum";
import { Calendar } from "@/components/ui/calendar";
import StoreOrderItemTable from "./components/order-item-table";
import { Textarea } from "@/components/ui/textarea";


const StoreOrderDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { getStoreOrderById } = useStoreOrder();

  const {
    data: orderData,
    isLoading,
  } = getStoreOrderById(id!);

  const initialData = (orderData?.data.data || {}) as Partial<TStoreOrderResponse>;

  const form = useForm<TStoreOrderResponse>({
    resolver: zodResolver(StoreOrderResponseSchema),
    defaultValues: initialData,
  });

  useEffect(() => {
    if (initialData && !isLoading) {
      form.reset({
        ...initialData,
        createdDate: initialData.createdDate
          ? new Date(initialData.createdDate)
          : undefined,
        pickupTime: initialData.pickupTime
          ? new Date(initialData.pickupTime)
          : undefined,
      });
    }
  }, [initialData]);

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Thông tin đơn hàng</h1>
      </div>
      <div className="grid grid-cols-1 gap-4 mb-6">
        <Form {...form}>
          <form>
            <Card>
              <CardHeader className="font-medium text-xl">Tổng quan</CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-6">
                  <FormField
                    control={form.control}
                    name="type"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Kiểu phục vụ</FormLabel>
                        <FormControl>
                          <Input value={getOrderTypeLabel(field.value)} disabled />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="status"
                    render={({ field }) => {
                      const { label, colorClassName, backgroundColorName } = getOrderStatusLabel(field.value);

                      return (
                        <FormItem>
                          <FormLabel>Trạng thái</FormLabel>
                          <div
                            className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${colorClassName} ${backgroundColorName}`}
                          >
                            {label}
                          </div>
                        </FormItem>
                      );
                    }}
                  />

                  <FormField
                    control={form.control}
                    name="createdDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Thời gian tạo</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                                disabled
                              >
                                {field.value ? (
                                  format(new Date(field.value), "EEEE, dd 'tháng' MM, yyyy hh:mm aa", {
                                    locale: vi,
                                  })
                                ) : (
                                  <span></span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value ? new Date(field.value) : undefined}
                              onSelect={(date) =>
                                field.onChange(date ? date.toISOString() : undefined)
                              }
                              disabled={(date) =>
                                date > new Date() || date < new Date("1900-01-01")
                              }
                              captionLayout="dropdown"
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="pickupTime"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Thời gian nhận hàng</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                                disabled
                              >
                                {field.value ? (
                                  format(new Date(field.value), "EEEE, dd 'tháng' MM, yyyy hh:mm aa", {
                                    locale: vi,
                                  })
                                ) : (
                                  <span>Chưa xác định</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value ? new Date(field.value) : undefined}
                              onSelect={(date) =>
                                field.onChange(date ? date.toISOString() : undefined)
                              }
                              disabled={(date) =>
                                date > new Date() || date < new Date("1900-01-01")
                              }
                              captionLayout="dropdown"
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="totalAmount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tổng đơn hàng</FormLabel>
                        <FormControl>
                          <Input type="number" value={field.value ?? 0} disabled />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="customerNameSnapshot"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tên khách hàng</FormLabel>
                        <FormControl>
                          <Input value={field.value ?? ""} disabled />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="note"
                    render={({ field }) => (
                      <FormItem className="md:col-span-2">
                        <FormLabel>Ghi chú</FormLabel>
                        <FormControl>
                          <Textarea value={field.value ?? ""} disabled />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
            </Card>
          </form>
        </Form>
      </div>

      <div>
        <Card>
          <CardHeader className="font-medium text-xl">Sản phẩm trong đơn hàng</CardHeader>
          <CardContent>
            <StoreOrderItemTable initialData={initialData.orderItems ?? []} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StoreOrderDetailPage;