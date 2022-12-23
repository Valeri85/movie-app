import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { App } from './App';
import { MOVIES, PEOPLE, POPULAR, TOP_RATED, TV_SHOWS } from './constants';
import { Home } from './pages/Home/Home';
import { MovieDetails } from './pages/MovieDetails/MovieDetails';
import { order } from './pages/MovieDetails/MovieDetails.types';
import { Movies } from './pages/Movies/Movies';
import { People } from './pages/People/People';
import { PersonDetails } from './pages/PersonDetails/PersonDetails';
import { Ticket } from './pages/Ticket/Ticket';
import { TVShowDetails } from './pages/TVShowDetails/TVShowDetails';
import { TVShows } from './pages/TVShows/TVShows';
import { getData, getDetails } from './service/api';

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route index element={<Home />} loader={() => getData('movie', TOP_RATED)} />
			<Route path=":category" element={<Home />} loader={({ params }) => getData('movie', params.category)} />
			<Route
				path="movie/:id"
				element={<MovieDetails />}
				loader={async ({ params }) => {
					const data = await getDetails('movie', params.id);
					const tickets = JSON.parse(localStorage.getItem('tickets') ?? '{}');
					const orderes: order[] = tickets.orders?.filter((order: order) => order.movieId.toString() === params.id);
					const soldSeats: order['soldSeats'] = [];

					orderes?.forEach(order => order.soldSeats.forEach(soldSeat => soldSeats.push(soldSeat)));

					return { ...data, orders: tickets?.orders ?? [], soldSeats };
				}}
			/>
			<Route path="tv/:id" element={<TVShowDetails />} loader={({ params }) => getDetails('tv', params.id)} />
			<Route path="person/:id" element={<PersonDetails />} loader={({ params }) => getDetails('person', params.id)} />
			<Route
				path="ticket/:id"
				element={<Ticket />}
				loader={async ({ params }) => {
					const tickets = JSON.parse(localStorage.getItem('tickets') ?? '{}');
					const order: order = tickets.orders?.find((order: order) => order.movieId.toString() === params.id);
					const movie = await getDetails('movie', order.movieId.toString());
					return {
						order,
						movie,
					};
				}}
			/>
			<Route path={`${MOVIES}`} element={<Movies />} loader={() => getData('movie', POPULAR)} />
			<Route path={`${TV_SHOWS}`} element={<TVShows />} loader={() => getData('tv', POPULAR)} />
			<Route path={`${PEOPLE}`} element={<People />} loader={() => getData('person', POPULAR)} />
		</Route>
	)
);
