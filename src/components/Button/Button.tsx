import { FC } from 'react';
import styles from './Button.module.scss';
import { ButtonProps } from './Button.types';

export const Button: FC<ButtonProps> = ({ children, avalableSeat, selectedSeat, ...props }) => {
	return (
		<button
			className={`${styles.button} ${avalableSeat ? styles.avalable : ''} ${selectedSeat ? styles.selected : ''} ${
				props.disabled ? styles.sold : ''
			}`}
			{...props}
		>
			{children}
		</button>
	);
};
