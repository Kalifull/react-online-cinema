import { axiosClassic } from 'api/interceptors';

import { IGenre } from '@/shared/types/move.types';

import { getGenresUrl } from '@/config/api.config';

export const GenreService = {
  async getPopularGenres() {
    return axiosClassic.get<IGenre[]>(getGenresUrl('/popular'));
  },
};
