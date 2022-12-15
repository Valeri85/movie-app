import { FC, useEffect, useRef, useState } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { HeaderHeight } from './components/Header/Header.types';
// import { Layout, loader as moviesLoader } from './components/Layout/Layout';
import { Layout } from './components/Layout/Layout';
import { SelectedTab } from './components/Layout/Layout.types';
import { TOP_RATED } from './constants/api';
import { Home } from './pages/Home/Home';
import { getMovies } from './service/apiService';

// const router = createBrowserRouter(
// 	createRoutesFromElements(
// 		<Route path="/" element={<Layout />}>
// 			<Route index element={<Home />} loader={() => getMovies(TOP_RATED)} />
// 		</Route>
// 	)
// );

export const App: FC = () => {
	const [paddingTop, setPaddingTop] = useState<number | undefined>();
	const [selectedTab, setSelectedTab] = useState<SelectedTab>({ id: 1, category: TOP_RATED });
	const headerRef = useRef<HeaderHeight>(null);

	useEffect(() => setPaddingTop(headerRef.current?.headerHeight), [headerRef]);

	return <Layout {...{ paddingTop, selectedTab, setSelectedTab }} />;
};
