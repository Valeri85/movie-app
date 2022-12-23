import { FC } from 'react';
import { TVShow } from '../../service/types/TVShow.types';
import Card from '../Card/Card';

export const TVShowsListItem: FC<TVShow> = ({ id: tvId, first_air_date, original_name, poster_path, vote_average }) => {
	return (
		<li>
			<Card>
				<Card.Badge>{vote_average}</Card.Badge>
				<Card.Poster src={poster_path} />
				<Card.Body>
					<Card.Title>{original_name}</Card.Title>
					<Card.Time>{first_air_date}</Card.Time>
				</Card.Body>
				<Card.Details href={`/tv/${tvId}`} />
			</Card>
		</li>
	);
};
