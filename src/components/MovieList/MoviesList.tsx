import { FC } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Movie } from '../../service/types/Movie.types';
import { MoviesListItem } from '../MoviesListItem/MoviesListItem';
// TODO | Should be global style
import styles from './MoviesList.module.scss';

export const MoviesList: FC = () => {
	const movies = useLoaderData() as Movie[];

	return (
		<ul className={`${styles['cards-list']} ${styles.active}`}>
			{movies?.map((movie, index) => (
				<MoviesListItem key={index} {...movie} />
			))}
		</ul>
	);
};
