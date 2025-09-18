/** @type {import('tailwindcss').Config} */
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
				'peach': '#FFCBA5', // cream background
			}
		}
  },
  plugins: [],
}

