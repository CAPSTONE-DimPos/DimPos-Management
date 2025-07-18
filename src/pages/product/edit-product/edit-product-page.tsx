import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useProduct } from '@/hooks/use-product';
import { useParams } from 'react-router-dom';
import ModifierGroupForm from './components/modifier-group-form';
import OverviewProductForm from './components/overview-product-form';
import VariantsProductSection from './components/variants-product-section';
import ProductIcon from '@/assets/icons/product-icon';
import ProductVariantIcon from '@/assets/icons/product-variant-icon';
import DocumentFilterIcon from '@/assets/icons/document-filter-icon';

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
                    <TabsTrigger value="overview">
                        <ProductIcon className="w-4 h-4 mr-2" />
                        Tổng quan
                    </TabsTrigger>
                    { data?.data.data.isHasVariants && (
                        <TabsTrigger value="variants">
                            <ProductVariantIcon className="w-4 h-4 mr-2" />
                            Biến thể
                        </TabsTrigger>
                    ) }
                    <TabsTrigger value="modifierGroups">
                        <DocumentFilterIcon className="w-4 h-4 mr-2" />
                        Tùy chọn
                    </TabsTrigger>
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
                <TabsContent value="modifierGroups">
                    <ModifierGroupForm
                        productId={ id as string }
                        initialData={ data?.data.data.modifierGroup as any || [] }
                    />
                </TabsContent>
            </Tabs>`
        </div>
    )
}

export default EditProductPage