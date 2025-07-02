import * as React from "react"

import BoxAddIcon from "@/assets/icons/box-add-icon"
import CollapseIcon from "@/assets/icons/collapse-icon"
import DiscountIcon from "@/assets/icons/discount-icon"
import GeneralAppIcon from "@/assets/icons/general-app-icon"
import HomeIcon from "@/assets/icons/home-icon"
import InventoryReportIcon from "@/assets/icons/inventory-report-icon"
import MenuIcon from "@/assets/icons/menu-icon"
import ProductIcon from "@/assets/icons/product-icon"
import ReceiptIcon from "@/assets/icons/receipt-icon"
import ShopIcon from "@/assets/icons/shop-icon"
import UsersIcon from "@/assets/icons/users-icon"
import DimposLogo from "@/assets/logo/dimpos-logo"
import { NavMain } from "@/components/nav-main"
import
{
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
  useSidebar
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import { PATH_BRAND_DASHBOARD, PATH_ADMIN_DASHBOARD, PATH_STORE_DASHBOARD } from "@/routes/path"
import NoteIcon from "@/assets/icons/note-icon"
import DocumentFilterIcon from "@/assets/icons/document-filter-icon"
import type { RootState } from "@/redux/store"
import { useSelector } from "react-redux"

// This is sample data.
const brandRoutes = {
  dashboard: {
    mainTitle: "Dashboard",
    items: [
      {
        title: "Báo Cáo Tổng Quan",
        url: PATH_BRAND_DASHBOARD.general.app,
        icon: GeneralAppIcon,
      },
      {
        title: "Báo cáo Kho",
        url: PATH_BRAND_DASHBOARD.general.inventoryReport,
        icon: InventoryReportIcon,
      }
    ],
  },
  productManagement: {
    mainTitle: "Quản lý sản phẩm",
    items: [
      {
        title: "Sản Phẩm",
        url: PATH_BRAND_DASHBOARD.product.root,
        icon: ProductIcon,
      },
      {
        title: "Tùy Chọn Sản Phẩm",
        url: PATH_BRAND_DASHBOARD.product.modifier,
        icon: DocumentFilterIcon,
      },
      {
        title: "Quản lý Danh mục",
        url: PATH_BRAND_DASHBOARD.category.root,
        icon: MenuIcon,
      },
      {
        title: "Quản lý Thực đơn",
        url: PATH_BRAND_DASHBOARD.product.menu,
        icon: NoteIcon,
      },
      {
        title: "Quản lý Khuyến mãi",
        url: PATH_BRAND_DASHBOARD.promotion.root,
        icon: DiscountIcon,
      },
      {
        title: "Nhập hàng",
        url: PATH_BRAND_DASHBOARD.product.importProduct,
        icon: BoxAddIcon,
      }
    ]
  },
  generalManagement: {
    mainTitle: "Quản lý chung",
    items: [
      {
        title: "Về thương hiệu",
        url: PATH_BRAND_DASHBOARD.brand.root,
        icon: HomeIcon,
      },
      {
        title: "Quản lý Cửa hàng",
        url: PATH_BRAND_DASHBOARD.store.root,
        icon: ShopIcon,
      },
      {
        title: "Quản lý Vai trò",
        url: PATH_BRAND_DASHBOARD.role.root,
        icon: UsersIcon,
      },
      {
        title: "Quản lý Hóa đơn",
        url: PATH_BRAND_DASHBOARD.invoice.root,
        icon: ReceiptIcon,
      },
    ]
  },
}

const adminRoutes = {
  dashboard: {
    mainTitle: "Dashboard",
    items: [
      {
        title: "Báo Cáo Tổng Quan",
        url: PATH_ADMIN_DASHBOARD.general.app,
        icon: GeneralAppIcon,
      },
      {
        title: "Quản lí Thương hiệu",
        url: PATH_ADMIN_DASHBOARD.brand.root,
        icon: HomeIcon,
      },
    ],
  },
  
  
}

const storeRoutes = {
  dashboard: {
    mainTitle: "Dashboard",
    items: [
      {
        title: "Báo Cáo Tổng Quan",
        url: PATH_STORE_DASHBOARD.general.app,
        icon: GeneralAppIcon,
      },
    ],
  },
}



export function AppSidebar ( { ...props }: React.ComponentProps<typeof Sidebar> )
{
  const { toggleSidebar, open } = useSidebar();
  const { role } = useSelector( ( state: RootState ) => state.user );
  return (
    <Sidebar variant="sidebar" collapsible="icon" { ...props }>
      <SidebarHeader>
        <div className="flex items-center justify-between my-4 ml-2">
          <div className="cursor-pointer" onClick={ open ? undefined : toggleSidebar }>
            <DimposLogo className={ cn( open ? 'size-15' : 'size-6', 'duration-300' ) } />
          </div>
          { open
            &&
            <div className="cursor-pointer" onClick={ toggleSidebar }>
              <CollapseIcon className="size-6 cursor-pointer text-gray-500 hover:text-gray-700 transition-colors duration-200" />
            </div>
          }
        </div>
      </SidebarHeader>
      {
        ( () =>
        {
          switch ( role )
          {
            case 'BrandAdmin':
              return (
                <SidebarContent>
                  <NavMain content={ brandRoutes.dashboard } />
                  <NavMain content={ brandRoutes.productManagement } />
                  <NavMain content={ brandRoutes.generalManagement } />
                </SidebarContent>
              );
            case 'StoreAdmin':
              return (
                <SidebarContent>
                  <NavMain content={ storeRoutes.dashboard } />
                </SidebarContent>
              );
            case 'SystemAdmin':
              return (
                <SidebarContent>
                  <NavMain content={ adminRoutes.dashboard } />
                </SidebarContent>
              );
            default:
              return null;
          }
        } )()
      }
      <SidebarRail />
    </Sidebar>
  )
}
