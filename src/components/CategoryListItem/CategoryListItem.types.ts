import { Movie } from '../../service/types/Movie.types';
import { Person } from '../../service/types/Person.types';
import { TVShow } from '../../service/types/TVShow.types';

export interface CategoryListItemProps extends Movie, TVShow, Person {
	// Todo | same in CategoryListTypes
	pageContent: 'movies' | 'popular-movies' | 'popular-tv_shows' | 'popular-people';
}
