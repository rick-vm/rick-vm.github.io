import React from 'react';
import { Wave } from './background/Wave';

export interface BackgroundWaveProps {
	color: 'dark' | 'light',
	waveColor: 'dark' | 'light',
	children: JSX.Element[] | JSX.Element,
}

export function Section({ waveColor, color, children }: BackgroundWaveProps): JSX.Element {
	return (
		<section className={'background-' + color}>
			<div className='flex items-center justify-center'>{children}</div>
			<Wave color={waveColor === 'dark' ? '#0e0e0e' : '#141414'}/>
		</section>
	);
}
