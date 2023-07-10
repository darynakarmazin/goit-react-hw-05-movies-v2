import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovies } from '../../Api/fetchMovies';
import { CastList } from './Cast.styled';

export default function Cast() {
  const { movieId } = useParams();
  const [credits, setCredits] = useState('');

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`;
    fetchMovies(url)
      .then(results => {
        setCredits(results);
      })
      .catch(err => console.error('error:' + err));
  }, [movieId]);

  return (
    credits && (
      <CastList>
        {credits.cast.map(credit => {
          return (
            <li key={credit.id}>
              <img
                width="150px"
                height="225px"
                src={`https://image.tmdb.org/t/p/original/${credit.profile_path}`}
                alt={credit.name}
              />
              <h3>{credit.name}</h3>
              <p>{credit.character}</p>
            </li>
          );
        })}
      </CastList>
    )
  );
}
