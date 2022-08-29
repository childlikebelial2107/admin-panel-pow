export const DEFAULT_HIDDEN_ROUTES = ['ERROR_PAGE'];
export const DEFAULT_VISIBLE_ROUTES = [
  'ACCOUNT_HOME',
  'ANOTHER_ROUTE',
  'TEST_GRAPH_QL',
];
export const SECURE_ROUTES = [
  'ADMIN_SETTINGS',
];

export const secureRouteNeededPermissions = {
  ADMIN_SETTINGS: ['superAdmin'],
};

export const ALL_ROUTES = [...DEFAULT_VISIBLE_ROUTES, ...DEFAULT_HIDDEN_ROUTES, ...SECURE_ROUTES];
