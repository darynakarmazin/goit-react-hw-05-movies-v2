import React from 'react';
import {
  HeaderTag,
  HeaderNavList,
  StyledLink,
  StyledHomeLink,
} from 'components/Header/Header.styled';

export function Header() {
  return (
    <HeaderTag>
      <StyledHomeLink to="/">&#127902; Cinemania</StyledHomeLink>
      <HeaderNavList>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies </StyledLink>
      </HeaderNavList>
    </HeaderTag>
  );
}
