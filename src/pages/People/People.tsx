import { FC } from 'react';
import { CategoryList } from '../../components/CategoryList/CategoryList';
import styles from './People.module.scss'; //! need to be global for 3 pages

export const People: FC = () => (
	<>
		<h1 className={styles['page-title']}>Discover Popular People</h1>
		<CategoryList pageContent={'popular-people'} />
	</>
);
