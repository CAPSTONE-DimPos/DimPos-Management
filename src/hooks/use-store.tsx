import { storeApi } from "@/apis/store.api";
import type { TCreateStoreRequest } from "@/schema/store.schema";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

interface UseStoreParams {
  page?: number;
  size?: number;
  sortBy?: string;
  isAsc?: boolean;
  name?: string;
}

export const useStore = () => {
  const queryClient = useQueryClient();

  const getStores = (params: UseStoreParams = {}) => {
    const {
      page = 1,
      size = 10,
      sortBy = "name",
      isAsc = true,
      name = "",
    } = params;

    return useQuery({
      queryKey: ["stores", { page, size, sortBy, isAsc, name }],
      queryFn: async () =>
        storeApi.getStores({
          page: page,
          size: size,
          sortBy: sortBy,
          isAsc: isAsc,
          name: name,
        }),
    });
  };

  const getStoreById = (id: string) =>
    useQuery({
      queryKey: ["store", id],
      queryFn: () => storeApi.getStoreById(id),
    });

  const createStoreMutation = useMutation({
    mutationFn: (data: TCreateStoreRequest) => storeApi.createStoreMutation(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["store"] });
    },
  });

  const updateStoreMutation = () =>
    useMutation({
      mutationFn: (params: { id: string; data: FormData }) =>
        storeApi.updateStoreMutation(params.id, params.data),
      onSuccess: (_, { id }) => {
        queryClient.invalidateQueries({ queryKey: ["store", id] });
        queryClient.invalidateQueries({ queryKey: ["stores"] });
      },
    });

  return {
    getStores,
    getStoreById,
    createStoreMutation,
    updateStoreMutation,
  };
};
