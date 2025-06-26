import { DataTable } from "@/components/table/data-table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useMenu } from "@/hooks/use-menu";
import { useQueryParams } from "@/hooks/use-query-params";
import { handleApiError } from "@/lib/error";
import { columns } from "./store/column";
import { useForm } from "react-hook-form";
import { UpdateBrandStoreSchema, type TUpdateBrandStore } from "@/schema/menu.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRowSelection } from "@/hooks/use-row-selection";
import { Form } from "@/components/ui/form";

type Props = {
    brandMenuId: string;
    storeIds: string[];
}

const StoreMenu = ( { brandMenuId, storeIds }: Props ) =>
{
    const { handleRowSelectionChange: handleSelection } = useRowSelection();
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
    const form = useForm<TUpdateBrandStore>( {
        resolver: zodResolver( UpdateBrandStoreSchema ),
        defaultValues: {
            brandMenuId: brandMenuId,
            storeIds: storeIds,
        }
    } )
    const onSubmit = ( data: TUpdateBrandStore ) =>
    {
        console.log( "onSubmit data:", data );
    }

    const onSelectionChange = (
        selected: string[],
        deselected: string[]
    ) =>
    {
        const currentIds = form.getValues( "storeIds" ) as string[];

        let updatedIds = [ ...currentIds ];
        selected.forEach( id =>
        {
            if ( !updatedIds.includes( id ) )
            {
                updatedIds.push( id );
            }
        } );

        updatedIds = updatedIds.filter( id => !deselected.includes( id ) );

        form.setValue( "storeIds", updatedIds );
        console.log( "Selection changed - Added:", selected, "Removed:", deselected );
    }
    return (
        <Form { ...form }>
            <form onSubmit={ form.handleSubmit( onSubmit ) }>
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
                            rowSelection={
                                items.reduce<Record<string, boolean>>( ( acc, item ) =>
                                {
                                    acc[ item.id ] = ( form.watch( "storeIds" ) as string[] ).includes( item.id );
                                    return acc;
                                }, {} )
                            }
                            onRowSelectionChange={ ( newSelection ) =>
                                handleSelection( newSelection, onSelectionChange )
                            }
                        />
                    </CardContent>
                    <CardFooter className="flex justify-end">
                        <Button type="submit" >
                            Cập nhật
                        </Button>
                    </CardFooter>
                </Card>
            </form>
        </Form>
    )
}

export default StoreMenu