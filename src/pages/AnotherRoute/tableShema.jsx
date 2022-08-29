import * as pageFields from 'constants';
import { Text, SingleSelect, NumberInput } from 'components';
import { tableSchema as accountHomeTableSchema } from '../AccountHome/tableSchema';

export const tableSchema = (fetchedData) => [
  ...accountHomeTableSchema(fetchedData),
  {
    field: pageFields.AR_STATUS,
    label: 'Another Page Status',
    value: fetchedData[pageFields.AR_STATUS],
    Component: <SingleSelect
      options={fetchedData[pageFields.AR_STATUS].options}
      defaultValue={fetchedData[pageFields.AR_STATUS].defaultValue}
    />,
  },
  {
    field: pageFields.AR_OPTIONS_FIELD,
    label: 'Another Page Options Field',
    value: fetchedData[pageFields.AR_OPTIONS_FIELD],
    Component: <SingleSelect
      options={fetchedData[pageFields.AR_OPTIONS_FIELD].options}
      defaultValue={fetchedData[pageFields.AR_OPTIONS_FIELD].defaultValue}
    />,
  },
  {
    field: pageFields.AR_TEXT_FIELD,
    label: 'Another Page Text Field',
    value: fetchedData[pageFields.AR_TEXT_FIELD],
    Component: <Text defaultValue={fetchedData[pageFields.AR_TEXT_FIELD].defaultValue} />,
  },
  {
    field: pageFields.AR_VALUE_FIELD,
    label: 'Another Page Value Field',
    value: fetchedData.AR_VALUE_FIELD,
    Component: <NumberInput defaultValue={fetchedData[pageFields.AR_VALUE_FIELD].defaultValue} />,
  },
  {
    field: pageFields.AR_TEMPLATE_ID,
    label: 'Another Page Template ID',
    value: fetchedData[pageFields.AR_TEMPLATE_ID],
    Component: <Text defaultValue={fetchedData[pageFields.AR_TEMPLATE_ID].defaultValue} />,
  },
];
