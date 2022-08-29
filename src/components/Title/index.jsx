import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Typography } from 'antd';

export const Title = ({ text, padding = '1rem 0', ...props }) =>
  <StyledTitle padding={padding} {...props}>{text}</StyledTitle>;

const StyledTitle = styled(Typography.Title)`
  text-align: center;
  padding: ${({ padding }) => `${padding}`};
`;

Title.propTypes = {
  text: PropTypes.string.isRequired,
  padding: PropTypes.number,
};
