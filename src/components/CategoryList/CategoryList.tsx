import { FC } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Movie } from '../../service/types/Movie.types';
import { Person } from '../../service/types/Person.types';
import { TVShow } from '../../service/types/TVShow.types';
import { CategoryListItem } from '../CategoryListItem/CategoryListItem';
import styles from './CategoryList.module.scss';
import { CategoryListProps } from './CategoryList.types';

export const CategoryList: FC<CategoryListProps> = ({ pageContent }) => {
	const categories = useLoaderData() as Movie[] | TVShow[] | Person[];

	return (
		<ul className={`${styles['category-list']} ${styles.active}`}>
			{categories?.map((category, index) => (
				<CategoryListItem key={index} {...{ ...category, pageContent }} />
			))}
		</ul>
	);
};
