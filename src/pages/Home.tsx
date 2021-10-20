import React from 'react';
import { Section } from '../components/background/Section';
import { ProfileCard } from '../components/ProfileCard';
import { ImageCard } from '../components/ImageCard';
import { PercentageBar } from '../components/PercentageBar';

import gameImage from '../images/gameImage.png';
import bremeaImage from '../images/bremeaImage.png';
import profileImage from '../images/profileImage.png';
import wittenborgImage from '../images/wittenborgImage.png';
import codeImage from '../images/codeImage.png';
import projectImage from '../images/projectImage.png';
import countbotImage from '../images/countbotImage.png';
import codingLogoImage from '../images/codingLogoImage.png';
import languagesImage from '../images/languagesImage.png';
import libraryImage from '../images/libraryImage.png';
import mathImage from '../images/mathImage.png';

const languages: [string, number][] = [
	['HQ9+', 100],
	['JavaScript', 90],
	['TypeScript', 85],
	['TypeScript React', 55],
	['HTML', 50],
	['CSS', 45],
	['C++', 15],
	['Java', 13.5],
	['SQL', 12.5],
];

const software: [string, number][] = [
	['Visual Studio Code', 95],
	['discord.js', 90],
	['ESLint', 80],
	['TailwindCSS', 75],
	['npm', 75],
	['git', 60],
	['React', 45],
	['Visual Studio', 40],
];

const miscellaneous: [string, number][] = [
	['Research/Googling', 95],
	['English', 90],
	['Dutch', 87.5],
	['Hardware', 70],
	['GFX', 65],
	['VFX', 45],
	['Math', 40],
];

export function Home(): JSX.Element {
	return (
		<div>
			<Section waveColor='dark' color='light'>
				<ProfileCard name="Rick" description={'Hi! I\'m a developer from the Netherlands.'} image='https://cdn.discordapp.com/avatars/480721662149656576/e97ce36fd0c37a20be3008b96f5af5e6.png?size=4096'/>
			</Section>
			<Section title='Projects' waveColor='light' color='dark'>
				<ImageCard image={countbotImage} animationDelay={0}>
					<h2>
						<a href='https://count.bot/shop' className='text-neon-blue-light text-blue-600'>CountBot v3</a>
					</h2>
					<p>
						A chat bot maintained by <a className='underline' href='https://bremea.com/'>BreMea Development</a>
					</p>
				</ImageCard>
				<ImageCard image={gameImage} animationDelay={0.15}>
					<h2>
						<a href='https://github.com/Rick-vm/game-stringine' className='text-neon-blue-light text-blue-600'>game-stringine</a>
					</h2>
					<p>
						A small graphics framework, based on strings <span className='text-sm opacity-30'>(WIP)</span>
					</p>
				</ImageCard>
				<ImageCard image={projectImage} animationDelay={0.3}>
					<h2>
						<a className='text-neon-blue-light text-blue-600'>Project Management</a>
					</h2>
					<p>
						A tool aimed for software development projects <span className='text-sm opacity-30'>(WIP)</span>
					</p>
				</ImageCard>
				<ImageCard image={codingLogoImage} animationDelay={0.45}>
					<h2>
						<a className='text-neon-blue-light text-blue-600'>Other Projects</a>
					</h2>
					<p>
						Regarding chess, PRNGs, AI, simulations and more 
					</p>
				</ImageCard>
			</Section>
			<Section title='Experience' waveColor='dark' color='light'>
				<ImageCard image={bremeaImage} animationDelay={0}>
					<h2>
						<a className='text-neon-blue-light text-blue-600'>Software Developer</a>
					</h2>
					<p>
						<a className='underline' href='https://bremea.com/'>BreMea Development</a> <br />
						Recreational software <br />
						2021-present
					</p>
				</ImageCard>
				<ImageCard image={profileImage} animationDelay={0.15}>
					<h2>
						<a className='text-neon-blue-light text-blue-600'>Jr IT/Data Engineer</a>
					</h2>
					<p>
						<a className='underline' href='https://www.profile.nl/'>Profile International</a> <br />
						Car & Tyreservice <br />
						2021-present
					</p>
				</ImageCard>
				<ImageCard image={codeImage} animationDelay={0.3}>
					<h2>
						<a className='text-neon-blue-light text-blue-600'>Software Developer</a>
					</h2>
					<p>
						Freelance <br />
						Various projects <br />
						2019-present
					</p>
				</ImageCard>
				<ImageCard image={codeImage} animationDelay={0.45}>
					<h2>
						<a className='text-neon-blue-light text-blue-600'>Software Developer</a>
					</h2>
					<p>
						Café Development - <a className='underline' href='https://en.wikipedia.org/wiki/Rishab_Jain'>Rishab Jain</a> <br />
						Discord applications <br />
						2020-2021
					</p>
				</ImageCard>
				<ImageCard image={wittenborgImage} animationDelay={0.6}>
					<h2>
						<a className='text-neon-blue-light text-blue-600'>IT Assistant</a>
					</h2>
					<p>
						<a className='underline' href='https://www.wittenborg.eu/'>Wittenborg</a> <br />
						University of Applied Sciences <br />
						2020-2021
					</p>
				</ImageCard>
			</Section>
			<Section title='Skills' waveColor='light' color='dark'>
				<ImageCard image={languagesImage} animationDelay={0}>
					<h2>
						<a className='text-neon-blue-light text-blue-600'>Languages</a>
					</h2>
					<div className='flex items-center justify-center'>
						<div className='flex flex-col items-end justify-center w-min m-0'>
							{languages.map(([lang, perc], i) => <PercentageBar key={i} name={lang} percentage={perc} />)}
						</div>
					</div>
				</ImageCard>
				<ImageCard image={libraryImage} animationDelay={0.15}>
					<h2>
						<a className='text-neon-blue-light text-blue-600'>Libraries and Software</a>
					</h2>
					<div className='flex items-center justify-center'>
						<div className='flex flex-col items-end justify-center w-min m-0'>
							{software.map(([name, perc], i) => <PercentageBar key={i} name={name} percentage={perc} />)}
						</div>
					</div>
				</ImageCard>
				<ImageCard image={mathImage} animationDelay={0.3}>
					<h2>
						<a className='text-neon-blue-light text-blue-600'>Miscellaneous</a>
					</h2>
					<div className='flex items-center justify-center'>
						<div className='flex flex-col items-end justify-center w-min m-0'>
							{miscellaneous.map(([name, perc], i) => <PercentageBar key={i} name={name} percentage={perc} />)}
						</div>
					</div>
				</ImageCard>
			</Section>
		</div>
	);
}

