import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { App } from './App';
import './assets/styles/global.scss';
import { Layout } from './components/Layout/Layout';
import { TOP_RATED } from './constants/api';
import { Home } from './pages/Home/Home';
import { getMovies } from './service/apiService';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Home />,
				loader: () => getMovies(TOP_RATED),
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
