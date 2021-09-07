import React from 'react';

export interface GlassCardProps {
	children: JSX.Element[] | JSX.Element,
	zoomOnHover?: boolean,
}

export function GlassCard({ children, zoomOnHover = true }: GlassCardProps): JSX.Element {
	return (
		<div className={'flex flex-col shadow-2lg justify-center items-center rounded-3xl m-2 p-6 backdrop-filter backdrop-blur-md bg-gray-400 bg-opacity-5' + (zoomOnHover ? ' duration-700 ease-in-out transition-transform transform origin-top hover:scale-105' : '')}>
			{children}
		</div> 
	);
}
