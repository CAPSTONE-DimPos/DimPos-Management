
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
    root: path(ROOTS_BRAND_DASHBOARD, '/product'),
    createProduct: path(ROOTS_BRAND_DASHBOARD, '/product/new'),
    editProduct: (id: string) => path(ROOTS_BRAND_DASHBOARD, `/product/${id}`),
    variant: path(ROOTS_BRAND_DASHBOARD, '/product-variant'),
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

  order:{
    root:path(ROOTS_BRAND_DASHBOARD, '/order'),
  },

  brand: {
    root: path(ROOTS_BRAND_DASHBOARD, '/brand'),
  },
  store: {
    root: path(ROOTS_BRAND_DASHBOARD, '/store'),
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
    app: path(ROOTS_ADMIN_DASHBOARD, '/app'),
  },
}

export const PATH_STORE_DASHBOARD = {
  root: ROOTS_STORE_DASHBOARD,
  general: {
    app: path(ROOTS_STORE_DASHBOARD, '/app'),
  },
};