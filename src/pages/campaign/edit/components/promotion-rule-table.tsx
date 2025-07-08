import { DataTable } from "@/components/table/data-table";
import { useQueryParams } from "@/hooks/use-query-params";
import { columns } from "./promotion-rule-table/column";
import type { TPromotionRuleBaseSchema } from "@/schema/promotion-rule.schema";


type Props = {
    initialData: TPromotionRuleBaseSchema[]
}

const PromotionRuleTable = ({ initialData }: Props) => {
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
    defaultSortBy: "priority",
  });


  const searchValues = filter.map((f) => ({
    ...f,
    searchPlaceholder: f.id === "name" ? "Tìm kiếm theo tên chiến dịch" : "",
  }));
  const sortValue = {
    id: sortBy,
    desc: !isAsc,
  };
  return (
    <DataTable
      columns={columns}
      data={initialData}
      totalItems={initialData.length}
      currentPage={currentPage}
      pageSize={pageSize}
      onPageChange={setPage}
      onPageSizeChange={setPageSize}
      onSearchChange={setFilter}
      searchValues={searchValues}
      sortValues={[sortValue]}
      onSortChange={(newSort) => {
        setSort(newSort[0].id, !newSort[0].desc);
      }}
    />
  );
};

export default PromotionRuleTable;
