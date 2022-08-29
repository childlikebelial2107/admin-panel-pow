import * as FIELDS from 'constants';
import { PERMISSIONS } from 'constants';

export const userAdminData = {
  [FIELDS.U_ID]: { defaultValue: 'Default User' },
  [FIELDS.U_LOGIN_ID]: { defaultValue: '222333' },
  [FIELDS.U_CHAT]: { defaultValue: 'Enabled', options: ['Enabled', 'Disabled'] },
  [FIELDS.U_KNOWN_DEVICE]: { options: ['device1', 'device2', 'device3'], defaultValue: ['device1', 'device2', 'device3'] },
  [FIELDS.U_TEST_USER_FLAG]: { defaultValue: 'true' },
  [FIELDS.U_PASSWORD]: { defaultValue: 'test123test' },
  [FIELDS.U_PASSWORD_STRENGTH]: { defaultValue: 'Low' },
  [FIELDS.U_CREATION_DATE_REG_FORM]: { defaultValue: '2019-11-12 04:22:12.0' },

  [FIELDS.U_PERMISSIONS]: PERMISSIONS.superAdmin,
};

export const defaultUserData = {
  [FIELDS.U_ID]: { defaultValue: 'Default User' },
  [FIELDS.U_LOGIN_ID]: { defaultValue: '222333' },
  [FIELDS.U_CHAT]: { defaultValue: 'Enabled', options: ['Enabled', 'Disabled'] },
  [FIELDS.U_KNOWN_DEVICE]: { options: ['device7', 'device12'], defaultValue: ['device7', 'device12'] },
  [FIELDS.U_TEST_USER_FLAG]: { defaultValue: 'true' },
  [FIELDS.U_PASSWORD]: { defaultValue: 'Ha11@#1asd__ASd' },
  [FIELDS.U_PASSWORD_STRENGTH]: { defaultValue: 'Strong' },
  [FIELDS.U_CREATION_DATE_REG_FORM]: { defaultValue: '2019-11-12 04:22:12.0' },

  [FIELDS.U_PERMISSIONS]: PERMISSIONS.user,
};
