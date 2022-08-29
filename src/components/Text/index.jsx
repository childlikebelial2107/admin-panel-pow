import { Typography } from 'antd';
import PropTypes from 'prop-types';

export const Text = ({ defaultValue }) => <Typography.Text>{defaultValue}</Typography.Text>;

Text.propTypes = {
  defaultValue: PropTypes.string.isRequired,
};
