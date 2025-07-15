import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useProduct } from '@/hooks/use-product';
import { useParams } from 'react-router-dom';
import ModifierGroupForm from './components/modifier-option-form';
import OverviewProductForm from './components/overview-product-form';
import VariantsProductSection from './components/variants-product-section';

const EditProductPage = () =>
{
    const { id } = useParams();
    const { getProductById } = useProduct();
    const { data } = getProductById( id as string );
    return (
        <div>
            <div className="mb-6">
                <h1 className="text-2xl font-semibold">{ data?.data.data.name }</h1>
            </div>
            <Tabs defaultValue="overview">
                <TabsList>
                    <TabsTrigger value="overview">Tổng quan</TabsTrigger>
                    { data?.data.data.isHasVariants && (
                        <TabsTrigger value="variants">Biến thể</TabsTrigger>
                    ) }
                    <TabsTrigger value="modifierOptions">Tùy chọn</TabsTrigger>
                    { !data?.data.data.isHasVariants && (
                        <TabsTrigger value="recipe">Công thức</TabsTrigger>
                    ) }
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
                <TabsContent value="recipe"></TabsContent>
            </Tabs>`
        </div>
    )
}

export default EditProductPage