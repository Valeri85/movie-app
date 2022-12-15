import { FC, useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { TOP_RATED } from '../../constants/api';
import { getMovies } from '../../service/apiService';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { HeaderHeight } from '../Header/Header.types';
import { SelectedTab } from './Layout.types';

export const Layout: FC = ({ selectedTab, setSelectedTab }) => {
	const [paddingTop, setPaddingTop] = useState<number | undefined>();
	// const [selectedTab, setSelectedTab] = useState<SelectedTab>({ id: 1, category: TOP_RATED });
	const headerRef = useRef<HeaderHeight>(null);

	useEffect(() => setPaddingTop(headerRef.current?.headerHeight), [headerRef]);

	return (
		<>
			<Header ref={headerRef} />
			<Outlet context={{ paddingTop, selectedTab, setSelectedTab }} />
			<Footer />
		</>
	);
};

// export const loader = () => getMovies(TOP_RATED);
