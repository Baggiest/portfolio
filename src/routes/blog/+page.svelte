<script lang="ts">
  export let data: { posts: Array<{ title: string; slug: string; description: string; date: string }> };
  const { posts } = data;
</script>


<h1 class="mb-2 text-4xl font-extrabold tracking-tight text-primary">Blog</h1>
<p class="mb-8 text-secondary/60">Thoughts, Tryings and Failings.</p>

{#if posts.length === 0}
  <p>No posts yet.</p>
{:else}
  <ul class="space-y-2">
    {#each posts as post}
      <li class="border-l-4 border-secondary/30 pl-4 py-3 transition hover:border-primary hover:bg-[#ddd9cd]/50">
        <a class="block" href={`/blog/${post.slug}`}>
          <div class="flex justify-between gap-2 items-baseline">
            <h2 class="text-lg font-semibold text-secondary">{post.title}</h2>
            <span class="shrink-0 text-xs text-secondary/50">{new Date(post.date).toLocaleDateString()}</span>
          </div>
          <p class="mt-1 text-sm text-secondary/70">{post.description}</p>
        </a>
      </li>
    {/each}
  </ul>
{/if}