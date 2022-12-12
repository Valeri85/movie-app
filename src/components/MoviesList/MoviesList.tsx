import React from 'react';
import { MoviesListItem } from '../MoviesListItem/MoviesListItem';
import { MoviesListProps } from './MoviesList.types';
import styles from './MoviesList.module.scss';

export const MoviesList: React.FC<MoviesListProps> = ({ movies }) => (
	<ul className={styles['movies__list']} id="movies-list" data-active-list="true">
		{movies.map((topRatedMovies, index) => (
			<MoviesListItem key={index} {...topRatedMovies} />
		))}
	</ul>
);
