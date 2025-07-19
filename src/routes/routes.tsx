// routes.tsx
import LoadingScreen from "@/components/loading-screen";
import AuthGuard from "@/guards/auth-guard";
import RoleBasedGuard from "@/guards/role-based-guard";
import DashBoardLayout from "@/layouts/dashboard/dash-board-layout";
import Logout from "@/pages/logout/logout";
import { lazy, Suspense, type ElementType } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import GuestGuard from "../guards/guest-guard";
import
{
  PATH_ADMIN_DASHBOARD,
  PATH_AUTH,
  PATH_BRAND_DASHBOARD,
  PATH_STORE_DASHBOARD,
} from "./path";
import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "@/components/error-fallback";

const Loadable = ( Component: ElementType ) => ( props: any ) =>
{
  return (
    <QueryErrorResetBoundary>
      { ( { reset } ) => (
        <ErrorBoundary onReset={ reset } FallbackComponent={ ErrorFallback }>
          <Suspense fallback={ <LoadingScreen /> }>
            <Component { ...props } />
          </Suspense>
        </ErrorBoundary>
      ) }
    </QueryErrorResetBoundary>
  );
};
//
const LoginPage = Loadable( lazy( () => import( "@/pages/login" ) ) );

const GeneralAppPage = Loadable( lazy( () => import( "@/pages/general-app" ) ) );
const InventoryReportPage = Loadable(
  lazy( () => import( "@/pages/inventory-report/inventory-report-page" ) )
);
const GeneralEcommercePage = Loadable(
  lazy( () => import( "@/pages/general-ecommerce" ) )
);

const BrandAccountPage = Loadable( lazy( () => import( "@/pages/brand-account" ) ) );
const SystemPaymentMethodPage = Loadable(
  lazy( () => import( "@/pages/system-payment-method" ) )
);
const SystemLogPage = Loadable( lazy( () => import( "@/pages/system-log" ) ) );

//Brand admin
const BrandOrderEditPage = Loadable( lazy( () => import( "@/pages/brand-order/edit-order" ) ) );
const OrderPage = Loadable(
  lazy( () => import( "@/pages/brand-order/list-order" ) )
);
// Product routes
const CategoryPage = Loadable( lazy( () => import( "@/pages/category" ) ) );
const CategoryCreatePage = Loadable(
  lazy( () => import( "@/pages/category/create" ) )
);
const CategoryEditPage = Loadable( lazy( () => import( "@/pages/category/edit" ) ) );
const ProductPage = Loadable(
  lazy( () => import( "@/pages/product/list-product" ) )
);
const ProductCreatePage = Loadable(
  lazy( () => import( "@/pages/product/create-product" ) )
);
const ProductEditPage = Loadable(
  lazy( () => import( "@/pages/product/edit-product" ) )
);
const ProductVariantPage = Loadable(
  lazy( () => import( "@/pages/product-variant" ) )
);
const ProductVariantEditPage = Loadable(
  lazy( () => import( "@/pages/product-variant/edit-product-variant" ) )
);
const ModifierGroupPage = Loadable(
  lazy( () => import( "@/pages/modifier-group/list-modifier-group" ) )
);


const IngredientPage = Loadable( lazy( () => import( "@/pages/ingredient/list-ingredient" ) ) );
const IngredientCreatePage = Loadable( lazy( () => import( "@/pages/ingredient/create-ingredient" ) ) );
const IngredientEditPage = Loadable( lazy( () => import( "@/pages/ingredient/edit-ingredient" ) ) );
const PurchasableProductListPage = Loadable(
  lazy(() => import("@/pages/purchasable-product/list-purchasable-product"))
);
const PurchasableProductCreatePage = Loadable(
  lazy(() => import("@/pages/purchasable-product/create-purchasable-product"))
);
const PurchasableProductEditPage = Loadable(
  lazy(() => import("@/pages/purchasable-product/edit-purchasable-product"))
);

const InternalPurchaseOrderPage = Loadable(
  lazy( () => import( "@/pages/brand-purchase-orders/list" ) )
);

const InternalPurchaseOrderEditPage = Loadable(
  lazy(() => import("@/pages/brand-purchase-orders/edit"))
);

// Menu routes
const MenuPage = Loadable( lazy( () => import( "@/pages/menu/list-menu" ) ) );
const MenuCreatePage = Loadable( lazy( () => import( "@/pages/menu/create-menu" ) ) );
const MenuEditPage = Loadable( lazy( () => import( "@/pages/menu/edit-menu" ) ) );

