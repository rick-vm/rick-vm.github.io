import React from 'react';

export interface SlideUpProps {
	children: JSX.Element[] | JSX.Element,
	animate: boolean,
	animationDelay?: number,
}

export function SlideUp(props: SlideUpProps): JSX.Element {
	const { children, animate, animationDelay = 0 } = props;

	const animation = animate ? 'animate-slide-up ' : '';

	return (
		<div style={{ animationDelay: animationDelay + 's' }} className={'animate-slide-up-base ' + animation}>
			{children}
		</div> 
	);
}
