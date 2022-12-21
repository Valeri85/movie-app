import { FC } from 'react';
import { PeopleList } from '../../components/PeopleList/PeopleList';
import styles from './People.module.scss'; //! need to be global for 3 pages

export const People: FC = () => (
	<>
		<h1 className={styles['page-title']}>Discover Popular People</h1>
		<PeopleList />
	</>
);
