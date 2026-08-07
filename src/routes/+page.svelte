<script lang="ts">
	import { onMount } from 'svelte';
	import format from '../utils/format';
	import github_logo from '$lib/assets/github.svg';
	import x_logo from '$lib/assets/x.svg';
	import linkedin_logo from '$lib/assets/linkedin.svg';
	import yc_logo from '$lib/assets/yc.svg';
	import { projects } from '$lib/projects';
	import Window from '$lib/components/Window.svelte';

	export let data: {
		posts: Array<{ title: string; slug: string; description: string; date: string }>;
	};
	const { posts } = data;
	const featuredProjects = projects.filter((p) => p.featured).slice(0, 4);

	let birthday = 1103023247;
	let currentTimeInMs = Date.now();

	$: ageSeconds = currentTimeInMs / 1000 - birthday;
	$: ageMinutes = ageSeconds / 60;
	$: wholeMinutes = Math.floor(ageMinutes);
	$: fractional = Math.floor((ageMinutes - wholeMinutes) * 100);

	onMount(() => {
		let raf = 0;
		const tick = () => {
			currentTimeInMs = Date.now();
			raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	});
</script>

<svelte:head>
	<title>Mani E. Sohi</title>
</svelte:head>

<div class="grid grid-cols-1 gap-3 md:grid-cols-[1fr_280px]">
	<div class="min-w-0">
		<Window title="My Computer — Mani E. Sohi">
			<h1 class="text-xl font-bold leading-tight sm:text-2xl">
				Hey, I'm <span class="text-[#000080]">Mani E. Sohi</span>
			</h1>
			<p class="mt-2">
				I'm a <span class="font-bold tabular-nums">{format(wholeMinutes)}</span><span
					class="text-[#000080]">.{String(fractional).padStart(2, '0')}</span
				> minutes old product engineer and former mechanic.
			</p>

			<div class="mt-4 flex flex-wrap items-center gap-4">
				<a
					href="https://github.com/baggiest"
					class="opacity-80 transition hover:opacity-100"
					aria-label="GitHub"
				>
					<img height="24" width="24" src={github_logo} alt="GitHub" />
				</a>
				<a
					href="https://www.linkedin.com/in/manisohi/"
					class="opacity-80 transition hover:opacity-100"
					aria-label="LinkedIn"
				>
					<img height="24" width="24" src={linkedin_logo} alt="LinkedIn" />
				</a>
				<a
					href="https://x.com/manisohi"
					class="opacity-80 transition hover:opacity-100"
					aria-label="X"
				>
					<img height="24" width="24" src={x_logo} alt="X" />
				</a>
				<a
					href="https://news.ycombinator.com/user?id=Baggie"
					class="opacity-80 transition hover:opacity-100"
					aria-label="Hacker News"
				>
					<img height="24" width="24" src={yc_logo} alt="Hacker News" />
				</a>
			</div>

			<fieldset class="win-fieldset">
				<legend>What I do</legend>
				<p>
					I currently work on <strong>cool shit</strong> with emphasis on making real products, no wordcel
					filler slop. My work ethic is super pragmatic.
				</p>
				<p class="dim mt-2">Focus areas:</p>
				<ul class="mt-1 space-y-0.5">
					<li>· End to end product engineering, design and delivery (6+ yoe)</li>
					<li>· Lean hardware design &amp; manufacturing</li>
					<li>· Collecting copper and aluminium to melt into bars</li>
					<li>· Getting my 1992 carburated lancer to start in the morning</li>
				</ul>
			</fieldset>

			<p class="mt-3">
				Based in Tehran. Open to meeting other makers—<a
					class="link"
					href="https://www.linkedin.com/in/manisohi/">get in touch</a
				>.
			</p>
		</Window>
	</div>

	<aside class="flex min-w-0 flex-col gap-3">
		<Window title="Writing">
			{#if posts.length === 0}
				<p class="dim">No posts yet.</p>
			{:else}
				<ul class="space-y-1.5">
					{#each posts as post}
						<li>
							<a class="win-item group" href={`/blog/${post.slug}`}>
								<h3 class="text-[12px] font-bold">{post.title}</h3>
								<p class="dim mt-0.5 text-[11px]">{post.description}</p>
							</a>
						</li>
					{/each}
				</ul>
				<div class="pt-3">
					<a class="btn" href="/blog">All posts →</a>
				</div>
			{/if}
		</Window>

		<Window title="Projects">
			<ul class="space-y-1.5">
				{#each featuredProjects as project}
					<li>
						<a class="win-item" href={project.url} target="_blank" rel="noopener noreferrer">
							<div class="flex items-baseline justify-between gap-2">
								<h3 class="text-[12px] font-bold">{project.name}</h3>
								<span class="dim text-[10px]">{project.tags[0]}</span>
							</div>
							<p class="dim mt-0.5 text-[11px]">{project.description}</p>
						</a>
					</li>
				{/each}
			</ul>
			<div class="pt-3">
				<a class="btn" href="/projects">All projects →</a>
			</div>
		</Window>
	</aside>
</div>
