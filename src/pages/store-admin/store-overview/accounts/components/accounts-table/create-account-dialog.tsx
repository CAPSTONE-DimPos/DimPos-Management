import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CreateAccountSchema, type TCreateAccount } from "@/schema/staff.schema";
import { useStaff } from "@/hooks/use-staff";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CreateAccountDialog = ({ open, onOpenChange }: Props) => {
  const form = useForm<TCreateAccount>({
    resolver: zodResolver(CreateAccountSchema),
    defaultValues: {
      code: "",
      username: "",
      password: "",
      email: null,
    },
  });

  const { createStaffMutation } = useStaff({
  onCreateSuccess: () => {
    form.reset();
    onOpenChange(false);
  },
});


  const onSubmit = (data: TCreateAccount) => {

  createStaffMutation.mutate(data);
};

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Tạo tài khoản nhân viên</DialogTitle>
        </DialogHeader>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <Input placeholder="Mã nhân viên" {...form.register("code")} disabled={createStaffMutation.isPending} />
          <Input placeholder="Tên đăng nhập" {...form.register("username")} disabled={createStaffMutation.isPending} />
          <Input placeholder="Mật khẩu" type="password" {...form.register("password")} disabled={createStaffMutation.isPending} />
          <Input placeholder="Email (tuỳ chọn)" {...form.register("email")}  />
          <Button type="submit" className="w-full" disabled={createStaffMutation.isPending}>
            {createStaffMutation.isPending ? "Đang tạo..." : "Tạo"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateAccountDialog;
