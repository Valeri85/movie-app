import { FC, useState } from 'react';
import { Burger } from '../Burger/Burger';
import { Logo } from '../Logo/Logo';
import { MenuList } from '../MenuList/MenuList';
import styles from './NavBar.module.scss';

export const NavBar: FC = () => {
	const [expanded, setExpanded] = useState<boolean>(false);
	// Todo | change this state with ref. ex: https://bobbyhadz.com/blog/react-set-data-attribute#:~:text=To%20set%20a%20data%20attribute,object%20or%20using%20a%20ref%20.&text=Copied!
	const [menuState, setMenuState] = useState<'opened' | 'closing' | 'closed'>('closed');

	return (
		<nav className={styles.navbar} aria-label="primary">
			<Logo />
			<Burger {...{ expanded, setExpanded, menuState, setMenuState }} />
			<MenuList {...{ expanded, menuState, setMenuState }} />
		</nav>
	);
};
