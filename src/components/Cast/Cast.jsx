import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovies } from '../../Api/fetchMovies';

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
      <ul>
        {credits.cast.map(credit => {
          return (
            <li key={credit.id}>
              <img
                width="100px"
                height="150px"
                src={`https://image.tmdb.org/t/p/original/${credit.profile_path}`}
                alt={credit.name}
              />
              <h3>{credit.name}</h3>
              <p>{credit.character}</p>
            </li>
          );
        })}
      </ul>
    )
  );
}
