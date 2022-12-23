import { FC } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../../components/Card/Card';
import { PersonDetailsType } from './PersonDetails.types';

export const PersonDetails: FC = () => {
	const { id: personId, profile_path, name, biography, birthday, place_of_birth } = useLoaderData() as PersonDetailsType;

	return (
		<section>
			<h1 className="visually-hidden">Movie Details Page</h1>
			<Card variant="horizontal">
				<Card.Wrapper>
					<Card.Poster src={profile_path}></Card.Poster>
				</Card.Wrapper>
				<Card.Body>
					<Card.Title>{name}</Card.Title>
					<Card.Time>{birthday}</Card.Time>
					<Card.Text>{place_of_birth}</Card.Text>
					<Card.SubTitle>Overview</Card.SubTitle>
					<Card.Text>{biography}</Card.Text>
				</Card.Body>
				<Card.Details href={`/person/${personId}`} />
			</Card>
		</section>
	);
};
