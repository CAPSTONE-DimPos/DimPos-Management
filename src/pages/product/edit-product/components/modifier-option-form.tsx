import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useProduct } from "@/hooks/use-product";
import { handleApiError } from "@/lib/error";
import { UpdateProductModifierOptionSchema, type TProductModifierOptionRequest } from "@/schema/product.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

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
    const { getModifierGroups } = useProduct()
    const { data, isLoading, isError, error } = getModifierGroups( {
        size: 10000,
        page: 1,
    } );
    if ( isError && error )
    {
        handleApiError( error );
    }
    const onSubmit = async ( _: TProductModifierOptionRequest ) =>
    {

    }
    return (
        <Form { ...form }>
            <form onSubmit={ form.handleSubmit( onSubmit ) } noValidate>
                <div className="relative">

                    <Card className='shadow-none border-none bg-white h-fit'>
                        <CardHeader>
                            <CardTitle>Tùy chọn sản phẩm</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <FormField
                                control={ form.control }
                                name="modifierGroupIds"
                                render={ ( { field } ) =>
                                {
                                    const selectedValues = field.value || [];

                                    const handleCheckboxChange = ( groupId: string, checked: boolean ) =>
                                    {
                                        const updatedValues = checked
                                            ? [ ...selectedValues, groupId ]
                                            : selectedValues.filter( ( id: string ) => id !== groupId );
                                        field.onChange( updatedValues );
                                    };

                                    return (
                                        <FormItem>
                                            <FormControl>
                                                <div className="border rounded-md p-3 max-h-48 overflow-y-auto">
                                                    { data?.data.data.items.length === 0 ? (
                                                        <p className="text-sm text-muted-foreground">Không có tùy chọn nào</p>
                                                    ) : (
                                                        <div className="space-y-2">
                                                            { data?.data.data.items.map( ( group ) => (
                                                                <div key={ group.id } className="flex items-center space-x-2">
                                                                    <Checkbox
                                                                        id={ `modifier-${ group.id }` }
                                                                        checked={ selectedValues.includes( group.id ) }
                                                                        onCheckedChange={ ( checked ) =>
                                                                            handleCheckboxChange( group.id, checked as boolean )
                                                                        }
                                                                        disabled={ isLoading }
                                                                    />
                                                                    <label
                                                                        htmlFor={ `modifier-${ group.id }` }
                                                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                                                                    >
                                                                        { group.name }
                                                                    </label>
                                                                </div>
                                                            ) ) }
                                                        </div>
                                                    ) }
                                                </div>
                                            </FormControl>
                                            { selectedValues.length > 0 && (
                                                <div className="text-xs text-muted-foreground">
                                                    { selectedValues.length } tùy chọn đã chọn
                                                </div>
                                            ) }
                                            <FormMessage />
                                        </FormItem>
                                    );
                                } }
                            />
                        </CardContent>
                    </Card>
                    <div className="flex justify-end h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear sticky bottom-0 bg-transparent z-10">
                        <Button className='mr-8 py-5 px-10' type="submit" disabled={ false }>
                            Tạo
                        </Button>
                    </div>
                </div>

            </form>
        </Form>
    )
}

export default ModifierGroupForm