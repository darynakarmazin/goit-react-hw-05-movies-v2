import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovies } from '../../Api/fetchMovies';

export default function Reviews() {
  const { movieId } = useParams();
  const [allReviews, setAllReviews] = useState('');

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`;
    fetchMovies(url)
      .then(results => {
        setAllReviews(results);
      })
      .catch(err => console.error('error:' + err));
  }, [movieId]);

  return allReviews.total_results ? (
    <ul>
      {allReviews.results.map(result => {
        return (
          <li key={result.id}>
            <h3>{result.author}</h3>
            <p>{result.content}</p>
          </li>
        );
      })}
    </ul>
  ) : (
    <p>We don't have any reviews for this movie.</p>
  );
}
