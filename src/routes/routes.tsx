// routes.tsx
import LoadingScreen from "@/components/loading-screen";
import AuthGuard from "@/guards/auth-guard";
import RoleBasedGuard from "@/guards/role-based-guard";
import DashBoardLayout from "@/layouts/dashboard/dash-board-layout";
import Logout from "@/pages/logout/logout";
import { lazy, Suspense, type ElementType } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import GuestGuard from "../guards/guest-guard";
import {
  PATH_ADMIN_DASHBOARD,
  PATH_AUTH,
  PATH_BRAND_DASHBOARD,
  PATH_STORE_DASHBOARD,
} from "./path";
import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "@/components/error-fallback";

const Loadable = (Component: ElementType) => (props: any) => {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary onReset={reset} FallbackComponent={ErrorFallback}>
          <Suspense fallback={<LoadingScreen />}>
            <Component {...props} />
          </Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
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

//System admin
const BrandManagementPage = Loadable(
  lazy(() => import("@/pages/brand-management"))
);
const CreateBrandPage = Loadable(
  lazy(
    () => import("@/pages/brand-management/create/brand-management-create-page")
  )
);
const BrandAccountPage = Loadable(
  lazy(() => import("@/pages/brand-account"))
);
const SystemPaymentMethodPage = Loadable(
  lazy(() => import("@/pages/system-payment-method"))
);
const SystemLogPage = Loadable(
  lazy(() => import("@/pages/system-log"))
);



//Brand admin
const BrandOrderEditPage = Loadable(lazy(() => import("@/pages/brand-order/edit-order")));
// Product routes
const CategoryPage = Loadable(lazy(() => import("@/pages/category")));
const CategoryCreatePage = Loadable(
  lazy(() => import("@/pages/category/create"))
);
const CategoryEditPage = Loadable(lazy(() => import("@/pages/category/edit")));
const ProductPage = Loadable(
  lazy(() => import("@/pages/product/list-product"))
);
const ProductCreatePage = Loadable(
  lazy(() => import("@/pages/product/create-product"))
);
const ProductEditPage = Loadable(
  lazy(() => import("@/pages/product/edit-product"))
);
const ProductVariantPage = Loadable(
  lazy(() => import("@/pages/product-variant"))
);
const ProductVariantEditPage = Loadable(
  lazy(() => import("@/pages/product-variant/edit-product-variant"))
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
const RolePage = Loadable(lazy(() => import("@/pages/role")));
const InvoicePage = Loadable(lazy(() => import("@/pages/invoice")));

const CampaignPage = Loadable(lazy(() => import("@/pages/campaign")));
const CampaignEditPage = Loadable(lazy(() => import("@/pages/campaign/edit")));

const StorePage = Loadable(lazy(() => import("@/pages/store")));
const StoreEditPage = Loadable(
  lazy(() => import("@/pages/store/edit-stores/edit-store-page"))
);

const OrderPage = Loadable(
  lazy(() => import("@/pages/brand-order/list-order"))
);
// const InternalPurchaseOrderPage = Loadable(lazy(() => import("@/pages/internal-purchase-orders/list")))

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
          path: "store/:id",
          element: <StoreEditPage />,
        },
        {
          path: "role",
          element: <RolePage />,
        },
        {
          path: "invoice",
          element: <InvoicePage />,
        },
        {
          path: "brand-order",
          element: <OrderPage />,
        },
        {
          path: "brand-order/:id",
          element: <BrandOrderEditPage />,
        },
        // {
        //   path: "internal-purchase-orders",
        //   element: <InternalPurchaseOrderPage/>
        // }
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
        {
          path: "brand",
          element: <BrandManagementPage />,
        },
        {
          path: "brand/new",
          element: <CreateBrandPage />,
        },
        {
          path: "brand-account",
          element: <BrandAccountPage />,
        },
        {
          path: "brand/account/new",
          element: <BrandAccountPage />,
        },
        {
          path: "payment-method",
          element: <SystemPaymentMethodPage />,
        },
        {
          path: "system-log",
          element: <SystemLogPage />,
        },
        // {
        //   path: "brand/account/:id",
        //   element: < />,
        // },
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

        // Dashboard
        { path: "app", element: <GeneralAppPage /> },
        { path: "dashboard/metrics", element: <GeneralAppPage /> },
        { path: "dashboard/charts", element: <GeneralAppPage /> },

        // Menu
        { path: "menu", element: <GeneralAppPage /> },
        { path: "menu/:id", element: <GeneralAppPage /> },

        // Promotion
        { path: "promotion", element: <GeneralAppPage /> },
        { path: "promotion/:id", element: <GeneralAppPage /> },

        // Orders
        { path: "orders", element: <GeneralAppPage /> },
        { path: "orders/:id", element: <GeneralAppPage /> },

        // Store Accounts
        { path: "accounts", element: <GeneralAppPage /> },
        { path: "accounts/:id", element: <GeneralAppPage /> },

        // Purchase Requests
        { path: "purchase-requests", element: <GeneralAppPage /> },
        { path: "purchase-requests/:id", element: <GeneralAppPage /> },

        // Financial Shifts
        { path: "financial-shifts", element: <GeneralAppPage /> },

        // Inventory
        { path: "inventory", element: <GeneralAppPage /> },

        // Settings
        { path: "settings", element: <GeneralAppPage /> },
        { path: "settings/payment-methods", element: <GeneralAppPage /> },
        { path: "settings/shift-config", element: <GeneralAppPage /> },
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
