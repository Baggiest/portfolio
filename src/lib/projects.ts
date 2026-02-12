export type Project = {
	name: string
	description: string
	url: string
	tags: string[]
	featured?: boolean
}

export const projects: Project[] = [
	{
		name: 'CWL',
		description: 'Sandbox environment I use to do brain surgery on LLMs (context manipulation)',
		url: 'https://github.com/Baggiest/CWL',
		tags: ['Python', 'AI/ML'],
		featured: true
	},
	{
		name: 'rlm',
		description: 'Inference library for Recursive Language Models supporting various sandboxes',
		url: 'https://github.com/Baggiest/rlm',
		tags: ['Python', 'AI/ML'],
		featured: true
	},
	{
		name: 'pelak',
		description: 'Viral meme project people in Iran use to find which city any car comes from so they can judge them',
		url: 'https://pelak.lol',
		tags: ['TypeScript'],
		featured: true
	},
	{
		name: 'rustemp',
		description: 'Linux CLI tool to monitor CPU temperature written in Rust',
		url: 'https://github.com/Baggiest/rustemp',
		tags: ['Rust', 'CLI'],
		featured: true
	},
	{
		name: 'Cookie',
		description: 'Cookie economy Discord bot I made in 2022 that took off',
		url: 'https://github.com/Baggiest/Cookie',
		tags: ['JavaScript', 'Discord']
	},
	{
		name: 'guessrs',
		description: 'A guessing game in Rust',
		url: 'https://github.com/Baggiest/guessrs',
		tags: ['Rust']
	},
	{
		name: 'keymire',
		description: 'Scrape scheduled blackouts in your location in Tehran',
		url: 'https://github.com/Baggiest/keymire',
		tags: ['Python']
	},
	{
		name: 'Youtube-metadata-extractor',
		description: 'Get analytics about YouTube videos, channels, and thumbnails',
		url: 'https://github.com/Baggiest/Youtube-metadata-extractor',
		tags: ['TypeScript']
	},
	{
		name: 'term-ad',
		description: 'We put ads in your terminal',
		url: 'https://github.com/Baggiest/term-ad',
		tags: ['CLI']
	},
	{
		name: 'Luhn-algorithm',
		description: 'Implementing Luhn\'s algorithm in Zig in 3 languages and ranking the speed',
		url: 'https://github.com/Baggiest/Luhn-algorithm',
		tags: ['Go','Zig','Deno']
	}
]
