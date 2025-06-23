import * as React from "react"

import BoxAddIcon from "@/assets/icons/box-add-icon"
import CollapseIcon from "@/assets/icons/collapse-icon"
import DiscountIcon from "@/assets/icons/discount-icon"
import GeneralAppIcon from "@/assets/icons/general-app-icon"
import HomeIcon from "@/assets/icons/home-icon"
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
import { PATH_DASHBOARD } from "@/routes/path"
import { cn } from "@/lib/utils"

// This is sample data.
const data = {
  dashboard: {
    mainTitle: "Dashboard",
    items: [
      {
        title: "Báo Cáo Tổng Quan",
        url: PATH_DASHBOARD.general.app,
        icon: GeneralAppIcon,
      },
    ],
  },
  productManagement: {
    mainTitle: "Quản lý sản phẩm",
    items: [
      {
        title: "Sản Phẩm",
        url: PATH_DASHBOARD.product.root,
        icon: ProductIcon,
      },
      {
        title: "Quản Lý Sản Phẩm",
        url: PATH_DASHBOARD.product.variant,
        icon: ProductIcon,
      },
      {
        title: "Tùy Chọn Sản Phẩm",
        url: PATH_DASHBOARD.product.modifier,
        icon: ProductIcon,
      },
      {
        title: "Quản lý Danh mục",
        url: PATH_DASHBOARD.category.root,
        icon: MenuIcon,
      },
      {
        title: "Quản lý Menu",
        url: PATH_DASHBOARD.product.menu,
        icon: MenuIcon,
      },
      {
        title: "Quản lý Khuyến mãi",
        url: PATH_DASHBOARD.product.discount,
        icon: DiscountIcon,
      },
      {
        title: "Nhập hàng",
        url: PATH_DASHBOARD.product.importProduct,
        icon: BoxAddIcon,
      }
    ]
  },
  generalManagement: {
    mainTitle: "Quản lý chung",
    items: [
      {
        title: "Về thương hiệu",
        url: PATH_DASHBOARD.product.root,
        icon: HomeIcon,
      },
      {
        title: "Quản lý Cửa hàng",
        url: PATH_DASHBOARD.product.variant,
        icon: ShopIcon,
      },
      {
        title: "Quản lý Vai trò",
        url: PATH_DASHBOARD.product.modifier,
        icon: UsersIcon,
      },
      {
        title: "Quản lý Hóa đơn",
        url: PATH_DASHBOARD.category.root,
        icon: ReceiptIcon,
      },
    ]
  },
}

export function AppSidebar ( { ...props }: React.ComponentProps<typeof Sidebar> )
{
  const { toggleSidebar, open } = useSidebar();
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
      <SidebarContent>
        <NavMain content={ data.dashboard } />
        <NavMain content={ data.productManagement } />
        <NavMain content={ data.generalManagement } />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
