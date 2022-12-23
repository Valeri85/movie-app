import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	avalableSeat?: boolean;
	selectedSeat?: boolean;
}
