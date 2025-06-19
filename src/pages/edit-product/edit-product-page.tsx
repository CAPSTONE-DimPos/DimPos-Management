import { useProduct } from '@/hooks/use-product';
import { handleApiError } from '@/lib/error';
import { useParams } from 'react-router-dom';
import OverviewProductForm from './components/overview-product-form';
import VariantsProductSection from './components/variants-product-section';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ModifierGroupForm from './components/modifier-option-form';

const EditProductPage = () =>
{
    const { id } = useParams();
    console.log( "EditProductPage id:", id );
    const { getProductById } = useProduct();
    const { data, isError, error } = getProductById( id as string );
    // const { data, isLoading, isError, error } = getProducts();
    if ( isError && error )
    {
        handleApiError( error );
    }
    return (
        <div className='container px-10 h-[calc(100vh-6.5rem)]'>
            <div className="my-3">
                <h1 className="text-2xl font-semibold">{ data?.data.data.name }</h1>
            </div>
            <Tabs defaultValue="overview">
                <TabsList>
                    <TabsTrigger value="overview">Tổng quan</TabsTrigger>
                    <TabsTrigger value="variants">Biến thể</TabsTrigger>
                    <TabsTrigger value="modifierOptions">Tùy chọn</TabsTrigger>
                </TabsList>
                <TabsContent value="overview">
                    <OverviewProductForm
                        initialData={ data?.data.data as any }
                    />
                </TabsContent>
                <TabsContent value="variants">
                    <VariantsProductSection
                        initialData={ data?.data.data.productVariants as any || [] }
                    />
                </TabsContent>
                <TabsContent value="modifierOptions">
                    <ModifierGroupForm
                        productId={ id as string }
                    />
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default EditProductPage