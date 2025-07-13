import DetailCard from "./components/detail-card";
import AccountTable from "./accounts";

const AccountPage = () => {
  // Dữ liệu mock cứng để test UI
  const mockBrandData = {
    name: "Cửa hàng Minh Phúc",
    code: "SHOP123",
    branch: "Chi nhánh Quận 1",
    openingHours: "08:00 - 22:00",
    isActive: true,
    address: "123 Đường Nguyễn Trãi, Quận 1, TP.HCM",
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Thông tin cửa hàng</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <DetailCard initialData={mockBrandData} />
      </div>

      <AccountTable />
    </div>
  );
};

export default AccountPage;
