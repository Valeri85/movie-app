import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { App } from './App';
import { MOVIES, PEOPLE, POPULAR, TOP_RATED, TV_SHOWS } from './constants';
import { Home } from './pages/Home/Home';
import { Movies } from './pages/Movies/Movies';
import { People } from './pages/People/People';
import { TVShows } from './pages/TVShows/TVShows';
import { getData } from './service/api';

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route index element={<Home />} loader={() => getData('movie', TOP_RATED)} />
			<Route path=":category" element={<Home />} loader={({ params }) => getData('movie', params.category)} />
			<Route path={`${MOVIES}`} element={<Movies />} loader={() => getData('movie', POPULAR)} />
			<Route path={`${TV_SHOWS}`} element={<TVShows />} loader={() => getData('tv', POPULAR)} />
			<Route path={`${PEOPLE}`} element={<People />} loader={() => getData('person', POPULAR)} />
		</Route>
	)
);
