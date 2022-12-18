import { FC } from 'react';
import { CategoryList } from '../CategoryList/CategoryList';

export const SearchResultsSection: FC = () => (
	<section>
		<CategoryList pageContent="top_rated-movies" />
	</section>
);
