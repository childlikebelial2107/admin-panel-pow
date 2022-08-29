import { Input } from 'antd';
import PropTypes from 'prop-types';

export const TextInput = ({ defaultValue }) => (
  <Input defaultValue={defaultValue} />
);

TextInput.propTypes = {
  defaultValue: PropTypes.string,
};
