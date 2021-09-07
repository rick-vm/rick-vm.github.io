import React from 'react';
import { ProfileCard } from './components/ProfileCard';
import { GlassCard } from './components/GlassCard';
import { Section } from './components/Section';

export default function App(): JSX.Element {
	return (
		<div>
			<Section waveColor='dark' color='light'>
				<ProfileCard name="NonStop" description={'Hi! I\'m a backend developer from the Netherlands.'} image='https://cdn.discordapp.com/avatars/480721662149656576/e97ce36fd0c37a20be3008b96f5af5e6.png?size=4096'/>
			</Section>
			<Section waveColor='light' color='dark'>
				<GlassCard>
					<h1>test</h1>
				</GlassCard>
			</Section>
		</div>
	);
}
