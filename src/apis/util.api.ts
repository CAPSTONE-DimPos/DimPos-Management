export const normalizeParams = (filters: any) => {
  const normalized = { ...filters };
  const sort = filters.sort?.split(",");

  if (Array.isArray(sort) && sort.length) {
    normalized.sortBy = sort[0];
    normalized.sortDirection = sort[1];
  }

  const removeEmptyValueParams = Object.fromEntries(
    Object.entries(normalized).filter(([_, v]) => v != null)
  );
  return removeEmptyValueParams;
};


export const API_SUFFIX = {
  AUTH_API: "/authentication/login",
  CATEGORY_API: "/categories",
  PRODUCT_API: "/products",
  STORE_API: "/stores",
  STORE_DETAIL_API: "/stores/detail",
  PRODUCT_VARIANT_API: "/product-variants",
  MODIFIER_GROUP_API: "/modifier-groups",
  MODIFIER_OPTION_API: "/modifier-options",
  INGREDIENT_API: "/ingredients",
  CAMPAIGN_API: "/campaigns",
  PROMOTION_RULE_API: "/promotion-rules",
  ORDER_API: "/orders",
  INTERNAL_PRODUCT_API: "/internal-products",
  STAFF_API: "/staffs",
  BRAND_API: {
    BRAND: "/brands",      
    BRAND_DETAIL: "/brands/detail",
  },
  BRAND_MENU_API: "/brand-menus",
  STORE_PAYMENT_METHOD_CONFIG_API:"/store-payment-method-configs",
  INTERNAL_PURCHASE_ORDER_API: "/store-purchase-orders",
};