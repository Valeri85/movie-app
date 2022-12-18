import { FC } from 'react';
import { SearchResultsSection } from '../../components/SearchResultsSection/SearchResultsSection';
import { SearchSection } from '../../components/SearchSection/SearchSection';
import { TabsSection } from '../../components/TabsSection/TabsSection';

export const Home: FC = () => (
	<>
		<SearchSection />
		<TabsSection />
		<SearchResultsSection />
	</>
);
