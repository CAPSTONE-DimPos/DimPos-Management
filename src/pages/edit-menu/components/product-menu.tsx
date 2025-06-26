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
import { useRowSelection } from "@/hooks/use-row-selection";
import ConfirmDialog from "@/components/dialog/confirm-dialog";

type Props = {
    brandMenuId: string;
    productVariantIds: string[];
}


const ProductMenu = ( { brandMenuId, productVariantIds }: Props ) =>
{
    const { handleRowSelectionChange: handleSelection } = useRowSelection();
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
            const result = updateProductsByBrandMenuId.mutateAsync( data )

        } catch ( error )
        {
            handleApiError( error );
        }
    }

    const onSelectionChange = (
        selected: string[],
        deselected: string[]
    ) =>
    {
        const currentIds = form.getValues( "productVariantIds" ) as string[];

        let updatedIds = [ ...currentIds ];
        selected.forEach( id =>
        {
            if ( !updatedIds.includes( id ) )
            {
                updatedIds.push( id );
            }
        } );

        updatedIds = updatedIds.filter( id => !deselected.includes( id ) );

        form.setValue( "productVariantIds", updatedIds );
        console.log( "Selection changed - Added:", selected, "Removed:", deselected );
    }

    return (
        <Form { ...form }>
            <form onSubmit={ form.handleSubmit( onSubmit ) }>
                {/* <ConfirmDialog

                /> */}
                <Card className='border-none shadow-none gap-3 my-4'>
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
                            onRowSelectionChange={ ( newSelection ) =>
                                handleSelection( newSelection, onSelectionChange )
                            }
                        />
                    </CardContent>
                    <CardFooter className="flex justify-end">
                        <Button>
                            Cập nhật
                        </Button>
                    </CardFooter>
                </Card>
            </form>
        </Form>
    )
}

export default ProductMenu