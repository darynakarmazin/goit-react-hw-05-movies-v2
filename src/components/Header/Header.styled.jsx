import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderTag = styled.header`
  position: sticky;
  padding: 0 20px;
  z-index: 10;
  top: 0;
  left: 0;
  margin: 0 auto;
  background-color: #0a0909;
  border-bottom: 1px solid #ffffff;
`;

export const HeaderNavList = styled.nav`
  display: flex;
  gap: 12px;
`;

export const StyledLink = styled(NavLink)`
  color: #e6e6e6;
  font-size: 16px;
  line-height: 1.19;
  padding: 16px 0;
  text-decoration: none;

  &.active {
    color: orange;
  }
`;
