import { useState } from "react";
import { Eye, Plus } from "lucide-react";
import { DataTable } from "@/components/table/data-table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import CreateEmployeeModal from "./components/accounts-table/create-account-modal";

type TAccount = {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  role: string;
};

const mockAccounts: TAccount[] = [
  {
    id: "emp-01",
    fullName: "Nguyễn Văn A",
    phone: "0909123456",
    email: "nguyenvana@example.com",
    role: "Quản lý",
  },
  {
    id: "emp-02",
    fullName: "Trần Thị B",
    phone: "0911222333",
    email: "tranthib@example.com",
    role: "Thu ngân",
  },
];

const columns = (onView: (account: TAccount) => void) => [
  {
    accessorKey: "fullName",
    header: "Tên nhân viên",
    cell: ({ row }: any) => <div>{row.original.fullName}</div>,
  },
  {
    accessorKey: "phone",
    header: "SĐT",
    cell: ({ row }: any) => <div>{row.original.phone}</div>,
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }: any) => <div>{row.original.email}</div>,
  },
  {
    accessorKey: "role",
    header: "Vai trò",
    cell: ({ row }: any) => (
      <div className="capitalize">{row.original.role}</div>
    ),
  },
  {
    id: "actions",
    header: "Thao tác",
    cell: ({ row }: any) => {
      const account = row.original;
      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Eye
                className="h-4 w-4 cursor-pointer"
                onClick={() => onView(account)}
              />
            </TooltipTrigger>
            <TooltipContent>
              <div>Xem chi tiết</div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    },
  },
];

const AccountTable = () => {
  const [selectedAccount, setSelectedAccount] = useState<TAccount | null>(null);
  const [openCreateModal, setOpenCreateModal] = useState(false); // modal control

  return (
    <div className="p-6 bg-white rounded shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Danh sách tài khoản nhân viên</h2>
        <Button onClick={() => setOpenCreateModal(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Tạo tài khoản
        </Button>
      </div>

      <DataTable
        columns={columns(setSelectedAccount)}
        data={mockAccounts}
        totalItems={mockAccounts.length}
        currentPage={1}
        pageSize={10}
        onPageChange={() => {}}
        onPageSizeChange={() => {}}
        isLoading={false}
        sortValues={[]}
        onSortChange={() => {}}
      />

      {selectedAccount && (
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h3 className="font-bold text-lg mb-2">Chi tiết nhân viên</h3>
          <p><strong>Họ tên:</strong> {selectedAccount.fullName}</p>
          <p><strong>Email:</strong> {selectedAccount.email}</p>
          <p><strong>SĐT:</strong> {selectedAccount.phone}</p>
          <p><strong>Vai trò:</strong> {selectedAccount.role}</p>
          <button
            className="mt-2 text-sm text-blue-600 underline"
            onClick={() => setSelectedAccount(null)}
          >
            Đóng
          </button>
        </div>
      )}

      <CreateEmployeeModal open={openCreateModal} onClose={() => setOpenCreateModal(false)} />
    </div>
  );
};

export default AccountTable;
