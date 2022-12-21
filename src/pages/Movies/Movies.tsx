import { FC } from 'react';
import { MoviesList } from '../../components/MovieList/MoviesList';
import styles from './Movies.module.scss'; //! need to be global for 3 pages

export const Movies: FC = () => (
	<>
		<h1 className={styles['page-title']}>Discover Popular Movies</h1>
		<MoviesList />
	</>
);
