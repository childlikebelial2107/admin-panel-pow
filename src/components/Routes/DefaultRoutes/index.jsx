import { useEffect } from 'react';
import {
  Route,
  Navigate,
  Routes,
} from 'react-router-dom';
import { styleConsoleLog } from 'utils';
import { Template } from 'components';
import { useRoutes } from 'hooks';
import { SecureRouterHOC } from '../SecureRouterHOC';

export const DefaultRoutes = () => {
  const { routesProps } = useRoutes();

  useEffect(() => styleConsoleLog(
    process.env.REACT_APP_IS_LOCAL && (
      process.env.NODE_ENV === process.env.REACT_APP_DEVELOPMENT ?
        process.env.REACT_APP_DEVELOPMENT_MSG :
        process.env.REACT_APP_PROD_MSG
    ),
  ), []);

  return (
    <Routes>
      <Route element={<Template />}>
        <Route exact path="/" element={<Navigate to="/account-home" />} />
        {routesProps.map(({ path, Element, key }) => (
          <Route
            key={key}
            path={path}
            element={<SecureRouterHOC><Element /></SecureRouterHOC>}
          />
        ),
        )}
      </Route>
    </Routes>
  );
};
