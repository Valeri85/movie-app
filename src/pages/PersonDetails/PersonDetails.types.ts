import { Person } from '../../service/types/Person.types';

export interface PersonDetailsType extends Person {
	biography: string;
	birthday: string;
	place_of_birth: string;
}
