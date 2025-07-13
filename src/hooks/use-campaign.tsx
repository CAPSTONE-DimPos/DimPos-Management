
import { campaignApi } from "@/apis/campaign.api";
import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

interface UseCampaignParams
{
    page?: number;
    size?: number;
    sortBy?: string;
    isAsc?: boolean;
}

export const useCampaign = () =>
{
    const queryClient = useQueryClient();

    const getCampaigns = ( params: UseCampaignParams = {} ) =>
    {
        const {
            page = params.page || 1,
            size = params.size || 10,
            sortBy = params.sortBy || "displayOrder",
            isAsc = params.isAsc || true,
        } = params;

        return useQuery( {
            queryKey: [ 'campaigns', {
                page,
                size,
                sortBy,
                isAsc,
            } ],
            queryFn: () => campaignApi.getCampaigns( {
                page: page,
                size: size,
                sortBy: sortBy,
                isAsc: isAsc,
            } ),
            placeholderData: keepPreviousData,
        } )
    }

    const getCampaignById = ( id: string ) =>
        useQuery( {
            queryKey: [ 'campaign', id ],
            queryFn: () => campaignApi.getCampaignById( id ),
        } );

    const createCampaign = () =>
        useMutation( {
            mutationFn: ( request: FormData ) => campaignApi.createCampaign( request ),
        } );
    // const updateCampaign = () =>
    //     useMutation( {
    //         mutationFn: ( params: { id: string; data: FormData } ) =>
    //             campaignApi.updateCampaign( params.id, params.data ),
    //     } );
    const updateCampaign = useMutation( {
            mutationFn: ( {
                id,
                data,
            }: {
                id: string;
                data: FormData;
            } ) => campaignApi.updateCampaign( id, data ),
            onSuccess: ( _res, { id } ) =>
            {
                queryClient.invalidateQueries( { queryKey: [ "campaign", id ] } );
            },
        } );
    return {
        getCampaigns,
        getCampaignById,
        createCampaign,
        updateCampaign,
    }
}