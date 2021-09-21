import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

export interface ImageGlassCardProps {
	children: JSX.Element[] | JSX.Element,
	image: string,
	zoomOnHover?: boolean,
	animateOnScroll?: boolean,
}

export function ImageGlassCard({ children, image, animateOnScroll, zoomOnHover = true }: ImageGlassCardProps): JSX.Element {
	const [ref, inView, entry] = useInView({ triggerOnce: true });

	return (
		<div ref={ref} className={'flex flex-col shadow-2lg justify-center items-center rounded-3xl m-2 backdrop-filter backdrop-blur-md bg-gray-400 bg-opacity-5 ' + (zoomOnHover ? 'duration-700 ease-in-out transition-transform transform origin-top hover:scale-105 ' : ' ') + (inView && zoomOnHover ? '' : '')}>
			<img src={image} draggable='false' className='rounded-t-3xl' />
			<div className='p-4'>
				{children}
			</div>
		</div> 
	);
}
