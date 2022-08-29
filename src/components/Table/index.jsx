import PropTypes from 'prop-types';
import { TableRow } from './Row';

export const Table = ({ tableData }) =>
  tableData.map(({ field, label, Component, value }) =>
    <TableRow key={field} label={label} Component={Component} value={value} />);

Table.propTypes = {
  tableData: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
