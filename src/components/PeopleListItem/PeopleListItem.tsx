import { FC } from 'react';
import { Person } from '../../service/types/Person.types';
import Card from '../Card/Card';

export const PeopleListItem: FC<Person> = ({ name, profile_path }) => (
	<li>
		<Card>
			<Card.Poster src={profile_path} />
			<Card.Body>
				<Card.Title>{name}</Card.Title>
			</Card.Body>
			<Card.Details href="id" />
		</Card>
	</li>
);
