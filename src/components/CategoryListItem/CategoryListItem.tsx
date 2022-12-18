import { FC } from 'react';
import { IMAGE_PATH } from '../../constants/api';
import styles from './CategoryListItem.module.scss';
import { CategoryListItemProps } from './CategoryListItem.types';

export const CategoryListItem: FC<CategoryListItemProps> = ({
	pageContent,
	poster_path,
	profile_path,
	vote_average,
	original_title,
	original_name,
	name,
	release_date,
	first_air_date,
}) => {
	const isPeoplePage = pageContent === 'popular-people';
	const isMoviesPage = pageContent === 'popular-movies';
	const isTopRatedMovies = pageContent === 'top_rated-movies';
	const isMovie = isMoviesPage || isTopRatedMovies;
	const isTVShowsPage = pageContent === 'popular-tv_shows';
	const dateTimeAttr = !isPeoplePage && new Date(release_date ?? first_air_date).toISOString();
	const date = !isPeoplePage && new Date(release_date ?? first_air_date).toDateString().slice(4);

	return (
		<li>
			<article className={styles['card']}>
				{!isPeoplePage && <small className={styles['card-budge']}>{`${vote_average}`}</small>}
				<img
					className={styles['card-poster']}
					src={`${IMAGE_PATH}${isMovie || isTVShowsPage ? poster_path : profile_path}`}
					width="200"
					height="350"
					loading="lazy"
					alt=""
				/>
				<a className={styles['card-link']} href="#" aria-label="Go to Movie Details"></a>
				<div className={styles['card-content']}>
					<h2 className={styles['card-title']}>{`${isMovie ? original_title : isTVShowsPage ? original_name : name}`}</h2>
					{!isPeoplePage && (
						<time className={styles['card-date']} dateTime={`${dateTimeAttr}`}>
							{`${date}`}
						</time>
					)}
				</div>
			</article>
		</li>
	);
};
