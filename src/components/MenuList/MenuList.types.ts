export interface MenuListProps {
	expanded: boolean;
	menuState: 'opened' | 'closing' | 'closed';
	setMenuState: React.Dispatch<React.SetStateAction<'opened' | 'closing' | 'closed'>>;
}
