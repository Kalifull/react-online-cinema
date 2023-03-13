import { RefObject } from 'react';

import MaterialIcon from '../material-icon/MaterialIcon';

import styles from './SearchField.module.scss';

interface ISearchField {
  searchInput: {
    ref: RefObject<HTMLInputElement>;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  };
  handleClear: () => void;
}

const SearchField: React.FC<ISearchField> = ({ searchInput, handleClear }) => {
  return (
    <div className={styles.search}>
      <MaterialIcon name="MdSearch" />
      <input {...searchInput} placeholder="Search..." />
      {searchInput.value && (
        <div className={styles.clear} onClick={handleClear}>
          <MaterialIcon name="MdClear" />
        </div>
      )}
    </div>
  );
};

export default SearchField;
