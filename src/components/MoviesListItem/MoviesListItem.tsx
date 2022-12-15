import { FC } from 'react';
import { IMAGE_PATH } from '../../constants/api';
import { MoviesListItemProps } from './MoviesListItem.types';
import styles from './MoviesListItems.module.scss';

export const MoviesListItem: FC<MoviesListItemProps> = ({ original_title, poster_path, vote_average, release_date }) => {
	const dateTimeAttr = new Date(release_date).toISOString();
	const date = new Date(release_date).toDateString().slice(4);

	return (
		<li>
			<article className={styles['card']}>
				<small className={styles['card-budge']}>{`${vote_average}`}</small>
				<img className={styles['card-poster']} src={`${IMAGE_PATH}${poster_path}`} width="200" height="200" alt="" />
				<a className={styles['card-link']} href="#" aria-label="Go to Movie Details"></a>
				<div className={styles['card-content']}>
					<h2 className={styles['card-title']}>{`${original_title}`}</h2>
					<time className={styles['card-date']} dateTime={`${dateTimeAttr}`}>
						{`${date}`}
					</time>
				</div>
			</article>
		</li>
	);
};
