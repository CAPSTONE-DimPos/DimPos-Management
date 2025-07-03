// import { DataTable } from "@/components/table/data-table";
// import { useInternalPurchaseOrders } from "@/hooks/use-internal-purchase-orders";
// import { useQueryParams } from "@/hooks/use-query-params";
// import { handleApiError } from "@/lib/error";
// import { columns } from "./column";
// import type { TStorePurchaseOrderListItem } from "@/schema/internal-purchase-orders.schema";

// const InternalPOListTable = () => {
//   const {
//     currentPage,
//     pageSize,
//     sortBy,
//     isAsc,
//     setSort,
//     setPage,
//     setPageSize,
//     filter,
//     setFilter,
//   } = useQueryParams({
//     defaultFilter: [
//       {
//         id: "purchaseOrderNumber",
//         value: "",
//       },
//     ],
//   });

//   const { getInternalPurchaseOrders } = useInternalPurchaseOrders();

//   const {
//     data,
//     isLoading,
//     isError,
//     error,
//   } = getInternalPurchaseOrders({
//     page: currentPage,
//     pageSize,
//     sortBy,
//     isAsc,
//     purchaseOrderNumber:
//       filter.find((f) => f.id === "purchaseOrderNumber")?.value || "",
//   });

//   if (isError && error) {
//     handleApiError(error);
//   }

//   // Lấy danh sách đơn hàng từ API (nếu chưa có data, để mảng trống)
//   const items: TStorePurchaseOrderListItem[] = data?.data.data || [];
//   const total = data?.data.total ?? 0;

//   return (
//     <DataTable
//       columns={columns}
//       data={items}
//       totalItems={total}
//       currentPage={currentPage}
//       pageSize={pageSize}
//       onPageChange={setPage}
//       onPageSizeChange={setPageSize}
//       isLoading={isLoading}
//       onSearchChange={setFilter}
//       searchValues={filter}
//       sortValues={[{ id: sortBy, desc: !isAsc }]}
//       onSortChange={(newSort) => {
//         setSort(newSort[0].id, !newSort[0].desc);
//       }}
//     />
//   );
// };

// export default InternalPOListTable;
