import { FC } from 'react';
import { useLoaderData } from 'react-router-dom';
import styles from './Ticket.module.scss';

export const Ticket: FC = () => {
	const { orderedMovie, movie } = useLoaderData() as any; //Todo

	return (
		<section>
			<h1 className="visually-hidden">Buy Tickets</h1>
			<div className={styles.ticket}>
				<p className={styles.text}>
					Movie <span>{movie.original_title}</span>
				</p>
				<p className={styles.text}>
					Seat(s) <span>{orderedMovie.soldSeats.join(', ')}</span>
				</p>
				<p className={styles.text}>
					Order <span>{orderedMovie.movieId}</span>
				</p>
				<p className={styles.text}>
					Tickets <span>{orderedMovie.soldSeats.length}</span>
				</p>
			</div>
		</section>
	);
};
