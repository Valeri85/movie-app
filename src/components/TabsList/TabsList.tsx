import React, { useState } from 'react';
import { TabsListItem } from '../TabsListItem/TabsListItem';
import styles from './TabsList.module.scss';

export const TabsList: React.FC = () => {
	const [selected, setSelected] = useState<number>(0);

	return (
		<ul className={styles['categories__tabs']}>
			{['Top Rated', 'Upcoming', 'Now Playing'].map((tab, tabIndex) => (
				<TabsListItem key={tabIndex} {...{ tab, selected, setSelected, tabIndex }} />
			))}
		</ul>
	);
};
