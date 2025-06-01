import { ChevronLeft, Moon, Sun } from "lucide-react"
import { Button } from "./ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { SidebarTrigger } from "./ui/sidebar"
import { useTheme } from "@/providers/theme-provider"
import { useLocation, useNavigate } from "react-router-dom"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"
import { Separator } from "./ui/separator"

const HeaderMain = () =>
{
    const { setTheme } = useTheme()
    const pathname = useLocation().pathname;
    const navigate = useNavigate();
    console.log( "HeaderMain: ", pathname );
    const shouldShowBack = () =>
    {
        const segments = pathname.split( "/" ).filter( Boolean );
        return segments.length >= 3;
    };
    return (
        <nav className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 sticky top-0 bg-background/98 z-10">
            <div className="flex items-center gap-2 px-4 justify-between w-full" >
                <div className="flex items-center gap-2">
                    <SidebarTrigger className="-ml-1" />
                    <Separator orientation="vertical" className="h-4" />
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
                                                navigate( -1 )  // Navigate to the previous page
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
                            <Separator orientation="vertical" className="h-4" />
                        </>
                    ) }
                </div>
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
    )
}

export default HeaderMain