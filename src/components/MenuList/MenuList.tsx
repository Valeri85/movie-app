import { FC } from 'react';
import { MOVIES, PEOPLE, TV_SHOWS } from '../../constants/api';
import { MenuListItem } from '../MenuListItem/MenuListItem';
import styles from './MenuList.module.scss';
import { MenuListProps } from './MenuList.types';

export const MenuList: FC<MenuListProps> = ({ expanded, menuState, setMenuState }) => (
	<ul className={styles.menu} onAnimationEnd={() => !expanded && setMenuState('closed')} data-state={menuState}>
		{[MOVIES, TV_SHOWS, PEOPLE].map((item, index) => (
			<MenuListItem name={item} key={index} />
		))}
	</ul>
);
