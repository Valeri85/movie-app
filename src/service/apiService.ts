import { LATEST_MOVIES, TOP_RATED_MOVIES, UPCOMING_MOVIES } from '../constants/api';

export const getMovies = async (url: string) => {
	try {
		const response = await fetch(url);

		if (!response.ok) throw new Error('Something went wrong!');

		const data = await response.json();

		return data.results;
	} catch (error) {
		console.error(error);
	}
};

export const getTopRatedMovies = async () => await getMovies(TOP_RATED_MOVIES);
export const getUpcomingMovies = async () => await getMovies(UPCOMING_MOVIES);
export const getNowPlayingMovies = async () => await getMovies(LATEST_MOVIES);
