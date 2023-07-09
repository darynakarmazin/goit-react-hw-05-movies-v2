import React from 'react';
import { HomeItem } from './HomeTrendingList.styled';

export function HomeTrendingList({ movies }) {
  return (
    <ul>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <HomeItem to={`movies/${movie.id}`}>
              <p>{movie.title}</p>
              <img
                width="395px"
                height="574px"
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title}
              />
            </HomeItem>
          </li>
        );
      })}
    </ul>
  );
}
