import { AppSidebar } from '@/components/app-sidebar'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { useTheme } from '@/providers/theme-provider'
import { Moon, Sun } from 'lucide-react'
import { Outlet } from 'react-router-dom'

const DashBoardLayout = () =>
{
    const { setTheme } = useTheme()
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <nav className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 sticky top-0 bg-background/98 z-10">
                    <div className="flex items-center gap-2 px-4 justify-between w-full" >
                        <SidebarTrigger className="-ml-1" />
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                    <span className="sr-only">Toggle theme</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={ () => setTheme( "light" ) }>
                                    Light
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={ () => setTheme( "dark" ) }>
                                    Dark
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={ () => setTheme( "system" ) }>
                                    System
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </nav>
                <div className="px-4">
                    <Outlet />
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}

export default DashBoardLayout