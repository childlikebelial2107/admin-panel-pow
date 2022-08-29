import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Layout } from 'antd';
import { SideMenu } from './SideMenu';
import { Header } from './Header';
import 'antd/dist/antd.css';

const { Content } = Layout;

export const Template = () => (
  <LayoutWrapper>
    <Header />
    <StyledContent>
      <SideMenu />
      <LayoutBackground>
        <Outlet />
      </LayoutBackground>
    </StyledContent>
  </LayoutWrapper>
);

const LayoutBackground = styled(Content)`
  background: rgba(0, 0, 0, .2);
  margin: 0 16px;
  padding: 24px;
  minHeight: 280px;
  border-radius: 4px;
  height: 75vh;
  overflow: auto;

  & :first-child: {
    padding: 0 !important;
  }
`;

const StyledContent = styled(Layout)`
  background-color: #fff;
`;

const LayoutWrapper = styled(Layout)`
  background: #fff;
  padding: 5rem;
`;
