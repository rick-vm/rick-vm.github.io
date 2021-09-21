import React from 'react';
import { Wave } from './Wave';

export interface BackgroundWaveProps {
	color: 'dark' | 'light',
	waveColor: 'dark' | 'light',
	children: JSX.Element[] | JSX.Element,
}

export function Section({ waveColor, color, children }: BackgroundWaveProps): JSX.Element {
	return (
		<section className={'background-' + color}>
			<div className='flex flex-col items-center justify-center pt-8 pb-8'>{children}</div>
			<Wave color={waveColor === 'dark' ? '#0e0e0e' : '#141414'}/>
		</section>
	);
}
