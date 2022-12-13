export interface BurgerProps {
	expanded: boolean;
	setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
	menuState: 'opened' | 'closing' | 'closed';
	setMenuState: React.Dispatch<React.SetStateAction<'opened' | 'closing' | 'closed'>>;
}
