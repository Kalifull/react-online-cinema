import FavoriteMovies from './FavoriteMovies/FavoriteMovies';
import PopularMovies from './PopularMovies/PopularMovies';

const MoviesContainer: React.FC = () => {
  return (
    <>
      <PopularMovies />
      <FavoriteMovies />
    </>
  );
};

export default MoviesContainer;
