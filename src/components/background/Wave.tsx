import React from 'react';

export interface WaveProps {
	color: string,
	className?: string,
}

export interface Vector {
	x: number,
	y: number,
}

const N_WAVES = 3;
const HEIGHT = 100;
const D_POWER = 0.7;
const HIGHS = 2;

/*

w = 2
m = 1

[1, 0]
[0, 1]


var lists = []

loop infinitely {
	var w = 2;
	var m = 1;
	
	var list = []

	list @ 1 = random(0, 1)

	loop over the length of w, with i being the iteration {
		if list is in lists: skip infinite loop iteration

		if m == 0: end
		if list @ i - 1 == 1: skip iteration
		list @ i = 1
		m = m - 1
	}

	to lists add list

	2
	1
	2

	3
	1
	3

	3
	2
	1

	4
	2
	3

	5
	2
	6

	6
	2
	10
	101000
	010100
	001010
	000101
	100100
	010010
	001001
	100010
	010001
	100001

	3
	1
	3

	3
	2
	1

	4
	1
	4

	4
	2
	3

	5
	1
	5

	5
	2
	6

	5
	3
	1

	6
	1
	6

	6
	2
	10

	6
	3
	4

	7
	1
	7

	7
	2
	15

	7
	3
	10

	7
	4
	1

	8
	1
	8

	8
	2
	21

	8
	3
	10101000
	01010100
	00101010
	00010101

	w - m - 1

	10010100
	01001010
	00100101
	10100100
	01010010
	00101001

	w - m + 1

	6 3
	2



	1010101010
	0101010101
	1001010101
	1010010101
	1010100101
	1010101001

	101010
	010101
	100101
	101001

	8 6
	
	O(n)

	w = 4
	m = 2

	1010
	0101
	1001

	3  1

	4  3

	5  6  1

	6  10 4

	7  15 10 1

	8  21

	
	l(w) - l(w - 1) + 1
	*
	s(w - 1, m) 


}










w < 5 {

m === 0 = 1

m === 1 = w

w === 3 = 1

w === 4 = 3


}


















	s(w, m) = possibilities in serie

	s(w, m) = w - (2m - 1) + 1


	s(4, 2) = 2(1) - 1 = 1

	4











*/

const X_OFFSET = 1000 / N_WAVES;
const HALF_HEIGHT = HEIGHT / 2;
const MAX_RANDOM = Math.pow(HALF_HEIGHT, 1 / D_POWER);

export class Wave extends React.Component<WaveProps> {
	// public props
	public readonly color: string;
	public readonly className: string;

	constructor(props: WaveProps) {
		super(props);

		this.color = props.color;
		this.className = props.className ?? '';
	}

	// private static methods
	public static randomHeight(highlow: -1 | 1): number {
		return Math.pow(Math.random() * MAX_RANDOM, D_POWER) * highlow + HALF_HEIGHT;
	}

	private static generateCoords(): Vector[] {
		const highlows: (-1 | 1)[] = new Array(N_WAVES + 1).fill(-1);
		
		for (let i = 0; i < HIGHS; i++) {
			const index = Math.floor(Math.random() * N_WAVES + 1);
			if (highlows[index] === -1) highlows[index] = 1;
			else i--;
		}

		const res: Vector[] = [];

		res.push({ x: 0, y: this.randomHeight(highlows[0]) });

		for (let i = 1; i < N_WAVES; i++) {
			const x = i * X_OFFSET + (Math.random() * 100 - 50);
			const y = this.randomHeight(highlows[i]);

			res.push({ x, y });
		}

		res.push({ x: 1000, y: this.randomHeight(highlows[N_WAVES]) });
		console.log(res);
		return res;
	}
	
	public static generateWave(): string {
		const coords = this.generateCoords();

		let res = '';
		res += `L${coords[0]!.x} ${coords[0]!.y} `;

		let angle = Math.random() * 20 - 10;

		for (let i = 1; i < coords.length; i++) {
			res += `C${coords[i - 1]!.x + 100} ${coords[i - 1]!.y - angle} ${coords[i]!.x - 100} ${coords[i]!.y + (angle = Math.random() * 20 - 10)} ${coords[i]!.x} ${coords[i]!.y}`;
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

// console.time();
// for (let i = 0; i < 10000; i++) {
// 	Wave.generateWave();
// }
// console.timeEnd();
