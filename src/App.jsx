import { useUserContextValues } from 'hooks';
import { UserContext } from 'context/UserContext';
import { DefaultRoutes } from 'components';

export const App = () => {
  const userContextValues = useUserContextValues();

  return (
    <UserContext.Provider value={userContextValues}>
      <DefaultRoutes />
    </UserContext.Provider>
  );
};
