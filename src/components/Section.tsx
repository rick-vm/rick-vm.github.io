import React from 'react';
import { ReactComponent as LightWave } from '../svgs/lightWave.svg';
import { ReactComponent as DarkWave } from '../svgs/darkWave.svg';

export interface BackgroundWaveProps {
	color: 'dark' | 'light',
	waveColor: 'dark' | 'light',
	children: JSX.Element[] | JSX.Element,
}

export function Section({ waveColor, color, children }: BackgroundWaveProps): JSX.Element {
	return (
		<section className={'background-' + color}>
			<div className='flex items-center justify-center'>{children}</div>
			{waveColor === 'dark' ? <DarkWave/> : <LightWave/>}
		</section>
	);
}
