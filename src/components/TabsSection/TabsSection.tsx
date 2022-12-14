import React from 'react';
import { TabsList } from '../TabsList/TabsList';
import styles from './TabsSection.module.scss';

export const TabsSection: React.FC = () => (
	<section className={styles['main-page__categories']}>
		<TabsList />
	</section>
);
