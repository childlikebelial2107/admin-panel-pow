import { createContext, useContext } from 'react';

export const UserContext = createContext();

export const useUserContext = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw Error(
      'User context cannot be used outside the UserContext provider',
    );
  }

  return context;
};
