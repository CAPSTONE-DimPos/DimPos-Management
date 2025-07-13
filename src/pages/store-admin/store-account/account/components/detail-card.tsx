import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Edit } from "lucide-react";

type Props = {
  initialData: {
    name: string;
    code: string;
    branch: string;
    openingHours: string;
    isActive: boolean;
    address: string;
  };
};

const DetailCard = ({ initialData }: Props) => {
  return (
    <Card className="col-span-full bg-white shadow-none border-none gap-3">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-lg font-semibold">Thông tin cửa hàng</CardTitle>
          <CardDescription className="text-sm text-sidebar-label">
          </CardDescription>
        </div>
        <Button variant="default">
          <Edit className="mr-2 h-4 w-4" />
          Chỉnh sửa
        </Button>
      </CardHeader>

      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-span-2">
          <p className="text-sm font-medium text-foreground mb-2">Tên cửa hàng</p>
          <Input value={initialData.name} disabled className="bg-background disabled:opacity-90" />
        </div>

        <div className="md:col-span-1">
          <p className="text-sm font-medium text-foreground mb-2">Mã cửa hàng</p>
          <Input value={initialData.code} disabled className="bg-background disabled:opacity-90" />
        </div>

        <div className="md:col-span-1">
          <p className="text-sm font-medium text-foreground mb-2">Chi nhánh</p>
          <Input value={initialData.branch} disabled className="bg-background disabled:opacity-90" />
        </div>

        <div className="md:col-span-1">
          <p className="text-sm font-medium text-foreground mb-2">Khung giờ hoạt động</p>
          <Input value={initialData.openingHours} disabled className="bg-background disabled:opacity-90" />
        </div>

        <div className="md:col-span-1">
          <p className="text-sm font-medium text-foreground mb-2">Trạng thái hoạt động</p>
          <Input
            value={initialData.isActive ? "Đang hoạt động" : "Ngừng hoạt động"}
            disabled
            className="bg-background disabled:opacity-90"
          />
        </div>

        <div className="md:col-span-2">
          <p className="text-sm font-medium text-foreground mb-2">Địa chỉ cửa hàng</p>
          <Input value={initialData.address} disabled className="bg-background disabled:opacity-90" />
        </div>
      </CardContent>
    </Card>
  );
};

export default DetailCard;
