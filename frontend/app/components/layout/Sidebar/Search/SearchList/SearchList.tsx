import Image from 'next/image';
import Link from 'next/link';

import { IMovie } from '@/shared/types/move.types';

import { getMovieUrl } from '@/config/url.config';

import styles from './SearchList.module.scss';

const SearchList: React.FC<{ movies: IMovie[] }> = ({ movies }) => {
  return (
    <div className={styles.list}>
      {movies.length ? (
        movies.map((movie) => (
          <Link key={movie._id} href={getMovieUrl(movie.slug)} legacyBehavior>
            <a>
              <Image
                src={movie.poster}
                width={50}
                height={50}
                alt={movie.title}
                draggable="false"
              />
              <span>{movie.title}</span>
            </a>
          </Link>
        ))
      ) : (
        <div className="text-white text-center my-4">Movies not found =(</div>
      )}
    </div>
  );
};
export default SearchList;
