import React from 'react';

export interface BackgroundBarProps {
	height: number,
	color: 'light' | 'dark'
}

function randomYCoord(min: number, max: number): string {
	return (Math.random() * max + min) + 'px';
}

export const D_HEIGHT = 400;

export function BackgroundBar({ height, color }: BackgroundBarProps): JSX.Element {
	return (
		<div className={'background-bar background-' + color} style={{
			top: height + 'px',
			clipPath: `polygon(0px ${randomYCoord(0, 50)}, 100vw ${randomYCoord(0, 50)}, 100vw 600px, 0px 600px)`,
		}} />
	);
}
