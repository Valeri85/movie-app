import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Home } from './pages/Home/Home';
import { loader as topRatedMoviesLoader } from './pages/Home/Home';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<Home />} loader={topRatedMoviesLoader} />
		</Route>
	)
);

export const App: React.FC = () => <RouterProvider router={router} />;
