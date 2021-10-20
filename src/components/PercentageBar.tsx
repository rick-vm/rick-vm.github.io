import React from 'react';

export interface PercentageBarProps {
	name: string,
	percentage: number,
}

export function PercentageBar(props: PercentageBarProps): JSX.Element {
	const { name, percentage } = props;

	return (
		<div className='flex items-center'>
			<p className='text-lg mr-1.5 w-max'>{name}</p>
			<div className='h-4 w-36 rounded-full percentage-bar mt-0.5'>
				<div className='h-full rounded-full bg-blue-700' style={{ width: percentage + '%' }} />
			</div>
		</div>
	);
}
