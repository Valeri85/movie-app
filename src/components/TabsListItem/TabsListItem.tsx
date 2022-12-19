import { FC } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { NOW_PLAYING, TOP_RATED, UPCOMING } from '../../constants';
import { RouterContext } from '../../pages/Home/Home.types';
import { TabsListItemProps } from '../TabsListItem/TabsListItem.types';
import styles from './TabsListItem.module.scss';

export const TabsListItem: FC<TabsListItemProps> = ({ tab, index }) => {
	const { selectedTab, setSelectedTab } = useOutletContext<RouterContext>();
	// Todo | It's usually better to use redirect in loaders and actions than this hook
	const navigate = useNavigate();
	const tabIndex = index + 1;

	const clickHandler = () => {
		tab === TOP_RATED && navigate(`${TOP_RATED}`);
		tab === UPCOMING && navigate(`${UPCOMING}`);
		tab === NOW_PLAYING && navigate(`${NOW_PLAYING}`);
		setSelectedTab({ id: tabIndex, category: tab });
	};

	return (
		<li>
			<button className={`${styles.tab} ${tabIndex === selectedTab.id ? styles.active : ''}`} onClick={clickHandler}>
				{tab.split('_').join(' ')}
			</button>
		</li>
	);
};
