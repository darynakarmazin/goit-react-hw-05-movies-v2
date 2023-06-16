import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { MoviesItem, MoviesTitle } from './Movies.styled';
import { fetchMovies } from '../../Api/fetchMovies';
import { Searchbar } from 'components/Searchbar/Searchbar';

function Movies() {
  const [movies, setMovies] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();

  useEffect(() => {
    const searchQuery = searchParams.get('query') ?? '';
    const url = `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`;
    fetchMovies(url)
      .then(results => {
        setMovies(results);
      })
      .catch(err => console.error('error:' + err));
  }, [searchParams]);

  return (
    <>
      <Searchbar setSearchParams={setSearchParams} />
      {movies && (
        <ul>
          {movies.results.map(result => {
            return (
              <MoviesTitle key={result.id}>
                <MoviesItem to={`${result.id}`} state={{ from: location }}>
                  <p>{result.original_title}</p>
                </MoviesItem>
              </MoviesTitle>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default Movies;
