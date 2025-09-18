<script lang="ts">
  export let data: { posts: Array<{ title: string; slug: string; description: string; date: string }> };
  const { posts } = data;
</script>


<h1 class="mb-2 text-center text-4xl font-extrabold tracking-tight text-primary">My Recent Blogs</h1>
<p class="mb-8 text-center text-gray-600">Thoughts, Tryings and Failings.</p>

{#if posts.length === 0}
  <p>No posts yet.</p>
{:else}
  <ul class="space-y-4 flex flex-col items-center">
    {#each posts as post}
      <li class="w-full max-w-xl rounded-xl border-2 border-secondary bg-peach p-6 transition hover:shadow-xl hover:border-4">
        <a class="block" href={`/blog/${post.slug}`}>
          <div class="flex justify-between gap-2">
            <h2 class="text-xl font-semibold text-secondary">{post.title}</h2>
            <span class="shrink-0 text-sm font-semibold text-secondary">{new Date(post.date).toLocaleDateString()}</span>
          </div>
          <p class="mt-1 text-gray-600 text-left">{post.description}</p>
        </a>
      </li>
    {/each}
  </ul>
{/if}