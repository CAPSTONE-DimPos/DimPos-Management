import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import type { TStore } from "@/schema/store.schema";
import type { ColumnDef } from "@tanstack/react-table";
import { Eye } from "lucide-react";

export const columns: ColumnDef<TStore>[] = [
    {
        accessorKey: "index",
        header: "STT",
        cell: ( { row } ) =>
        {
            return <div className="text-center font-medium">{ row.getValue( "index" ) }</div>;
        },
        size: 60,
    },
    {
        accessorKey: "code",
        header: "Mã cửa hàng",
        cell: ( { row } ) =>
        {
            const code = row.getValue( "code" ) as string;
            return (
                <div className="font-mono font-medium text-blue-600">
                    { code }
                </div>
            );
        },
        size: 120,
    },
    {
        accessorKey: "name",
        header: "Tên cửa hàng",
        cell: ( { row } ) =>
        {
            const name = row.getValue( "name" ) as string;
            const shortName = row.original.shortName;
            return (
                <div className="space-y-1">
                    <div className="font-medium text-gray-900">{ name }</div>
                    <div className="text-sm text-gray-500">({ shortName })</div>
                </div>
            );
        },
        size: 100,
    },
    {
        accessorKey: "phone",
        header: "Số điện thoại",
        cell: ( { row } ) =>
        {
            const phone = row.getValue( "phone" ) as string;
            return (
                <div className="font-mono text-gray-700">
                    { phone }
                </div>
            );
        },
        size: 130,
    },
    {
        accessorKey: "email",
        header: "Email",
        cell: ( { row } ) =>
        {
            const email = row.getValue( "email" ) as string;
            return (
                <div className="font-mono text-gray-700">
                    { email }
                </div>
            );
        },
        size: 130,
    },
    {
        accessorKey: "managerName",
        header: "Quản lý",
        cell: ( { row } ) =>
        {
            const managerName = row.getValue( "managerName" ) as string;
            return (
                <div className="text-gray-900">
                    { managerName || <span className="text-gray-400 italic">Chưa phân công</span> }
                </div>
            );
        },
        size: 150,
    },
    {
        id: "actions",
        header: "Thao tác",
        cell: ( { } ) =>
        {
            // const store = row.original;

            return (
                <div className="flex justify-center">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger >
                                <Eye className="h-4 w-4 hover:cursor-pointer" />
                                <TooltipContent>
                                    <div className="text-sm">
                                        Xem chi tiết
                                    </div>
                                </TooltipContent>
                            </TooltipTrigger>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            );
        },
        size: 80,
    },
];