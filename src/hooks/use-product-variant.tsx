import { productVariantApi } from "@/apis/product-variant.api";
import type { TRequestRecipeItem } from "@/schema/product-variant.schema";
import { useMutation, useQuery, useQueryClient, useSuspenseQuery } from "@tanstack/react-query";

interface UseProductVariantParams
{
  page?: number;
  size?: number;
  sortBy?: string;
  isAsc?: boolean;
  name?: string;
  sku?: string;
}

export const useProductVariant = () =>
{
  const queryClient = useQueryClient();
  const getProductVariants = ( params: UseProductVariantParams = {} ) =>
  {
    const {
      page = params.page || 1,
      size = params.size || 10,
      sortBy = params.sortBy || "id",
      isAsc = params.isAsc || true,
      name = params.name || "",
      sku = params.sku || "",
    } = params;

    return useQuery( {
      queryKey: [
        "product-variants",
        {
          page,
          size,
          sortBy,
          isAsc,
          name,
          sku,
        },
      ],
      queryFn: () =>
        productVariantApi.getProductVariants( {
          page: page,
          size: size,
          sortBy: sortBy,
          isAsc: isAsc,
          name: name,
          sku: sku,
        } ),
      // placeholderData: keepPreviousData,
    } );
  };
  const getProductVariantById = ( id: string ) =>
  {
    return useSuspenseQuery( {
      queryKey: [ "productVariant", id ],
      queryFn: () => productVariantApi.getProductVariantById( id ),
    } );
  };
  const getRecipeItemsByProductVariantId = ( id: string, params: UseProductVariantParams = {} ) =>
  {
    const {
      page = params.page || 1,
      size = params.size || 10,
      sortBy = params.sortBy || "id",
      isAsc = params.isAsc || true,
    } = params;
    return useQuery( {
      queryKey: [ "recipeItems", id, {
        page,
        size,
        sortBy,
        isAsc,
      } ],
      queryFn: () => productVariantApi.getRecipeItemsByProductVariantId( id, {
        page: page,
        size: size,
        sortBy: sortBy,
        isAsc: isAsc,
      } ),
    } );
  }
  const updateProductVariantMutation = useMutation( {
    mutationFn: ( {
      id,
      data,
    }: {
      id: string;
      data: { name: string; displayOrder?: number; isActive: boolean; sku?: string; price: number };
    } ) => productVariantApi.updateProductVariantApi( id, data ),
    onSuccess: ( _res, { id } ) =>
    {
      queryClient.invalidateQueries( { queryKey: [ "productVariant", id ] } );
    },
  } );

  const addRecipeItemMutation = useMutation( {
    mutationFn: ( {
      productVariantId,
      data
    }: {
      productVariantId: string;
      data: TRequestRecipeItem;
    } ) => productVariantApi.addRecipeItemToProductVariant( productVariantId, data ),
  } );

  const updateRecipeItemMutation = useMutation( {
    mutationFn: ( {
      productVariantId,
      recipeItemId,
      data
    }: {
      productVariantId: string;
      recipeItemId: string;
      data: Pick<TRequestRecipeItem, "quantity">;
    } ) => productVariantApi.updateRecipeItemInProductVariant( productVariantId, recipeItemId, data ),
  } );

  const deleteRecipeItemMutation = useMutation( {
    mutationFn: ( {
      productVariantId,
      recipeItemId
    }: {
      productVariantId: string;
      recipeItemId: string;
    } ) => productVariantApi.deleteRecipeItemFromProductVariant( productVariantId, recipeItemId ),
  } );

  return {
    getProductVariants,
    getProductVariantById,
    updateProductVariantMutation,

    getRecipeItemsByProductVariantId,
    addRecipeItemMutation,
    updateRecipeItemMutation,
    deleteRecipeItemMutation,
  };
};
