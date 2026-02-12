<script lang="ts">
    import { projects } from '$lib/projects';
</script>

<ul class="space-y-3">
    {#each projects as project}
        <li class="border-l-4 border-secondary/30 pl-4 py-3 transition hover:border-primary hover:bg-[#ddd9cd]/50">
            <a class="block" href={project.url} target="_blank" rel="noopener noreferrer">
                <div class="flex justify-between gap-2 items-baseline flex-wrap">
                    <h2 class="text-lg font-semibold text-secondary">{project.name}</h2>
                    <div class="flex gap-2 flex-wrap">
                        {#each project.tags as tag}
                            <span class="text-xs px-2 py-0.5 bg-secondary/10 text-secondary/70 rounded">{tag}</span>
                        {/each}
                    </div>
                </div>
                <p class="mt-1 text-sm text-secondary/70">{project.description}</p>
            </a>
        </li>
    {/each}
</ul>