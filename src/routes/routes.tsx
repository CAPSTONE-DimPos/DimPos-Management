// routes.tsx
import LoadingScreen from "@/components/loading-screen";
import DashBoardLayout from "@/layouts/dashboard/dash-board-layout";
import { lazy, Suspense, type ElementType } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import GuestGuard from "../guards/guest-guard";
import AuthGuard from "@/guards/auth-guard";
import Logout from "@/pages/logout/logout";
import {
  PATH_ADMIN_DASHBOARD,
  PATH_AUTH,
  PATH_BRAND_DASHBOARD,
  PATH_STORE_DASHBOARD,
} from "./path";
import RoleBasedGuard from "@/guards/role-based-guard";
import CampaignEditPage from "@/pages/campaign/edit";
import CampaignPage from "@/pages/campaign";
import ProductVariantEditPage from "@/pages/product-variant/edit-product-variant";
// import CreateModifierGroupPage from "@/pages/create-modifier-group";

const Loadable = (Component: ElementType) => (props: any) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};
//
const LoginPage = Loadable(lazy(() => import("@/pages/login")));

const GeneralAppPage = Loadable(lazy(() => import("@/pages/general-app")));
const InventoryReportPage = Loadable(
  lazy(() => import("@/pages/inventory-report/inventory-report-page"))
);
const GeneralEcommercePage = Loadable(
  lazy(() => import("@/pages/general-ecommerce"))
);

// Product routes
const CategoryPage = Loadable(lazy(() => import("@/pages/category")));
const CategoryCreatePage = Loadable(
  lazy(() => import("@/pages/category/create"))
);
const CategoryEditPage = Loadable(lazy(() => import("@/pages/category/edit")));
const ProductPage = Loadable(lazy(() => import("@/pages/product/list-product")));
const ProductCreatePage = Loadable(
  lazy(() => import("@/pages/product/create-product"))
);
const ProductEditPage = Loadable(lazy(() => import("@/pages/product/edit-product")));
const ProductVariantPage = Loadable(
  lazy(() => import("@/pages/product-variant"))
);
const ModifierGroupPage = Loadable(
  lazy(() => import("@/pages/modifier-group/list-modifier-group"))
);

// Menu routes
const MenuPage = Loadable(lazy(() => import("@/pages/menu/list-menu")));
const MenuCreatePage = Loadable(lazy(() => import("@/pages/menu/create-menu")));
const MenuEditPage = Loadable(lazy(() => import("@/pages/menu/edit-menu")));

const PromotionPage = Loadable(lazy(() => import("@/pages/promotion")));
// const CampaignPage = Loadable(lazy(() => import("@/pages/campaign")));

const BrandPage = Loadable(lazy(() => import("@/pages/brand")));
const StorePage = Loadable(lazy(() => import("@/pages/store")));
const RolePage = Loadable(lazy(() => import("@/pages/role")));
const InvoicePage = Loadable(lazy(() => import("@/pages/invoice")));

const Page404 = Loadable(lazy(() => import("@/pages/page-404")));

export const AppRoutes = () =>
  useRoutes([
    {
      path: PATH_AUTH.root,
      children: [
        {
          element: <Navigate to={PATH_AUTH.login} replace />,
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
        },
      ],
    },
    // Brand Admin Dashboard routes
    {
      path: PATH_BRAND_DASHBOARD.root,
      element: (
        <RoleBasedGuard role="BrandAdmin">
          <DashBoardLayout />
        </RoleBasedGuard>
      ),
      children: [
        {
          element: <Navigate to={PATH_BRAND_DASHBOARD.general.app} replace />,
          index: true,
        },
        {
          path: "app",
          element: <GeneralAppPage />,
        },
        {
          path: "inventory-report",
          element: <InventoryReportPage />,
        },
        {
          path: "ecommerce",
          element: <GeneralEcommercePage />,
        },

        {
          path: "category",
          element: <CategoryPage />,
        },
        {
          path: "category/new",
          element: <CategoryCreatePage />,
        },

        // Product routes
        {
          path: "product",
          element: <ProductPage />,
        },
        {
          path: "product/new",
          element: <ProductCreatePage />,
        },
        {
          path: "category/:id",
          element: <CategoryEditPage />,
        },
        {
          path: "product/:id",
          element: <ProductEditPage />,
        },
        {
          path: "product-variant",
          element: <ProductVariantPage />,
        },
        {
          path: "product-variant/:id",
          element: <ProductVariantEditPage />,
        },
        {
          path: "modifier-group",
          element: <ModifierGroupPage />,
        },
        {
          path: "promotion",
          element: <PromotionPage />,
        },
        {
          path: "campaign",
          element: <CampaignPage />,
        },
        {
          path: "campaign/:id",
          element: <CampaignEditPage />,
        },
        // Menu routes
        {
          path: "menu",
          element: <MenuPage />,
        },
        {
          path: "menu/new",
          element: <MenuCreatePage />,
        },
        {
          path: "menu/:id",
          element: <MenuEditPage />,
        },

        {
          path: "brand",
          element: <BrandPage />,
        },
        {
          path: "store",
          element: <StorePage />,
        },
        {
          path: "role",
          element: <RolePage />,
        },
        {
          path: "invoice",
          element: <InvoicePage />,
        },
      ],
    },
    // System Admin Dashboard routes
    {
      path: PATH_ADMIN_DASHBOARD.root,
      element: (
        <RoleBasedGuard role="SystemAdmin">
          <DashBoardLayout />
        </RoleBasedGuard>
      ),
      children: [
        {
          element: <Navigate to={PATH_ADMIN_DASHBOARD.general.app} replace />,
          index: true,
        },
        {
          path: "app",
          element: <GeneralAppPage />,
        },
      ],
    },
    // Store Admin Dashboard routes
    {
      path: PATH_STORE_DASHBOARD.root,
      element: (
        <RoleBasedGuard role="StoreAdmin">
          <DashBoardLayout />
        </RoleBasedGuard>
      ),
      children: [
        {
          element: <Navigate to={PATH_STORE_DASHBOARD.general.app} replace />,
          index: true,
        },
        {
          path: "app",
          element: <GeneralAppPage />,
        },
      ],
    },
    {
      path: "/",
      element: (
        <AuthGuard>
          <DashBoardLayout />
        </AuthGuard>
      ),
      children: [
        {
          element: <Navigate to={PATH_BRAND_DASHBOARD.root} replace />,
          index: true,
        },
      ],
    },
    // Add the 404 route
    {
      path: "/404",
      element: <Page404 />,
    },
    // Catch all unmatched routes
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
