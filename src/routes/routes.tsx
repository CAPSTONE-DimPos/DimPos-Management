// routes.tsx
import LoadingScreen from "@/components/loading-screen";
import DashBoardLayout from "@/layouts/dashboard/dash-board-layout";
import { lazy, Suspense, type ElementType } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import GuestGuard from '../guards/guest-guard';
import AuthGuard from "@/guards/auth-guard";
import Logout from "@/pages/logout/logout";
import { PATH_AUTH, PATH_DASHBOARD } from "./path";

const Loadable = ( Component: ElementType ) => ( props: any ) =>
{
    return (
        <Suspense fallback={ <LoadingScreen /> }>
            <Component { ...props } />
        </Suspense>
    );
};
//
const LoginPage = Loadable( lazy( () => import( "@/pages/login/login-page" ) ) )

const GeneralAppPage = Loadable( lazy( () => import( "@/pages/general-app" ) ) )
const GeneralEcommercePage = Loadable( lazy( () => import( "@/pages/general-ecommerce" ) ) )

const CategoryPage = Loadable( lazy( () => import( "@/pages/category" ) ) )

const ProductPage = Loadable( lazy( () => import( "@/pages/product" ) ) )
const ProductCreatePage = Loadable( lazy( () => import( "@/pages/create-product" ) ) )
const ProductVariantPage = Loadable( lazy( () => import( "@/pages/product-variant" ) ) )
const ModifierGroupPage = Loadable( lazy( () => import( "@/pages/modifier-group" ) ) )

const Page404 = Loadable( lazy( () => import( "@/pages/page-404" ) ) )

export const AppRoutes = () =>
    useRoutes( [
        {
            path: PATH_AUTH.root,
            children: [
                {
                    element: <Navigate to={ PATH_AUTH.login } replace />,
                    index: true,
                },
                {
                    path: "login",
                    element: (
                        <GuestGuard>
                            <LoginPage />
                        </GuestGuard>
                    ),
                },
                {
                    path: "logout",
                    element: <Logout />,
                }

            ]
        },
        {
            path: PATH_DASHBOARD.root,
            element: (
                <AuthGuard>
                    <DashBoardLayout />
                </AuthGuard>
            ),
            children: [
                {
                    element: <Navigate to={ PATH_DASHBOARD.general.app } replace />,
                    index: true,
                },
                {
                    path: "app",
                    element: <GeneralAppPage />,
                },
                {
                    path: 'ecommerce',
                    element: <GeneralEcommercePage />,
                },

                {
                    path: 'category',
                    element: <CategoryPage />,
                },
                {
                    path: 'product',
                    element: <ProductPage />,
                },
                {
                    path: 'product/new',
                    element: <ProductCreatePage />,
                },
                {
                    path: 'product-variant',
                    element: <ProductVariantPage />,
                },
                {
                    path: 'modifier-group',
                    element: <ModifierGroupPage />,
                }
            ],
        },
        {
            path: '/',
            element: (
                <AuthGuard>
                    <DashBoardLayout />
                </AuthGuard>
            ),
            children: [ { element: <Navigate to={ PATH_DASHBOARD.root } replace />, index: true } ],
        },
        // Add the 404 route
        {
            path: '/404',
            element: <Page404 />,
        },
        // Catch all unmatched routes
        { path: '*', element: <Navigate to="/404" replace /> },

    ], )
