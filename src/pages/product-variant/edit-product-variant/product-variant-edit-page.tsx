import ProductVariantIcon from "@/assets/icons/product-variant-icon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCategory } from "@/hooks/use-category";
import { useProduct } from "@/hooks/use-product";
import { useProductVariant } from "@/hooks/use-product-variant";
import { useParams } from "react-router-dom";
import OverviewProductVariant from "./components/overview-product-variant";
import RecipeSection from "./components/recipe-section";
import RecipeIcon from "@/assets/icons/recipe-icon";

const ProductVariantEditPage = () =>
{
  const { id } = useParams<{ id: string }>();

  const { getProductVariantById } = useProductVariant();
  const { getProductById } = useProduct();
  const { getCategoryById } = useCategory();
  const { data: productVariantData } = getProductVariantById( id as string );
  const productId = productVariantData?.data?.data?.productId;
  const categoryId = productVariantData?.data?.data?.categoryId;
  const { data: productOfVariantData } = getProductById( productId! );
  const { data: categoryOfVariantData } = getCategoryById( categoryId! );

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Chi tiết biến thể sản phẩm</h1>
      </div>
      <Tabs defaultValue="overview" className="mb-6">
        <TabsList>
          <TabsTrigger value="overview">
            <ProductVariantIcon className="w-4 h-4 mr-2" />
            Tổng quan
          </TabsTrigger>
          <TabsTrigger value="recipe">
            <RecipeIcon className="w-4 h-4 mr-2" />
            Công thức
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <OverviewProductVariant
            productVariantId={ id as string }
            initialData={ productVariantData.data.data }
            productOfVariantData={ productOfVariantData.data.data }
            categoryOfVariantData={ categoryOfVariantData?.data.data as any }
          />
        </TabsContent>
        <TabsContent value="recipe">
          <RecipeSection productVariantId={ id as string } />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProductVariantEditPage;
