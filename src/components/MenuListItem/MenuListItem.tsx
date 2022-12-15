import { FC } from 'react';
import { MenuListItemProps } from '../MenuListItem/MenuListItem.types';
import styles from './MenuListItem.module.scss';

export const MenuListItem: FC<MenuListItemProps> = ({ name }) => (
	<li>
		<a className={styles.link} href="#">
			{name}
		</a>
	</li>
);
