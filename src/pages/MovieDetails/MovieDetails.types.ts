import { Movie } from '../../service/types/Movie.types';

export interface MovieDetailsType extends Movie {
	orderedId: string;
	overview: string;
	soldSeats: number[];
	orders: order[];
}

export interface order {
	orderId: string;
	movieId: number;
	soldSeats: number[];
}
