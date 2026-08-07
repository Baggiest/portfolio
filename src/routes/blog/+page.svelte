<script lang="ts">
	import Window from '$lib/components/Window.svelte';

	export let data: {
		posts: Array<{ title: string; slug: string; description: string; date: string }>;
	};
	const { posts } = data;

	const formatDate = (d: string) => new Date(d).toLocaleDateString();
</script>

<h1 class="sr-only">Blog</h1>

<Window title="Blog — Thoughts, Tryings and Failings">
	{#if posts.length === 0}
		<p class="dim">No posts yet.</p>
	{:else}
		<ul class="space-y-1.5">
			{#each posts as post}
				<li>
					<a class="win-item" href={`/blog/${post.slug}`}>
						<div class="flex items-baseline justify-between gap-2">
							<h2 class="truncate text-[13px] font-bold">{post.title}</h2>
							<span class="dim shrink-0 text-[10px]">{formatDate(post.date)}</span>
						</div>
						<p class="dim mt-0.5 text-[11px]">{post.description}</p>
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</Window>
