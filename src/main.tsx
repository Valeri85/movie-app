import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from './App';
import './assets/styles/global.scss';
import { POPULAR, TOP_RATED } from './constants/api';
import { Home } from './pages/Home/Home';
import { Movies } from './pages/Movies/Movies';
import { People } from './pages/People/People';
import { TVShows } from './pages/TVShows/TVShows';
import { getMovies, getPeople, getTVShows } from './service/apiService';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Home />,
				loader: async () => await getMovies(TOP_RATED),
			},
			{
				path: '/movies',
				element: <Movies />,
				loader: async () => await getMovies(POPULAR),
			},
			{
				path: '/tv-shows',
				element: <TVShows />,
				loader: async () => await getTVShows(POPULAR),
			},
			{
				path: '/people',
				element: <People />,
				loader: async () => await getPeople(POPULAR),
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
