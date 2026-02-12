<script lang="ts">
	import { onMount } from 'svelte';
	import format from '../utils/format';
	import github_logo from '$lib/assets/github.svg';
	import x_logo from '$lib/assets/x.svg';
	import linkedin_logo from '$lib/assets/linkedin.svg';
	import yc_logo from '$lib/assets/yc.svg';
	import { projects } from '$lib/projects';

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
<div class="pb-16 text-[#2a2e58]">
	<div class="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_280px] lg:gap-16">
		<div>
			<section class="mb-10">
				<h1 class="text-[2.8rem] font-extrabold leading-tight tracking-tight text-blue-950">
					Hey I'm <span class="text-nowrap text-primary">Mani E. Sohi </span>ツ
				</h1>
				<p class="mt-4 max-w-lg text-xl font-bold leading-snug">
					I'm a <span>{format(wholeMinutes)}</span><span class="tabular-nums text-primary"
						>.{String(fractional).padStart(2, '0')}</span
					>
					minutes old product engineer and former mechanic.
				</p>
				<div class="mt-6 flex items-center gap-6">
					<a href="https://github.com/baggiest" class="opacity-70 transition hover:opacity-100">
						<img height="28" width="28" src={github_logo} alt="Github" />
					</a>
					<a
						href="https://www.linkedin.com/in/manisohi/"
						class="opacity-70 transition hover:opacity-100"
					>
						<img height="28" width="28" src={linkedin_logo} alt="LinkedIn" />
					</a>
					<a href="https://x.com/manisohi" class="opacity-70 transition hover:opacity-100">
						<img height="28" width="28" src={x_logo} alt="X" />
					</a>
					<a
						href="https://news.ycombinator.com/user?id=Baggie"
						class="opacity-70 transition hover:opacity-100"
					>
						<img height="28" width="28" src={yc_logo} alt="hackernews" />
					</a>
				</div>
			</section>

			<section class="space-y-6">
				<h2 class="text-lg font-bold uppercase tracking-wide text-blue-950">What I do</h2>
				<p class="leading-relaxed text-secondary">
					I currently work on <strong class="text-blue-950">human-AI interaction</strong> engineering with emphasis on product engineering, and execution.
					My work ethic is high-agency and rapid-development, like that one squirrel from "over the hedge".
					
				</p>
				<div class="pt-2">
					<p class="mb-2 text-sm text-secondary/70">Focus areas:</p>
					<ul class="space-y-1 text-sm text-secondary/80">
						<li>· End to end product engineering, design and delivery (5+ yoe)</li>
						<li>· Lean hardware design & manufacturing</li>
						<li>· Figuring out human-centric AI systems</li>
						<li>· Getting my 1992 carburated lancer to start in the morning</li>
					</ul>
				</div>
				<p class="pt-2 text-sm text-secondary/80">
					Based in Tehran. Open to collaboration and conversation—<a
						href="https://www.linkedin.com/in/manisohi/"
						class="font-medium text-primary hover:underline">get in touch</a
					>.
				</p>
			</section>
		</div>

		<aside class="space-y-10 lg:pt-4">
			<div>
				<h2 class="mb-3 text-lg font-bold uppercase tracking-wide text-blue-950">Writing</h2>
				{#if posts.length === 0}
					<p class="text-sm text-secondary/60">No posts yet.</p>
				{:else}
					<ul class="space-y-3">
						{#each posts as post}
							<li class="group">
								<a class="block" href={`/blog/${post.slug}`}>
									<h3
										class="text-sm font-semibold text-secondary transition group-hover:text-primary"
									>
										{post.title}
									</h3>
									<p class="text-xs text-secondary/60">{post.description}</p>
								</a>
							</li>
						{/each}
					</ul>
					<a
						href="/blog"
						class="mt-4 inline-block text-sm font-semibold text-primary hover:underline"
						>All posts →</a
					>
				{/if}
			</div>

			<div>
				<h2 class="mb-3 text-lg font-bold uppercase tracking-wide text-blue-950">Projects</h2>
				<ul class="space-y-3">
					{#each featuredProjects as project}
						<li class="group">
							<a class="block" href={project.url} target="_blank" rel="noopener noreferrer">
								<div class="flex items-baseline gap-2">
									<h3
										class="text-sm font-semibold text-secondary transition group-hover:text-primary"
									>
										{project.name}
									</h3>
									<span class="text-xs text-secondary/40">{project.tags[0]}</span>
								</div>
								<p class="text-xs text-secondary/60">{project.description}</p>
							</a>
						</li>
					{/each}
				</ul>
				<a
					href="/projects"
					class="mt-4 inline-block text-sm font-semibold text-primary hover:underline"
					>All projects →</a
				>
			</div>
		</aside>
	</div>
</div>
