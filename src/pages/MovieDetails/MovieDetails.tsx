import { FC, useId, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import styles from './MovieDetails.module.scss';
import { MovieDetailsType } from './MovieDetails.types';

export const MovieDetails: FC = () => {
	const {
		id: movieId,
		orderedMovies,
		orderedId,
		soldSeats,
		original_title,
		overview,
		poster_path,
		release_date,
		vote_average,
	} = useLoaderData() as MovieDetailsType;

	const [selectedSeat, setSelectedSeat] = useState<number[]>([]);
	const navigate = useNavigate();
	const orderId = useId();

	const onHandleClick = (newSeat: number) => {
		const unselectedSeat = selectedSeat.some(seat => seat === newSeat);
		const filteredSeats = selectedSeat.filter(seat => seat !== newSeat);

		if (unselectedSeat) setSelectedSeat(filteredSeats);
		else setSelectedSeat(prevSelectedSeats => [...prevSelectedSeats, newSeat]);
	};

	const clickHandler = () => {
		localStorage.setItem(
			'tickets',
			JSON.stringify({ orders: [...orderedMovies, ...orderedId, { orderId, movieId, soldSeats: selectedSeat }] })
		);
		navigate(`/ticket/${movieId}`);
	};

	return (
		<>
			<section>
				<h1 className="visually-hidden">Movie Details Page</h1>
				<Card variant="horizontal">
					<Card.Wrapper>
						<Card.Badge>{vote_average}</Card.Badge>
						<Card.Poster src={poster_path}></Card.Poster>
					</Card.Wrapper>
					<Card.Body>
						<Card.Title>{original_title}</Card.Title>
						<Card.Time>{release_date}</Card.Time>
						<Card.SubTitle>Overview</Card.SubTitle>
						<Card.Text>{overview}</Card.Text>
						<Button>Watch Trailer</Button>
					</Card.Body>
				</Card>
			</section>
			<section className={styles.seats}>
				{new Array(20).fill(0).map((_, seatNumber) => (
					<Button
						key={seatNumber}
						onClick={() => onHandleClick(seatNumber)}
						avalableSeat
						selectedSeat={selectedSeat.includes(seatNumber)}
						disabled={soldSeats?.includes(seatNumber)}
					>
						{(seatNumber + 1).toString()}
					</Button>
				))}
			</section>
			<ul className={styles.info}>
				<li>
					<p className={styles.avalable}>Avalable</p>
				</li>
				<li>
					<p className={styles.selected}>Selected</p>
				</li>
				<li>
					<p className={styles.sold}>Sold</p>
				</li>
			</ul>
			<section className={styles.section}>
				<Button onClick={clickHandler}>Get Reservation</Button>
			</section>
		</>
	);
};
