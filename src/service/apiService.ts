import { API_KEY, BASE_URL } from '../constants/api';

export const fetchAPIData = async (url: string) => {
	try {
		const response = await fetch(url);

		if (!response.ok) throw new Error('Something went wrong!');

		const data = await response.json();

		return data.results;
	} catch (error) {
		console.error(error);
	}
};

export const getMovies = async (category: string) =>
	await fetchAPIData(`${BASE_URL}/movie/${category}?api_key=${API_KEY}&language=en-US&page=1`);

export const getTVShows = async (category: string) =>
	await fetchAPIData(`${BASE_URL}/tv/${category}?api_key=${API_KEY}&language=en-US&page=1`);

export const getPeople = async (category: string) =>
	await fetchAPIData(`${BASE_URL}/person/${category}?api_key=${API_KEY}&language=en-US&page=1`);
