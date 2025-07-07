import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { type TProductVariantRequest } from '@/schema/product.schema';
import { Plus } from 'lucide-react';
import VariantProductForm from './variant-product-form';

type Props = {
    initialData: TProductVariantRequest[];
}

const VariantsProductSection = ( { initialData }: Props ) =>
{
    //console.log( "VariantsProductSection initialData:", initialData );


    return (
        <Card className='shadow-none border-none bg-white lg:col-span-2 2xl:col-span-6 mb-6'>
            <CardHeader>
                <CardTitle className="flex items-center justify-between">
                    Biến Thể Sản Phẩm
                    <Button
                        disabled={ false }
                        type="button"
                        variant="outline"
                        onClick={ () => { } }
                    >
                        <Plus className="w-4 h-4 mr-2" />
                        Thêm Biến Thể
                    </Button>
                </CardTitle>
            </CardHeader>
            <CardContent>
                { initialData.length > 0 ? (
                    <div className="space-y-4">
                        { initialData.map( ( field, index ) => (
                            <VariantProductForm
                                key={ index }
                                initialData={ field as any }
                            />
                        ) ) }
                    </div>
                ) : (
                    <div className="text-center py-8 text-muted-foreground">
                        <p>Chưa có biến thể nào. Click "Thêm Biến Thể" để tạo mới.</p>
                    </div>
                ) }
            </CardContent>
        </Card>
    )
}

export default VariantsProductSection