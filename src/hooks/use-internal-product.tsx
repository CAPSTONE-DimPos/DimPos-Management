
import { purchasableProductApi } from "@/apis/internal-product.api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

interface UseInternalProductParams {
  page?: number;
  size?: number;
  sortBy?: string;
  isAsc?: boolean;
  name?: string;
  sku?: string;
  code?: string;
}

export const useInternalProduct = () => {
  const queryClient = useQueryClient();

  const getInternalProducts = (params: UseInternalProductParams = {}) => {
    const {
      page = 1,
      size = 10,
      sortBy = "name",
      isAsc = true,
      name = "",
      code = "",
      sku = "",
    } = params;

    return useQuery({
      queryKey: ["internal-products", { page, size, sortBy, isAsc, name, sku, code }],
      queryFn: async () =>
        purchasableProductApi.getPurchasableProducts({
          page: page,
          size: size,
          sortBy: sortBy,
          isAsc: isAsc,
          name: name,
          sku: sku,
          code: code,
        }),
    });
  };

  const getInternalProductById = (id: string) =>
    useQuery({
      queryKey: ["internal-products", id],
      queryFn: () => purchasableProductApi.getPurchasableProductById(id),
    });

  const createInternalProductMutation = useMutation({
    mutationFn: (data: FormData) => purchasableProductApi.createPurchasableProduct(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["internal-products"] });
    },
  });

  const updateInternalProductMutation = () =>
    useMutation({
      mutationFn: (params: { id: string; data: FormData }) =>
        purchasableProductApi.updatePurchasableProduct(params.id, params.data),
      onSuccess: (_, { id }) => {
        queryClient.invalidateQueries({ queryKey: ["internal-product", id] });
        queryClient.invalidateQueries({ queryKey: ["internal-products"] });
      },
    });

  return {
    getInternalProducts,
    getInternalProductById,
    createInternalProductMutation,
    updateInternalProductMutation,
  };
};
