import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			rampart: ["'Rampart One', sans-serif"],
		},
		extend: {
			colors: {
				'primary': '#d42b41', // hot red
				'secondary': '#2a2e58', // the dark blue
				'tertiary': '#FFCBA5', // cream background
			}
		}
	},

	// eslint-disable-next-line @typescript-eslint/no-require-imports
	plugins: [require('@tailwindcss/typography')]
} as Config;
