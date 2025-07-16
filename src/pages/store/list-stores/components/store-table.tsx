import { DataTable } from "@/components/table/data-table";
import { useQueryParams } from "@/hooks/use-query-params";
import type { TStore } from "@/schema/store.schema";
import { columns } from "./store-table/column";
import { useStore } from "@/hooks/use-store";
import { useEffect, useState } from "react";
import { handleApiError } from "@/lib/error";

type Props = {};

const StoreTable = (_: Props) => {
  const { getStores } = useStore();
  const { currentPage, pageSize, setPage, setPageSize } = useQueryParams();
  const [stores, setStores] = useState([] as TStore[]);
  const [totalItems, setTotalItems] = useState(0);
  // const data: TStore[] = [
  //     {
  //         id: "550e8400-e29b-41d4-a716-446655440001",
  //         code: "HN001",
  //         name: "Cửa hàng Hà Nội Đống Đa",
  //         phone: "0243456789",
  //         email: "dongda@store.com",
  //         shortName: "HN-DD",
  //         description: "Cửa hàng flagship tại trung tâm Hà Nội, phục vụ khách hàng cao cấp",
  //         address: "123 Đường Láng, Đống Đa, Hà Nội",
  //         latitude: "21.0245",
  //         longitude: "105.8412",
  //         wifiName: "Store_HN001_Wifi",
  //         wifiPassword: "hanoistore123",
  //         index: 1,
  //         localPasscode: "HN001PASS",
  //         managerName: "Nguyễn Văn An",
  //         type: 1,
  //         username: "hn001_admin",
  //         password: "secure123"
  //     },
  //     {
  //         id: "550e8400-e29b-41d4-a716-446655440002",
  //         code: "HCM001",
  //         name: "Cửa hàng TP.HCM Quận 1",
  //         phone: "0287654321",
  //         email: "q1@store.com",
  //         shortName: "HCM-Q1",
  //         description: "Cửa hàng trung tâm thương mại, phục vụ khách hàng đông đúc",
  //         address: "456 Nguyễn Huệ, Quận 1, TP.HCM",
  //         latitude: "10.7769",
  //         longitude: "106.7009",
  //         wifiName: "Store_HCM001_Wifi",
  //         wifiPassword: "hcmstore456",
  //         index: 2,
  //         localPasscode: "HCM001PASS",
  //         managerName: "Trần Thị Bình",
  //         type: 1,
  //         username: "hcm001_admin",
  //         password: "secure456"
  //     },
  //     {
  //         id: "550e8400-e29b-41d4-a716-446655440003",
  //         code: "DN001",
  //         name: "Cửa hàng Đà Nẵng Hải Châu",
  //         phone: "0236789123",
  //         email: "haichau@store.com",
  //         shortName: "DN-HC",
  //         description: "Cửa hàng ven biển, chuyên phục vụ khách du lịch",
  //         address: "789 Trần Phú, Hải Châu, Đà Nẵng",
  //         latitude: "16.0544",
  //         longitude: "108.2022",
  //         wifiName: "Store_DN001_Wifi",
  //         wifiPassword: "danangstore789",
  //         index: 3,
  //         localPasscode: "DN001PASS",
  //         managerName: "Lê Văn Cường",
  //         type: 2,
  //         username: "dn001_admin",
  //         password: "secure789"
  //     },
  //     {
  //         id: "550e8400-e29b-41d4-a716-446655440004",
  //         code: "HP001",
  //         name: "Cửa hàng Hải Phòng Hồng Bàng",
  //         phone: "0225678901",
  //         email: "hongbang@store.com",
  //         shortName: "HP-HB",
  //         description: "Cửa hàng khu công nghiệp, phục vụ công nhân và doanh nghiệp",
  //         address: "321 Điện Biên Phủ, Hồng Bàng, Hải Phòng",
  //         latitude: "20.8449",
  //         longitude: "106.6881",
  //         wifiName: "Store_HP001_Wifi",
  //         wifiPassword: "haiphongstore321",
  //         index: 4,
  //         localPasscode: "HP001PASS",
  //         managerName: "Phạm Thị Dung",
  //         type: 2,
  //         username: "hp001_admin",
  //         password: "secure321"
  //     },
  //     {
  //         id: "550e8400-e29b-41d4-a716-446655440005",
  //         code: "CT001",
  //         name: "Cửa hàng Cần Thơ Ninh Kiều",
  //         phone: "0292345678",
  //         email: "ninhkieu@store.com",
  //         shortName: "CT-NK",
  //         description: "Cửa hàng miền Tây, chuyên sản phẩm địa phương và du lịch",
  //         address: "654 Hai Bà Trưng, Ninh Kiều, Cần Thơ",
  //         latitude: "10.0452",
  //         longitude: "105.7469",
  //         wifiName: "Store_CT001_Wifi",
  //         wifiPassword: "canthostore654",
  //         index: 5,
  //         localPasscode: "CT001PASS",
  //         managerName: "Võ Văn Em",
  //         type: 1,
  //         username: "ct001_admin",
  //         password: "secure654"
  //     },
  //     {
  //         id: "550e8400-e29b-41d4-a716-446655440006",
  //         code: "HN002",
  //         name: "Cửa hàng Hà Nội Cầu Giấy",
  //         phone: "0243456790",
  //         email: "caugiay@store.com",
  //         shortName: "HN-CG",
  //         description: "Cửa hàng khu vực đại học, phục vụ sinh viên và gia đình trẻ",
  //         address: "159 Xuân Thủy, Cầu Giấy, Hà Nội",
  //         latitude: "21.0378",
  //         longitude: "105.7804",
  //         wifiName: "Store_HN002_Wifi",
  //         wifiPassword: "caugiaystore159",
  //         index: 6,
  //         localPasscode: "HN002PASS",
  //         managerName: "Hoàng Văn Phong",
  //         type: 2,
  //         username: "hn002_admin",
  //         password: "secure159"
  //     },
  //     {
  //         id: "550e8400-e29b-41d4-a716-446655440007",
  //         code: "HCM002",
  //         name: "Cửa hàng TP.HCM Thủ Đức",
  //         phone: "0287654322",
  //         email: "thuduc@store.com",
  //         shortName: "HCM-TD",
  //         description: "Cửa hàng khu công nghệ cao, phục vụ nhân viên IT và startup",
  //         address: "147 Võ Văn Ngân, Thủ Đức, TP.HCM",
  //         latitude: "10.8508",
  //         longitude: "106.7717",
  //         wifiName: "Store_HCM002_Wifi",
  //         wifiPassword: "thuducstore147",
  //         index: 7,
  //         localPasscode: "HCM002PASS",
  //         managerName: "Ngô Thị Giang",
  //         type: 1,
  //         username: "hcm002_admin",
  //         password: "secure147"
  //     },
  //     {
  //         id: "550e8400-e29b-41d4-a716-446655440008",
  //         code: "VT001",
  //         name: "Cửa hàng Vũng Tàu Trung tâm",
  //         phone: "0254567890",
  //         email: "vungtau@store.com",
  //         shortName: "VT-TT",
  //         description: "Cửa hàng thành phố biển, chuyên phục vụ khách nghỉ dưỡng",
  //         address: "258 Hạ Long, Vũng Tàu",
  //         latitude: "10.3460",
  //         longitude: "107.0843",
  //         wifiName: "Store_VT001_Wifi",
  //         wifiPassword: "vungtaustore258",
  //         index: 8,
  //         localPasscode: "VT001PASS",
  //         managerName: "Bùi Văn Hải",
  //         type: 2,
  //         username: "vt001_admin",
  //         password: "secure258"
  //     }
  // ];
  const { data, isLoading, isError, error, } = getStores({
    size: pageSize,
    page: currentPage,
  });
  if (isError && error) {
    handleApiError(error);
  }
  useEffect(() => {
    if(data?.data.data.total){
        setTotalItems(data?.data.data.total);
    }
    if (data?.data.data) {
      setStores(data?.data.data.items);
    } else {
      setStores([]);
    }
  }, [!isLoading, data]);
  return (
    <DataTable
      isShort={false}
      data={stores}
      totalItems={totalItems}
      columns={columns}
      currentPage={currentPage}
      pageSize={pageSize}
      onPageChange={setPage}
      onPageSizeChange={setPageSize}
    />
  );
};

export default StoreTable;
