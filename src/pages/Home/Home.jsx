import React, { useEffect, useState } from 'react';
import { Hero, HeroText, HomeDiv, HomeTitle } from './Home.styled';
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
      <Hero>
        <HeroText>
          <h1>Let’s Make Your Own Cinema</h1>
          <p>
            Is a guide to creating a personalized movie theater experience.
            You'll need a projector, screen, and speakers. Decorate your space,
            choose your films, and stock up on snacks for the full experience.
          </p>
        </HeroText>
      </Hero>
      <HomeTitle>Trending today</HomeTitle>
      <HomeTrendingList movies={movies} />
    </HomeDiv>
  );
}

export default Home;
