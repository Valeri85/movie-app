import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { App } from './App';
import { CategoryList } from './components/CategoryList/CategoryList';
import { MOVIES, PEOPLE, POPULAR, TV_SHOWS } from './constants';
import { Home } from './pages/Home/Home';
import { Movies } from './pages/Movies/Movies';
import { People } from './pages/People/People';
import { TVShows } from './pages/TVShows/TVShows';
import { getData } from './service/api';

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route path="/" element={<Home />}>
				<Route
					path="/:category"
					element={<CategoryList pageContent="movies" />}
					loader={({ params }) => getData('movie', params.category)}
				></Route>
			</Route>
			<Route path={`${MOVIES}`} element={<Movies />} loader={() => getData('movie', POPULAR)}></Route>
			<Route path={`/${TV_SHOWS}`} element={<TVShows />} loader={() => getData('tv', POPULAR)}></Route>
			<Route path={`/${PEOPLE}`} element={<People />} loader={() => getData('person', POPULAR)}></Route>
		</Route>
	)
);
