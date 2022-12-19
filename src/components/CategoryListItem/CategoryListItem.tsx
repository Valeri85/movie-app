import { FC } from 'react';
import { IMAGE_PATH } from '../../constants';
import styles from './CategoryListItem.module.scss';
import { CategoryListItemProps } from './CategoryListItem.types';

export const CategoryListItem: FC<CategoryListItemProps> = ({
	pageContent,
	poster_path: poster,
	profile_path: profile,
	vote_average: vote,
	original_title: movieTitle,
	original_name: TVShowName,
	name: personName,
	release_date: movieDate,
	first_air_date: TVShowDate,
}) => {
	const isMovie = pageContent === 'popular-movies';
	const isTopRatedMovie = pageContent === 'top_rated-movies';
	const isMovieCard = isMovie || isTopRatedMovie;
	const isTVShowsCard = pageContent === 'popular-tv_shows';
	const isPeopleCard = pageContent === 'popular-people';
	const dateTimeAttr = !isPeopleCard && new Date(movieDate ?? TVShowDate).toISOString();
	const date = !isPeopleCard && new Date(movieDate ?? TVShowDate).toDateString().slice(4);

	return (
		<li>
			<article className={styles['card']}>
				{!isPeopleCard && <small className={styles['card-budge']}>{`${vote}`}</small>}
				<img
					className={styles['card-poster']}
					src={`${IMAGE_PATH}${isMovieCard || isTVShowsCard ? poster : profile}`}
					width="200"
					height="350"
					loading="lazy"
					alt=""
				/>
				<a className={styles['card-link']} href="#" aria-label="Go to Movie Details"></a>
				<div className={styles['card-content']}>
					<h2 className={styles['card-title']}>{`${isMovieCard ? movieTitle : isTVShowsCard ? TVShowName : personName}`}</h2>
					{!isPeopleCard && (
						<time className={styles['card-date']} dateTime={`${dateTimeAttr}`}>
							{`${date}`}
						</time>
					)}
				</div>
			</article>
		</li>
	);
};
