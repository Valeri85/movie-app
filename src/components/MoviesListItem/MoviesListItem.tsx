import { FC } from 'react';
import { Movie } from '../../service/types/Movie.types';
import Card from '../Card/Card';

export const MoviesListItem: FC<Movie> = ({ original_title, poster_path, release_date, vote_average }) => (
	<li>
		<Card>
			<Card.Badge>{vote_average}</Card.Badge>
			<Card.Poster src={poster_path} />
			<Card.Body>
				<Card.Title>{original_title}</Card.Title>
				<Card.Time>{release_date}</Card.Time>
			</Card.Body>
			<Card.Details />
		</Card>
	</li>
);
