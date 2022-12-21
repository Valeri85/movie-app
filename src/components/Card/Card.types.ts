import { FC, ReactNode } from 'react';

export interface CardProps {
	children: ReactNode | ReactNode[];
}

export interface CardType {
	Badge: FC<{ children: number }>;
	Poster: FC<{ src: string }>;
	Title: FC<{ children: string }>;
	Body: FC<{ children: ReactNode | ReactNode[] }>;
	Time: FC<{ children: string }>;
	Details: FC<{ children?: string }>;
}
