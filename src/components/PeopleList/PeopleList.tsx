import { FC } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Person } from '../../service/types/Person.types';
import { PeopleListItem } from '../PeopleListItem/PeopleListItem';
// TODO | Should be global style
import styles from './PeopleList.module.scss';

export const PeopleList: FC = () => {
	const people = useLoaderData() as Person[];

	return (
		<ul className={`${styles['cards-list']} ${styles.active}`}>
			{people?.map((person, index) => (
				<PeopleListItem key={index} {...person} />
			))}
		</ul>
	);
};
