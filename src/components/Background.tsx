import React from 'react';
import { BackgroundBar } from './BackgroundBar.js';

export class Background extends React.Component {
	public height = 0;
	public bars: JSX.Element[] = [];

	public add(): void {
		this.bars.push(<BackgroundBar height={this.height} />);
		this.height += 500;
	}

	public render(): JSX.Element {
		return (
			<ul>
				{this.bars}
			</ul>
		);
	}
}
