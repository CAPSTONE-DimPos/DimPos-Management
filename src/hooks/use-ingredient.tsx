import { ingredientApi } from "@/apis/ingredient.api";
import type { TUpdateIngredientRequest } from "@/schema/ingredients.schema";
import { keepPreviousData, useMutation, useQuery, useQueryClient, useSuspenseQuery } from "@tanstack/react-query";

interface UseIngredientParams
{
    page?: number;
    size?: number;
    sortBy?: string;
    isAsc?: boolean;
}

export const useIngredient = () =>
{
    const queryClient = useQueryClient();
    const getIngredients = ( params: UseIngredientParams = {} ) =>
    {
        const {
            page = params.page || 1,
            size = params.size || 10,
            sortBy = params.sortBy || "name",
            isAsc = params.isAsc || true,
        } = params;

        return useQuery( {
            queryKey: [ 'ingredients', {
                page,
                size,
                sortBy,
                isAsc,
            } ],
            queryFn: () => ingredientApi.getIngredients( {
                page: page,
                size: size,
                sortBy: sortBy,
                isAsc: isAsc,
            } ),
            placeholderData: keepPreviousData,
        } )
    }
    const getIngredientById = ( id: string ) =>
        useSuspenseQuery( {
            queryKey: [ 'ingredient', id ],
            queryFn: () => ingredientApi.getIngredientById( id ),
        } );
    const createIngredientMutation = useMutation( {
        mutationFn: ingredientApi.createIngredient,
        onSuccess: () =>
        {
            queryClient.invalidateQueries( { queryKey: [ 'ingredients' ] } );
        },
    } )
    const updateIngredientMutation = useMutation( {
        mutationFn: ( { id, data }: { id: string; data: Omit<TUpdateIngredientRequest, "code" | "sku"> } ) => ingredientApi.updateIngredient( id, data ),
        onSuccess: () =>
        {
            queryClient.invalidateQueries( { queryKey: [ 'ingredients' ] } );
        },
    } );
    return {
        getIngredients,
        getIngredientById,
        createIngredientMutation,
        updateIngredientMutation,
    }
}