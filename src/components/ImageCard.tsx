import React from 'react';
import { useInView } from 'react-intersection-observer';
import { SlideUp } from './SlideUp';

export interface ImageCardProps {
	children: JSX.Element[] | JSX.Element,
	image: string,
	zoomOnHover?: boolean,
	animationDelay?: number,
}

export function ImageCard(props: ImageCardProps): JSX.Element {
	const { children, image, zoomOnHover = true, animationDelay = 0 } = props;

	const { ref, inView, entry } = useInView({
		threshold: 0,
		triggerOnce: true,
	});

	const hoverAnimation = zoomOnHover ? 'duration-700 ease-in-out transition-transform transform origin-top hover:scale-105 ' : '';

	return (
		<SlideUp animationDelay={animationDelay}>
			<div ref={ref} className={'flex flex-col shadow-2lg justify-center items-center rounded-3xl m-2 backdrop-filter backdrop-blur-md bg-gray-400 bg-opacity-5 ' + hoverAnimation}>
				<img src={image} draggable='false' className='rounded-t-3xl w-96' />
				<div className='p-4 pt-1 w-96'>
					{children}
				</div>
			</div> 
		</SlideUp>
	);
}
