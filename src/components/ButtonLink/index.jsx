import styled from 'styled-components';
import {
  Link,
  useMatch,
  useResolvedPath,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { Col } from 'antd';

export const ButtonLink = ({
  to, label, forceActive = false, ...props
}) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link to={to} {...props}>
      <ActiveButtonLink active={match} forceActive={forceActive}>
        {label}
      </ActiveButtonLink>
    </Link>
  );
};

const ActiveButtonLink = styled(Col)`
  font-size: 1rem;
  border-top: 1px solid rgba(0, 0, 0, .2);
  background-color: ${({ active, forceActive }) => (active || forceActive ? '#1890FF' : '')};
  color: ${({ active, forceActive }) => (active || forceActive ? '#FFF' : '#000')};
  padding: .5rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

ButtonLink.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  forceActive: PropTypes.bool,
};