const PromotionPage = Loadable( lazy( () => import( "@/pages/promotion/list" ) ) );
const CreatePromotionPage = Loadable(
  lazy( () => import( "@/pages/promotion/create-promotion" ) )
);
const EditPromotionPage = Loadable(
  lazy( () => import( "@/pages/promotion/edit-promotion" ) )
);
// const CampaignPage = Loadable(lazy(() => import("@/pages/campaign")));

const BrandPage = Loadable( lazy( () => import( "@/pages/brand" ) ) );
const RolePage = Loadable( lazy( () => import( "@/pages/role" ) ) );
const InvoicePage = Loadable( lazy( () => import( "@/pages/invoice" ) ) );
const BrandManagementPage = Loadable(
  lazy( () => import( "@/pages/system-admin" ) )
);
const CreateBrandPage = Loadable(
  lazy( () => import( "@/pages/system-admin/create/brand-management-create-page" ) )
);
const CampaignPage = Loadable(lazy(() => import("@/pages/campaign")));
const CampaignEditPage = Loadable(lazy(() => import("@/pages/campaign/edit")));
const StorePage = Loadable(lazy(() => import("@/pages/store/list-stores")));
const StoreEditPage = Loadable(lazy(() => import("@/pages/store/edit-store")));
const StoreCreatePage = Loadable(
  lazy(() => import("@/pages/store/create-store"))
);

const OrderListPage = Loadable( lazy( () => import( "@/pages/store-admin/order-store/order-list-page" ) ) );
const StoreOrderDetailPage = Loadable( lazy( () => import( "@/pages/store-admin/order-store/order-detail-store" ) ) );
const StoreOverviewPage = Loadable( lazy( () => import( "@/pages/store-admin/store-overview" ) ) );
const ShiftConfigPage = Loadable( lazy( () => import( "@/pages/store-admin/shift-config" ) ) );
const Page404 = Loadable(lazy(() => import("@/pages/page-404")));
const AccountPage = Loadable( lazy( () => import( "@/pages/store-admin/store-account/account" ) ) );

const Page404 = Loadable( lazy( () => import( "@/pages/page-404" ) ) );

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
          element: <Navigate to={ PATH_BRAND_DASHBOARD.general.app } replace />,
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
          path: "ingredient",
          element: <IngredientPage />,
        },
        {
          path: "ingredient/new",
          element: <IngredientCreatePage />,
        },
        {
          path: "ingredient/:id",
          element: <IngredientEditPage />,
        },
        // Promotion routes
        {
          path: "promotion",
          element: <PromotionPage />,
        },
        {
          path: "promotion/new",
          element: <CreatePromotionPage />,
        },
        {
          path: "promotion/:id",
          element: <EditPromotionPage />,
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
          path: "store/new",
          element: <StoreCreatePage />,
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
        {
          path: "brand-purchase-orders",
          element: <InternalPurchaseOrderPage />,
        },
        {
          path: "brand-purchase-orders/:id",
          element: <InternalPurchaseOrderEditPage />,
        },
        {
          path: "purchase-products",
          element: <PurchasableProductListPage />,
        },
        {
          path: "purchase-products/new",
          element: <PurchasableProductCreatePage />,
        },
        {
          path: "purchase-products/:id",
          element: <PurchasableProductEditPage />,
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
          element: <Navigate to={ PATH_ADMIN_DASHBOARD.general.app } replace />,
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
          element: <Navigate to={ PATH_STORE_DASHBOARD.general.app } replace />,
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
        { path: 'orders', element: <OrderListPage /> },
        { path: 'orders/:id', element: <StoreOrderDetailPage /> },

        // Purchase Requests
        { path: "purchase-requests", element: <GeneralAppPage /> },
        { path: "purchase-requests/:id", element: <GeneralAppPage /> },

        // Financial Shifts
        { path: "financial-shifts", element: <GeneralAppPage /> },

        // Inventory
        { path: "inventory", element: <GeneralAppPage /> },

        // Settings
        { path: "settings", element: <StoreOverviewPage /> },
        { path: "shift-config", element: <ShiftConfigPage /> },
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
          element: <Navigate to={ PATH_BRAND_DASHBOARD.root } replace />,
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
  ] );
