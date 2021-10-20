import React from 'react';
const { floor, random, round, pow } = Math;

export interface WaveProps {
	color: string,
	className?: string,
}

export type Vector = [
	x: number,
	y: number,
]


export class Wave extends React.Component<WaveProps> {
	// public props
	public readonly color: string;
	public readonly className: string;

	// private static props
	private static readonly _MIN_HIGHS = 2;
	private static readonly _WAVES = 4;
	private static readonly _HEIGHT = 140;
	private static readonly _CONTRAST = 2.5;

	private static readonly _X_OFFSET = 1000 / (Wave._WAVES - 1);
	private static readonly _BEZIER_X_OFFSET = Wave._X_OFFSET / 2;

	constructor(props: WaveProps) {
		super(props);

		this.color = props.color;
		this.className = props.className ?? '';
	}

	// private static methods
	/**
	 * Generates an array representing high-mid-low profile.
	 */
	private static generateProfile(): number[] {
		const genPoint = (prev: number) => [0, 1, 2].filter(val => val !== prev)[floor(random() * 2)];

		const res = [floor(random() * 3)];

		for (let i = 1; i < Wave._WAVES; i++) {
			res[i] = genPoint(res[i - 1]);
		} console.log(res);
		
		return res;
	}

	/**
	 * Generates an svg wave string.
	 */	
	public static generateWave(): string {
		const profile = Wave.generateProfile();
		const genHeight = (height: number) => (pow(random(), Wave._CONTRAST) * (random() < 0.5 ? 1 : -1) / 2 + 0.5 + height) * Wave._HEIGHT / 3;
	
		let res = '';

		let xPrev = 0, yPrev = genHeight(profile[0]);

		res += `L${xPrev} ${yPrev} `;

		for (let i = 1; i < Wave._WAVES; i++) {
			const x = i * Wave._X_OFFSET;
			const y = genHeight(profile[i]);

			res += `C${xPrev + Wave._BEZIER_X_OFFSET} ${yPrev} ${x - Wave._BEZIER_X_OFFSET} ${y} ${x} ${y} `;

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
