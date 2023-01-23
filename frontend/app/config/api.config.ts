export const API_URL = `${process.env.APP_URL}/api`;
export const API_SERVER_URL = `${process.env.APP_SERVER_URL}/api`;

export const getAuthUrl = (string: string): string => `/auth${string}`;
export const getUsersUrl = (string: string): string => `/users${string}`;
export const getMoviesUrl = (string: string): string => `/movies${string}`;
export const getGenresUrl = (string: string): string => `/genres${string}`;
export const getActorsUrl = (string: string): string => `/actors${string}`;
export const getRatingsUrl = (string: string): string => `/ratings${string}`;
