import { FC, ReactNode } from 'react';

export interface CardProps {
	variant?: 'horizontal';
	children: ReactNode | ReactNode[];
}

export interface CardType {
	Badge: FC<{ children: number }>;
	Poster: FC<{ src: string }>;
	Wrapper: FC<{ children: ReactNode | ReactNode[] | string }>;
	Title: FC<{ children: ReactNode | ReactNode[] | string }>;
	SubTitle: FC<{ children: ReactNode | ReactNode[] | string }>;
	Body: FC<{ children: ReactNode | ReactNode[] }>;
	Text: FC<{ children: ReactNode | ReactNode[] | string }>;
	Time: FC<{ children: string }>;
	Details: FC<{ children?: string; href: string }>;
}
