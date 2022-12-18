import { FC } from 'react';
import { CategoryList } from '../../components/CategoryList/CategoryList';
import styles from './TVShows.module.scss'; //! need to be global for 3 pages

export const TVShows: FC = () => (
	<>
		<h1 className={styles['page-title']}>Discover Popular TV Shows</h1>
		<CategoryList pageContent={'popular-tv_shows'} />
	</>
);
