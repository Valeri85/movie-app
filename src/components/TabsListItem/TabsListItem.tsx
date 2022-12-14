import React from 'react';
import { TabsListItemProps } from '../TabsListItem/TabsListItem.types';
import styles from './TabsListItem.module.scss';

export const TabsListItem: React.FC<TabsListItemProps> = ({ tab, selected, setSelected, tabIndex }) => (
	<li>
		<button className={`${styles.tab} ${tabIndex === selected ? styles.active : ''}`} onClick={() => setSelected(tabIndex)}>
			{tab}
		</button>
	</li>
);
