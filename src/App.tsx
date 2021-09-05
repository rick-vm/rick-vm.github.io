import React from 'react';
import ProfileCard from './components/ProfileCard';

export default function App(): JSX.Element {
	return (
		<div className=''>
			<div className='flex items-center justify-center'>
				<ProfileCard name="NonStop" description='eyo broski' image='https://cdn.discordapp.com/avatars/480721662149656576/e97ce36fd0c37a20be3008b96f5af5e6.png?size=4096'/>
			</div>
		</div>
	);
}
