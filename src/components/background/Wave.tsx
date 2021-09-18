import React from 'react';

export interface WaveProps {
	color: string,
	className?: string,
}

export type Vector = [
	x: number,
	y: number,
]

const { floor, random, pow } = Math;

export class Wave extends React.Component<WaveProps> {
	// private static props
	private static readonly _MIN_HIGHS = 2;
	private static readonly _WAVES = 5;
	private static readonly _HEIGHT = 100;
	private static readonly _CONTRAST = 1 / 1.5;

	private static readonly _HALF_HEIGHT = Wave._HEIGHT / 2;
	private static readonly _X_OFFSET = 1000 / (Wave._WAVES - 1);
	private static readonly _CUBIC_X_OFFSET = Wave._X_OFFSET / 2.25;

	// public props
	public readonly color: string;
	public readonly className: string;

	constructor(props: WaveProps) {
		super(props);

		this.color = props.color;
		this.className = props.className ?? '';
	}

	// private static methods
	/**
	 * Generates an array representing high-low profile.
	 * -1 is high, 1 is low.
	 */
	private static generateProfile(): number[] {
		const res: number[] = new Array(Wave._WAVES).fill(1);

		let minHighs = Wave._MIN_HIGHS;
		let pos = 0;

		while (pos < Wave._WAVES) {
			const range = (Wave._WAVES - pos) - (--minHighs > 0 ? 2 * minHighs : 0);
			pos += floor(random() * (range));

			res[pos] = -1;

			pos += 2;
		}
		
		return res;
	}

	/**
	 * Generates an svg wave string.
	 */	
	public static generateWave(): string {
		const profile = Wave.generateProfile(); console.log(profile);
		let res = '';

		let xPrev = 0, yPrev = pow(random(), Wave._CONTRAST) * Wave._HALF_HEIGHT * profile[0] + Wave._HALF_HEIGHT;

		res += `L${xPrev} ${yPrev} `;

		for (let i = 1; i < Wave._WAVES; i++) {
			const x = i * Wave._X_OFFSET;
			const y = pow(random(), Wave._CONTRAST) * Wave._HALF_HEIGHT * profile[i] + Wave._HALF_HEIGHT;

			res += `C${xPrev + Wave._CUBIC_X_OFFSET} ${yPrev} ${x - Wave._CUBIC_X_OFFSET} ${y} ${x} ${y} `;

			xPrev = x;
			yPrev = y;
		}

		return `M1000 ${Wave._HEIGHT} L0 ${Wave._HEIGHT} ${res} Z`;
	}

	// public methods
	public render(): JSX.Element {
		return (
			<svg xmlns='http://www.w3.org/2000/svg' viewBox={`0 0 1000 ${Wave._HEIGHT}`} className={this.className}>
				<path fill={this.color} fillOpacity="1" d={Wave.generateWave()}></path>
			</svg>
		);
	}
}

// console.time();
// for (let i = 0; i < 10000; i++) {
// 	Wave.generateWave();
// }
// console.timeEnd();
