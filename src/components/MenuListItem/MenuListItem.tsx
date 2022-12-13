import React from 'react';
import { MenuListItemProps } from '../MenuListItem/MenuListItem.types';
import styles from './MenuListItem.module.scss';

export const MenuListItem: React.FC<MenuListItemProps> = ({ name }) => (
	<li>
		<a className={styles.menu__link} href="#">
			{name}
		</a>
	</li>
);
