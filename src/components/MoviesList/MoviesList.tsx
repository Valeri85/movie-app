import React from 'react';
import { MoviesListItem } from '../MoviesListItem/MoviesListItem';
import { MoviesListProps } from './MoviesList.types';
import styles from './MoviesList.module.scss';

export const MoviesList: React.FC<MoviesListProps> = ({ movies }) => {
	return (
		<ul className={styles['movies__list']} id="movies-list" data-active-list="true">
			{movies.map((topRatedMovie, index) => (
				<MoviesListItem key={index} {...topRatedMovie} />
			))}
		</ul>
	);
};
