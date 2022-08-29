import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useUserContext } from 'context/UserContext';
import { secureRouteNeededPermissions, SECURE_ROUTES } from 'constants';
import { checkUserPermissions, urlToConstantView } from 'utils';

export const SecureRouterHOC = ({ children }) => {
  const { userPermissions } = useUserContext();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const route = urlToConstantView(location.pathname);
    if (SECURE_ROUTES.includes(route)) {
      const userPermissionsIsOk =
        checkUserPermissions(secureRouteNeededPermissions[route], userPermissions);

      if (!userPermissionsIsOk) {
        navigate('/', { replace: true });
      }
    }
  }, []);

  return children;
};
