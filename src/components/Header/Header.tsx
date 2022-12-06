import React from 'react';
import { NavBar } from '../NavBar/NavBar';
import styles from './Header.module.scss';

export const Header: React.FC = () => (
	<header className={styles.header} id="header">
		<NavBar />
	</header>
);
