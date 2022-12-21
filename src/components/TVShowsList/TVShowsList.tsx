import { FC } from 'react';
import { useLoaderData } from 'react-router-dom';
import { TVShow } from '../../service/types/TVShow.types';
import { TVShowsListItem } from '../TVShowsListItem/TVShowsListItem';
// TODO | Styles should be global
import styles from './TVShowsList.module.scss';

export const TVShowsList: FC = () => {
	const tvShows = useLoaderData() as TVShow[];

	return (
		<ul className={`${styles['cards-list']} ${styles.active}`}>
			{tvShows?.map((tvShow, index) => (
				<TVShowsListItem key={index} {...tvShow} />
			))}
		</ul>
	);
};
