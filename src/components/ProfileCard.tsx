import React from 'react';

export interface ProfileCardProps {
	image: string,
	title: string
	description?: string
}

export default function ProfileCard({ image, title, description }: ProfileCardProps): JSX.Element {
	return (
		<div className="w-96 flex flex-col justify-center items-center">
			<img className="w-28 h-28 shadow-2md rounded-full center" src={image}/>
			<div className=""></div>
			<h1 className="text-shadow text-2xl">{title}</h1>
			<p>{description}</p>
		</div>
	);
}
