import { FC } from 'react';
import { useOutletContext } from 'react-router-dom';
import { RouterContext } from '../../pages/Home/Home.types';
import { TabsListItemProps } from '../TabsListItem/TabsListItem.types';
import styles from './TabsListItem.module.scss';

export const TabsListItem: FC<TabsListItemProps> = ({ tab, index }) => {
	const { selectedTab, setSelectedTab } = useOutletContext<RouterContext>();

	const tabIndex = index + 1;

	return (
		<li>
			<button
				className={`${styles.tab} ${tabIndex === selectedTab.id ? styles.active : ''}`}
				onClick={() => setSelectedTab({ id: tabIndex, category: tab })}
			>
				{tab.split('_').join(' ')}
			</button>
		</li>
	);
};
