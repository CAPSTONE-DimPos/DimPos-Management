import { storeOrderApi } from "@/apis/order.api";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import type { TGetStoreOrdersQuery } from "@/schema/order.schema";

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
