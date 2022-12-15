import { FC } from 'react';
import styles from './SearchForm.module.scss';

export const SearchForm: FC = () => (
	<form className={styles.form}>
		<fieldset className={styles.fieldset}>
			<legend>Millions of movies, TV shows and people to discover. Explore now.</legend>
			<label className="visually-hidden" htmlFor="search">
				Search for a movie, tv show, person...
			</label>
			<input className={styles.search} type="search" placeholder="Search for a movie, tv show, person..." />
		</fieldset>
	</form>
);
