import { FC } from 'react';
import { MenuListItem } from '../MenuListItem/MenuListItem';
import styles from './MenuList.module.scss';
import { MenuListProps } from './MenuList.types';

export const MenuList: FC<MenuListProps> = ({ expanded, menuState, setMenuState }) => {
	const animationEndHandler = () => !expanded && setMenuState('closed');

	return (
		<ul className={styles.menu} onAnimationEnd={animationEndHandler} data-state={menuState}>
			{['Movies', 'Tv Shows', 'People'].map((item, index) => (
				<MenuListItem name={item} key={index} />
			))}
		</ul>
	);
};
