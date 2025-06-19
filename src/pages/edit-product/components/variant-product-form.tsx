import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { ProductVariantSchema, type TProductVariantRequest } from "@/schema/product.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Trash2 } from "lucide-react";
import { useForm } from "react-hook-form";

type Props = {
    initialData: TProductVariantRequest;
}

const VariantProductForm = ( { initialData }: Props ) =>
{
    const form = useForm<TProductVariantRequest>( {
        resolver: zodResolver( ProductVariantSchema ),
        defaultValues: initialData,
    } );
    const onSubmit = async ( _: TProductVariantRequest ) => 
    {

    }
    return (
        <Form { ...form }>
            <form onSubmit={ form.handleSubmit( onSubmit ) } noValidate>
                <Card className="border border-dashed">
                    <CardContent className="pt-1">
                        <div className="flex items-center justify-between mb-4">
                            <Badge variant="secondary">Biến thể { initialData.code }</Badge>
                            <Button
                                disabled={ false }
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={ () => { } }
                            >
                                <Trash2 className="w-4 h-4" />
                            </Button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                                control={ form.control }
                                name={ `code` }
                                render={ ( { field } ) => (
                                    <FormItem>
                                        <FormLabel>Mã Biến Thể *</FormLabel>
                                        <FormControl>
                                            <Input disabled={ false } placeholder="Nhập mã biến thể" { ...field } />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                ) }
                            />
                            <FormField
                                control={ form.control }
                                name={ `name` }
                                render={ ( { field } ) => (
                                    <FormItem>
                                        <FormLabel>Tên Biến Thể *</FormLabel>
                                        <FormControl>
                                            <Input disabled={ false } placeholder="Nhập tên biến thể" { ...field } />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                ) }
                            />
                            <FormField
                                control={ form.control }
                                name={ `price` }
                                render={ ( { field } ) => (
                                    <FormItem>
                                        <FormLabel>Giá *</FormLabel>
                                        <FormControl>
                                            <Input
                                                disabled={ false }
                                                type="number"
                                                placeholder="0"
                                                { ...field }
                                                onChange={ ( e ) => field.onChange( Number( e.target.value ) ) }
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                ) }
                            />
                            <FormField
                                control={ form.control }
                                name={ `size` }
                                render={ ( { field } ) => (
                                    <FormItem>
                                        <FormLabel>Kích Thước</FormLabel>
                                        <FormControl>
                                            <Input disabled={ false } placeholder="S, M, L, XL..." { ...field } />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                ) }
                            />
                            <FormField
                                control={ form.control }
                                name={ `isMenuDisplay` }
                                render={ ( { field } ) => (
                                    <FormItem className="flex items-center space-x-2">
                                        <FormLabel>Hiển thị trên menu</FormLabel>
                                        <FormControl>
                                            <Switch
                                                disabled={ false }
                                                checked={ field.value }
                                                onCheckedChange={ field.onChange }
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                ) }
                            />
                        </div>
                        <div className="mt-6 flex justify-end">
                            <Button className='py-5 px-10' type="submit" disabled={ false }>
                                Lưu
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </form>
        </Form>
    )
}

export default VariantProductForm