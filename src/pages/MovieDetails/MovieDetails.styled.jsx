import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const MovieDetailsPage = styled.div`
  color: #e6e6e6;
  padding: 20px 100px 100px 100px;
  padding-bottom: 100px;
  background-color: #0a0909;
`;

export const MovieDetailsDiv = styled.div`
  display: flex;
  gap: 40px;
  background-color: #0a0909;
`;

export const MovieDetailsGenres = styled.div`
  display: flex;
  gap: 8px;
`;

export const MovieDetailsLink = styled(NavLink)`
  display: inline-block;
  font-size: 18px;
  line-height: 28px;
  text-decoration: none;
  padding: 2px 12px;
  margin-bottom: 20px;
  border-radius: 74px;
  color: #ffffff;
  background: #111111;
  border: #ffffff 1px solid;

  &.active {
    color: #111111;
    background: var(
      --linear,
      linear-gradient(145deg, #ffc226 0%, #f84119 100%)
    );
    border: #f84119 1px solid;
  }
`;

export const GoBackLink = styled(Link)`
  display: inline-block;
  color: #111111;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
  text-decoration: none;
  padding: 2px 12px;
  margin-bottom: 20px;
  border-radius: 74px;
  background: var(--linear, linear-gradient(145deg, #ffc226 0%, #f84119 100%));
`;
