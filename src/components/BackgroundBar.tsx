import React from 'react';

export interface BackgroundBarProps {
	height: number,
}

function randomYCoord(min: number, max: number): string {
	return (Math.random() * max + min) + 'px';
}

export function BackgroundBar({ height }: BackgroundBarProps): JSX.Element {
	return (
		<li className='background-bar background-dark' style={ { 
			top: height + 'px',
			clipPath: `polygon(0px ${randomYCoord(0, 200)}, 2000px ${randomYCoord(0, 200)}, 2000px ${randomYCoord(300, 500)}, 0px ${randomYCoord(300, 500)})`,
		} }/>
	);
}
