import { FC } from 'react';
import { NOW_PLAYING, TOP_RATED, UPCOMING } from '../../constants';
import { TabsListItem } from '../TabsListItem/TabsListItem';
import styles from './TabsList.module.scss';

export const TabsList: FC = () => (
	<ul className={styles.tabs}>
		{[TOP_RATED, UPCOMING, NOW_PLAYING].map((tab, index) => (
			<TabsListItem key={index} {...{ tab, index }} />
		))}
	</ul>
);
