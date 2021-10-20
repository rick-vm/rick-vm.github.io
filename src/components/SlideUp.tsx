import React from 'react';
import { useInView } from 'react-intersection-observer';

export interface SlideUpProps {
	children: JSX.Element[] | JSX.Element,
	animationDelay?: number,
}

export function SlideUp(props: SlideUpProps): JSX.Element {
	const { children, animationDelay = 0 } = props;

	const { ref, inView, entry } = useInView({	
		triggerOnce: true,
	});

	const inViewAnimation = inView ? 'animate-slide-up ' : '';

	return (
		<div ref={ref} style={{ animationDelay: animationDelay + 's' }} className={'animate-slide-up-base ' + inViewAnimation}>
			{children}
		</div> 
	);
}
