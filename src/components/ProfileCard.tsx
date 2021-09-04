import React from 'react';

export interface ProfileCardProps {
	image: string,
}

export default function ProfileCard({ image }: ProfileCardProps): JSX.Element {
	return (
		<div>
			<img className="rounded-full" src={image}/>
		</div>
	);
}