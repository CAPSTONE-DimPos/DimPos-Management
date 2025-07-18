// src/pages/category/edit/category-edit-page.tsx
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Card,
  CardHeader,
  CardContent,
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
import { useOrder } from "@/hooks/use-order";
import type { TBrandOrder } from "@/schema/order.schema";
import { BrandOrderSchema } from "@/schema/order.schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { getOrderTypeLabel } from "@/types/enums/order-type.enum";
import {
  getOrderStatusLabel,
  OrderStatusEnum,
  type TOrderStatusEnum,
} from "@/types/enums/order-status.enum";
import { Popover, PopoverContent } from "@/components/ui/popover";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { vi } from "date-fns/locale";
import OrderItemTable from "./components/order-item-table";

const BrandOrderEditPage = () => {
  const { id } = useParams<{ id: string }>();
  //   const navigate = useNavigate();
  const { getOrderById } = useOrder();
  const {
    data: brandOrderData,
    error: orderError,
    isError: isOrderError,
    isLoading,
  } = getOrderById(id!);
  //   const [createdDateOpen, setCreatedDateOpen] = useState(false);

  if (isOrderError && orderError) {
    handleApiError(orderError);
  }
  const initialData = (brandOrderData?.data.data || {}) as Partial<TBrandOrder>;

  const form = useForm<TBrandOrder>({
    resolver: zodResolver(BrandOrderSchema),
    defaultValues: initialData,
  });

  useEffect(() => {
    if (initialData && !isLoading) {
      //   console.log(initialData);
      form.reset({
        ...initialData,
        createdDate: initialData.createdDate
          ? new Date(initialData.createdDate)
          : undefined,
      });
    }
  }, [initialData]);

  const onSubmit: SubmitHandler<TBrandOrder> = async (data) => {
    console.log(data);
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Thông tin đơn hàng</h1>
      </div>
      <div className="grid grid-cols-1 gap-4 mb-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit, (errors) => console.log(errors))}>
            <Card className="bg-neutral-0">
              <CardHeader className="font-medium text-xl">Tổng quan</CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-6">
                  <div className="grid grid-cols-1 lg:grid-cols-1 items-center">
                    <FormField
                      control={form.control}
                      name={`type`}
                      render={({ field }) => {
                        const orderType = getOrderTypeLabel(field.value);
                        return (
                          <FormItem>
                            <FormLabel>Kiểu phục vụ *</FormLabel>
                            <FormControl>
                              <Input
                                disabled={true}
                                {...field}
                                value={orderType}
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
                      name={`status`}
                      render={({ field }) => {
                        // const orderStatusAttribute = getOrderStatusLabel(
                        //   field.value
                        // );
                        // const orderStatusLabel = orderStatusAttribute.label;
                        return (
                          <FormItem>
                            <FormLabel>Trạng thái *</FormLabel>
                            <Select
                              onValueChange={(value) => {
                                field.onChange(Number(value));
                              }}
                              value={String(field.value)}
                            >
                              <FormControl>
                                <SelectTrigger className="w-full">
                                  <SelectValue placeholder="Chọn trạng thái" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {Object.entries(OrderStatusEnum).map(
                                  ([key, val]) => (
                                    <SelectItem key={key} value={String(val)}>
                                      {
                                        getOrderStatusLabel(
                                          val as TOrderStatusEnum
                                        ).label
                                      }
                                    </SelectItem>
                                  )
                                )}
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
                      name="createdDate"
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormLabel>Thời gian tạo</FormLabel>
                            <Popover>
                              <PopoverTrigger asChild>
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
                                        new Date(field.value),
                                        "EEEE, dd 'tháng' MM, yyyy hh:mm aa",
                                        { locale: vi }
                                      )
                                    ) : (
                                      <span></span>
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
                                  selected={
                                    field.value
                                      ? new Date(field.value)
                                      : undefined
                                  }
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
                  <div className="grid grid-cols-1 lg:grid-cols-1 items-center">
                    <FormField
                      control={form.control}
                      name="completedAt"
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormLabel>Thời gian hoàn thành</FormLabel>
                            <Popover>
                              <PopoverTrigger asChild>
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
                  <div className="grid grid-cols-1 lg:grid-cols-1 items-center">
                    <FormField
                      control={form.control}
                      name={`totalAmount`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tổng trước khuyến mãi *</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="number"
                              disabled={false}
                              placeholder="0"
                              value={field.value ?? ""}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-1 items-center">
                    <FormField
                      control={form.control}
                      name={`customerNameSnapshot`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Khách hàng *</FormLabel>
                          <FormControl>
                            <Input
                              disabled={false}
                              placeholder=""
                              {...field}
                              value={field.value ?? ""}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                  <div className="grid grid-cols-1 lg:grid-cols-1 items-center">
                    <FormField
                      control={form.control}
                      name="note"
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormLabel>Ghi chú</FormLabel>
                            <FormControl>
                              <Textarea
                                {...field}
                                placeholder="Ghi chú"
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
                {/* <div className="mt-6 flex justify-end">
                  <Button className="py-5 px-10" type="submit" disabled={false}>
                    Lưu
                  </Button>
                </div> */}
              </CardContent>
            </Card>
          </form>
        </Form>
      </div>
      <div>
        <Card className="bg-neutral-0">
          <CardHeader className="font-medium text-xl">
            Sản phẩm trong đơn hàng
          </CardHeader>
          <CardContent>
            <OrderItemTable
              initialData={brandOrderData?.data.data.orderItems ?? []}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );

  {
    /* <form
        onSubmit={handleSubmit(onSubmit)}
        // className="grid gap-6 grid-cols-1 lg:grid-cols-4"
      >
        <div className="container pb-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
            <Card className="shadow-none border-none bg-white lg:col-span-2 2xl:col-span-2">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium">Hoạt động</span>
                  <Controller
                    control={control}
                    name="status"
                    render={({ field }) => (
                      <Switch
                        checked={field.value === 0}
                        onCheckedChange={(checked) =>
                          field.onChange(checked ? 0 : 1)
                        }
                      />
                    )}
                  />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input {...register("id")} type="hidden" />
                <Input {...register("hasChildCategory")} type="hidden" />

                <div>
                  <label className="block text-sm font-medium">
                    Mã danh mục
                  </label>
                  <Input
                    {...register("code")}
                    readOnly
                    className="bg-muted cursor-not-allowed"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium">
                    Tên danh mục *
                  </label>
                  <Input
                    {...register("name")}
                    placeholder="Nhập tên danh mục"
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium">Mô tả</label>
                  <Textarea
                    {...register("description")}
                    placeholder="Mô tả danh mục"
                  />
                  {errors.description && (
                    <p className="text-sm text-red-500">
                      {errors.description.message}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="grid grid-cols-1 lg:grid-cols-1 items-center">
                    <label className="block text-sm font-medium">
                      Thứ tự hiển thị
                    </label>
                    <Input
                      type="number"
                      {...register("displayOrder", { valueAsNumber: true })}
                    />
                    {errors.displayOrder && (
                      <p className="text-sm text-red-500">
                        {errors.displayOrder.message}
                      </p>
                    )}
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-1 items-center">
                    <label className="block text-sm font-medium">
                      Loại danh mục
                    </label>
                    <Controller
                      control={control}
                      name="type"
                      render={({ field }) => (
                        <Select value={field.value?.toString()} disabled>
                          <SelectTrigger className="w-full">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">Danh mục cha</SelectItem>
                            <SelectItem value="2">Danh mục con</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-1 items-center">
                    {selectedType === 2 && (
                      <div>
                        <label className="block text-sm font-medium">
                          Danh mục cha *
                        </label>
                        <Controller
                          control={control}
                          name="parentId"
                          render={({ field }) => {
                            const selectedCat = parentCategories.find(
                              (cat) => cat.id === field.value
                            );

                            return (
                              <Select
                                value={field.value || ""}
                                onValueChange={(val) => field.onChange(val)}
                              >
                                <SelectTrigger className="w-full">
                                  <div className="truncate">
                                    {selectedCat
                                      ? `${selectedCat.name} - ${selectedCat.code}`
                                      : "Chọn danh mục cha"}
                                  </div>
                                </SelectTrigger>
                                <SelectContent>
                                  {parentCategories.map((cat) => (
                                    <SelectItem key={cat.id} value={cat.id}>
                                      {`${cat.code} - ${cat.name}`}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            );
                          }}
                        />
                        {errors.parentId && (
                          <p className="text-sm text-red-500">
                            {errors.parentId.message}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="grid lg:col-span-2 2xl:col-span-1 gap-4">
              <Card className="shadow-none border-none bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Ảnh sản phẩm
                    <div>
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        className="hidden"
                        id="image-upload"
                        disabled
                      />
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="lg:col-span-1">
                      <Card className="shadow-none border-none bg-white">
                        <CardHeader>
                          <CardTitle className="flex justify-between items-center">
                            Hình Ảnh
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <input
                            type="file"
                            id="upload-image"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="hidden"
                          />
                          {imagePreview ? (
                            <img
                              src={imagePreview}
                              alt="Preview"
                              className="w-full h-auto rounded-lg"
                            />
                          ) : (
                            <div className="text-center text-muted-foreground py-12">
                              <Upload className="w-12 h-12 mx-auto mb-2 opacity-40" />
                              <p>Chưa chọn hình ảnh</p>
                            </div>
                          )}
                          {errors.image && (
                            <p className="text-sm text-red-500 mt-2">
                              {errors.image.message as string}
                            </p>
                          )}
                        </CardContent>
                        <CardFooter>
                          <div className="flex gap-2">
                            <Button
                              type="button"
                              variant="outline"
                              onClick={() =>
                                document.getElementById("upload-image")?.click()
                              }
                            >
                              {" "}
                              <Upload className="w-4 h-4 mr-2" /> Tải lên{" "}
                            </Button>
                            {imagePreview && (
                              <Button
                                type="button"
                                variant="destructive"
                                onClick={handleRemoveImage}
                              >
                                Xóa
                              </Button>
                            )}
                          </div>
                        </CardFooter>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-6 mr-16">
          <Button type="submit">Lưu thay đổi</Button>
        </div>
      </form> */
  }

  // <div className="container max-w-6xl mx-auto p-6">
  //   <h1 className="text-3xl font-bold mb-6">Chi Tiết danh mục</h1>
  //   <form
  //     onSubmit={handleSubmit(onSubmit)}
  //     className="grid gap-6 grid-cols-1 lg:grid-cols-4"
  //   >
  //     <div className="lg:col-span-1">
  //       <Card className="shadow-none border-none bg-white">
  //         <CardHeader>
  //           <CardTitle className="flex justify-between items-center">
  //             Hình Ảnh
  //           </CardTitle>
  //         </CardHeader>
  //         <CardContent>
  //           <input
  //             type="file"
  //             id="upload-image"
  //             accept="image/*"
  //             onChange={handleImageChange}
  //             className="hidden"
  //           />
  //           {imagePreview ? (
  //             <img
  //               src={imagePreview}
  //               alt="Preview"
  //               className="w-full h-auto rounded-lg"
  //             />
  //           ) : (
  //             <div className="text-center text-muted-foreground py-12">
  //               <Upload className="w-12 h-12 mx-auto mb-2 opacity-40" />
  //               <p>Chưa chọn hình ảnh</p>
  //             </div>
  //           )}
  //           {errors.image && (
  //             <p className="text-sm text-red-500 mt-2">
  //               {errors.image.message as string}
  //             </p>
  //           )}
  //         </CardContent>
  //         <CardFooter>
  //           <div className="flex gap-2">
  //             <Button
  //               type="button"
  //               variant="outline"
  //               onClick={() =>
  //                 document.getElementById("upload-image")?.click()
  //               }
  //             >
  //               {" "}
  //               <Upload className="w-4 h-4 mr-2" /> Tải lên{" "}
  //             </Button>
  //             {imagePreview && (
  //               <Button
  //                 type="button"
  //                 variant="destructive"
  //                 onClick={handleRemoveImage}
  //               >
  //                 Xóa
  //               </Button>
  //             )}
  //           </div>
  //         </CardFooter>
  //       </Card>
  //     </div>

  //     <div className="lg:col-span-3 space-y-6">
  //       <Card className="shadow-none border-none bg-white">
  //         <CardHeader className="flex flex-row items-center justify-between">
  //           <CardTitle>Thông tin danh mục</CardTitle>
  //           <div className="flex items-center space-x-2">
  //             <span className="text-sm font-medium">Hoạt động</span>
  //             <Controller
  //               control={control}
  //               name="status"
  //               render={({ field }) => (
  //                 <Switch
  //                   checked={field.value === 0}
  //                   onCheckedChange={(checked) =>
  //                     field.onChange(checked ? 0 : 1)
  //                   }
  //                 />
  //               )}
  //             />
  //           </div>
  //         </CardHeader>
  //         <CardContent className="space-y-4">
  //           <Input {...register("id")} type="hidden" />
  //           <Input {...register("hasChildCategory")} type="hidden" />

  //           <div>
  //             <label className="block text-sm font-medium">Mã danh mục</label>
  //             <Input
  //               {...register("code")}
  //               readOnly
  //               className="bg-muted cursor-not-allowed"
  //             />
  //           </div>

  //           <div>
  //             <label className="block text-sm font-medium">
  //               Tên danh mục *
  //             </label>
  //             <Input {...register("name")} placeholder="Nhập tên danh mục" />
  //             {errors.name && (
  //               <p className="text-sm text-red-500">{errors.name.message}</p>
  //             )}
  //           </div>

  //           <div>
  //             <label className="block text-sm font-medium">Mô tả</label>
  //             <Textarea
  //               {...register("description")}
  //               placeholder="Mô tả danh mục"
  //             />
  //             {errors.description && (
  //               <p className="text-sm text-red-500">
  //                 {errors.description.message}
  //               </p>
  //             )}
  //           </div>

  //           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  //             <div className="grid grid-cols-1 lg:grid-cols-1 items-center">
  //               <label className="block text-sm font-medium">
  //                 Thứ tự hiển thị
  //               </label>
  //               <Input
  //                 type="number"
  //                 {...register("displayOrder", { valueAsNumber: true })}
  //               />
  //               {errors.displayOrder && (
  //                 <p className="text-sm text-red-500">
  //                   {errors.displayOrder.message}
  //                 </p>
  //               )}
  //             </div>
  //             <div className="grid grid-cols-1 lg:grid-cols-1 items-center">
  //               <label className="block text-sm font-medium">
  //                 Loại danh mục
  //               </label>
  //               <Controller
  //                 control={control}
  //                 name="type"
  //                 render={({ field }) => (
  //                   <Select value={field.value?.toString()} disabled>
  //                     <SelectTrigger className="w-full">
  //                       <SelectValue />
  //                     </SelectTrigger>
  //                     <SelectContent>
  //                       <SelectItem value="1">Danh mục cha</SelectItem>
  //                       <SelectItem value="2">Danh mục con</SelectItem>
  //                     </SelectContent>
  //                   </Select>
  //                 )}
  //               />
  //             </div>
  //             <div className="grid grid-cols-1 lg:grid-cols-1 items-center">
  //               {selectedType === 2 && (
  //                 <div>
  //                   <label className="block text-sm font-medium">
  //                     Danh mục cha *
  //                   </label>
  //                   <Controller
  //                     control={control}
  //                     name="parentId"
  //                     render={({ field }) => {
  //                       const selectedCat = parentCategories.find(
  //                         (cat) => cat.id === field.value
  //                       );

  //                       return (
  //                         <Select
  //                           value={field.value || ""}
  //                           onValueChange={(val) => field.onChange(val)}
  //                         >
  //                           <SelectTrigger className="w-full">
  //                             <div className="truncate">
  //                               {selectedCat
  //                                 ? `${selectedCat.name} - ${selectedCat.code}`
  //                                 : "Chọn danh mục cha"}
  //                             </div>
  //                           </SelectTrigger>
  //                           <SelectContent>
  //                             {parentCategories.map((cat) => (
  //                               <SelectItem key={cat.id} value={cat.id}>
  //                                 {`${cat.code} - ${cat.name}`}
  //                               </SelectItem>
  //                             ))}
  //                           </SelectContent>
  //                         </Select>
  //                       );
  //                     }}
  //                   />
  //                   {errors.parentId && (
  //                     <p className="text-sm text-red-500">
  //                       {errors.parentId.message}
  //                     </p>
  //                   )}
  //                 </div>
  //               )}
  //             </div>
  //           </div>
  //         </CardContent>
  //       </Card>

  //       <div className="flex justify-end">
  //         <Button type="submit">Lưu Thay Đổi</Button>
  //       </div>
  //     </div>
  //   </form>
  // </div>
};

export default BrandOrderEditPage;
