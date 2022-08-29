import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';
import 'antd/dist/antd.css';

export const TableRow = ({ label, Component, value }) => {
  console.log(value);

  return (
    <TRow>
      <Col span={8}>{label}</Col>
      <Col span={8} offset={8}>
        {Component}
      </Col>
    </TRow>
  );
};

const TRow = styled(Row)`
  padding: .5rem;
  font-size: 20px;
  border-bottom: 1px solid black;
`;

TableRow.propTypes = {
  label: PropTypes.string.isRequired,
  Component: PropTypes.node.isRequired,
  value: PropTypes.shape(),
};
