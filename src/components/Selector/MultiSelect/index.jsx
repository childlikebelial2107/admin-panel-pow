import { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';
import 'antd/dist/antd.css';

const { Option } = Select;

export const MultiSelect = ({ options, defaultValue }) => {
  const handleChange = useCallback((value) => {
    console.log(`selected ${value}`);
  }, []);

  return (
    <Select
      mode="multiple"
      style={{
        width: '100%',
      }}
      placeholder="select one country"
      defaultValue={defaultValue}
      onChange={handleChange}
      optionLabelProp="label"
    >
      {options.map((opt) => <Option key={opt} value={opt} label={opt}>{opt}</Option>)}
    </Select>
  );
};

MultiSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  defaultValue: PropTypes.arrayOf(PropTypes.string),
};
