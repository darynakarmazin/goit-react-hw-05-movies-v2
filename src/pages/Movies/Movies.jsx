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
                  {result.poster_path && (
                    <TrendingImg
                      width="264px"
                      height="384px"
                      src={`https://image.tmdb.org/t/p/original/${result.poster_path}`}
                      alt={result.title}
                    />
                  )}
                  {!result.poster_path && (
                    <TrendingImg
                      width="264px"
                      height="384px"
                      src="https://img.freepik.com/free-vector/realistic-3d-cinema-film-strip-in-perspective-isolated_260559-136.jpg?w=1480&t=st=1688971449~exp=1688972049~hmac=4130f81f89c6c87d8f7eaa7b8189af5d82c935b8a25af592d85425ef0f19971e"
                      // src="https://content2.rozetka.com.ua/goods/images/big/299131367.jpg"
                      alt={result.title}
                    />
                  )}
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
