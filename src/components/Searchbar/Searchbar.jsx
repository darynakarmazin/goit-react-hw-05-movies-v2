import React, { useState } from 'react';
import { SearchbarHeader, SearchForm } from './Searchbar.styled';

export function Searchbar({ setSearchParams }) {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    setSearchParams({ query });
  };

  const handleQueryChange = ({ target: { value } }) => {
    setQuery(value);
  };

  return (
    <SearchbarHeader>
      <SearchForm onSubmit={handleSubmit} className="form">
        <button type="submit" className="button">
          <span className="button-label">&#128269;</span>
        </button>

        <input
          onChange={handleQueryChange}
          value={query}
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search Movies"
        />
      </SearchForm>
    </SearchbarHeader>
  );
}
