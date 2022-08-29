import * as pageFields from 'constants';
import { Text, TextInput, SingleSelect, MultiSelect } from 'components';

export const tableSchema = (fetchedData) => [
  {
    field: pageFields.U_LOGIN_ID,
    label: 'Login ID',
    value: fetchedData.U_LOGIN_ID,
    Component: <TextInput defaultValue={fetchedData[pageFields.U_LOGIN_ID].defaultValue} />,
  },
  {
    field: pageFields.U_ID,
    label: 'User ID',
    value: fetchedData[pageFields.U_ID],
    Component: <Text defaultValue={fetchedData[pageFields.U_ID].defaultValue} />,
  },
  {
    field: pageFields.U_TEST_USER_FLAG,
    label: 'Test User Flag',
    value: fetchedData.U_TEST_USER_FLAG,
    Component: <Text defaultValue={fetchedData[pageFields.U_TEST_USER_FLAG].defaultValue} />,
  },
  {
    field: pageFields.U_PASSWORD,
    label: 'Password',
    value: fetchedData.U_PASSWORD,
    Component: <Text defaultValue={fetchedData[pageFields.U_PASSWORD].defaultValue} />,
  },
  {
    field: pageFields.U_PASSWORD_STRENGTH,
    label: 'Password Strength',
    value: fetchedData.U_PASSWORD_STRENGTH,
    Component: <Text defaultValue={fetchedData[pageFields.U_PASSWORD_STRENGTH].defaultValue} />,
  },
  {
    field: pageFields.U_CREATION_DATE_REG_FORM,
    label: 'Creation Date via Registration Form',
    value: fetchedData.U_CREATION_DATE_REG_FORM,
    // eslint-disable-next-line max-len
    Component: <Text defaultValue={fetchedData[pageFields.U_CREATION_DATE_REG_FORM].defaultValue} />,
  },
  {
    field: pageFields.U_CHAT,
    label: 'Chat',
    value: fetchedData[pageFields.U_LOGIN_ID],
    Component: <SingleSelect
      options={fetchedData[pageFields.U_CHAT].options}
      defaultValue={fetchedData[pageFields.U_CHAT].defaultValue}
    />,
  },
  {
    field: pageFields.U_KNOWN_DEVICE,
    label: 'Known Device',
    value: fetchedData[pageFields.U_CHAT],
    Component: <MultiSelect
      options={fetchedData[pageFields.U_KNOWN_DEVICE].options}
      defaultValue={fetchedData[pageFields.U_KNOWN_DEVICE].defaultValue}
    />,
  },
];
