// import { useStore } from "@/hooks/use-store";
// import { handleApiError } from "@/lib/error";
// import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { StoreSchema, type TStore } from "@/schema/store.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

const EditStorePage = () => {
  //   const { id } = useParams();
  //   const { getStoreById } = useStore();
  // const { data, isError, error } = getStoreById( id as string );

  // if ( isError && error )
  // {
  //     handleApiError( error );
  // }

  const initialData: TStore = {
    id: "550e8400-e29b-41d4-a716-446655440001",
    code: "HN001",
    name: "Cửa hàng Hà Nội Đống Đa",
    phone: "0243456789",
    email: "dongda@store.com",
    shortName: "HN-DD",
    description:
      "Cửa hàng flagship tại trung tâm Hà Nội, phục vụ khách hàng cao cấp",
    address: "123 Đường Láng, Đống Đa, Hà Nội",
    latitude: "21.0245",
    longitude: "105.8412",
    wifiName: "Store_HN001_Wifi",
    wifiPassword: "hanoistore123",
    index: 1,
    localPasscode: "HN001PASS",
    managerName: "Nguyễn Văn An",
    type: 1,
    username: "hn001_admin",
    password: "secure123",
  };
  const form = useForm<TStore>({
    resolver: zodResolver(StoreSchema),
    defaultValues: initialData,
  });

  useEffect(() => {
    if (initialData) {
      form.reset({
        ...initialData,
      });
    }
  }, [initialData]);

  const onSubmit: SubmitHandler<TStore> = async (data) => {
    console.log(data);
  };
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Chi tiết cửa hàng</h1>
      </div>
      <Form {...form}>
        <form
          className="relative"
          onSubmit={form.handleSubmit(onSubmit, (errors) => {
            console.error("Form validation errors:", errors);
          })}
        >
          <div className="container pb-6">
            <div className="grid grid-cols-1 lg:grid-cols-1 2xl:grid-cols-1 gap-4">
              <Card className="shadow-none border-none bg-white">
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="id"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormLabel></FormLabel>
                          <FormControl>
                            <Input
                              type="hidden"
                              {...field}
                              value={field.value ?? ""}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="grid grid-cols-1 lg:grid-cols-1 items-center">
                      <FormField
                        control={form.control}
                        name="code"
                        render={({ field }) => {
                          return (
                            <FormItem>
                              <FormLabel>Mã cửa hàng *</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  value={field.value ?? ""}
                                  disabled
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
                        name="managerName"
                        render={({ field }) => {
                          return (
                            <FormItem>
                              <FormLabel>Chủ quản lý</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  value={field.value ?? ""}
                                  placeholder="Nhập tên cửa hàng"
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
                        name="shortName"
                        render={({ field }) => {
                          return (
                            <FormItem>
                              <FormLabel>Tên ngắn</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  value={field.value ?? ""}
                                  placeholder="Nhập tên cửa hàng"
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
                        name="name"
                        render={({ field }) => {
                          return (
                            <FormItem>
                              <FormLabel>Tên cửa hàng *</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  value={field.value ?? ""}
                                  placeholder="Nhập tên cửa hàng"
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
                        name="phone"
                        render={({ field }) => {
                          return (
                            <FormItem>
                              <FormLabel>Số điện thoại</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  value={field.value ?? ""}
                                  placeholder="Nhập tên cửa hàng"
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
                        name="email"
                        render={({ field }) => {
                          return (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  value={field.value ?? ""}
                                  placeholder="Nhập tên cửa hàng"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          );
                        }}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                    <div className="grid grid-cols-1 lg:grid-cols-1 items-center">
                      <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => {
                          return (
                            <FormItem>
                              <FormLabel>Địa chỉ</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  value={field.value ?? ""}
                                  placeholder="Nhập tên cửa hàng"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          );
                        }}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* <div className="grid grid-cols-1 lg:grid-cols-1 items-center">
                      <FormField
                        control={form.control}
                        name="longitude"
                        render={({ field }) => {
                          return (
                            <FormItem>
                              <FormLabel>Kinh độ</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  value={field.value ?? ""}
                                  placeholder="Nhập tên cửa hàng"
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
                        name="latitude"
                        render={({ field }) => {
                          return (
                            <FormItem>
                              <FormLabel>Vĩ độ</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  value={field.value ?? ""}
                                  placeholder="Nhập tên cửa hàng"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          );
                        }}
                      />
                    </div> */}
                    <div className="grid grid-cols-1 lg:grid-cols-1 items-center">
                      <FormField
                        control={form.control}
                        name="wifiName"
                        render={({ field }) => {
                          return (
                            <FormItem>
                              <FormLabel>Tên wifi</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  value={field.value ?? ""}
                                  placeholder="Nhập tên cửa hàng"
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
                        name="wifiPassword"
                        render={({ field }) => {
                          return (
                            <FormItem>
                              <FormLabel>Mật khẩu wifi</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  value={field.value ?? ""}
                                  placeholder="Nhập tên cửa hàng"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          );
                        }}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                    <div className="grid grid-cols-1 lg:grid-cols-1 items-center">
                      <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => {
                          return (
                            <FormItem>
                              <FormLabel>Mô tả</FormLabel>
                              <FormControl>
                                <Textarea
                                  {...field}
                                  value={field.value ?? ""}
                                  placeholder="Nhập tên cửa hàng"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          );
                        }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </Form>
      <div>
        <Card>
          <CardHeader>Các tài khoản</CardHeader>
          <CardContent>
            
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EditStorePage;
