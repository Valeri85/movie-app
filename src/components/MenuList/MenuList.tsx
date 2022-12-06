import React from 'react';
import { MenuListItem } from '../MenuListItem/MenuListItem';
import styles from './MenuList.module.scss';
import { MenuListProps } from './MenuList.types';

export const MenuList: React.FC<MenuListProps> = props => {
	const { expanded } = props;

	return (
		<ul className={styles.header__menu} id="primary-navigation-menu" data-state={expanded ? 'opened' : 'closed'}>
			{['movies', 'tv-shows', 'people'].map((item, index) => (
				<MenuListItem name={item} key={index} />
			))}
		</ul>
	);
};
