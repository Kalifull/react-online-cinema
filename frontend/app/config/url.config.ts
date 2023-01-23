export const getMovieUrl = (slug: string): string => `/movie/${slug}`;
export const getGenreUrl = (slug: string): string => `/genre/${slug}`;
export const getActorUrl = (slug: string): string => `/actor/${slug}`;

export const getAdminUrl = (url: string): string => `/manage/${url}`;
export const getAdminHomeUrl = (): string => getAdminUrl('').slice(0, -1);
