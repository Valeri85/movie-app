const API_KEY = '4f70fbbd83d33d1c2444b3928bc7b1df';
const BASE_URL = 'https://api.themoviedb.org/3';
const MOVIES_URL = `${BASE_URL}/movie`;
export const IMAGE_PATH = 'https://image.tmdb.org/t/p/w1280';
export const TOP_RATED_MOVIES = `${MOVIES_URL}/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
export const UPCOMING_MOVIES = `${MOVIES_URL}/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
export const LATEST_MOVIES = `${MOVIES_URL}/now_playing?api_key=${API_KEY}&language=en-US&page=1`;
