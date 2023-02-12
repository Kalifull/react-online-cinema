import Image from 'next/image';
import Link from 'next/link';

import MaterialIcon from '@/ui/material-icon/MaterialIcon';

import { IMovie } from '@/shared/types/move.types';

import { getGenreList } from '@/utils/movie/getGenreList';

import { getGenreUrl, getMovieUrl } from '@/config/url.config';

import styles from '../MovieList.module.scss';

const MovieItem: React.FC<{ movie: IMovie }> = ({ movie }) => {
  return (
    <div className={styles.item}>
      <Link href={getMovieUrl(movie.slug)} legacyBehavior>
        <a>
          <Image
            width={65}
            height={97}
            src={movie.poster}
            draggable={false}
            alt={movie.title}
            priority
          />
        </a>
      </Link>
      <div className={styles.info}>
        <div className={styles.title}>{movie.title}</div>
        <div className={styles.genres}>
          {movie.genres.map((genre, index) => (
            <Link key={genre._id} href={getGenreUrl(genre.slug)} legacyBehavior>
              <a>{getGenreList(index, movie.genres.length, genre.name)}</a>
            </Link>
          ))}
        </div>
        <div className={styles.rating}>
          <MaterialIcon name="MdStarRate" />
          <span>{movie.rating.toFixed(1)}</span>
        </div>
      </div>
    </div>
  );
};
export default MovieItem;
