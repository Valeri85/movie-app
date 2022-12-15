import { FC } from 'react';
import { useOutletContext } from 'react-router-dom';
import { SearchSection } from '../../components/SearchSection/SearchSection';
import { TabsSection } from '../../components/TabsSection/TabsSection';
import { SearchResultsSection } from '../../components/SearchResultsSection/SearchResultsSection';
import styles from './Home.module.scss';
import { RouterContext } from './Home.types';

export const Home: FC = () => {
	const { paddingTop } = useOutletContext<RouterContext>();

	return (
		<main className={styles.page} style={{ paddingTop }}>
			<SearchSection />
			<TabsSection />
			<SearchResultsSection />
		</main>
	);
};
