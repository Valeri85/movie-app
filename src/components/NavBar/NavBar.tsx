import React, { useState } from 'react';
import { Burger } from '../Burger/Burger';
import { Logo } from '../Logo/Logo';
import { MenuList } from '../MenuList/MenuList';
import styles from './NavBar.module.scss';

export const NavBar: React.FC = () => {
	const [expanded, setExpanded] = useState<boolean>(false);

	return (
		<nav className={styles['header__navbar']} aria-label="primary-navigation">
			<Logo />
			<Burger {...{ expanded, setExpanded }} />
			<MenuList expanded={expanded} />
		</nav>
	);
};
