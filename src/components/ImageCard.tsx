import React from 'react';

export interface ImageCardProps {
	children: JSX.Element[] | JSX.Element,
	image: string,
}

export function ImageCard(props: ImageCardProps): JSX.Element {
	const { children, image } = props;

	return (
		<div className={'flex flex-col shadow-2lg justify-center items-center rounded-3xl m-2 backdrop-filter backdrop-blur-md bg-gray-400 bg-opacity-5 duration-700 ease-in-out transition-transform transform origin-top hover:scale-105'}>
			<img src={image} draggable='false' className='rounded-t-3xl w-96' />
			<div className='p-4 pt-1 w-96'>
				{children}
			</div>
		</div> 
	);
}
