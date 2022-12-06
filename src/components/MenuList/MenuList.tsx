import React from 'react';
import { MenuListItem } from '../MenuListItem/MenuListItem';
import styles from './MenuList.module.scss';

export const MenuList: React.FC = () => (
	<ul className={styles.header__menu} id="primary-navigation-menu" data-state="closed">
		{['movies', 'tv-shows', 'people'].map((item, index) => (
			<MenuListItem name={item} key={index} />
		))}
	</ul>
);
