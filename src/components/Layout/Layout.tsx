import React, { useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { HeaderHeight } from '../Header/Header.types';

export const Layout: React.FC = () => {
	const [paddingTop, setPaddingTop] = useState<number | undefined>();
	const headerRef = useRef<HeaderHeight>(null);

	useEffect(() => setPaddingTop(headerRef.current?.headerHeight), [headerRef]);

	return (
		<>
			<Header ref={headerRef} />
			<Outlet context={{ paddingTop }} />
			<Footer />
		</>
	);
};
