import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { SharedLayout } from '../SharedLayout/SharedLayout';

const Home = lazy(() => import('../../pages/Home/Home'));
const MovieDetails = lazy(() =>
  import('../../pages/MovieDetails/MovieDetails')
);
const Movies = lazy(() => import('../../pages/Movies/Movies'));
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
