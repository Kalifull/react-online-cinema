import { useQuery } from 'react-query';

import SkeletonLoader from '@/ui/skeleton-loader/SkeletonLoader';

import { MovieService } from '@/services/movie/movie.service';

import MovieList from '../MovieList/MovieList';

const PopularMovies: React.FC = () => {
  const { data: popularMovies, isLoading } = useQuery('Popular movies in sidebar', () =>
    MovieService.getMostPopularMovies()
  );

  return isLoading ? (
    <div className="mt-11">
      <SkeletonLoader count={3} className="h-28 mb-4" />
    </div>
  ) : (
    <MovieList link="/trending" movies={popularMovies || []} title="Popular Movies" />
  );
};
export default PopularMovies;
