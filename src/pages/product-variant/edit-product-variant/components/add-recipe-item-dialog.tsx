import { DataTable } from '@/components/table/data-table';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useIngredient } from '@/hooks/use-ingredient';
import { useProductVariant } from '@/hooks/use-product-variant';
import { useQueryParams } from '@/hooks/use-query-params';
import { handleApiError } from '@/lib/error';
import { RequestRecipeItemSchema, type TRequestRecipeItem } from '@/schema/product-variant.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState, type ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import { ingredientColumns } from './column';
import { useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

type Props = {
    productVariantId: string;
    children: ReactNode;
    existedIngredientIds?: string[];
}

const AddRecipeItemDialog = ( {
    productVariantId,
    children,
    existedIngredientIds = [],
}: Props ) =>
{
    const queryClient = useQueryClient();
    const { addRecipeItemMutation } = useProductVariant();
    const [ isOpen, setIsOpen ] = useState( false );
    const {
        currentPage,
        pageSize,
        sortBy,
        isAsc,
        setSort,
        setPage,
        setPageSize,
    } = useQueryParams();

    const { getIngredients } = useIngredient()
    const { data, isLoading, isError, error } = getIngredients( {
        size: pageSize,
        page: currentPage,
        sortBy: sortBy,
        isAsc: isAsc,
    } );
    //console.log( "ProductTable data:", data?.data.data.items, " isLoading:", isLoading );

    if ( isError && error )
    {
        handleApiError( error );
    }

    const items = data?.data.data.items.filter( item => !existedIngredientIds.includes( item.id ) ) || [];
    const total = data?.data.data.total || 0;

    const sortValue = {
        id: sortBy,
        desc: !isAsc,
    }

    const form = useForm<TRequestRecipeItem>( {
        resolver: zodResolver( RequestRecipeItemSchema ),
        defaultValues: {
            ingredientId: undefined,
            quantity: undefined,
        },
    } );

    const onSubmit = async ( data: TRequestRecipeItem ) =>
    {
        if ( !productVariantId )
        {
            return;
        }
        if ( data.ingredientId === undefined || data.ingredientId === "" )
        {
            form.setError( 'ingredientId', { type: 'manual', message: 'Vui lòng chọn thành phần' } );
            return;
        }
        if ( data.quantity === undefined || data.quantity <= 0 )
        {
            form.setError( 'quantity', { type: 'manual', message: 'Số lượng phải lớn hơn 0' } );
            return;
        }
        try
        {
            await addRecipeItemMutation.mutateAsync( {
                productVariantId: productVariantId,
                data: data,
            } );
            toast.success( "Thêm thành phần vào công thức thành công" );
            queryClient.invalidateQueries( {
                queryKey: [ 'recipeItems', productVariantId ],
            } );
            form.reset();
            setIsOpen( false );
        }
        catch ( error )
        {
            handleApiError( error );
        }
    };

    const handleRowSelectionChange = (
        newSelection: Record<string, boolean>,
        oldSelection: Record<string, boolean>
    ) =>
    {
        const newlySelectedId = Object.keys( newSelection ).find(
            ( id ) => newSelection[ id ] && !oldSelection[ id ]
        );
        if ( newlySelectedId )
        {
            form.setValue( 'ingredientId', newlySelectedId );
        } else
        {
            form.setValue( 'ingredientId', '' );
        }
    }


    return (
        <Dialog open={ isOpen } onOpenChange={ setIsOpen }>
            <DialogTrigger asChild>
                { children }
            </DialogTrigger>
            <DialogContent className="sm:max-w-[1000px] rounded-3xl [&>button]:hidden">
                <Form { ...form }>
                    <form onSubmit={ form.handleSubmit( onSubmit, ( errors ) =>
                    {
                        console.error( "Form validation errors:", errors );
                    } ) } noValidate>
                        <DialogHeader>
                            <DialogTitle>Thêm thành phần</DialogTitle>
                            <DialogDescription>
                                Thêm thành phần và số lượng cho công thức này.
                            </DialogDescription>
                        </DialogHeader>
                        <FormMessage>
                            { form.formState.errors.ingredientId?.message }
                        </FormMessage>
                        <DataTable
                            isShort
                            columns={ ingredientColumns }
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
                            rowSelection={
                                items.reduce<Record<string, boolean>>( ( acc, item ) =>
                                {
                                    acc[ item.id ] = form.watch( "ingredientId" ) as string === item.id;
                                    return acc;
                                }, {} )
                            }
                            onRowSelectionChange={ handleRowSelectionChange }
                        />
                        <FormField
                            control={ form.control }
                            name="quantity"
                            render={ ( { field } ) => (
                                <FormItem className='mt-4'>
                                    <FormLabel>Số lượng *</FormLabel>
                                    <FormControl>
                                        <Input
                                            disabled={ addRecipeItemMutation.isPending || form.watch( 'ingredientId' ) === undefined || form.watch( 'ingredientId' ) === '' }
                                            placeholder="Nhập số lượng"
                                            { ...field }
                                            onChange={ ( e ) => field.onChange( Number( e.target.value ) ) }
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            ) }
                        />
                        <DialogFooter className="mt-6">
                            <Button type="button" variant="outline" onClick={ () =>
                            {
                                form.reset();
                                setIsOpen( false );
                            } }>Hủy</Button>
                            <Button type="submit" disabled={ addRecipeItemMutation.isPending }>Lưu</Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}

export default AddRecipeItemDialog