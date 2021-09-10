import React from 'react';

export interface WaveProps {
	color: string,
	className?: string,
}

const N_WAVES = 2;
const X_OFFSET = 1000 / N_WAVES;
const HEIGHT = 100;

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
	private static generateWave(): string {
		let res = '';

		const start = Math.random() * (HEIGHT - 25);
		const end = Math.random() * (HEIGHT - 25);

		res += `L0 ${start} `;

		let prevX = 0, prevY = start;
		let prevAngle = Math.random() * 50 - 25;

		for (let i = 1; i < N_WAVES; i++) {
			const x = X_OFFSET * i + (Math.random() * 50 - 25);
			const y = Math.random() * (HEIGHT - 25);

			res += `C${prevX + 200} ${prevY + prevAngle} ${x - 200} ${y - (prevAngle = (Math.random() * 50 - 25))} ${x} ${y} `;

			prevX = x;
			prevY = y;
		}

		return `M1000 ${HEIGHT} L0 ${HEIGHT} ${res} C${prevX + 200} ${prevY + prevAngle} 800 ${Math.random() * 50 - 25} 1000 ${end} Z`;
	}

	// public methods
	public render(): JSX.Element {
		return (
			<svg xmlns='http://www.w3.org/2000/svg' viewBox={`0 0 1000 ${HEIGHT}`} className={this.className}>
				<path fill={this.color} fillOpacity="1" d={Wave.generateWave()}></path>
			</svg>
		);
	}
}
