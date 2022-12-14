import React from 'react';
import { SearchForm } from '../SearchForm/SearchForm';
import styles from './SearchSection.module.scss';

export const SearchSection: React.FC = () => (
	<section className={styles['main-page__search-section']}>
		<h1 className={styles['main-page__title']}>
			Welcome <span className="visually-hidden">on MovieDB website</span>
		</h1>
		<SearchForm />
	</section>
);
