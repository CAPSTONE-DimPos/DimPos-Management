import { DataTable } from "@/components/table/data-table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { useProduct } from "@/hooks/use-product";
import { useQueryParams } from "@/hooks/use-query-params";
import { handleApiError } from "@/lib/error";
import { UpdateProductModifierOptionSchema, type TProductModifierOptionRequest } from "@/schema/product.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { columns } from "../../components/column";

type Props = {
    // initialData: TProductModifierOptionRequest;
    productId: string;
}

const ModifierGroupForm = ( { productId }: Props ) =>
{
    const form = useForm<TProductModifierOptionRequest>( {
        resolver: zodResolver( UpdateProductModifierOptionSchema ),
        defaultValues: {
            productId: productId,
            modifierGroupIds: [],
        },
    } );
    const {
        currentPage,
        pageSize,
        sortBy,
        isAsc,
        setSort,
        setPage,
        setPageSize,
    } = useQueryParams();

    const { getModifierGroups } = useProduct();
    const { data, isLoading, isError, error } = getModifierGroups( {
        size: pageSize,
        page: currentPage,
        sortBy,
        isAsc,
    } );

    if ( isError && error )
    {
        handleApiError( error );
    }

    const items = data?.data.data.items || [];
    const total = data?.data.data.total || 0;

    const sortValue = {
        id: sortBy,
        desc: !isAsc,
    };
    const onSubmit = async ( _: TProductModifierOptionRequest ) =>
    {

    }

    return (
        <Form { ...form }>
            <form onSubmit={ form.handleSubmit( onSubmit ) }>
                <div className="relative">
                    <Card className='shadow-none border-none bg-white h-fit'>
                        <CardHeader>
                            <CardTitle>Tùy chọn sản phẩm</CardTitle>
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
                                isLoading={ isLoading }
                                sortValues={ [ sortValue ] }
                                onSortChange={ ( newSort ) =>
                                {
                                    setSort( newSort[ 0 ].id, !newSort[ 0 ].desc );
                                } }
                            />
                        </CardContent>
                    </Card>
                    <div className="flex justify-end h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear sticky bottom-0 bg-transparent z-10">
                        <Button className='mr-8 py-5 px-10' type="submit" disabled={ false }>
                            Lưu
                        </Button>
                    </div>
                </div>

            </form>
        </Form>
    )
}

export default ModifierGroupForm