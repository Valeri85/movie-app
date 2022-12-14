import { forwardRef, useImperativeHandle, useRef } from 'react';
import { NavBar } from '../NavBar/NavBar';
import styles from './Header.module.scss';
import { HeaderHeight, HeaderProps } from './Header.types';

export const Header = forwardRef<HeaderHeight, HeaderProps>((_, ref) => {
	const headerRef = useRef<HTMLElement>(null);

	useImperativeHandle(
		ref,
		() => ({
			headerHeight: headerRef.current?.clientHeight,
		}),
		[]
	);

	return (
		<header className={styles.header} ref={headerRef}>
			<NavBar />
		</header>
	);
});
