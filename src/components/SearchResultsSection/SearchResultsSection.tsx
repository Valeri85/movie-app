import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { CategoryList } from '../CategoryList/CategoryList';

export const SearchResultsSection: FC = () => (
	<section>
		<Outlet />
	</section>
);
