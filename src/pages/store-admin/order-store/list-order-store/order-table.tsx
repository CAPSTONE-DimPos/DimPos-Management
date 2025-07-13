import { useState } from "react";
import { DataTable } from "@/components/table/data-table";
import { useQueryParams } from "@/hooks/use-query-params";
import { columns } from "./components/column";
import type { TOrderResponse } from "@/schema/order.schema";
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
  } = useQueryParams();

  const { getOrders } = useOrder(); 

  const { data, isLoading } = getOrders({
    page: currentPage,
    pageSize,
    sortBy,
    isAsc,
  });

  const items = data?.items || [];
  const total = data?.total || 0;

  const [selectedOrder, setSelectedOrder] = useState<TOrderResponse | null>(null);

  return (
    <>
      <DataTable
        columns={columns((order) => setSelectedOrder(order))}
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

      {selectedOrder && (
        <div className="p-4 bg-gray-100 border mt-4 rounded">
          <h2 className="font-bold text-lg mb-2">Chi tiết đơn hàng</h2>
          <p><strong>Khách:</strong> {selectedOrder.customerNameSnapshot}</p>
          <p><strong>Tổng tiền:</strong> {selectedOrder.totalAmount.toLocaleString("vi-VN")} ₫</p>
          <p><strong>Trạng thái:</strong> {selectedOrder.status}</p>
          <button
            className="mt-2 text-blue-600 underline"
            onClick={() => setSelectedOrder(null)}
          >
            Đóng
          </button>
        </div>
      )}
    </>
  );
};

export default OrderTable;
