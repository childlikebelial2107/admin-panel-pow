import { InputNumber as AInputNumber } from 'antd';
import PropTypes from 'prop-types';

export const NumberInput = ({ min, max, defaultValue }) => (
  <AInputNumber min={min} max={max} defaultValue={defaultValue} />
);

NumberInput.propTypes = {
  max: PropTypes.number,
  min: PropTypes.number,
  defaultValue: PropTypes.number,
};
