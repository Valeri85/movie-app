import React from 'react';
import styles from './SearchForm.module.scss';

export const SearchForm: React.FC = () => (
	<form className={styles['main-page__form']} id="movies-form">
		<fieldset className={styles['form__fieldset']}>
			<legend>Millions of movies, TV shows and people to discover. Explore now.</legend>
			<label className="visually-hidden" htmlFor="search">
				Search for a movie, tv show, person...
			</label>
			<input
				className={styles['form__search']}
				id="search-input"
				type="search"
				placeholder="Search for a movie, tv show, person..."
			/>
		</fieldset>
	</form>
);
