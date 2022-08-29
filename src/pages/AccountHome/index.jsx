import { Table, Title } from 'components';
import * as mockData from 'api';
import { tableSchema } from './tableSchema';

export const AccountHome = () => {
  const tableData = tableSchema(mockData.defaultUserData);

  return (
    <>
      <Title padding={0} level={3} text="Account Home" />
      <Table tableData={tableData} />
    </>
  );
};
