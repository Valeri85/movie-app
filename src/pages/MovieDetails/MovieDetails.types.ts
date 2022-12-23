import { Movie } from '../../service/types/Movie.types';

export interface MovieDetailsType extends Movie {
	orderedId: string;
	overview: string;
	soldSeats: number[];
	orderedMovies: orderedMovie[];
}

export interface orderedMovie {
	orderId: string;
	movieId: number;
	soldSeats: number[];
}
