<script lang="ts">
	import Window from '$lib/components/Window.svelte';
	import type { ComponentType } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const content = data.content as ComponentType;
	const meta = data.meta as { title: string; date: string };
</script>

<div class="mx-auto w-full max-w-3xl">
	<a href="/blog" class="btn mb-3">← Back to blog</a>

	<Window title={`Notepad — ${meta.title}`}>
		<h1 class="sr-only">{meta.title}</h1>
		<p class="mb-4 text-[11px] font-semibold">{new Date(meta.date).toLocaleDateString()}</p>
		<article
			class="prose prose-sm sm:prose-base prose-headings:font-bold prose-headings:text-black prose-p:text-black prose-strong:text-black prose-a:text-[#0000ff] hover:prose-a:underline prose-code:bg-white prose-code:px-1 prose-code:py-0.5 prose-code:text-black prose-pre:border prose-pre:border-black prose-pre:bg-white prose-pre:text-black prose-blockquote:bg-white prose-blockquote:text-black prose-blockquote:border-[#000080] max-w-none"
		>
			<svelte:component this={content} />
		</article>
	</Window>
</div>
