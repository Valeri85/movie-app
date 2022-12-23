import { FC } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../../components/Card/Card';
import { TVShowsDetailsType } from './TVShowDetails.types';

export const TVShowDetails: FC = () => {
	const { id: tvId, original_name, poster_path, overview, first_air_date, vote_average } = useLoaderData() as TVShowsDetailsType;

	return (
		<section>
			<h1 className="visually-hidden">Movie Details Page</h1>
			<Card variant="horizontal">
				<Card.Wrapper>
					<Card.Badge>{vote_average}</Card.Badge>
					<Card.Poster src={poster_path}></Card.Poster>
				</Card.Wrapper>
				<Card.Body>
					<Card.Title>{original_name}</Card.Title>
					<Card.Time>{first_air_date}</Card.Time>
					<Card.SubTitle>Overview</Card.SubTitle>
					<Card.Text>{overview}</Card.Text>
				</Card.Body>
				<Card.Details href={`/tv/${tvId}`} />
			</Card>
		</section>
	);
};
