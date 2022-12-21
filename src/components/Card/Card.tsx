import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IMAGE_PATH } from '../../constants';
import styles from './Card.module.scss';
import { CardProps, CardType } from './Card.types';

const Card: FC<CardProps> & CardType = ({ children }) => <article className={styles['card']}>{children}</article>;

const Badge: CardType['Badge'] = ({ children }) => <small className={styles['card-badge']}>{`${children}`}</small>;

const Poster: CardType['Poster'] = ({ src }) => (
	<img className={styles['card-poster']} src={`${IMAGE_PATH}${src}`} width="200" height="350" loading="lazy" alt="" />
);

const Body: CardType['Body'] = ({ children }) => <div className={styles['card-content']}>{children}</div>;

const Title: CardType['Title'] = ({ children }) => <h2 className={styles['card-title']}>{`${children}`}</h2>;

const Time: CardType['Time'] = ({ children }) => {
	const dateTimeAttr = new Date(children).toISOString();
	const date = new Date(children).toDateString().slice(4);

	return (
		<time className={styles['card-date']} dateTime={`${dateTimeAttr}`}>
			{`${date}`}
		</time>
	);
};

const Details: CardType['Details'] = ({ children }) => (
	<Link className={styles['card-link']} to="#" aria-label="Go to Details Page">
		{children}
	</Link>
);

Card.Badge = Badge;
Card.Poster = Poster;
Card.Body = Body;
Card.Title = Title;
Card.Time = Time;
Card.Details = Details;

export default Card;
