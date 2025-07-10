import { promotionApi } from "@/apis/promotion.api";
import { useQuery, keepPreviousData } from '@tanstack/react-query';

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
    return {
        getPromotions,
    }
}