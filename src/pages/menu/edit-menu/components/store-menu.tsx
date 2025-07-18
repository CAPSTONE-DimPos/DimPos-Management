import { DataTable } from "@/components/table/data-table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { useMenu } from "@/hooks/use-menu";
import { useQueryParams } from "@/hooks/use-query-params";
import { handleApiError } from "@/lib/error";
import { UpdateBrandStoreSchema, type TUpdateBrandStore } from "@/schema/menu.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { columns } from "./store/column";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/redux/store";
import { handleChangeModalState } from "@/redux/modal/modal-slice";
import ConfirmDialog from "@/components/dialog/confirm-dialog";

type Props = {
    brandMenuId: string;
    storeIds: string[];
}

const StoreMenu = ( { brandMenuId, storeIds }: Props ) =>
{
    const queryClient = useQueryClient();
    const dispatch = useDispatch();
    const { getStoresByBrandMenuId, updateStoresByBrandMenuId } = useMenu();
    const { isOpen } = useSelector( ( state: RootState ) => state.modal );
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
    const onSubmit = async ( data: TUpdateBrandStore ) =>
    {
        //console.log( "onSubmit data:", data );
        try
        {
            await updateStoresByBrandMenuId.mutateAsync( data );
            queryClient.invalidateQueries( { queryKey: [ 'brandMenuProducts', brandMenuId ] } );
            toast.success( "Cập nhật sản phẩm trong thực đơn thành công!" );
        } catch ( error )
        {
            console.error( "Error updating store menu:", error );
            handleApiError( error );
        }
    }


    const handleRowSelectionChange = (
        newSelection: Record<string, boolean>,
        oldSelection: Record<string, boolean>
    ) =>
    {
        const currentStoreIds = form.getValues( "storeIds" ) as string[];

        // Tìm những row được selected và deselected
        const newlySelected = Object.entries( newSelection )
            .filter( ( [ rowId, isSelected ] ) => isSelected && !oldSelection[ rowId ] )
            .map( ( [ rowId ] ) => rowId );

        const newlyDeselected = Object.entries( oldSelection )
            .filter( ( [ rowId, wasSelected ] ) => wasSelected && !newSelection[ rowId ] )
            .map( ( [ rowId ] ) => rowId );

        //console.log( "Newly selected:", newlySelected );
        //console.log( "Newly deselected:", newlyDeselected );

        // Cập nhật form value
        let updatedIds = [ ...currentStoreIds ];

        // Thêm những item được select
        newlySelected.forEach( id =>
        {
            if ( !updatedIds.includes( id ) )
            {
                updatedIds.push( id );
            }
        } );

        // Xóa những item được deselect
        updatedIds = updatedIds.filter( id => !newlyDeselected.includes( id ) );

        // Set form value
        form.setValue( "storeIds", updatedIds );

        //console.log( "Updated storeIds:", updatedIds );
    }

    const handleConfirmSubmit = () =>
    {
        // Trigger form submission programmatically
        form.handleSubmit( onSubmit )();
    }

    return (
        <Form { ...form }>
            <form onSubmit={ form.handleSubmit( onSubmit, ( error ) =>
            {
                console.error( error );
            } ) }>
                <ConfirmDialog
                    open={ isOpen }
                    onOpenChange={ ( open ) => dispatch( handleChangeModalState( open ) ) }
                    title="Xác nhận cập nhật phiếu yêu cầu nhập hàng"
                    description="Bạn có chắc chắn muốn cập nhật phiếu yêu cầu nhập hàng này không?"
                    actionLabel="Xác nhận"
                    onAction={ handleConfirmSubmit } // Pass the submit handler
                />
                <Card className='border-none shadow-none bg-white gap-3 my-4'>
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
                            onRowSelectionChange={ handleRowSelectionChange }
                        />
                    </CardContent>
                    <CardFooter className="flex justify-end">
                        <Button type="button" onClick={ () => dispatch( handleChangeModalState( true ) ) }>
                            Cập nhật
                        </Button>
                    </CardFooter>
                </Card>
            </form>
        </Form>
    )
}

export default StoreMenu