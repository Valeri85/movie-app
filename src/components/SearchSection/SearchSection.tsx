import { FC } from 'react';
import { SearchForm } from '../SearchForm/SearchForm';
import styles from './SearchSection.module.scss';

export const SearchSection: FC = () => (
	<section className={styles['search-section']}>
		<h1 className={styles.title}>
			Welcome <span className="visually-hidden">on MovieDB website</span>
		</h1>
		<SearchForm />
	</section>
);
