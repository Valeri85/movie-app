import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { MOVIES, PEOPLE, TV_SHOWS } from '../../constants';
import { MenuListItemProps } from '../MenuListItem/MenuListItem.types';
import styles from './MenuListItem.module.scss';

export const MenuListItem: FC<MenuListItemProps> = ({ name }) => (
	<li>
		<NavLink
			className={({ isActive }) => (isActive ? `${styles.link} ${styles.active}` : `${styles.link}`)}
			to={name === MOVIES ? `/${MOVIES}` : name === TV_SHOWS ? `/${TV_SHOWS}` : PEOPLE}
		>
			{name.split('_').join(' ')}
		</NavLink>
	</li>
);
