import { useState } from "react";
import { useStaff } from "@/hooks/use-staff";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/table/data-table";
import { staffColumns } from "./components/accounts-table/column";
import CreateAccountDialog from "./components/accounts-table/create-account-dialog";

const AccountsCard = () => {
  const { staffsQuery } = useStaff();
  const fakeData = staffsQuery.data ?? [];

  const [open, setOpen] = useState(false);

  return (
    <>
      <Card className="mt-6">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Danh sách nhân viên</CardTitle>
          <Button onClick={() => setOpen(true)}>+ Tạo tài khoản</Button>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={staffColumns}
            data={fakeData}
            isLoading={staffsQuery.isLoading}
            totalItems={fakeData.length}
            currentPage={1}
            pageSize={fakeData.length}
            onPageChange={() => {}}
            onPageSizeChange={() => {}}
          />
        </CardContent>
      </Card>

      <CreateAccountDialog open={open} onOpenChange={setOpen} />
    </>
  );
};

export default AccountsCard;
