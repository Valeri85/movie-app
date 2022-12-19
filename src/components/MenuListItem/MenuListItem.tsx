import { FC } from 'react';
import { Link } from 'react-router-dom';
import { MOVIES, PEOPLE, TV_SHOWS } from '../../constants';
import { MenuListItemProps } from '../MenuListItem/MenuListItem.types';
import styles from './MenuListItem.module.scss';

export const MenuListItem: FC<MenuListItemProps> = ({ name }) => (
	<li>
		<Link className={styles.link} to={name === MOVIES ? '/movies' : name === TV_SHOWS ? '/tv-shows' : PEOPLE}>
			{name.split('_').join(' ')}
		</Link>
	</li>
);
