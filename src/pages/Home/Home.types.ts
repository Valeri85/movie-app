import { SelectedTab } from '../../components/Layout/Layout.types';

export interface RouterContext {
	paddingTop?: number;
	selectedTab: SelectedTab;
	setSelectedTab: React.Dispatch<React.SetStateAction<SelectedTab>>;
}
