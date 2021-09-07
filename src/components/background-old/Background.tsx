import React from 'react';
import { BackgroundBar, D_HEIGHT } from './BackgroundBar';

export class Background extends React.Component {
	public height = -D_HEIGHT / 2;
	public key = 0;
	public nextBarDark = true;
	public bars: JSX.Element[] = [];

	constructor(props: Record<never, never>) {
		super(props);

		window.onscroll = this.onScroll.bind(this);
		
		// add initial background
		while (window.innerHeight > this.height)
			this.addBackgroundBar();
	}

	public onScroll(): void {
		// keep adding background bars until reach end of view
		while (window.innerHeight + window.scrollY > this.height)
			this.addBackgroundBar();
	}

	public addBackgroundBar(): void {
		this.bars.push(<BackgroundBar key={this.key} color={this.nextBarDark ? 'dark' : 'light'} height={this.height} />);

		// prepare variables for next bar
		this.height += D_HEIGHT;
		this.key++;
		this.nextBarDark = !this.nextBarDark;
	}

	public render(): JSX.Element {
		return (
			<ul>
				{this.bars}
			</ul>
		);
	}
}
