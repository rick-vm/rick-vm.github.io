import React from 'react';

export interface ProfileCardProps {
	image: string,
	name: string
	description?: string
}

export default function ProfileCard({ image, name, description }: ProfileCardProps): JSX.Element {
	return (
		<div className='flex flex-col justify-center items-center backdrop-blur-lg bg-gray-300 bg-opacity-10 rounded-xl m-4 p-4'>
			<img className='w-36 h-36 hover:shadow-2md transition-shadow rounded-full mb-4' src={image}></img>
			<h1 className='font-title text-3xl'>
				{'Hey, I\'m '}
				<span className='font-title text-3xl text-blue-600 text-neon-blue-500'>{name}</span>
			</h1>
			<p className='max-w-md font-paragraph text-xl text-opacity-90 text-gray-300 text-shadow mb-4'>eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo eyo</p>	
		</div> 
	);
	// return (
	// 	<div className="w-96 bg-gray-800 backdrop-blur-md rounded-sm flex flex-col justify-center items-center">
	// 		<div className='h-6'></div>
	// 		<img className="w-28 h-28 hover:shadow-2md transition-shadow rounded-full center" src={image}/>
	// 		<div className="h-2"></div>
	// 		<h1 className="text-shadow text-2xl font-title">{title}</h1>
	// 		<p className='text-shadow text-lg'>{description}</p>	
	// 	</div>
	// );
}
