import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { copyToClipboard } from "@/lib/utils";
import type { TBrandStore } from "@/schema/menu.schema";
import type { ColumnDef } from "@tanstack/react-table";
import { Copy, MapPin, Mail, Phone } from "lucide-react";

export const columns: ColumnDef<TBrandStore>[] = [
    {
        id: "select",
        header: ( { table } ) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    ( table.getIsSomePageRowsSelected() && "indeterminate" )
                }
                onCheckedChange={ ( value ) => table.toggleAllPageRowsSelected( !!value ) }
                aria-label="Select all"
            />
        ),
        cell: ( { row } ) => (
            <Checkbox
                checked={ row.getIsSelected() }
                onCheckedChange={ ( value ) => row.toggleSelected( !!value ) }
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "name",
        header: () => (
            <div className="font-semibold">
                Tên Cửa Hàng
            </div>
        ),
        cell: ( info ) =>
        {
            const name = info.getValue() as string;
            return (
                <div className="max-w-[200px]">
                    <div className="font-medium text-foreground truncate cursor-pointer hover:text-primary transition-colors">
                        { name }
                    </div>
                </div>
            );
        },
    },
    {
        accessorKey: "address",
        header: () => (
            <div className="font-semibold">
                Địa Chỉ
            </div>
        ),
        cell: ( info ) =>
        {
            const address = info.getValue() as string;
            const row = info.row.original;
            const hasCoordinates = row.latitude && row.longitude;

            return (
                <div className="max-w-[250px]">
                    <div className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                            <div className="text-sm text-foreground truncate" title={ address }>
                                { address }
                            </div>
                            { hasCoordinates && (
                                <Badge variant="outline" className="mt-1 text-xs">
                                    Có tọa độ
                                </Badge>
                            ) }
                        </div>
                    </div>
                </div>
            );
        },
    },
    {
        accessorKey: "phone",
        header: () => (
            <div className="font-semibold">
                Số Điện Thoại
            </div>
        ),
        cell: ( info ) =>
        {
            const phone = info.getValue() as string;

            if ( !phone )
            {
                return (
                    <Badge variant="outline" className="text-muted-foreground">
                        Chưa có
                    </Badge>
                );
            }

            return (
                <div className="flex items-center gap-2 max-w-[140px]">
                    <div className="flex items-center gap-1 flex-1 min-w-0">
                        <Phone className="h-3 w-3 text-muted-foreground flex-shrink-0" />
                        <span className="font-mono text-sm truncate" title={ phone }>{ phone }</span>
                    </div>
                    <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0 hover:bg-muted flex-shrink-0"
                        onClick={ () => copyToClipboard( phone, "Số điện thoại" ) }
                    >
                        <Copy className="h-3 w-3" />
                    </Button>
                </div>
            );
        },
    },
    {
        accessorKey: "email",
        header: () => (
            <div className="font-semibold">
                Email
            </div>
        ),
        cell: ( info ) =>
        {
            const email = info.getValue() as string;

            if ( !email )
            {
                return (
                    <Badge variant="outline" className="text-muted-foreground">
                        Chưa có
                    </Badge>
                );
            }

            return (
                <div className="flex items-center gap-2 max-w-[200px]">
                    <div className="flex items-center gap-1 flex-1">
                        <Mail className="h-3 w-3 text-muted-foreground" />
                        <span className="text-sm truncate">{ email }</span>
                    </div>
                    <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0 hover:bg-muted flex-shrink-0"
                        onClick={ () => copyToClipboard( email, "Email" ) }
                    >
                        <Copy className="h-3 w-3" />
                    </Button>
                </div>
            );
        },
    },
    {
        accessorKey: "latitude",
        header: () => (
            <div className="text-center font-semibold">
                Tọa Độ
            </div>
        ),
        cell: ( info ) =>
        {
            const row = info.row.original;
            const latitude = row.latitude;
            const longitude = row.longitude;

            if ( !latitude || !longitude )
            {
                return (
                    <div className="flex justify-center">
                        <Badge variant="outline" className="text-muted-foreground">
                            Chưa có
                        </Badge>
                    </div>
                );
            }

            const coordinates = `${ latitude }, ${ longitude }`;

            return (
                <div className="flex justify-center">
                    <div className="flex items-center gap-2">
                        <Badge
                            variant="secondary"
                            className="font-mono text-xs bg-blue-100 text-blue-800 hover:bg-blue-200"
                        >
                            <MapPin className="h-3 w-3 mr-1" />
                            GPS
                        </Badge>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="h-6 w-6 p-0 hover:bg-muted"
                            onClick={ () => copyToClipboard( coordinates, "Tọa độ" ) }
                            title={ coordinates }
                        >
                            <Copy className="h-3 w-3" />
                        </Button>
                    </div>
                </div>
            );
        },
    },
    // Uncomment and customize the actions column if needed
    // {
    //     id: "actions",
    //     header: () => (
    //         <div className="text-center font-semibold">
    //             Thao Tác
    //         </div>
    //     ),
    //     cell: ({ row }) => {
    //         const store = row.original;
    //         
    //         return (
    //             <div className="flex justify-center">
    //                 <DropdownMenu>
    //                     <DropdownMenuTrigger asChild>
    //                         <Button
    //                             variant="ghost"
    //                             size="icon"
    //                             className="h-8 w-8 p-0 hover:bg-muted"
    //                         >
    //                             <span className="sr-only">Thao tác</span>
    //                             <MoreHorizontal className="h-4 w-4" />
    //                         </Button>
    //                     </DropdownMenuTrigger>
    //                     <DropdownMenuContent align="end" className="w-48">
    //                         <DropdownMenuLabel className="text-xs text-muted-foreground">
    //                             Thao tác cho "{store.name}"
    //                         </DropdownMenuLabel>
    //                         <DropdownMenuSeparator />
    //                         
    //                         <DropdownMenuItem
    //                             className="cursor-pointer hover:bg-blue-50 focus:bg-blue-50"
    //                             onClick={() => {
    //                                 //console.log('Edit store:', store.id);
    //                             }}
    //                         >
    //                             <Edit className="mr-2 h-4 w-4 text-blue-600" />
    //                             <span className="text-blue-700">Chỉnh sửa</span>
    //                         </DropdownMenuItem>
    //                         
    //                         <DropdownMenuItem
    //                             className="cursor-pointer hover:bg-gray-50 focus:bg-gray-50"
    //                             onClick={() => copyToClipboard(store.id, "Store ID")}
    //                         >
    //                             <Copy className="mr-2 h-4 w-4 text-gray-600" />
    //                             <span className="text-gray-700">Sao chép ID</span>
    //                         </DropdownMenuItem>
    //                         
    //                         <DropdownMenuSeparator />
    //                         
    //                         <DropdownMenuItem
    //                             className="cursor-pointer hover:bg-red-50 focus:bg-red-50"
    //                             onClick={() => {
    //                                 //console.log('Delete store:', store.id);
    //                             }}
    //                         >
    //                             <Trash2 className="mr-2 h-4 w-4 text-red-600" />
    //                             <span className="text-red-700">Xóa cửa hàng</span>
    //                         </DropdownMenuItem>
    //                     </DropdownMenuContent>
    //                 </DropdownMenu>
    //             </div>
    //         );
    //     },
    //     size: 80,
    // },
];