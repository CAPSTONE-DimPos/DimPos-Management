import { brandMenuApi } from "@/apis/menu.api";
import type { TUpdateBrandProduct, TUpdateBrandStore } from "@/schema/menu.schema";
import { useMutation, useQuery, useQueryClient, useSuspenseQuery } from "@tanstack/react-query";

interface UseMenuParams
{
    page?: number;
    size?: number;
    sortBy?: string;
    isAsc?: boolean;
}

export const useMenu = () =>
{
    const queryClient = useQueryClient();
    const getBrandMenu = ( params: UseMenuParams = {} ) =>
    {
        const {
            page = params.page || 1,
            size = params.size || 10,
            sortBy = params.sortBy || "id",
            isAsc = params.isAsc || true,
        } = params;

        return useQuery( {
            queryKey: [ 'brandMenus', {
                page,
                size,
                sortBy,
                isAsc,
            } ],
            queryFn: () => brandMenuApi.getBrandMenu( {
                page: page,
                size: size,
                sortBy: sortBy,
                isAsc: isAsc,
            } ),
        } )
    }

    const getBrandMenuById = ( id: string ) =>
    {
        return useSuspenseQuery( {
            queryKey: [ 'brandMenu', id ],
            queryFn: () => brandMenuApi.getBrandMenuById( id ),
        } )
    }

    const getProductsByBrandMenuId = ( id: string, params: UseMenuParams = {} ) =>
    {
        const {
            page = params.page || 1,
            size = params.size || 10,
            sortBy = params.sortBy || "id",
            isAsc = params.isAsc || true,
        } = params;

        return useQuery( {
            queryKey: [ 'brandMenuProducts', id, {
                page,
                size,
                sortBy,
                isAsc,
            } ],
            queryFn: () => brandMenuApi.getProductsByBrandMenuId( id, {
                page: page,
                size: size,
                sortBy: sortBy,
                isAsc: isAsc,
            } ),
        } )
    }

    const updateProductsByBrandMenuId = useMutation( {
        mutationFn: ( data: TUpdateBrandProduct ) => brandMenuApi.updateProductsByBrandMenuId(
            data.brandMenuId,
            { productVariantIds: data.productVariantIds || [] }
        ),
    } )

    const updateStoresByBrandMenuId = useMutation( {
        mutationFn: ( data: TUpdateBrandStore ) => brandMenuApi.updateStoresByBrandMenuId(
            data.brandMenuId,
            { storeIds: data.storeIds || [] }
        ),
    } )



    const getStoresByBrandMenuId = ( id: string, params: UseMenuParams = {} ) =>
    {
        const {
            page = params.page || 1,
            size = params.size || 10,
            sortBy = params.sortBy || "id",
            isAsc = params.isAsc || true,
        } = params;

        return useQuery( {
            queryKey: [ 'brandMenuStores', id, {
                page,
                size,
                sortBy,
                isAsc,
            } ],
            queryFn: () => brandMenuApi.getStoresByBrandMenuId( id, {
                page: page,
                size: size,
                sortBy: sortBy,
                isAsc: isAsc,
            } ),
        } )

    }

    const createBrandMenuMutation = useMutation( {
        mutationFn: brandMenuApi.createBrandMenu,
        onSuccess: () =>
        {
            queryClient.invalidateQueries( { queryKey: [ 'brandMenus' ] } )
        }
    } )

    return {
        getBrandMenu,
        createBrandMenuMutation,
        getBrandMenuById,
        getProductsByBrandMenuId,
        getStoresByBrandMenuId,
        updateProductsByBrandMenuId,
        updateStoresByBrandMenuId,
    }
}