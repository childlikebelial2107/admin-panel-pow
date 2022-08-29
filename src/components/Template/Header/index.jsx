import { Layout } from 'antd';
import styled from 'styled-components';
import { Title } from '../../Title';

export const Header = () => (
  <LayoutHeader>
    <TitleWrapper>
      <Title type="warning" text="First Small Text" level={4} />
      <Title type="warning" text="Big Text" level={2} />
      <Title type="warning" text="Third Text" level={4} />
    </TitleWrapper>
  </LayoutHeader>
);

const LayoutHeader = styled(Layout.Header)`
  height: 100%;
  display: block;
  margin-bottom: 1rem;
  border-radius: 4px;
`;

const TitleWrapper = styled('div')`
  width: fit-content;

  & :nth-child(n) {
    padding-top: 0;
    padding-bottom: 0;
    margin: 0 !important;
    text-align: start;
  }

  & :nth-child(1) {
    padding-top: 1rem;
    text-align: end;
  }

  & :nth-child(3) {
    padding-bottom: 1rem;
    text-align: end;
  }
`;
