<script>
	import '../app.css';
</script>

<div
	class=" h-dvh bg-[#e7e3d7] text-center text-secondary selection:bg-primary selection:text-white"
>
	<div class="flex items-center justify-center">
		<nav class="flex w-1/3 min-w-[330px] gap-6 px-2 py-8 text-xl font-semibold text-[#2a2e58]">
			<a class="hover:text-primary" href="/">Home</a>
			<a class="hover:text-primary" href="/blog">Blog</a>
			<a class="hover:text-primary" href="/projects">Projects</a>
		</nav>
	</div>

	<slot></slot>
</div>
