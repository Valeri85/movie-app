import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { App } from './App';
import { MOVIES, PEOPLE, POPULAR, TOP_RATED, TV_SHOWS } from './constants';
import { Home } from './pages/Home/Home';
import { MovieDetails } from './pages/MovieDetails/MovieDetails';
import { orderedMovie } from './pages/MovieDetails/MovieDetails.types';
import { Movies } from './pages/Movies/Movies';
import { People } from './pages/People/People';
import { Ticket } from './pages/Ticket/Ticket';
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
					const orderedMovies: orderedMovie[] = tickets.orders?.filter((order: orderedMovie) => order.movieId.toString() === params.id);
					const orderedId: orderedMovie['orderId'] = tickets.orders?.filter((order: orderedMovie) => order.orderId);
					const soldSeats: orderedMovie['soldSeats'] = [];

					orderedMovies?.forEach(orderedMovie => orderedMovie.soldSeats.forEach(soldSeat => soldSeats.push(soldSeat)));

					return { ...data, orderedMovies: orderedMovies ?? [], soldSeats, orderedId: orderedId ?? [] };
				}}
			/>
			<Route
				path="ticket/:id"
				element={<Ticket />}
				loader={async ({ params }) => {
					const tickets = JSON.parse(localStorage.getItem('tickets') ?? '{}');
					const orderedMovie: orderedMovie = tickets.orders?.find((movie: orderedMovie) => movie.movieId.toString() === params.id);
					console.log(orderedMovie);
					const movie = await getDetails('movie', orderedMovie.movieId.toString());
					return {
						orderedMovie,
						movie,
					};
				}}
			/>
			<Route path={`${MOVIES}`} element={<Movies />} loader={() => getData('movie', POPULAR)}></Route>
			<Route path={`${TV_SHOWS}`} element={<TVShows />} loader={() => getData('tv', POPULAR)} />
			<Route path={`${PEOPLE}`} element={<People />} loader={() => getData('person', POPULAR)} />
		</Route>
	)
);
