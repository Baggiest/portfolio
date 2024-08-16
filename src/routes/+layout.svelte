<script>
	import '../app.css';
</script>

<div class="min-h-screen bg-[#e3dece] text-yellow-950 selection:bg-lime-500">

	<div class="flex items-center justify-center">
		<nav class="flex w-1/3 min-w-[330px] gap-6 px-2 py-8 text-lg font-semibold">
			<a href="/">Home</a>
			<a href="/blog">Blog</a>
		</nav>
	</div>

	<slot></slot>
</div>
