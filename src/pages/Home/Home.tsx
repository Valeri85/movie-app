import React from 'react';
import { useLoaderData, useOutletContext } from 'react-router-dom';
import { CategoriesSection } from '../../components/CategoriesSection/CategoriesSection';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import { MoviesListProps } from '../../components/MoviesList/MoviesList.types';
import { SearchSection } from '../../components/SearchSection/SearchSection';
import { getTopRatedMovies } from '../../service/apiService';
import styles from './Home.module.scss';
import { RouterContext } from './Home.ypes';

export const Home: React.FC = () => {
	const topRatedMovies = useLoaderData() as MoviesListProps['movies'];
	const { paddingTop } = useOutletContext<RouterContext>();

	return (
		<main className={styles.page} id="page" style={{ paddingTop }}>
			<SearchSection />
			<CategoriesSection />
			<MoviesList movies={topRatedMovies} />
		</main>
	);
};

export const loader = () => getTopRatedMovies();
