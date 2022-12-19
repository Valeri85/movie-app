import { API_KEY, BASE_URL } from '../constants';
import { getDataProps } from './types/getDataProps.types';

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

export const getData = async (mediaType: getDataProps['mediaType'], category: getDataProps['category']) =>
	await fetchAPIData(`${BASE_URL}/${mediaType}/${category}?api_key=${API_KEY}&language=en-US&page=1`);
