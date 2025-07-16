import { useMutation, useQueryClient, useSuspenseQuery } from "@tanstack/react-query";
import { internalPOApi } from "@/apis/internal-purchase-orders.api";
import type { TGetPurchaseOrderQuery, TStorePurchaseOrder, TUpdateStorePurchaseOrder } from "@/schema/internal-purchase-orders.schema";


export const useInternalPurchaseOrders = () => {
  const queryClient = useQueryClient();

  // GET LIST
  const getInternalPurchaseOrders = (
    params: TGetPurchaseOrderQuery = {
      page: 1,
      size: 10,
    }
  ) => {
    return useSuspenseQuery({
      queryKey: ["internal-purchase-orders", params],
      queryFn: () => internalPOApi.getListPurchaseOrder(params),
    });
  };

  // GET BY ID
  const getInternalPurchaseOrderById = (id: string) => {
    if (!id) throw new Error("Missing ID for Internal Purchase Order");

    return useSuspenseQuery({
      queryKey: ["internal-purchase-order", id],
      queryFn: () => internalPOApi.getPurchaseOrderById(id),
    });
  };

//   // CREATE
//   const createInternalPurchaseOrderMutation = useMutation({
//     mutationFn: internalPOApi.create,
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["internal-purchase-orders"] });
//     },
//   });

  // UPDATE
  const updateInternalPurchaseOrderMutation = useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Partial<TUpdateStorePurchaseOrder>;
    }) => internalPOApi.update(id, data),
    onSuccess: (_res, { id }) => {
      queryClient.invalidateQueries({ queryKey: ["internal-purchase-order", id] });
      queryClient.invalidateQueries({ queryKey: ["internal-purchase-orders"] });
    },
  });

//   // REQUEST CANCEL
//   const requestCancelInternalPurchaseOrderMutation = useMutation({
//     mutationFn: ({
//       id,
//       reason,
//     }: {
//       id: string;
//       reason: string;
//     }) => internalPOApi.requestCancel(id, reason),
//     onSuccess: (_res, { id }) => {
//       queryClient.invalidateQueries({ queryKey: ["internal-purchase-order", id] });
//       queryClient.invalidateQueries({ queryKey: ["internal-purchase-orders"] });
//     },
//   });

  return {
    // Queries
    getInternalPurchaseOrders,
    getInternalPurchaseOrderById,

    // Mutations
    // createInternalPurchaseOrderMutation,
    updateInternalPurchaseOrderMutation,
    // requestCancelInternalPurchaseOrderMutation,
  };
};
