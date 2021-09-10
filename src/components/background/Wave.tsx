import React from 'react';

export interface WaveProps {
	color: string,
	className?: string,
}

export interface Vector {
	x: number,
	y: number,
}

const N_WAVES = 2;
const X_OFFSET = 1000 / N_WAVES;
const HEIGHT = 100;
const D_THRESHOLD = 50;

export class Wave extends React.Component<WaveProps> {
	// public props
	public readonly color: string;
	public readonly className: string;

	constructor({ color, className = '' }: WaveProps) {
		super({ color, className });

		this.color = color;
		this.className = className;
	}

	// private static methods
	private static generateCoords(): Vector[] {
		const res: Vector[] = [];
		const d = 0;
		
		do {
			const yStart = Math.random() * HEIGHT;
			const yEnd = Math.random() * HEIGHT;

			res.push({ x: 0, y: yStart });
			
			for (let i = 1; i < N_WAVES; i++) {
				const y = Math.random() * HEIGHT;
				
				res.push({ x: i * X_OFFSET + Math.random() * 100 - 50, y });
				d += Math.abs(res[i - 1].y - y);
			}
			
			res.push({ x: 1000, y: yEnd });
			d += Math.abs(yEnd - res[res.length - 1]!.y);
		} while (d / N_WAVES < D_THRESHOLD);
		
		return res;
	}
	
	private static generateWave(): string {
		const coords = Wave.generateCoords();

		let res = '';
		res += `L${coords[0]!.x} ${coords[0]!.y} `;

		let angle = Math.random() * 50 - 25;

		for (let i = 1; i < coords.length; i++) {
			res += `C${coords[i - 1]!.x + 150} ${coords[i - 1]!.y - angle} ${coords[i]!.x - 150} ${coords[i]!.y + (angle = Math.random() * 50 - 25)} ${coords[i]!.x} ${coords[i]!.y}`;
		}

		return `M1000 ${HEIGHT} L0 ${HEIGHT} ${res} Z`;
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
