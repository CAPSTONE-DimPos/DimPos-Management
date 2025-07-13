import { useState } from "react";
import { DataTable } from "@/components/table/data-table";
import { useQueryParams } from "@/hooks/use-query-params";
import { columns } from "./components/column";
import type { TStoreOrderResponse } from "@/schema/order.schema";
import { useStoreOrder } from "@/hooks/use-order";

// Hàm ánh xạ trạng thái
const mapStatusToLabel = (status: number) => {
  switch (status) {
    case 0:
      return "Chờ xử lý";
    case 1:
      return "Đang xử lý";
    case 2:
      return "Hoàn tất";
    case 3:
      return "Đã huỷ";
    default:
      return "Không xác định";
  }
};

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


  const [selectedOrder, setSelectedOrder] = useState<TStoreOrderResponse | null>(null);

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
          <p>
            <strong>Khách:</strong>{" "}
            {selectedOrder.customerNameSnapshot || "Khách lẻ"}
          </p>
          <p>
            <strong>Tổng tiền:</strong>{" "}
            {selectedOrder.totalAmount.toLocaleString("vi-VN")} ₫
          </p>
          <p>
            <strong>Trạng thái:</strong>{" "}
            {mapStatusToLabel(selectedOrder.status)}
          </p>
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
