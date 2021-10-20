import React from 'react';
import { Wave } from './Wave';

export interface BackgroundWaveProps {
	color: 'dark' | 'light',
	waveColor: 'dark' | 'light',
	children: JSX.Element[] | JSX.Element,
	title?: string,
}

export function Section({ waveColor, color, children, title = '' }: BackgroundWaveProps): JSX.Element {
	return (
		<section className={'background-' + color}>
			{title ? <h1 className='mb-6'>{title}</h1> : ''}
			<div className='flex flex-row flex-wrap items-center justify-center pt-8 pb-8'>{children}</div>
			<Wave color={waveColor === 'dark' ? '#0e0e0e' : '#141414'}/>
		</section>
	);
}
