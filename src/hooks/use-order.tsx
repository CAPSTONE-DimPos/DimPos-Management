import { orderApi } from "@/apis/order.api";
import {
  keepPreviousData,
    //  useMutation,
     useQuery } from "@tanstack/react-query";

interface UseOrderParams {
  page?: number;
  size?: number;
  sortBy?: string;
  isAsc?: boolean;
}

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
