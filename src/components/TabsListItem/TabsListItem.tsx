import React from 'react';
import { TabsListItemProps } from '../TabsListItem/TabsListItem.types';
import styles from './TabsListItem.module.scss';

export const TabsListItem: React.FC<TabsListItemProps> = ({ category }) => (
	<li>
		<button className={styles['categories__tab']} data-category="top-rated" data-active-tab="true">
			{category}
		</button>
	</li>
);
