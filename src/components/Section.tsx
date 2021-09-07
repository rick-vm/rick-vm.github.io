import React from 'react';

export interface BackgroundWaveProps {
	color: 'dark' | 'light',
	children: JSX.Element,
}

export function Section({ color, children }: BackgroundWaveProps): JSX.Element {
	return (
		<section>
			<div className={'flex items-center justify-center background-' + color}>{children}</div>
			<div className='background-wave'/>
		</section>
	);
}
