import { DataTable } from "@/components/table/data-table";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useMenu } from "@/hooks/use-menu";
import { useQueryParams } from "@/hooks/use-query-params";
import { handleApiError } from "@/lib/error";
import { columns } from "./column";
import { useForm } from "react-hook-form";
import { UpdateBrandProductSchema, type TUpdateBrandProduct } from "@/schema/menu.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

type Props = {
    brandMenuId: string;
    productVariantIds: string[];
}


const ProductMenu = ( { brandMenuId, productVariantIds }: Props ) =>
{
    console.log( "ProductMenu brandMenuId:", brandMenuId );
    console.log( "ProductMenu productVariantIds:", productVariantIds );
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
    const { getProductsByBrandMenuId } = useMenu()
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
            productList: [ ...items.map( item => ( {
                id: item.id,
                isSelected: item.isSelected || false,
            } )
            ) ],
        }
    } )


    const onSubmit = ( data: TUpdateBrandProduct ) =>
    {
        console.log( "onSubmit data:", data );
    }

    // const [ rowSelection, setRowSelection ] = useState<Record<string, boolean>>(

    // );

    return (
        <Form { ...form }>
            <form onSubmit={ form.handleSubmit( onSubmit ) }>
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
                        // rowSelection={ rowSelection }
                        // onRowSelectionChange={ setRowSelection }
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

export default ProductMenu