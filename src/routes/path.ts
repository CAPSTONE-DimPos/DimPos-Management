
const path = (root: string, sublink: string) => {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = '/auth';
const ROOTS_BRAND_DASHBOARD = '/brand-admin/dashboard';
const ROOTS_ADMIN_DASHBOARD = '/system-admin/dashboard';
const ROOTS_STORE_DASHBOARD = '/store-admin/dashboard';

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, '/login'),
  logout: path(ROOTS_AUTH, '/logout'),
};

export const PATH_BRAND_DASHBOARD = {
  root: ROOTS_BRAND_DASHBOARD,
  general: {
    app: path(ROOTS_BRAND_DASHBOARD, '/app'),
    inventoryReport: path(ROOTS_BRAND_DASHBOARD, '/inventory-report'),
  },
  category: {
    root: path(ROOTS_BRAND_DASHBOARD, '/category'),
    create: path(ROOTS_BRAND_DASHBOARD, '/category/new'),
    edit: (id: string) => path(ROOTS_BRAND_DASHBOARD, `/category/${id}`),
  },
  product: {
    //Product
    root: path(ROOTS_BRAND_DASHBOARD, '/product'),
    createProduct: path(ROOTS_BRAND_DASHBOARD, '/product/new'),
    editProduct: (id: string) => path(ROOTS_BRAND_DASHBOARD, `/product/${id}`),

    //Product variant
    variant: path(ROOTS_BRAND_DASHBOARD, '/product-variant'),
    createVariant: path(ROOTS_BRAND_DASHBOARD, '/product-variant/new'),
    editVariant: (id: string) => path(ROOTS_BRAND_DASHBOARD, `/product-variant/${id}`),

    //Modifier
    modifier: path(ROOTS_BRAND_DASHBOARD, '/modifier-group'),
    // createModifier: path(ROOTS_BRAND_DASHBOARD, '/modifier-group/new'),
    menu: path(ROOTS_BRAND_DASHBOARD, '/menu'),
    createMenu: path(ROOTS_BRAND_DASHBOARD, '/menu/new'),
    editMenu: (id: string) => path(ROOTS_BRAND_DASHBOARD, `/menu/${id}`),
    discount: path(ROOTS_BRAND_DASHBOARD, '/discount'),
    importProduct: path(ROOTS_BRAND_DASHBOARD, '/import-product'),
  },
  combo: {
    root: path(ROOTS_BRAND_DASHBOARD, '/combo'),
  },

  ingredient: {
    root: path(ROOTS_BRAND_DASHBOARD, '/ingredient'),
  },
  tax: {
    root: path(ROOTS_BRAND_DASHBOARD, '/tax'),
  },

  recipe: {
    root: path(ROOTS_BRAND_DASHBOARD, '/recipe'),
  },
  internalPurchaseOrders: {
    root: path(ROOTS_BRAND_DASHBOARD, '/internal-purchase-orders'),
    create: path(ROOTS_BRAND_DASHBOARD, '/internal-purchase-orders/create'),
    detail: (id: string) => path(ROOTS_BRAND_DASHBOARD, `/internal-purchase-orders/${id}`),
  },
  promotion: {
    root: path(ROOTS_BRAND_DASHBOARD, '/promotion'),
  },
  campaign: {
    root: path(ROOTS_BRAND_DASHBOARD, '/campaign'),
    createCampaign: path(ROOTS_BRAND_DASHBOARD, '/campaign/new'),
    editCampaign: (id: string) => path(ROOTS_BRAND_DASHBOARD, `/campaign/${id}`),
  },

  accountStore: {
    root: path(ROOTS_BRAND_DASHBOARD, '/store-account'),
  },

  order: {
    root: path(ROOTS_BRAND_DASHBOARD, '/brand-order'),
    edit: (id: string) => path(ROOTS_BRAND_DASHBOARD, `/brand-order/${id}`),
  },

  brand: {
    root: path(ROOTS_BRAND_DASHBOARD, '/brand'),
  },
  store: {
    root: path(ROOTS_BRAND_DASHBOARD, '/store'),
    create: path(ROOTS_BRAND_DASHBOARD, '/store/new'),
    edit: (id: string) => path(ROOTS_BRAND_DASHBOARD, `/store/${id}`),
  },
  role: {
    root: path(ROOTS_BRAND_DASHBOARD, '/role'),
  },
  invoice: {
    root: path(ROOTS_BRAND_DASHBOARD, '/invoice'),
  }
}


export const PATH_ADMIN_DASHBOARD = {
  root: ROOTS_ADMIN_DASHBOARD,

  general: {
    app: path(ROOTS_ADMIN_DASHBOARD, "/app"),
  },

  brand: {
    root: path(ROOTS_ADMIN_DASHBOARD, "/brand"),
    create: path(ROOTS_ADMIN_DASHBOARD, "/brand/new"),
    edit: (id: string) => path(ROOTS_ADMIN_DASHBOARD, `/brand/${id}`),
  },

  brandAccount:{
    root: path(ROOTS_ADMIN_DASHBOARD, "/brand-account"),
    create: path(ROOTS_ADMIN_DASHBOARD, "/brand-account/new"),
    edit: (id: string) => path(ROOTS_ADMIN_DASHBOARD, `/brand-account/${id}`),
  },

  systemPaymentMethod: {
    root: path(ROOTS_ADMIN_DASHBOARD, "/payment-method"),
    edit: path(ROOTS_ADMIN_DASHBOARD, "/payment-method/edit"),
  },
  systemLog: {
    root: path(ROOTS_ADMIN_DASHBOARD, "/system-log"),
  },
};

export const PATH_STORE_DASHBOARD = {
  root: ROOTS_STORE_DASHBOARD,

  general: {
    app: path(ROOTS_STORE_DASHBOARD, '/app'),
  },

  dashboard: {
    root: path(ROOTS_STORE_DASHBOARD, '/app'),
    metrics: path(ROOTS_STORE_DASHBOARD, '/dashboard/metrics'),
    charts: path(ROOTS_STORE_DASHBOARD, '/dashboard/charts'),
  },

  menu: {
    root: path(ROOTS_STORE_DASHBOARD, '/menu'),
    detail: (id: string) => path(ROOTS_STORE_DASHBOARD, `/menu/${id}`),
  },

  promotion: {
    root: path(ROOTS_STORE_DASHBOARD, '/promotion'),
    detail: (id: string) => path(ROOTS_STORE_DASHBOARD, `/promotion/${id}`),
  },

  order: {
    root: path(ROOTS_STORE_DASHBOARD, '/orders'),
    detail: (id: string) => path(ROOTS_STORE_DASHBOARD, `/orders/${id}`),
  },

  account: {
    root: path(ROOTS_STORE_DASHBOARD, '/accounts'),
    detail: (id: string) => path(ROOTS_STORE_DASHBOARD, `/accounts/${id}`),
  },

  purchaseRequest: {
    root: path(ROOTS_STORE_DASHBOARD, '/purchase-requests'),
    detail: (id: string) => path(ROOTS_STORE_DASHBOARD, `/purchase-requests/${id}`),
  },

  financialShift: {
    root: path(ROOTS_STORE_DASHBOARD, '/financial-shifts'),
  },

  inventory: {
    root: path(ROOTS_STORE_DASHBOARD, '/inventory'),
  },

  storeSettings: {
    root: path(ROOTS_STORE_DASHBOARD, '/settings'),
    paymentMethods: path(ROOTS_STORE_DASHBOARD, '/settings/payment-methods'),
    shiftConfig: path(ROOTS_STORE_DASHBOARD, '/settings/shift-config'),
  },
};