import React from 'react';
import { GlassCard } from './GlassCard';

export interface ProfileCardProps {
	image: string,
	name: string
	description?: string
}

export function ProfileCard({ image, name, description }: ProfileCardProps): JSX.Element {
	return (
		<GlassCard>
			<img draggable='false' className='w-44 h-44 shadow-lg rounded-full mb-2' src={image}></img>
			<h1 className='font-title text-4xl text-shadow-xl mb-1'>
				{'Hey, I\'m '}
				<span className='font-title text-neon-blue text-blue-600'>{name}</span>
			</h1>
			<p className='max-w-md font-paragraph text-2xl text-opacity-90 text-gray-400 text-shadow'>{description}</p>	
		</GlassCard>
	);
}
