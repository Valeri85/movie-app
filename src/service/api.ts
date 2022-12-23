import { API_KEY, BASE_URL } from '../constants';
import { getDataProps } from './types/getDataProps.types';
import { getDetailsProps } from './types/getDetailsProps.types';

const fetchAPIData = async (url: string) => {
	try {
		const response = await fetch(url);

		if (!response.ok) throw new Error('Something went wrong!');

		const data = await response.json();

		return data.results;
	} catch (error) {
		console.error(error);
	}
};

const fetchDetails = async (url: string) => {
	try {
		const response = await fetch(url);

		if (!response.ok) throw new Error('Something went wrong!');

		const data = await response.json();

		return data;
	} catch (error) {
		console.error(error);
	}
};

export const getData = async (mediaType: getDataProps['mediaType'], category: getDataProps['category']) =>
	await fetchAPIData(`${BASE_URL}/${mediaType}/${category}?api_key=${API_KEY}&language=en-US&page=1`);

export const getDetails = async (mediaType: getDetailsProps['mediaType'], id: getDetailsProps['id']) =>
	await fetchDetails(`${BASE_URL}/${mediaType}/${id}?api_key=${API_KEY}&language=en-US`);
