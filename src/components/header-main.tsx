import NotificationIcon from "@/assets/icons/notification-icon"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { PATH_AUTH } from "@/routes/path"
import { ChevronLeft, LogOut } from "lucide-react"
import { Link, useLocation, useNavigate } from "react-router-dom"

const HeaderMain = () =>
{
    const pathname = useLocation().pathname;
    const navigate = useNavigate();
    console.log( "HeaderMain: ", pathname );
    const shouldShowBack = () =>
    {
        const segments = pathname.split( "/" ).filter( Boolean );
        return segments.length >= 3;
    };
    return (
        <nav className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 sticky top-0 bg-sidebar/98 z-10">
            <div className="flex items-center gap-2 px-4 justify-between w-full" >
                <div className="flex items-center gap-2">
                    { shouldShowBack() && (
                        <>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={ () =>
                                            {
                                                navigate( '/' + pathname.replace( /^\//, '' ).split( '/' ).slice( 0, 2 ).join( '/' ) )  // Navigate to the previous page
                                            } }
                                            className="gap-1 px-2"
                                        >
                                            <ChevronLeft className="h-6 w-6" />
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Quay lại trang trước</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </>
                    ) }
                </div>
                <div className="flex items-center gap-2">

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="rounded-full bg-white">
                                <NotificationIcon className="size-5" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                                Light
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                Dark
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                System
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Separator orientation="vertical" className="h-5" />
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="rounded-full bg-white">
                                <img src="/logo.png" alt="Toggle theme" className="h-8 w-8" />
                                <span className="sr-only">Toggle theme</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            className="w-(--radix-dropdown-menu-trigger-width) min-w-54 rounded-lg"
                            align="end"
                            side="bottom"
                            sideOffset={ 4 }
                        >
                            <DropdownMenuLabel className="text-muted-foreground text-xs">
                                Teams
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <Link to={ PATH_AUTH.logout }>
                                <DropdownMenuItem className="gap-2 p-2 hover:cursor-pointer">
                                    <div className="flex size-6 items-center justify-center rounded-md border bg-transparent">
                                        <LogOut className="size-4" />
                                    </div>
                                    <div className="text-muted-foreground font-medium">Đăng Xuất</div>
                                </DropdownMenuItem>
                            </Link>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </nav>
    )
}

export default HeaderMain