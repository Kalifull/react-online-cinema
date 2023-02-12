export const getGenreList = (index: number, length: number, name: string): string =>
  index + 1 === length ? name : `${name}, `;
