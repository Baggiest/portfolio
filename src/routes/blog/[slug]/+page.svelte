<script lang="ts">
  export let data;
  const { content, meta } : { content: any, meta: any } = data;
</script>

<div class="text-left mb-6">
  <a href="/blog" class="inline-flex items-center text-secondary hover:text-primary font-semibold transition">
    <!-- Simple left arrow SVG -->
    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
    Back
  </a>
</div>
<article class="prose prose-lg text-left max-w-none prose-headings:text-[#2a2e58] prose-a:text-primary hover:prose-a:underline prose-code:bg-gray-50 prose-code:px-1 prose-code:py-0.5">
  <h1 class="mb-1 text-4xl font-extrabold tracking-tight text-secondary">{meta.title}</h1>
  <p class="mb-8 text-sm text-primary">{new Date(meta.date).toLocaleDateString()}</p>
  <svelte:component this={content}/>
</article>


