export interface BurgerProps {
	expanded: boolean;
	setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
	setMenuState: React.Dispatch<React.SetStateAction<'opened' | 'closing' | 'closed'>>;
}
