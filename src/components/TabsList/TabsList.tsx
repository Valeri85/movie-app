import React from 'react';
import { TabsListItem } from '../TabsListItem/TabsListItem';
import styles from './TabsList.module.scss';

export const TabsList: React.FC = () => (
	<ul className={styles['categories__tabs']} id="categories-tabs-container">
		{['Top Rated', 'Upcoming', 'Now Playing'].map((category, index) => (
			<TabsListItem category={category} key={index} />
		))}
	</ul>
);
