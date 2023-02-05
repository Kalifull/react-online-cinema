import { useRef, useState } from 'react';
import { useQuery } from 'react-query';

import useDebounce from '@/hooks/useDebounce';

import { MovieService } from '@/services/movie/movie.service';

export const useSearch = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 250);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleClear = () => {
    setSearchTerm('');
    inputRef.current?.focus();
  };

  const { data: movies, isSuccess } = useQuery(
    ['search movie list', debouncedSearch],
    () => MovieService.getAll(debouncedSearch),
    { select: ({ data }) => data, enabled: !!debouncedSearch }
  );

  const searchInput = {
    ref: inputRef,
    value: searchTerm,
    onChange: handleSearch,
  };

  return { movies, isSuccess, searchInput, handleClear };
};
