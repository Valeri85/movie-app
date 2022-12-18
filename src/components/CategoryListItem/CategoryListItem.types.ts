import { Movie } from '../../service/types/Movie.types';
import { Person } from '../../service/types/Person.types';
import { TVShow } from '../../service/types/TVShow.types';

export interface CategoryListItemProps extends Movie, TVShow, Person {
	pageContent: 'popular-movies' | 'popular-tv_shows' | 'popular-people' | 'top_rated-movies' | 'upcoming-movies' | 'now_playing-movies';
}
