import React from 'react';
import { IMAGE_PATH } from '../../constants/api';
import { topRatedMovie } from '../../service/types/topRatedMovie.types';
import styles from './MoviesListItems.module.scss';

export const MoviesListItem: React.FC<topRatedMovie> = ({
	original_title,
	poster_path,
	vote_average,
	release_date,
}) => {
	const dateTimeAttr = new Date(release_date).toISOString();
	const date = new Date(release_date).toDateString().slice(4);

	return (
		<li className={styles['movies__list-item']}>
			<article className={styles['movie__card']}>
				<small className={styles['movie__budge']}>{`${vote_average}`}</small>
				<img
					className={styles['movie__poster']}
					src={`${IMAGE_PATH}${poster_path}`}
					width="200px"
					height="200px"
					alt=""
				/>
				<a className={styles['movie__link']} href="#" aria-label="Go to Movie Details"></a>
				<div className={styles['movie__content']}>
					<h2 className={styles['movie__title']}>{`${original_title}`}</h2>
					<time className={styles['movie__date']} dateTime={`${dateTimeAttr}`}>
						{`${date}`}
					</time>
				</div>
			</article>
		</li>
	);
};
