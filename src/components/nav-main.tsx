"use client"

import { type LucideIcon } from "lucide-react"

import
{
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { Link } from "react-router-dom"

export function NavMain ( {
  content,
}: {
  content: {
    mainTitle: string
    items: {
      title: string
      url: string
      icon?: LucideIcon
      isActive?: boolean
    }[]
  }
} )
{
  const { open, toggleSidebar } = useSidebar()
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-sm mb-1">{ content.mainTitle }</SidebarGroupLabel>
      <SidebarMenu>
        { content.items.map( ( item ) => (
          <Link to={ item.url } key={ item.title }>
            <SidebarMenuItem onClick={ open ? undefined : toggleSidebar }>
              <SidebarMenuButton tooltip={ item.title }>
                { item.icon && <item.icon /> }
                <span>{ item.title }</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </Link>
        ) ) }
      </SidebarMenu>
    </SidebarGroup>
  )
}
