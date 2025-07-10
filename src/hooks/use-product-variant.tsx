import { productVariantApi } from "@/apis/product-variant.api";
import { useMutation, useQuery, useQueryClient, useSuspenseQuery } from "@tanstack/react-query";

interface UseProductVariantParams
{
  page?: number;
  size?: number;
  sortBy?: string;
  isAsc?: boolean;
  name?: string;
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
        },
      ],
      queryFn: () =>
        productVariantApi.getProductVariants( {
          page: page,
          size: size,
          sortBy: sortBy,
          isAsc: isAsc,
          name: name,
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
  const updateProductVariantMutation = useMutation( {
    mutationFn: ( {
      id,
      data,
    }: {
      id: string;
      data: { name: string; displayOrder?: number; isActive: boolean; sku: string; price: number };
    } ) => productVariantApi.updateProductVariantApi( id, data ),
    onSuccess: ( _res, { id } ) =>
    {
      queryClient.invalidateQueries( { queryKey: [ "productVariant", id ] } );
    },
  } );
  return {
    getProductVariants,
    getProductVariantById,
    updateProductVariantMutation,
  };
};
