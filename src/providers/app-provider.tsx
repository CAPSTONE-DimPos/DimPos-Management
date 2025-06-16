import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster as Sonner } from '../components/ui/sonner';
import { Toaster } from '../components/ui/toaster';
import AuthProvider from "./auth-provider";
import FontProvider from "./font-provider";
import ReduxProvider from "./redux-provider";


const queryClient = new QueryClient()


type Props = {
    children: React.ReactNode
}

const AppProvider = ( { children }: Props ) =>
{
    return (
        <FontProvider>
            <QueryClientProvider client={ queryClient }>
                <ReduxProvider>
                    <AuthProvider>
                        { children }
                    </AuthProvider>
                    <Sonner
                        position="top-right"
                        toastOptions={ {
                            classNames: {
                                toast: "bg-white dark:bg-zinc-900 border border-red-200 dark:border-red-700 shadow-lg rounded-lg p-4",
                                title: "text-red-600 font-semibold text-base",
                                description: "text-sm text-muted-foreground",
                            },
                        } }
                    />
                    <Toaster />
                </ReduxProvider>
            </QueryClientProvider>
        </FontProvider>
    )
}

export default AppProvider