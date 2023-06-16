import React, { useEffect, useState } from 'react';
import { HomeDiv, HomeTitle } from './Home.styled';
import { HomeTrendingList } from 'components/HomeTrendingList/HomeTrendingList';
import { fetchMovies } from '../../Api/fetchMovies';
const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies(url)
      .then(({ results }) => {
        setMovies(results);
      })
      .catch(err => console.error('error:' + err));
  }, []);

  return (
    <HomeDiv>
      <HomeTitle>Trending today</HomeTitle>
      <HomeTrendingList movies={movies} />
    </HomeDiv>
  );
}

export default Home;