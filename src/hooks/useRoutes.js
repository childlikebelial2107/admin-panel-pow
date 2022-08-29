import { useCallback, useMemo } from 'react';
import { ALL_ROUTES, DEFAULT_VISIBLE_ROUTES, SECURE_ROUTES, secureRouteNeededPermissions } from 'constants';
import { useUserContext } from 'context/UserContext';
import { checkUserPermissions } from 'utils';
import * as pages from 'pages';

const capitalizeFirstLetterWithSep = (str, sep) =>
  str.toLowerCase().split('_').map((el) => el.charAt(0).toUpperCase() + el.slice(1)).join(sep);

const getComponent = (key) => {
  const getPath = capitalizeFirstLetterWithSep(key, '');
  return pages[getPath];
};

const renderRouteByPermissions = ({ userPermissions, route }) => {
  const isRouteSecure = SECURE_ROUTES.includes(route);
  const isUserPermissionsOk =
    secureRouteNeededPermissions[route] && userPermissions &&
    checkUserPermissions(secureRouteNeededPermissions[route], userPermissions);
  const isRouteVisible = DEFAULT_VISIBLE_ROUTES.includes(route);

  return isRouteVisible || (isRouteSecure && isUserPermissionsOk);
};

export const useRoutes = () => {
  const { userPermissions } = useUserContext();
  const createRouteObjectProps = useCallback((key) => ({
    key,
    path: key === 'ERROR_PAGE' ? '*' : `/${key.toLowerCase().replaceAll('_', '-')}`,
    label: capitalizeFirstLetterWithSep(key, ' '),
    Element: getComponent(key),
    isVisible: renderRouteByPermissions({ userPermissions, route: key }),
  }), []);

  const routesProps = useMemo(
    () => ALL_ROUTES.map((route) => createRouteObjectProps(route)),
    [createRouteObjectProps]);

  return useMemo(() => ({
    routesProps,
    createRouteObjectProps,
  }), [
    routesProps,
    createRouteObjectProps,
  ]);
};
