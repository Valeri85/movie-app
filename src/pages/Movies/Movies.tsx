import { FC } from 'react';
import { CategoryList } from '../../components/CategoryList/CategoryList';
import { MOVIES, POPULAR } from '../../constants/api';
import styles from './Movies.module.scss'; //! need to be global for 3 pages

export const Movies: FC = () => (
	<>
		<h1 className={styles['page-title']}>Discover Popular Movies</h1>
		<CategoryList pageContent={'popular-movies'} />
	</>
);
