import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HomeItem = styled(NavLink)`
  color: #e6e6e6;
  margin: 0;
  text-decoration: none;
`;

export const TrendingList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 16px;
  row-gap: 32px;
  list-style: none;
  flex-bacis: 24%;
`;

export const TrendingLi = styled.li`
  max-width: 264px;
`;

export const TrendingImg = styled.img`
  border-radius: 5px;
  background: var(
    --linear,
    linear-gradient(180deg, rgba(0, 0, 0, 0) 63.48%, rgba(0, 0, 0, 0.9) 92.16%)
  );
`;

export const TrendingName = styled.p`
  color: #e6e6e6;
  font-size: 16px;
  font-weight: 600;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
