import { useMenu } from "@/hooks/use-menu";
import { handleApiError } from "@/lib/error";
import { useParams } from "react-router-dom";
import OverviewMenu from "./components/overview-menu";
import ProductMenu from "./components/product-menu";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";

const EditMenuPage = () =>
{
    const { id } = useParams();
    const { getBrandMenuById, getStoresByBrandMenuId } = useMenu()
    const { data: menuData, isLoading: menuLoading, isError: isMenuError, error: menuError } = getBrandMenuById( id as string );
    const { data: storesData, isLoading: storesLoading, isError: isStoresError, error: storesError } = getStoresByBrandMenuId( id as string );
    if ( isMenuError && menuError )
    {
        handleApiError( menuError );
    }

    if ( isStoresError && storesError )
    {
        handleApiError( storesError );
    }
    return (
        <div className='container px-10'>
            <div className="my-3">
                <h1 className="text-2xl font-semibold">{ menuData?.data.data.name }</h1>
            </div>
            <Tabs defaultValue="overview">
                <TabsList>
                    <TabsTrigger value="overview">Tổng quan</TabsTrigger>
                    <TabsTrigger value="product">Danh sách sản phẩm</TabsTrigger>
                </TabsList>
                <TabsContent value="overview">
                    <OverviewMenu
                        initialData={ menuData?.data.data }
                        isLoading={ menuLoading }
                    />
                </TabsContent>
                <TabsContent value="product">
                    <ProductMenu
                        brandMenuId={ id as string }
                        productVariantIds={ menuData?.data.data.productVariants?.map( ( pv: any ) => pv.id ) || [] }
                    />
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default EditMenuPage