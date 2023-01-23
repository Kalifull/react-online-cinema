import { useQuery } from 'react-query';

import { GenreService } from '@/services/genre.service';

import { getGenreUrl } from '@/config/url.config';

import { IMenuItem } from '../menu.interface';

export const usePopularGenres = () => {
  const queryData = useQuery('popular genres menu', () => GenreService.getPopularGenres(), {
    select: ({ data }) =>
      data
        .filter((genre) => genre.icon)
        .map(
          ({ icon, slug, name }): IMenuItem => ({
            icon,
            link: getGenreUrl(slug),
            title: name,
          })
        )
        .splice(0, 4),
  });

  return queryData;
};
