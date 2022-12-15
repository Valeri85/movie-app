import { FC } from 'react';
import { TabsList } from '../TabsList/TabsList';
import styles from './TabsSection.module.scss';

export const TabsSection: FC = () => (
	<section className={styles['tabs-section']}>
		<TabsList />
	</section>
);
