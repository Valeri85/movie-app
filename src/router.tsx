import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { App } from './App';
import { POPULAR, TOP_RATED } from './constants';
import { Home } from './pages/Home/Home';
import { Movies } from './pages/Movies/Movies';
import { People } from './pages/People/People';
import { TVShows } from './pages/TVShows/TVShows';
import { getData } from './service/api';

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route index element={<Home />} loader={() => getData('movie', TOP_RATED)}></Route>
			<Route path="/movies" element={<Movies />} loader={() => getData('movie', POPULAR)}></Route>
			<Route path="/tv-shows" element={<TVShows />} loader={() => getData('tv', POPULAR)}></Route>
			<Route path="/people" element={<People />} loader={() => getData('person', POPULAR)}></Route>
		</Route>
	)
);
