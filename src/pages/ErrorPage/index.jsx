import 'antd/dist/antd.css';
import { Result } from 'antd';
import { ButtonLink } from 'components';

export const ErrorPage = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<ButtonLink forceActive to="/" label="Back Home" />}
  />
);
