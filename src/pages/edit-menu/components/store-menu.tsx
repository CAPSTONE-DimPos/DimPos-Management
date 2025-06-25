import { DataTable } from "@/components/table/data-table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useMenu } from "@/hooks/use-menu";
import { useQueryParams } from "@/hooks/use-query-params";
import { handleApiError } from "@/lib/error";
import { columns } from "./store/column";

type Props = {
    brandMenuId: string;
}

const StoreMenu = ( { brandMenuId }: Props ) =>
{
    const { getStoresByBrandMenuId } = useMenu();
    const {
        currentPage,
        pageSize,
        sortBy,
        isAsc,
        setSort,
        setPage,
        setPageSize,
    } = useQueryParams();
    const { data: storesData, isLoading: storesLoading, isError: isStoresError, error: storesError } =
        getStoresByBrandMenuId(
            brandMenuId,
            {
                size: pageSize,
                page: currentPage,
                sortBy: sortBy,
                isAsc: isAsc,
            }
        );
    if ( isStoresError && storesError )
    {
        handleApiError( storesError );
    }
    const items = storesData?.data.data.items || [];
    const total = storesData?.data.data.total || 0;

    const sortValue = {
        id: sortBy,
        desc: !isAsc,
    }

    return (
        <Card className='border-none shadow-none gap-3 my-4'>
            <CardHeader>
                <CardTitle>
                    Danh sách cửa hàng áp dụng
                </CardTitle>
            </CardHeader>
            <CardContent>
                <DataTable
                    columns={ columns }
                    data={ items }
                    totalItems={ total }
                    currentPage={ currentPage }
                    pageSize={ pageSize }
                    onPageChange={ setPage }
                    onPageSizeChange={ setPageSize }
                    isLoading={ storesLoading }
                    sortValues={ [ sortValue ] }
                    onSortChange={ ( newSort ) =>
                    {
                        setSort( newSort[ 0 ].id, !newSort[ 0 ].desc );
                    } }
                // rowSelection={
                //     items.reduce<Record<string, boolean>>( ( acc, item ) =>
                //     {
                //         acc[ item.id ] = ( form.watch( "productVariantIds" ) as string[] ).includes( item.id );
                //         return acc;
                //     }, {} )
                // }
                // onRowSelectionChange={ ( newSelection ) =>
                //     handleSelection( newSelection, onSelectionChange )
                // }
                />
            </CardContent>
            <CardFooter className="flex justify-end">
                <Button type="submit" >
                    Cập nhật
                </Button>
            </CardFooter>
        </Card>
    )
}

export default StoreMenu