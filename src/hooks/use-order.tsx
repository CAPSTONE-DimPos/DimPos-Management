import { useSuspenseQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { orderApi } from "@/apis/order.api";
import { normalizeParams } from "@/apis/util.api";
import {
  GetOrdersResponseSchema,
  OrderResponseSchema,
} from "@/schema/order.schema";

interface UseOrderParams {
  page?: number;
  pageSize?: number;
  sortBy?: string; // "createdDate" or any field
  isAsc?: boolean;
  status?: number;
  type?: number;
}

export const useOrder = () => {
  const getOrders = (params: UseOrderParams = {}) => {
    const {
      page = 1,
      pageSize = 10,
      sortBy = "createdDate",
      isAsc = true,
      status,
      type,
    } = params;

    const queryParams = useMemo(() => {
      return normalizeParams({
        page,
        size: pageSize,
        sort: `${sortBy},${isAsc ? "asc" : "desc"}`,
        status,
        type,
      });
    }, [page, pageSize, sortBy, isAsc, status, type]);

    return useSuspenseQuery({
      queryKey: ["orders", queryParams],
      queryFn: async () => {
        const res = await orderApi.getOrders(queryParams);
        return GetOrdersResponseSchema.parse(res.data);
      },
    });
  };

  const getOrderById = (id: string) =>
    useSuspenseQuery({
      queryKey: ["order", id],
      queryFn: async () => {
        const res = await orderApi.getOrderById(id);
        return OrderResponseSchema.parse(res.data);
      },
    });

  return {
    getOrders,
    getOrderById,
  };
};
