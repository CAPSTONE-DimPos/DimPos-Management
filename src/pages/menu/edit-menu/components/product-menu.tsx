import { DataTable } from "@/components/table/data-table";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useMenu } from "@/hooks/use-menu";
import { useQueryParams } from "@/hooks/use-query-params";
import { handleApiError } from "@/lib/error";
import { columns } from "./product/column";
import { useForm } from "react-hook-form";
import { UpdateBrandProductSchema, type TUpdateBrandProduct } from "@/schema/menu.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import ConfirmDialog from "@/components/dialog/confirm-dialog";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/redux/store";
import { handleChangeModalState } from "@/redux/modal/modal-slice";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

type Props = {
    brandMenuId: string;
    productVariantIds: string[];
}


const ProductMenu = ( { brandMenuId, productVariantIds }: Props ) =>
{
    const queryClient = useQueryClient();
    const { isOpen } = useSelector( ( state: RootState ) => state.modal );
    const dispatch = useDispatch();
    const {
        currentPage,
        pageSize,
        sortBy,
        isAsc,
        setSort,
        setPage,
        setPageSize,
    } = useQueryParams( {
        defaultSortBy: "name",
    } );
    const { getProductsByBrandMenuId, updateProductsByBrandMenuId } = useMenu()
    const { data: productsData, isLoading: productsLoading, isError: isProductsError, error: productsError } =
        getProductsByBrandMenuId(
            brandMenuId,
            {
                size: pageSize,
                page: currentPage,
                sortBy: sortBy,
                isAsc: isAsc,
            }
        );
    const items = productsData?.data.data.items || [];
    const total = productsData?.data.data.total || 0;
    if ( isProductsError && productsError )
    {
        handleApiError( productsError );
    }

    const sortValue = {
        id: sortBy,
        desc: !isAsc,
    }

    const form = useForm<TUpdateBrandProduct>( {
        resolver: zodResolver( UpdateBrandProductSchema ),
        defaultValues: {
            brandMenuId: brandMenuId,
            productVariantIds: productVariantIds,
        }
    } )


    const onSubmit = async ( data: TUpdateBrandProduct ) =>
    {
        try
        {
            await updateProductsByBrandMenuId.mutateAsync( data )
            queryClient.invalidateQueries( { queryKey: [ 'brandMenuProducts', brandMenuId ] } );
            toast.success( "Cập nhật sản phẩm trong thực đơn thành công!" );
        } catch ( error )
        {
            handleApiError( error );
        }
    }

    const handleRowSelectionChange = (
        newSelection: Record<string, boolean>,
        oldSelection: Record<string, boolean>
    ) =>
    {
        const currentProductVariantIds = form.getValues( "productVariantIds" ) as string[];

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
        let updatedIds = [ ...currentProductVariantIds ];

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
        form.setValue( "productVariantIds", updatedIds );

        //console.log( "Updated productVariantIds:", updatedIds );
    }

    const handleConfirmSubmit = () =>
    {
        // Trigger form submission programmatically
        form.handleSubmit( onSubmit )();
    }

    return (
        <Form { ...form }>
            <form onSubmit={ form.handleSubmit( onSubmit ) }>
                <ConfirmDialog
                    open={ isOpen }
                    onOpenChange={ ( open ) => dispatch( handleChangeModalState( open ) ) }
                    title="Xác nhận cập nhật sản phẩm trong thực đơn"
                    description="Bạn có chắc chắn muốn cập nhật sản phẩm trong thực đơn này không?"
                    actionLabel="Xác nhận"
                    onAction={ handleConfirmSubmit } // Pass the submit handler
                />
                <Card className='border-none shadow-none bg-white gap-3 my-4'>
                    <CardHeader>
                        <CardTitle>
                            Sản phẩm trong thực đơn
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
                            isLoading={ productsLoading }
                            sortValues={ [ sortValue ] }
                            onSortChange={ ( newSort ) =>
                            {
                                setSort( newSort[ 0 ].id, !newSort[ 0 ].desc );
                            } }
                            rowSelection={
                                items.reduce<Record<string, boolean>>( ( acc, item ) =>
                                {
                                    acc[ item.id ] = ( form.watch( "productVariantIds" ) as string[] ).includes( item.id );
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

export default ProductMenu