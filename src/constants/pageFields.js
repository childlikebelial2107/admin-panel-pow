export const componentsTypes = {
  INFO: 'info',
  INPUT: 'input',
  NUMBER_INPUT: 'numInput',
  SINGLE_SELECT: 'singleSelect',
  MULTI_SELECT: 'multiSelect',

  NOT_A_ROW_DATA: null,
};

// USER ACCOUNT KEYS FROM BE
export const U_ID = 'userId';
export const U_LOGIN_ID = 'loginId';
export const U_CHAT = 'isChat';
export const U_KNOWN_DEVICE = 'knownDevice';
export const U_PERMISSIONS = 'permissions';
export const U_TEST_USER_FLAG = 'testUserFlag';
export const U_PASSWORD = 'password';
export const U_PASSWORD_STRENGTH = 'passwordStrength';
export const U_CREATION_DATE_REG_FORM = 'registrationDateRegForm';

// ANOTHER ROUTE KEYS FROM BE
export const AR_STATUS = 'anotherRouteStatus';
export const AR_OPTIONS_FIELD = 'anotherRouteOptionsField';
export const AR_TEXT_FIELD = 'anotherRouteTextField';
export const AR_VALUE_FIELD = 'anotherRouteValueField';
export const AR_TEMPLATE_ID = 'anotherRouteTemplateField';

// Not used for yet. I'm in work about creating auto generating schemes for pages so keep it here.
export const USER_FIELDS = {
  [U_ID]: componentsTypes.INFO,
  [U_LOGIN_ID]: componentsTypes.INPUT,
  [U_CHAT]: componentsTypes.SINGLE_SELECT,
  [U_KNOWN_DEVICE]: componentsTypes.MULTI_SELECT,
  [U_PERMISSIONS]: componentsTypes.NOT_A_ROW_DATA,
  [U_TEST_USER_FLAG]: componentsTypes.INFO,
  [U_PASSWORD]: componentsTypes.INFO,
  [U_PASSWORD_STRENGTH]: componentsTypes.INFO,
  [U_CREATION_DATE_REG_FORM]: componentsTypes.INFO,
};

export const ANOTHER_ROUTE_FIELDS = {
  [AR_STATUS]: componentsTypes.SINGLE_SELECT,
  [AR_OPTIONS_FIELD]: componentsTypes.SINGLE_SELECT,
  [AR_TEXT_FIELD]: componentsTypes.INFO,
  [AR_VALUE_FIELD]: componentsTypes.NUMBER_INPUT,
  [AR_TEMPLATE_ID]: componentsTypes.INFO,
};

export const ALL_FIELDS = {
  ...USER_FIELDS,
  ...ANOTHER_ROUTE_FIELDS,
};
