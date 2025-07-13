import { DataTable } from "@/components/table/data-table";
import { handleApiError } from "@/lib/error";
import { columns } from "./order-table/colums";
import { useQueryParams } from "@/hooks/use-query-params";
import { useOrder } from "@/hooks/use-order";

const OrderTable = () => {
  const {
    currentPage,
    pageSize,
    sortBy,
    isAsc,
    setSort,
    setPage,
    setPageSize,
    setFilter,
  } = useQueryParams({
    defaultSortBy: "priority",
    defaultFilter: [
      {
        id: "name",
        value: "",
      },
    ],
  });

  const { getOrders } = useOrder();
  const { data, isLoading, isError, error } = getOrders({
    size: pageSize,
    page: currentPage,
    sortBy: sortBy,
    isAsc: isAsc,
  });

  if (isError && error) {
    handleApiError(error);
  }

  const items = data?.data.data.items || [];
  const total = data?.data.data.total || 0;

  const sortValue = {
    id: sortBy,
    desc: !isAsc,
  };
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
      sortValues={[sortValue]}
      onSortChange={(newSort) => {
        setSort(newSort[0].id, !newSort[0].desc);
      }}
    />
  );
};

export default OrderTable;
