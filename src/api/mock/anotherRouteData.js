import * as FIELDS from 'constants';
import { userAdminData, defaultUserData } from './index';

export const anotherRouteDataAdminData = {
  ...userAdminData,
  [FIELDS.AR_STATUS]: { defaultValue: 'Started', options: ['Started', 'Finished', 'Not Started'] },
  [FIELDS.AR_OPTIONS_FIELD]: { defaultValue: 'Unlocked', options: ['Locked', 'Unlocked'] },
  [FIELDS.AR_TEXT_FIELD]: { defaultValue: 777 },
  [FIELDS.AR_VALUE_FIELD]: { defaultValue: 850 },
  [FIELDS.AR_TEMPLATE_ID]: { defaultValue: 'Dunnot what should be here' },
};

export const anotherRouteDefaultUserData = {
  ...defaultUserData,
  [FIELDS.AR_STATUS]: { defaultValue: 'Not Started', options: ['Started', 'Finished', 'Not Started'] },
  [FIELDS.AR_OPTIONS_FIELD]: { defaultValue: 'Locked', options: ['Locked', 'Unlocked'] },
  [FIELDS.AR_TEXT_FIELD]: { defaultValue: '212' },
  [FIELDS.AR_VALUE_FIELD]: { defaultValue: 400 },
  [FIELDS.AR_TEMPLATE_ID]: { defaultValue: 'Dunnot what should be here' },
};
