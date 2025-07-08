import { brandApi } from "@/apis/brand.api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type {
  TUpdateBrandRequest,
  TBrandResponse,
} from "@/schema/brand-management.schema";

interface UseBrandParams
{
  page?: number;
  size?: number;
  sortBy?: string;
  isAsc?: boolean;
  name?: string;
}

export const useBrand = () =>
{
  const queryClient = useQueryClient();

  const getBrands = ( params: UseBrandParams = {} ) =>
  {
    const {
      page = 1,
      size = 10,
      sortBy = "name",
      isAsc = true,
      name = "",
    } = params;

    return useQuery( {
      queryKey: [ "brands", { page, size, sortBy, isAsc, name } ],
      queryFn: async () =>
      {
        // ⚠️ MOCK DATA ở đây, thay vì gọi API thật
        const mockBrands: TBrandResponse[] = Array.from(
          { length: size },
          ( _, index ) => ( {
            id: `${ index + 1 + ( page - 1 ) * size }`,
            code: `BR00${ index + 1 + ( page - 1 ) * size }`,
            name: `Thương hiệu ${ index + 1 + ( page - 1 ) * size }`,
            email: `brand${ index + 1 }@example.com`,
            phone: `0909${ String( index + 1 ).padStart( 4, "0" ) }`,
            address: `Địa chỉ số ${ index + 1 }`,
            status: index % 2 === 0 ? 0 : 1,
            createdDate: new Date().toISOString(),
            pictureUrl: null,
            archivedAt: null,
            lastModifiedDate: null,
          } )
        );

        return {
          data: {
            data: {
              items: mockBrands,
              total: 50, // giả lập có 50 thương hiệu trong hệ thống
            },
          },
        };
      },

      // 👉 Nếu sau này muốn gọi API thật thì đổi lại:
      // queryFn: () => brandApi.getAllBrands({ page, size, sortBy, isAsc, name }),
    } );
  };

  const getBrandDetails = () =>
    useQuery( {
      queryKey: [ "brand-details" ],
      queryFn: () => brandApi.getBrandDetails(),
    } );

  const getBrandById = ( id: string ) =>
    useQuery( {
      queryKey: [ "brand", id ],
      queryFn: () => brandApi.getBrandById( id ),
    } );

  const createBrand = () =>
    useMutation( {
      mutationFn: ( data: FormData ) => brandApi.createBrand( data ),
      onSuccess: () =>
      {
        queryClient.invalidateQueries( { queryKey: [ "brands" ] } );
      },
    } );

  const updateBrand = () =>
    useMutation( {
      mutationFn: ( params: { id: string; data: TUpdateBrandRequest } ) =>
        brandApi.updateBrand( params.id, params.data ),
      onSuccess: ( _, { id } ) =>
      {
        queryClient.invalidateQueries( { queryKey: [ "brand", id ] } );
        queryClient.invalidateQueries( { queryKey: [ "brands" ] } );
      },
    } );

  return {
    getBrands,
    getBrandDetails,
    getBrandById,
    createBrand,
    updateBrand,
  };
};
