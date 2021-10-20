import React from 'react';
import { useInView } from 'react-intersection-observer';
import { SlideUp } from '../SlideUp';
import { Wave } from './Wave';

export interface BackgroundWaveProps {
	color: 'dark' | 'light',
	waveColor: 'dark' | 'light',
	children: JSX.Element[],
	title?: string,
}

export function Section({ waveColor, color, children, title = '' }: BackgroundWaveProps): JSX.Element {
	const { ref, inView } = useInView({
		threshold: 0.25,
		triggerOnce: true,
	});

	return (
		<section ref={ref} className={'background-' + color}>
			{title ? <h1 className='mb-6'>{title}</h1> : ''}
			<div className='flex flex-row flex-wrap items-center justify-center pt-8 pb-8'>
				{children.map((elem, i) => <SlideUp key={i} animate={inView} animationDelay={i * 0.25}>{elem}</SlideUp>)}
			</div>
			<Wave color={waveColor === 'dark' ? '#0e0e0e' : '#141414'}/>
		</section>
	);
}
