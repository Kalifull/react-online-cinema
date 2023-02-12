import FavoriteMovies from './FavoriteMovies/FavoriteMovies';
import PopularMovies from './PopularMovies/PopularMovies';

const MoviesContainer: React.FC = () => {
  return (
    <div>
      <PopularMovies />
      <FavoriteMovies />
    </div>
  );
};
export default MoviesContainer;
