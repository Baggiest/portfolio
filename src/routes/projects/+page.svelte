<script lang="ts">
	import { projects } from '$lib/projects';
</script>

<ul class="space-y-1.5">
	{#each projects as project}
		<li>
			<a class="win-item" href={project.url} target="_blank" rel="noopener noreferrer">
				<div class="flex flex-wrap items-center justify-between gap-2">
					<h2 class="truncate text-[13px] font-bold">{project.name}</h2>
					<div class="flex flex-wrap gap-1">
						{#each project.tags as tag}
							<span class="tag">{tag}</span>
						{/each}
					</div>
				</div>
				<p class="dim mt-0.5 text-[11px]">{project.description}</p>
			</a>
		</li>
	{/each}
</ul>
