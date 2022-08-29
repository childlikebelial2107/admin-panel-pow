// TODO: Need to fix context when real BE going to work.

import { useState, useEffect, useMemo, useCallback } from 'react';
import { defaultUserData, userAdminData } from 'api';
import { U_PERMISSIONS } from 'constants/pageFields';

export const useUserContextValues = () => {
  // TODO: fix it to real requests when it's needed
  // const [user, setUser] = useState({});

  const getUserData = useCallback(() => {
    // here should be real request but...
    const data = true ? userAdminData : defaultUserData;

    return data;
  }, []);

  // Just to easy test data from api/mock
  const user = !true ? userAdminData : defaultUserData;

  // useEffect(() => {
  //   const data = getUserData();
  //   setUser(data);
  // }, []);

  const userPermissions = useMemo(() => user[U_PERMISSIONS], [user]);

  return useMemo(() => ({
    user,
    getUserData,
    userPermissions,
  }), [
    user,
    getUserData,
    userPermissions,
  ]);
};
