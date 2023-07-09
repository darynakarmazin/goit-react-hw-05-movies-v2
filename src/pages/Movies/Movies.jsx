import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchMovies } from '../../Api/fetchMovies';
import { Searchbar } from 'components/Searchbar/Searchbar';
import {
  HomeItem,
  TrendingImg,
  TrendingLi,
  TrendingList,
  TrendingName,
} from 'components/HomeTrendingList/HomeTrendingList.styled';

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
        <TrendingList>
          {movies.results.map(result => {
            return (
              <TrendingLi key={result.id}>
                <HomeItem to={`${result.id}`} state={{ from: location }}>
                  <TrendingImg
                    width="264px"
                    height="384px"
                    src={`https://image.tmdb.org/t/p/original/${result.poster_path}`}
                    alt={result.title}
                  />
                  <TrendingName>{result.original_title}</TrendingName>
                  <p>User Scrore: {Math.round(result.vote_average * 10)}%</p>
                </HomeItem>
              </TrendingLi>
            );
          })}
        </TrendingList>
      )}
    </>
  );
}

export default Movies;
