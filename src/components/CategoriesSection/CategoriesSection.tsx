import React from 'react';
import { TabsList } from '../TabsList/TabsList';
import styles from './CategorySection.module.scss';

export const CategoriesSection: React.FC = () => (
	<section className={styles['main-page__categories']}>
		<TabsList />
	</section>
);
