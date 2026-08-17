export type Project = {
	name: string;
	description: string;
	url: string;
	tags: string[];
	featured?: boolean;
};

export const projects: Project[] = [
	{
		name: 'Nacionals',
		description: "Website for the University of Tehran's FSAE team",
		url: 'https://github.com/Baggiest/Nacionals',
		tags: ['TypeScript']
	},
	{
		name: 'bratify',
		description: 'Transcribes your real-time voice into BRAT-style text',
		url: 'https://github.com/Baggiest/bratify',
		tags: ['HTML']
	},
	{
		name: 'SolidSync',
		description: 'Headache-less self-hosted part manager for mechanical engineering projects',
		url: 'https://github.com/Baggiest/SolidSync',
		tags: ['TypeScript']
	},
	{
		name: 'ZADAN',
		description: "A simple OSINT heatmap to monitor war tensions in Iran based on the public's reports",
		url: 'https://github.com/Baggiest/ZADAN',
		tags: ['TypeScript']
	},
	{
		name: 'portfolio',
		description: 'This portfolio website',
		url: 'https://github.com/Baggiest/portfolio',
		tags: ['Svelte']
	},
	{
		name: 'NormalProvider',
		description: 'A normal AI provider for your IDE, specially opencode :3 (it shuts your computer down when you insult it)',
		url: 'https://github.com/Baggiest/NormalProvider',
		tags: ['Python']
	},
	{
		name: 'pelak',
		description:
			'Viral meme project people in Iran use to find which city any car comes from so they can judge them',
		url: 'https://github.com/Baggiest/pelak',
		tags: ['TypeScript'],
		featured: true
	},
	{
		name: 'cntx',
		description: 'A CLI tool for human-AI interaction telemetry',
		url: 'https://github.com/Baggiest/cntx',
		tags: ['TypeScript', 'CLI'],
		featured: false
	},
	{
		name: 'cntx-cool',
		description: 'The code for the cntx.cool website',
		url: 'https://github.com/Baggiest/cntx-cool',
		tags: ['TypeScript'],
		featured: false
	},
	{
		name: 'rlm-mintlify-docs',
		description: 'Docs for rlm, born out of pure hatred of React',
		url: 'https://github.com/Baggiest/rlm-mintlify-docs',
		tags: ['MDX']
	},
	{
		name: 'CWL',
		description: 'Sandbox environment I use to do brain surgery on LLMs (context manipulation)',
		url: 'https://github.com/Baggiest/CWL',
		tags: ['Python', 'AI/ML'],
		featured: true
	},
	{
		name: 'keymire',
		description: 'Scrape scheduled blackouts in your location in Tehran',
		url: 'https://github.com/Baggiest/keymire',
		tags: ['Python']
	},
	{
		name: 'bookbot',
		url: 'https://github.com/Baggiest/bookbot',
		tags: ['Python']
	},
	{
		name: 'rustemp',
		description: 'Linux CLI tool to monitor CPU temperature written in Rust',
		url: 'https://github.com/Baggiest/rustemp',
		tags: ['Rust', 'CLI'],
		featured: true
	},
	{
		name: 'guessrs',
		description: 'A guessing game in Rust',
		url: 'https://github.com/Baggiest/guessrs',
		tags: ['Rust']
	},
	{
		name: 'vonculator',
		url: 'https://github.com/Baggiest/vonculator',
		tags: ['TypeScript']
	},
	{
		name: 'Mianjee',
		description: 'Interactive media web engine',
		url: 'https://github.com/Baggiest/Mianjee',
		tags: ['TypeScript'],
		featured: false
	},
	{
		name: 'Cookie',
		description: 'Cookie economy Discord bot I made in 2022 that took off',
		url: 'https://github.com/Baggiest/Cookie',
		tags: ['JavaScript', 'Discord']
	},
	{
		name: 'codewars',
		description: 'My Codewars solutions',
		url: 'https://github.com/Baggiest/codewars',
		tags: ['TypeScript']
	},
	{
		name: 'HawkTuah',
		description: "Hawk Tuah Discord bot, I don't know where it went so wrong",
		url: 'https://github.com/Baggiest/HawkTuah',
		tags: ['JavaScript', 'Discord']
	},
	{
		name: 'Luhn-algorithm',
		description: "Implementing Luhn's algorithm in Zig in 3 languages and ranking the speed",
		url: 'https://github.com/Baggiest/Luhn-algorithm',
		tags: ['Go', 'Zig', 'Deno']
	},
	{
		name: 'trash',
		description: "Linux shell written in Zig :3 (it's like bash but trash)",
		url: 'https://github.com/Baggiest/trash',
		tags: ['Zig', 'CLI'],
		featured: false
	},
	{
		name: 'Youtube-metadata-extractor',
		description: 'Get analytics about YouTube videos, channels, a nd thumbnails',
		url: 'https://github.com/Baggiest/Youtube-metadata-extractor',
		tags: ['TypeScript']
	},
	{
		name: 'docs',
		url: 'https://github.com/Baggiest/docs',
		tags: ['MDX'],
		featured: false
	},
	{
		name: 'unicode',
		description: 'All code related to uni',
		url: 'https://github.com/Baggiest/unicode',
		tags: ['C']
	},
	{
		name: 'dotfiles',
		description: 'yes yes',
		url: 'https://github.com/Baggiest/dotfiles',
		tags: ['Shell'],
		featured: false
	},
	{
		name: 'GetAOC',
		description: "Gets your AOC input.txt file, that's it",
		url: 'https://github.com/Baggiest/GetAOC',
		tags: ['TypeScript']
	},
	{
		name: 'Metroku',
		description: "Free and open-source app for Tehran's public transportation",
		url: 'https://github.com/Baggiest/Metroku',
		tags: ['JavaScript'],
		featured: false
	},
	{
		name: 'Experimenting',
		description: 'Messing around with random languages',
		url: 'https://github.com/Baggiest/Experimenting',
		tags: ['Rust'],
		featured: false
	},
	{
		name: 'Cookie-Lambda-API',
		description: 'A simple serverless API for other devs to integrate Cookie Discord bot payments into their apps',
		url: 'https://github.com/Baggiest/Cookie-Lambda-API',
		tags: ['JavaScript']
	},
	{
		name: 'Jrny',
		description: 'A journal/diary in your CLI',
		url: 'https://github.com/Baggiest/Jrny',
		tags: ['TypeScript', 'CLI']
	},
	{
		name: 'BenGPT',
		description: 'Talking Ben bot powered by GPT',
		url: 'https://github.com/Baggiest/BenGPT',
		tags: ['TypeScript', 'Discord'],
		featured: false
	},
	{
		name: 'CCPbot',
		description: 'welcome aboard',
		url: 'https://github.com/Baggiest/CCPbot',
		tags: ['JavaScript', 'Discord']
	},
	{
		name: 'Dengine',
		description: 'A metaframework for simplifying making Discord bots',
		url: 'https://github.com/Baggiest/Dengine',
		tags: ['TypeScript', 'Discord']
	},
	{
		name: 'Ben-bot',
		description: 'So like u know the talking Ben, he uses Discord now',
		url: 'https://github.com/Baggiest/Ben-bot',
		tags: ['JavaScript', 'Discord']
	},
	{
		name: 'AOC',
		description: 'my sad attempts',
		url: 'https://github.com/Baggiest/AOC',
		tags: ['TypeScript']
	},
	{
		name: 'snipe-bot',
		description: 'Someone gave me this idea, imma try to make it in 3 hours',
		url: 'https://github.com/Baggiest/snipe-bot',
		tags: ['JavaScript']
	},
	{
		name: 'DontMindThis',
		url: 'https://github.com/Baggiest/DontMindThis',
		tags: ['JavaScript'],
		featured: false
	},
	{
		name: 'WeatherTeller',
		description: 'A super super simple CLI app, just trying out the Node fetch() API',
		url: 'https://github.com/Baggiest/WeatherTeller',
		tags: ['JavaScript', 'CLI']
	},
	{
		name: 'downloadScript',
		description: 'My aunt wanted me to download a bunch of files, so instead of spending 15 minutes clicking links I spent 3 hours coding this to do it for me',
		url: 'https://github.com/Baggiest/downloadScript',
		tags: ['JavaScript']
	},
	{
		name: 'Terminal-Password-Generator',
		description: 'Practicing Node CLI tools and some encryption',
		url: 'https://github.com/Baggiest/Terminal-Password-Generator',
		tags: ['JavaScript', 'CLI']
	},
	{
		name: 'BasedBot',
		description: 'this bot is very based',
		url: 'https://github.com/Baggiest/BasedBot',
		tags: ['JavaScript', 'Discord']
	},
	{
		name: 'twitch-guessr',
		description: 'abandoned :(',
		url: 'https://github.com/Baggiest/twitch-guessr',
		tags: ['TypeScript']
	},
	{
		name: 'youShouldBot',
		description: 'YOU SHOULD TREAT YOURSELF RN',
		url: 'https://github.com/Baggiest/youShouldBot',
		tags: ['JavaScript', 'Discord']
	}
];
