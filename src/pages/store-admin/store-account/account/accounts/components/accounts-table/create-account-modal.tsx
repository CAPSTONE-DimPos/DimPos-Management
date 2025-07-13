import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useForm, Controller } from "react-hook-form";

type Props = {
  open: boolean;
  onClose: () => void;
};

type TForm = {
  fullName: string;
  email: string;
  phone: string;
  password: string;
  address: string;
  birthday: string;
  isActive: boolean;
  role: string;
};

const CreateEmployeeModal = ({ open, onClose }: Props) => {
  const { register, handleSubmit, control } = useForm<TForm>({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      password: "",
      address: "",
      birthday: "",
      isActive: true,
      role: "",
    },
  });

  const onSubmit = (data: TForm) => {
    console.log("Form submitted", data);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">Tạo tài khoản nhân viên</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium mb-1">Họ tên</p>
              <Input {...register("fullName")} placeholder="Nguyễn Văn A" />
            </div>
            <div>
              <p className="text-sm font-medium mb-1">Email</p>
              <Input {...register("email")} placeholder="email@example.com" />
            </div>
            <div>
              <p className="text-sm font-medium mb-1">SĐT</p>
              <Input {...register("phone")} placeholder="0912xxxxxx" />
            </div>
            <div>
              <p className="text-sm font-medium mb-1">Mật khẩu</p>
              <Input {...register("password")} placeholder="••••••••" type="password" />
            </div>
            <div>
              <p className="text-sm font-medium mb-1">Địa chỉ</p>
              <Input {...register("address")} placeholder="123 Lê Lợi, Q1" />
            </div>
            <div>
              <p className="text-sm font-medium mb-1">Ngày sinh</p>
              <Input {...register("birthday")} type="date" />
            </div>
            <div>
              <p className="text-sm font-medium mb-1">Vai trò</p>
              <Input {...register("role")} placeholder="Quản lý, thu ngân,..." />
            </div>
            <div className="flex items-center gap-3 mt-6">
              <p className="text-sm font-medium">Hoạt động</p>
              <Controller
                control={control}
                name="isActive"
                render={({ field }) => (
                  <Switch checked={field.value} onCheckedChange={field.onChange} />
                )}
              />
            </div>
          </div>

          <div className="pt-2 flex justify-end">
            <Button type="submit">Tạo</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateEmployeeModal;
