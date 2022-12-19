import { FC, useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { TOP_RATED } from '../../constants';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { HeaderHeight } from '../Header/Header.types';
import styles from './Layout.module.scss';
import { SelectedTab } from './Layout.types';

export const Layout: FC = () => {
	const [selectedTab, setSelectedTab] = useState<SelectedTab>({ id: 1, category: TOP_RATED });
	const [paddingTop, setPaddingTop] = useState<number | undefined>();
	const headerRef = useRef<HeaderHeight>(null);

	useEffect(() => setPaddingTop(headerRef.current?.headerHeight), [headerRef]);

	return (
		<>
			<Header ref={headerRef} />
			<main className={styles.page} style={{ paddingTop }}>
				<Outlet context={{ selectedTab, setSelectedTab }} />
			</main>
			<Footer />
		</>
	);
};
