export type TabsListItemProps = {
	tab: string;
	selected: number;
	setSelected: React.Dispatch<React.SetStateAction<number>>;
	tabIndex: number;
};
