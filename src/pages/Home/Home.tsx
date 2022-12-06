import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CategoriesSection } from '../../components/CategoriesSection/CategoriesSection';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import { MoviesListProps } from '../../components/MoviesList/MoviesList.types';
import { SearchSection } from '../../components/SearchSection/SearchSection';
import { getTopRatedMovies } from '../../service/apiService';
import styles from './Home.module.scss';

export const Home: React.FC = () => {
	const topRatedMovies = useLoaderData() as MoviesListProps['movies'];

	return (
		<>
			<main className={styles['main-page']} id="main-page">
				<SearchSection />
				<CategoriesSection />
				<MoviesList movies={topRatedMovies} />
			</main>
		</>
	);
};

export const loader = () => getTopRatedMovies();
