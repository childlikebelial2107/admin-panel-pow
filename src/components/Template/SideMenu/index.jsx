import { Layout, Typography } from 'antd';
import styled from 'styled-components';
import { ButtonLink } from 'components';
import { useRoutes } from 'hooks';
import 'antd/dist/antd.css';

const { Sider } = Layout;

export const SideMenu = () => {
  const { routesProps } = useRoutes();

  return (
    <StyledSider trigger={null} collapsible={false}>
      <SiderTextWrapper>
        <SiderText>Menu</SiderText>
      </SiderTextWrapper>
      {routesProps.map(({ key, path, label, isVisible }) =>
        (isVisible ? (
          <ButtonLink key={key} to={path} label={label} component={Typography.Link} />
        ) : null))}
    </StyledSider>
  );
};

const SiderTextWrapper = styled('div')`
    padding: 0 1rem .5rem;
    text-align: center;
`;

const SiderText = styled(Typography.Text)`
    font-size: 1rem;
`;

const StyledSider = styled(Sider)`
    border-radius: 4px;
    padding: 1rem 0;
    background-color: rgba(0, 0, 0, .2);
    height: 75vh;
    overflow: auto;
`;
