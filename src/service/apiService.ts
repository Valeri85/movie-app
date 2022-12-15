import { API_KEY, BASE_URL } from '../constants/api';

export const fetchMovies = async (url: string) => {
	try {
		const response = await fetch(url);

		if (!response.ok) throw new Error('Something went wrong!');

		const data = await response.json();

		return data.results;
	} catch (error) {
		console.error(error);
	}
};

export const getMovies = async (moviesCategory: string) =>
	await fetchMovies(`${BASE_URL}/movie/${moviesCategory}?api_key=${API_KEY}&language=en-US&page=1`);
