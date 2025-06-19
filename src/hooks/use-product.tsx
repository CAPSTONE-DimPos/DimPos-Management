import { productApi } from "@/apis/product.api";
import { useMutation, useQueryClient, useSuspenseQuery } from "@tanstack/react-query";

interface UseProductParams
{
    page?: number;
    size?: number;
    sortBy?: string;
    isAsc?: boolean;
    name?: string;
}

export const useProduct = () =>
{
    const queryClient = useQueryClient();
    const getProductVariants = ( params: UseProductParams = {} ) =>
    {
        const {
            page = params.page || 1,
            size = params.size || 10,
            sortBy = params.sortBy || "id",
            isAsc = params.isAsc || true,
            name = params.name || "",
        } = params;

        return useSuspenseQuery( {
            queryKey: [ 'product-variants', {
                page,
                size,
                sortBy,
                isAsc,
                name,
            } ],
            queryFn: () => productApi.getProductVariants( {
                page: page,
                size: size,
                sortBy: sortBy,
                isAsc: isAsc,
                name: name,
            } ),
            // placeholderData: keepPreviousData,
        } )
    }

    const getProducts = ( params: UseProductParams = {} ) =>
    {
        const {
            page = params.page || 1,
            size = params.size || 10,
            sortBy = params.sortBy || "id",
            isAsc = params.isAsc || true,
            name = params.name || "",
        } = params;

        return useSuspenseQuery( {
            queryKey: [ 'products', {
                page,
                size,
                sortBy,
                isAsc,
                name,
            } ],
            queryFn: () => productApi.getProducts( {
                page: page,
                size: size,
                sortBy: sortBy,
                isAsc: isAsc,
                name: name,
            } ),
        } )
    }

    const getProductById = ( id: string ) =>
    {
        return useSuspenseQuery( {
            queryKey: [ 'product', id ],
            queryFn: () => productApi.getProductById( id ),
        } )
    }

    const getModifierGroups = ( params: UseProductParams = {} ) =>
    {
        const {
            page = params.page || 1,
            size = params.size || 10,
            sortBy = params.sortBy || "id",
            isAsc = params.isAsc || true,
        } = params;

        return useSuspenseQuery( {
            queryKey: [ 'modifier-groups', {
                page,
                size,
                sortBy,
                isAsc,
            } ],
            queryFn: () => productApi.getModifierGroups( {
                page: page,
                size: size,
                sortBy: sortBy,
                isAsc: isAsc,
            } ),
        } )
    }

    const createProductMutation = useMutation( {
        mutationFn: productApi.createProductApi,
        onSuccess: () =>
        {
            queryClient.invalidateQueries( { queryKey: [ 'products' ] } )
        }
    } )


    return {
        getProducts,
        getProductById,
        getProductVariants,
        getModifierGroups,
        createProductMutation,
    }
}