import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

const mdsvexOptions = {
	extensions: ['.md', '.mdx'],
	layout: {
		blog: 'src/routes/blog/+layout.svelte'
	}
}

const config = {

	extentions: ['.svelte', '.md', '.mdx'],

	preprocess: [
		vitePreprocess(),
		mdsvex(mdsvexOptions)
	],
	
	kit: {
		adapter: adapter()
	}
};

export default config;
