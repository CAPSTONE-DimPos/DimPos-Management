import * as React from "react";

import BoxAddIcon from "@/assets/icons/box-add-icon";
import CollapseIcon from "@/assets/icons/collapse-icon";
import GeneralAppIcon from "@/assets/icons/general-app-icon";
import HomeIcon from "@/assets/icons/home-icon";
// import InventoryReportIcon from "@/assets/icons/inventory-report-icon"
import DiscountIcon from "@/assets/icons/discount-icon";
import DocumentFilterIcon from "@/assets/icons/document-filter-icon";
import IngredientIcon from "@/assets/icons/ingredient-icon";
import InventoryReportIcon from "@/assets/icons/inventory-report-icon";
import MenuIcon from "@/assets/icons/menu-icon";
import NoteIcon from "@/assets/icons/note-icon";
import ProductComboIcon from "@/assets/icons/product-combo-icon";
import ProductIcon from "@/assets/icons/product-icon";
import ProductVariantIcon from "@/assets/icons/product-variant-icon";
import ReceiptIcon from "@/assets/icons/receipt-icon";
import ShopIcon from "@/assets/icons/shop-icon";
import UsersIcon from "@/assets/icons/users-icon";
import DimposLogo from "@/assets/logo/dimpos-logo";
import { NavMain } from "@/components/nav-main";
import
{
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import type { RootState } from "@/redux/store";
import
{
  PATH_ADMIN_DASHBOARD,
  PATH_BRAND_DASHBOARD,
  PATH_STORE_DASHBOARD,
} from "@/routes/path";
import { useSelector } from "react-redux";

// This is sample data.
const brandRoutes = {
  dashboard: {
    mainTitle: "Dashboard",
    items: [
      {
        title: "Tổng Quan",
        url: PATH_BRAND_DASHBOARD.general.app,
        icon: GeneralAppIcon,
      },
      // {
      //   title: "Báo cáo Kho",
      //   url: PATH_BRAND_DASHBOARD.general.inventoryReport,
      //   icon: InventoryReportIcon,
      // }
    ],
  },
  productManagement: {
    mainTitle: "Quản lý sản phẩm & danh mục",
    items: [
      {
        title: "Danh mục",
        url: PATH_BRAND_DASHBOARD.category.root,
        icon: MenuIcon,
      },
      {
        title: "Sản phẩm",
        url: PATH_BRAND_DASHBOARD.product.root,
        icon: ProductIcon,
      },
      {
        title: "Biến thể sản phẩm",
        url: PATH_BRAND_DASHBOARD.product.variant,
        icon: ProductVariantIcon,
      },
      {
        title: "Combo sản phẩm",
        url: PATH_BRAND_DASHBOARD.combo.root,
        icon: ProductComboIcon,
      },
      {
        title: "Tùy chọn sản phẩm",
        url: PATH_BRAND_DASHBOARD.product.modifier,
        icon: DocumentFilterIcon,
      },

      {
        title: "Thực đơn",
        url: PATH_BRAND_DASHBOARD.product.menu,
        icon: NoteIcon,
      },
      {
        title: "Thành phần",
        url: PATH_BRAND_DASHBOARD.ingredient.root,
        icon: IngredientIcon
      }
    ],
  },
  // ingredientRecipeManagement: {
  //   mainTitle: "Nguyên liệu và công thức",
  //   items: [
  //     {
  //       title: "Nguyên liệu",
  //       url: PATH_BRAND_DASHBOARD.ingredient.root,
  //       icon: GeneralAppIcon,
  //     },
  //     {
  //       title: "Công thức",
  //       url: PATH_BRAND_DASHBOARD.recipe.root,
  //       icon: GeneralAppIcon,
  //     },
  //   ],
  // },
  taxManagement: {
    mainTitle: "Thuế",
    items: [
      {
        title: "Thuế",
        url: PATH_BRAND_DASHBOARD.tax.root,
        icon: GeneralAppIcon,
      },
    ],
  },
  promotionCampaignManagement: {
    mainTitle: "Khuyến mãi & chiến dịch",
    items: [
      {
        title: "Khuyến mãi",
        url: PATH_BRAND_DASHBOARD.promotion.root,
        icon: DiscountIcon,
      },
      {
        title: "Chiến dịch",
        url: PATH_BRAND_DASHBOARD.campaign.root,
        icon: GeneralAppIcon,
      },
    ],
  },
  storeManagement: {
    mainTitle: "Quản lý cửa hàng",
    items: [
      {
        title: "Danh sách cửa hàng",
        url: PATH_BRAND_DASHBOARD.store.root,
        icon: GeneralAppIcon,
      },
      {
        title: "Đơn hàng",
        url: PATH_BRAND_DASHBOARD.order.root,
        icon: GeneralAppIcon,
      },
      {
        title: "Sản phẩm nhập hàng",
        url: PATH_BRAND_DASHBOARD.purchasableProduct.root,
        icon: GeneralAppIcon,
      },
      {
        title: "Nhập hàng",
        url: PATH_BRAND_DASHBOARD.internalPurchaseOrders.root,
        icon: BoxAddIcon,
      },
    ],
  },
  generalManagement: {
    mainTitle: "Quản lý chung",
    items: [
      {
        title: "Về thương hiệu",
        url: PATH_BRAND_DASHBOARD.brand.root,
        icon: HomeIcon,
      },
      // {
      //   title: "Quản lý Hóa đơn",
      //   url: PATH_BRAND_DASHBOARD.invoice.root,
      //   icon: ReceiptIcon,
      // },
    ],
  },
};

const adminRoutes = {
  dashboard: {
    mainTitle: "Dashboard",
    items: [
      {
        title: "Báo Cáo Tổng Quan",
        url: PATH_ADMIN_DASHBOARD.general.app,
        icon: GeneralAppIcon,
      },
    ],
  },
  brand: {
    mainTitle: "Quản lý thương hiệu",
    items: [
      {
        title: "Danh sách thương hiệu",
        url: PATH_ADMIN_DASHBOARD.brand.root,
        icon: GeneralAppIcon,
      },
      {
        title: "Danh sách tài khoản",
        url: PATH_ADMIN_DASHBOARD.brandAccount.root,
        icon: HomeIcon,
      },
    ],
  },
  systemManagement: {
    mainTitle: "Quản lý hệ thống",
    items: [
      {
        title: "Phương thức thanh toán",
        url: PATH_ADMIN_DASHBOARD.systemPaymentMethod.root,
        icon: GeneralAppIcon,
      },
      {
        title: "Nhật ký hệ thống",
        url: PATH_ADMIN_DASHBOARD.systemLog.root,
        icon: HomeIcon,
      },
    ],
  },
};

const storeRoutes = {
  dashboard: {
    mainTitle: "Tổng quan hoạt động",
    items: [
      {
        title: "Báo Cáo Tổng Quan",
        url: PATH_STORE_DASHBOARD.dashboard.root,
        icon: GeneralAppIcon,
      },
      {
        title: "Chỉ số kinh doanh",
        url: PATH_STORE_DASHBOARD.dashboard.metrics,
        icon: InventoryReportIcon,
      },
      {
        title: "Biểu đồ & Thống kê",
        url: PATH_STORE_DASHBOARD.dashboard.charts,
        icon: ReceiptIcon,
      },
    ],
  },
  sales: {
    mainTitle: "Bán hàng & khuyến mãi",
    items: [
      
      {
        title: "Đơn hàng",
        url: PATH_STORE_DASHBOARD.order.root,
        icon: ReceiptIcon,
      },
            {
        title: "Ca tài chính",
        url: PATH_STORE_DASHBOARD.financialShift.root,
        icon: NoteIcon,
      },
      {
        title: "Chiến dịch khuyến mãi",
        url: PATH_STORE_DASHBOARD.promotion.root,
        icon: DiscountIcon,
      },
    ],
  },
  operation: {
    mainTitle: "Quản lí cửa hàng & sản phẩm",
    items: [
      {
        title: "Thực đơn",
        url: PATH_STORE_DASHBOARD.menu.root,
        icon: MenuIcon,
      },
      {
        title: "Yêu cầu nhập hàng",
        url: PATH_STORE_DASHBOARD.purchaseRequest.root,
        icon: BoxAddIcon,
      },
      {
        title: "Tồn kho sản phẩm",
        url: PATH_STORE_DASHBOARD.inventory.root,
        icon: ProductIcon,
      },
    ],
  },
  settings: {
    mainTitle: "Cấu hình",
    items: [
      {
        title: "Cấu hình chung",
        url: PATH_STORE_DASHBOARD.storeSettings.root,
        icon: ShopIcon,
      },
      {
        title: "Ca tài chính & thanh toán",
        url: PATH_STORE_DASHBOARD.shiftConfig.root,
        icon: CollapseIcon,
      },
    ],
  },
};

export function AppSidebar ( { ...props }: React.ComponentProps<typeof Sidebar> )
{
  const { toggleSidebar, open } = useSidebar();
  const { role } = useSelector( ( state: RootState ) => state.user );
  return (
    <Sidebar variant="sidebar" collapsible="icon" { ...props }>
      <SidebarHeader>
        <div className="flex items-center justify-between my-4 ml-2">
          <div
            className="cursor-pointer"
            onClick={ open ? undefined : toggleSidebar }
          >
            <DimposLogo
              className={ cn( open ? "size-15" : "size-6", "duration-300" ) }
            />
          </div>
          { open && (
            <div className="cursor-pointer" onClick={ toggleSidebar }>
              <CollapseIcon className="size-6 cursor-pointer text-gray-500 hover:text-gray-700 transition-colors duration-200" />
            </div>
          ) }
        </div>
      </SidebarHeader>
      { ( () =>
      {
        switch ( role )
        {
          case "BrandAdmin":
            return (
              <SidebarContent>
                <NavMain content={ brandRoutes.dashboard } />
                <NavMain content={ brandRoutes.productManagement } />
                {/* <NavMain content={ brandRoutes.ingredientRecipeManagement } /> */ }
                {/* <NavMain content={ brandRoutes.taxManagement } /> */ }
                <NavMain content={ brandRoutes.promotionCampaignManagement } />
                <NavMain content={ brandRoutes.storeManagement } />
                <NavMain content={ brandRoutes.generalManagement } />
              </SidebarContent>
            );

          case "StoreAdmin":
            return (
              <SidebarContent>
                <NavMain content={ storeRoutes.dashboard } />
                <NavMain content={ storeRoutes.sales } />
                <NavMain content={ storeRoutes.operation } />
                <NavMain content={ storeRoutes.settings } />
              </SidebarContent>
            );
          case "SystemAdmin":
            return (
              <SidebarContent>
                <NavMain content={ adminRoutes.dashboard } />
                <NavMain content={ adminRoutes.brand } />
                <NavMain content={ adminRoutes.systemManagement } />
              </SidebarContent>
            );
          default:
            return null;
        }
      } )() }
      <SidebarRail />
    </Sidebar>
  );
}
