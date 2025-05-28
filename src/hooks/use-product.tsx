import { productApi } from "@/apis/product.api";
import { useQuery } from "@tanstack/react-query";

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
    const getProductVariants = ( params: UseProductParams = {} ) =>
    {
        const {
            page = params.page || 1,
            size = params.size || 10,
            sortBy = params.sortBy || "id",
            isAsc = params.isAsc || true,
            name = params.name || "",
        } = params;

        return useQuery( {
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

    return {
        getProductVariants,
    }
}