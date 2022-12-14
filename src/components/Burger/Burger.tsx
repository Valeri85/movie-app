import { FC } from 'react';
import styles from './Burger.module.scss';
import { BurgerProps } from './Burger.types';

export const Burger: FC<BurgerProps> = ({ expanded, setExpanded, menuState, setMenuState }) => {
	const clickHandler = () => {
		setExpanded(!expanded);
		if (menuState === 'closed') setMenuState('opened');
		if (menuState === 'opened') setMenuState('closing');
	};

	return (
		<button
			className={styles.burger}
			aria-label="Primary Menu"
			aria-expanded={expanded}
			aria-controls="primary-navigation-menu"
			onClick={clickHandler}
		>
			<svg viewBox="5 5 90 90" aria-hidden="true" focusable="false" role="image">
				<path
					className={`${styles['burger-line']} ${styles['burger-line--1']}`}
					d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
				/>
				<path className={`${styles['burger-line']} ${styles['burger-line--2']}`} d="M 20,50 H 80" />
				<path
					className={`${styles['burger-line']} ${styles['burger-line--3']}`}
					d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
				/>
			</svg>
		</button>
	);
};
