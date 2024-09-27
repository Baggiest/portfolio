<script>
	import '../app.css';
</script>

<div
	class="min-h-screen bg-[#e7e3d7] text-center text-[#2a2e58] selection:bg-[#d42b41] selection:text-white"
>
	<div class="flex items-center justify-center">
		<nav class="flex w-1/3 min-w-[330px] gap-6 px-2 py-8 text-xl font-semibold text-[#2a2e58]">
			<a href="/">Home</a>
			<a href="/blog">Blog</a>
		</nav>
	</div>

	<slot></slot>
</div>
