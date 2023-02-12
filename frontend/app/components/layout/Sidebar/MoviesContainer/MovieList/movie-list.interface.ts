import { IMovie } from '@/shared/types/move.types';

export interface IMovieList {
  title: string;
  link: string;
  movies: IMovie[];
}
