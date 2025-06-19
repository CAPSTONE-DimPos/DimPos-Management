
const path = (root: string, sublink: string) => {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = '/auth';
const ROOTS_DASHBOARD = '/dashboard';

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, '/login'),
  logout: path(ROOTS_AUTH, '/logout'),
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  general: {
    app: path(ROOTS_DASHBOARD, '/app'),
    inventoryReport: path(ROOTS_DASHBOARD, '/inventory-report'),
  },
  category: {
    root: path(ROOTS_DASHBOARD, '/category'),
  },
  product: {
    root: path(ROOTS_DASHBOARD, '/product'),
    createProduct: path(ROOTS_DASHBOARD, '/product/new'),
    editProduct: (id: string) => path(ROOTS_DASHBOARD, `/product/${id}`),
    variant: path(ROOTS_DASHBOARD, '/product-variant'),
    modifier: path(ROOTS_DASHBOARD, '/modifier-group'),
    menu: path(ROOTS_DASHBOARD, '/menu'),
    discount: path(ROOTS_DASHBOARD, '/discount'),
    importProduct: path(ROOTS_DASHBOARD, '/import-product'),
  },
}