import { DataTable } from "@/components/table/data-table";
import { useInternalPurchaseOrders } from "@/hooks/use-internal-purchase-order";
import { useQueryParams } from "@/hooks/use-query-params";
import { handleApiError } from "@/lib/error";
import { columns } from "./purchase-order/column";

const InternalPOListTable = () => {
  const {
    currentPage,
    pageSize,
    sortBy,
    isAsc,
    setSort,
    setPage,
    setPageSize,
    filter,
    setFilter,
  } = useQueryParams({
    defaultFilter: [
      {
        id: "purchaseOrderNumber",
        value: "",
      },
    ],
  });

  const { getInternalPurchaseOrders } = useInternalPurchaseOrders();

  const { data, isLoading, isError, error } = getInternalPurchaseOrders({
    page: currentPage,
    size: pageSize,
    sortBy: sortBy,
    isAsc: isAsc,
    // purchaseOrderNumber:
    //   filter.find((f) => f.id === "purchaseOrderNumber")?.value || "",
  });

  if (isError && error) {
    handleApiError(error);
  }

  const items = data?.data.data.items || [];
  const total = data?.data.data.total ?? 0;

  return (
    <DataTable
      columns={columns}
      data={items}
      totalItems={total}
      currentPage={currentPage}
      pageSize={pageSize}
      onPageChange={setPage}
      onPageSizeChange={setPageSize}
      isLoading={isLoading}
      onSearchChange={setFilter}
      searchValues={filter}
      sortValues={[{ id: sortBy, desc: !isAsc }]}
      onSortChange={(newSort) => {
        setSort(newSort[0].id, !newSort[0].desc);
      }}
    />
  );
};

export default InternalPOListTable;
