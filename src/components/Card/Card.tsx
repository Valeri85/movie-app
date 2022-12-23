import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IMAGE_PATH } from '../../constants';
import styles from './Card.module.scss';
import { CardProps, CardType } from './Card.types';

const Card: FC<CardProps> & CardType = ({ children, variant }) => (
	<figure className={variant ? styles['card-horizontal'] : styles.card}>{children}</figure>
);

const Badge: CardType['Badge'] = ({ children }) => <small className={styles.badge}>{children.toFixed(1)}</small>;

const Poster: CardType['Poster'] = ({ src }) => (
	<img className={styles.poster} src={`${IMAGE_PATH}${src}`} width="200" height="350" loading="lazy" alt="" />
);

const Wrapper: CardType['Wrapper'] = ({ children }) => <div className={styles['poster-wrapper']}>{children}</div>;

const Body: CardType['Body'] = ({ children }) => <figcaption className={styles.body}>{children}</figcaption>;

const Title: CardType['Title'] = ({ children }) => <h2 className={styles.title}>{`${children}`}</h2>;

const SubTitle: CardType['SubTitle'] = ({ children }) => <h2 className={styles['sub-title']}>{children}</h2>;

const Text: CardType['Text'] = ({ children }) => <p className={styles.text}>{children}</p>;

const Time: CardType['Time'] = ({ children }) => {
	const dateTimeAttr = new Date(children).toISOString();
	const date = new Date(children).toDateString().slice(4);

	return (
		<time className={styles.date} dateTime={`${dateTimeAttr}`}>
			{`${date}`}
		</time>
	);
};

const Details: CardType['Details'] = ({ children, href }) => (
	<Link className={styles.link} to={href} aria-label="Go to Details Page">
		{children}
	</Link>
);

Card.Badge = Badge;
Card.Poster = Poster;
Card.Wrapper = Wrapper;
Card.Body = Body;
Card.Text = Text;
Card.Title = Title;
Card.SubTitle = SubTitle;
Card.Time = Time;
Card.Details = Details;

export default Card;
