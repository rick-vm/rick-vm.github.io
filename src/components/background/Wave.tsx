import React from 'react';

export interface WaveProps {
	color: string,
	className?: string,
}

export class Wave extends React.Component<WaveProps> {
	// public props
	public readonly color: string;
	public readonly className: string;

	constructor({ color, className = '' }: WaveProps) {
		super({ color, className });

		this.color = color;
		this.className = className;
	}

	// public static methods
	public static generateWave(nWaves = 5): string {
		let res = '';

		res += `L${Math.random()} ${Math.random()}`;

		for (let i = 0; i < nWaves; i++) {
			res += '';
		}

		return `M1000 100 L0 100 ${res} Z`;
	}

	// public methods
	public render(): JSX.Element {
		return (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" className={this.className}>
				<path fill={this.color} fillOpacity="1" d={Wave.generateWave()}></path>
			</svg>
		);
	}
}
