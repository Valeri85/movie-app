import { forwardRef, ForwardRefExoticComponent, RefAttributes, useImperativeHandle, useRef } from 'react';
import { NavBar } from '../NavBar/NavBar';
import styles from './Header.module.scss';
import { HeaderHeight, HeaderProps } from './Header.types';

export const Header: ForwardRefExoticComponent<HeaderProps & RefAttributes<HeaderHeight>> = forwardRef<HeaderHeight, HeaderProps>(
	(_, ref) => {
		const headerRef = useRef<HTMLElement>(null);

		useImperativeHandle(
			ref,
			() => ({
				headerHeight: headerRef.current?.clientHeight && headerRef.current?.clientHeight - 1,
			}),
			[]
		);

		return (
			<header className={styles.header} ref={headerRef}>
				<NavBar />
			</header>
		);
	}
);
