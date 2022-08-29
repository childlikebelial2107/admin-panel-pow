export const checkUserPermissions = (routePermissions, userPermissions) =>
  routePermissions.every((perm) => userPermissions.includes(perm));
