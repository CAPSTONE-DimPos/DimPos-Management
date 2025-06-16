import { AppSidebar } from '@/components/app-sidebar'
import HeaderMain from '@/components/header-main'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { Outlet } from 'react-router-dom'

const DashBoardLayout = () =>
{
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <HeaderMain />
                <Outlet />
            </SidebarInset>
        </SidebarProvider>
    )
}

export default DashBoardLayout