import
{
  AudioWaveform,
  Bot,
  Command,
  GalleryVerticalEnd,
  SquareTerminal
} from "lucide-react"
import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { TeamSwitcher } from "@/components/team-switcher"
import
{
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail
} from "@/components/ui/sidebar"
import { PATH_DASHBOARD } from "@/routes/path"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  dashboard: {
    mainTitle: "Dashboard",
    items: [
      {
        title: "Báo Cáo Tổng Quan",
        url: PATH_DASHBOARD.general.app,
        icon: SquareTerminal,
        isActive: true,
      },
      {
        title: "Báo Cáo Sản Phẩm",
        url: PATH_DASHBOARD.general.ecommerce,
        icon: Bot,
      },
    ],
  },
  brandManagement: {
    mainTitle: "Quản lý thương hiệu",
    items: [
      {
        title: "Chi Tiết Thương Hiệu",
        url: "/",
        icon: SquareTerminal,
      },
      {
        title: "Danh Sách Thương Hiệu",
        url: "/",
        icon: Bot,
      },
      {
        title: "Danh Sách Tài Khoản",
        url: "/",
        icon: Bot,
      },
      {
        title: "Danh Sách Đơn Hàng",
        url: "/",
        icon: Bot,
      },
      {
        title: "Danh Sách Giao Dịch",
        url: "/",
        icon: Bot,
      },
    ],
  },
  menuManagement: {
    mainTitle: "Quản lý thực đơn",
    items: [
      {
        title: "Thực Đơn",
        url: "/",
        icon: SquareTerminal,
      }
    ],
  },
  productManagement: {
    mainTitle: "Quản lý sản phẩm",
    items: [
      {
        title: "Sản Phẩm",
        url: PATH_DASHBOARD.product.root,
        icon: SquareTerminal,
      },
      {
        title: "Biến Thể Sản Phẩm",
        url: "/",
        icon: SquareTerminal,
      }
    ]
  },
  productCategory: {
    mainTitle: "Danh mục sản phẩm",
    items: [
      {
        title: "Danh Mục Sản Phẩm",
        url: PATH_DASHBOARD.category.root,
        icon: SquareTerminal,
      },
      {
        title: "Bộ Sưu Tập Sản Phẩm",
        url: "/",
        icon: SquareTerminal,
      }
    ]
  }
}

export function AppSidebar ( { ...props }: React.ComponentProps<typeof Sidebar> )
{
  return (
    <Sidebar variant="inset" collapsible="icon" { ...props }>
      <SidebarHeader>
        <TeamSwitcher teams={ data.teams } />
      </SidebarHeader>
      <SidebarContent>
        <NavMain content={ data.dashboard } />
        <NavMain content={ data.brandManagement } />
        <NavMain content={ data.menuManagement } />
        <NavMain content={ data.productManagement } />
        <NavMain content={ data.productCategory } />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
