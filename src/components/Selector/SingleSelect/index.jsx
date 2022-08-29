import { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';
import 'antd/dist/antd.css';

const { Option } = Select;

export const SingleSelect = ({ options, defaultValue }) => {
  const handleChange = useCallback((value) => {
    console.log(`selected ${value}`);
  }, []);

  return (
    <Select
      defaultValue={defaultValue}
      style={{
        width: '100%',
      }}
      onChange={handleChange}
    >
      {options.map((opt) => <Option key={opt} value={opt}>{opt}</Option>)}
    </Select>
  );
};

SingleSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  defaultValue: PropTypes.string,
};
