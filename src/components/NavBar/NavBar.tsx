import React, { useState } from 'react';
import { Burger } from '../Burger/Burger';
import { Logo } from '../Logo/Logo';
import { MenuList } from '../MenuList/MenuList';
import styles from './NavBar.module.scss';

export const NavBar: React.FC = () => {
	const [expanded, setExpanded] = useState<boolean>(false);
	const [menuState, setMenuState] = useState<'opened' | 'closing' | 'closed'>('closed');

	return (
		<nav className={styles['header__navbar']} aria-label="primary-navigation">
			<Logo />
			<Burger {...{ expanded, setExpanded, setMenuState }} />
			<MenuList {...{ expanded, setExpanded, menuState, setMenuState }} />
		</nav>
	);
};
