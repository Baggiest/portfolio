<script>
	import '../app.css';
</script>

<div
	class="min-h-dvh bg-[#e7e3d7] text-secondary selection:bg-primary selection:text-white flex items-center justify-center pt-24 no-scrollbar overflow-y-auto"
>
	<div class="w-full max-w-4xl px-6 md:px-12 lg:px-16 ">
		<nav class="fixed top-0 left-0 right-0 z-50 flex gap-6 py-4 px-6 md:px-12 lg:px-16 justify-center bg-[#e7e3d7]/90 backdrop-blur-sm text-xl font-semibold text-[#2a2e58]">
			<a class="hover:text-primary" href="/">Home</a>
			<a class="hover:text-primary" href="/blog">Blog</a>
			<a class="hover:text-primary" href="/projects">Projects</a>
		</nav>

		<slot></slot>
	</div>
</div>
