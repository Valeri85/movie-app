import React from 'react';
import { MenuListItemProps } from '../MenuListItem/MenuListItem.types';

export const MenuListItem: React.FC<MenuListItemProps> = ({ name }) => {
	return (
		<>
			<li className="menu__item">
				<a className="menu__link" href="#">
					{name}
				</a>
			</li>
		</>
	);
};
