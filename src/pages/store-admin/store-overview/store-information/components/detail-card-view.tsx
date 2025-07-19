import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";
import { StoreResponseSchema,type TStoreResponse } from "@/schema/store.schema";

type Props = {
  initialData: TStoreResponse;
};

const DetailCardView = ({ initialData }: Props) => {
  const form = useForm<TStoreResponse>({
    resolver: zodResolver(StoreResponseSchema),
    defaultValues: initialData,
  });

  const { register } = form;

  return (
    <Card className="col-span-full bg-white shadow-none border-none gap-3">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-lg font-semibold">Thông tin cửa hàng</CardTitle>
          <CardDescription></CardDescription>
        </div>
        <Button variant="default">
          <Edit className="mr-2 h-4 w-4" />
          Chỉnh sửa
        </Button>
      </CardHeader>

      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p className="text-sm font-medium text-foreground mb-2">Tên cửa hàng</p>
          <Input {...register("name")} disabled />
        </div>

        <div>
          <p className="text-sm font-medium text-foreground mb-2">Mã cửa hàng</p>
          <Input {...register("code")} disabled />
        </div>

        <div>
          <p className="text-sm font-medium text-foreground mb-2">Trạng thái hoạt động</p>
          <Input value={initialData.status ? "Ngừng hoạt động" : "Đang hoạt động"} disabled />
        </div>

        <div>
          <p className="text-sm font-medium text-foreground mb-2">Số tiền tạm ứng đầu ca</p>
          <Input
            value={
              initialData.startingStoreCashLending !== undefined
                ? `${initialData.startingStoreCashLending.toLocaleString()} ₫`
                : "Chưa thiết lập"
            }
            disabled
          />
        </div>

        <div className="md:col-span-2">
          <p className="text-sm font-medium text-foreground mb-2">Địa chỉ cửa hàng</p>
          <Input {...register("address")} disabled />
        </div>

        <div>
          <p className="text-sm font-medium text-foreground mb-2">Email</p>
          <Input {...register("email")} disabled />
        </div>

        <div>
          <p className="text-sm font-medium text-foreground mb-2">Số điện thoại</p>
          <Input {...register("phone")} disabled />
        </div>

        <div>
          <p className="text-sm font-medium text-foreground mb-2">Tên Wifi</p>
          <Input {...register("wifiName")} disabled />
        </div>

        <div>
          <p className="text-sm font-medium text-foreground mb-2">Mật khẩu Wifi</p>
          <Input {...register("wifiPassword")} disabled />
        </div>
      </CardContent>
    </Card>
  );
};

export default DetailCardView;
