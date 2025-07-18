import { DataTable } from "@/components/table/data-table";
import { useQueryParams } from "@/hooks/use-query-params";
import { storeOrderColumns } from "./components/column";
import { useStoreOrder } from "@/hooks/use-order";

const OrderTable = () => {
  const {
    currentPage,
    pageSize,
    sortBy,
    isAsc,
    setSort,
    setPage,
    setPageSize,
  } = useQueryParams();

  const { getStoreOrders } = useStoreOrder();

  const { data, isLoading } = getStoreOrders({
    page: currentPage,
    pageSize: pageSize,
    sortBy,
    isAsc,
  });

  const items = data?.data.data.items || [];
  const total = data?.data.data.total || 0;

  return (
    <DataTable
      columns={storeOrderColumns()}
      data={items}
      totalItems={total}
      currentPage={currentPage}
      pageSize={pageSize}
      onPageChange={setPage}
      onPageSizeChange={setPageSize}
      isLoading={isLoading}
      sortValues={[{ id: sortBy, desc: !isAsc }]}
      onSortChange={(newSort) => {
        setSort(newSort[0].id, !newSort[0].desc);
      }}
    />
  );
};

export default OrderTable;
