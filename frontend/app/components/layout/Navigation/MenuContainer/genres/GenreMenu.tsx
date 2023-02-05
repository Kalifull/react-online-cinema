import SkeletonLoader from '@/components/ui/skeleton-loader/SkeletonLoader';

import { usePopularGenres } from './usePopularGenres';

import Menu from '../Menu/Menu';

const GenreMenu: React.FC = () => {
  const { isLoading, data } = usePopularGenres();

  return isLoading ? (
    <div className="mx-11 mb-6">
      <SkeletonLoader count={5} className="h-7 mt-6" />
    </div>
  ) : (
    <Menu menu={{ title: 'Popular genres', items: data || [] }} />
  );
};

export default GenreMenu;
