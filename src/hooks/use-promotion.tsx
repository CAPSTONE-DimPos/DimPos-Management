import { promotionApi } from "@/apis/promotion.api";
import { keepPreviousData, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

interface UsePromotionParams
{
    page?: number;
    size?: number;
    sortBy?: string;
    isAsc?: boolean;
    name?: string;
}

export const usePromotion = () =>
{
    const queryClient = useQueryClient();
    const getPromotions = ( params: UsePromotionParams = {} ) =>
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
                "promotion-rules",
                {
                    page,
                    size,
                    sortBy,
                    isAsc,
                    name,
                },
            ],
            queryFn: () =>
                promotionApi.getPromotionRules( {
                    page: page,
                    size: size,
                    sortBy: sortBy,
                    isAsc: isAsc,
                    name: name,
                } ),
            placeholderData: keepPreviousData,
        } );
    }

    const createPromotionMutation = useMutation( {
        mutationFn: promotionApi.createPromotionRule,
        onSuccess: () =>
        {
            queryClient.invalidateQueries( { queryKey: [ 'promotion-rules' ] } );
        },
    } )
    return {
        getPromotions,
        createPromotionMutation,
    }
}