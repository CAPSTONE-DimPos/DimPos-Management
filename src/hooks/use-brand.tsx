import { brandApi } from "@/apis/brand.api"
import { useSuspenseQuery } from "@tanstack/react-query"

export const useBrand = () =>
{
    const getBrandDetails = () =>
    {
        return useSuspenseQuery( {

            queryKey: [ 'brandDetails' ],
            queryFn: () => brandApi.getBrandDetails(),
        } )
    }
    return {
        getBrandDetails,
    }
}