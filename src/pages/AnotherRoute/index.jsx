import { Table, Title } from 'components';
import * as mockData from 'api';
import { tableSchema } from './tableShema';

export const AnotherRoute = () => {
  const tableData = tableSchema(mockData.anotherRouteDefaultUserData);

  return (
    <>
      <Title padding={0} level={3} text="Account Home" />
      <Table tableData={tableData} />
    </>
  );
};
