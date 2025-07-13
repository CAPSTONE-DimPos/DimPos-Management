import { orderApi, storeOrderApi } from "@/apis/order.api";
import { useQuery, useSuspenseQuery, keepPreviousData } from "@tanstack/react-query";
import type { TGetStoreOrdersQuery } from "@/schema/order.schema";

interface UseOrderParams {
  page?: number;
  size?: number;
  sortBy?: string;
  isAsc?: boolean;
}

export const useStoreOrder = () => {
  const getStoreOrders = (params: TGetStoreOrdersQuery = {}) => {
    const {
      page = 1,
      pageSize = 30,
      sortBy = null,
      isAsc = true,
      status = null,
      type = null,
    } = params;
    
    return useQuery({
      queryKey: [
        "orders",
        {
          page,
          pageSize,
          sortBy,
          isAsc,
          status,
          type,
        },
      ],
      queryFn: () =>
        storeOrderApi.getStoreOrders({
          page,
          pageSize,
          sortBy,
          isAsc,
          status,
          type,
        }),
      // Adding keepPreviousData from your branch for better UX
      placeholderData: keepPreviousData,
    });
  };

  const getStoreOrderById = (id: string) => {
    return useSuspenseQuery({
      queryKey: ["order", id],
      queryFn: () => storeOrderApi.getStoreOrderById(id),
    });
  };

  return {
    getStoreOrders,
    getStoreOrderById,
  };
};

export const useOrder = () => {
  
  const getOrders = (params: UseOrderParams = {}) => {
    const {
      page = params.page || 1,
      size = params.size || 10,
    } = params;

    return useQuery({
      queryKey: [
        "orders",
        {
          page,
          pageSize:size,
          // isAsc,
        },
      ],
      queryFn: () =>
        orderApi.getBrandOrders({
          page: page,
          pageSize: size,
          // isAsc: isAsc,
        }),
      placeholderData: keepPreviousData,
    });
  };

  const getOrderById = (id: string) =>
    useQuery({
      queryKey: ["order", id],
      queryFn: () => orderApi.getBrandOrderById(id),
    });

  //   const updateOrder = () =>
  //     useMutation({
  //       mutationFn: (params: { id: string; data: FormData }) =>
  //         orderApi.updateProductsByBrandOrderId(params.id, params.data),
  //     });

  return {
    getOrders,
    getOrderById,
  };
};
