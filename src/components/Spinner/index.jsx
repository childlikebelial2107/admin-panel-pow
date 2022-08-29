import styled from 'styled-components';
import { Spin as ANTDSpin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

export const Spinner = () => <CustomizedSpinner indicator={<Loading spin />} />;

const CustomizedSpinner = styled(ANTDSpin)`
    width: 100%;
    height: 100%;
`;

const Loading = styled(LoadingOutlined)`
    font-size: 96px;
    position: absolute;
    top: 50%;
    left: 50%;
`;
