import { FC } from 'react';
import { TabsList } from '../TabsList/TabsList';
import styles from './TabsSection.module.scss';

export const TabsSection: FC = () => (
	// TODO | Section must have heading
	<section className={styles['tabs-section']}>
		<TabsList />
	</section>
);
