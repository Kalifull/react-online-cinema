import SearchField from '@/ui/search-field/SearchField';

import { useSearch } from './useSearch';

import SearchList from './SearchList/SearchList';

import styles from './Search.module.scss';

const Search: React.FC = () => {
  const { movies, isSuccess, handleClear, searchInput } = useSearch();

  return (
    <div className={styles.wrapper}>
      <SearchField searchInput={searchInput} handleClear={handleClear} />
      {isSuccess && <SearchList movies={movies || []} />}
    </div>
  );
};
export default Search;
