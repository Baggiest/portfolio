<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	let now = new Date();
	let timer: ReturnType<typeof setInterval>;

	onMount(() => {
		timer = setInterval(() => {
			now = new Date();
		}, 1000);
		return () => clearInterval(timer);
	});

	$: pathname = $page.url.pathname;
	$: pageTitle =
		pathname === '/'
			? 'Home'
			: pathname.startsWith('/blog')
				? 'Blog'
				: pathname.startsWith('/projects')
					? 'Projects'
					: 'Desktop';
	$: clock = now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true });
</script>

<div class="desktop-bg flex min-h-dvh flex-col overflow-hidden">
	<main class="min-h-0 flex-1 overflow-hidden">
		<div class="flex min-h-full items-start justify-center p-2 sm:p-6">
			<div class="window flex min-h-0 w-full max-w-5xl flex-col">
				<div class="window-title">
					<span class="min-w-0 truncate">My Computer — Mani E. Sohi</span>
					<span class="flex shrink-0 items-center gap-0.5" aria-hidden="true">
						<button class="tbtn" type="button">_</button>
						<button class="tbtn" type="button">&#9633;</button>
						<button class="tbtn" type="button">&#10005;</button>
					</span>
				</div>
				<nav class="menubar" aria-label="Main navigation">
					<a
						class="menuitem {pathname === '/' ? 'active' : ''}"
						aria-current={pathname === '/' ? 'page' : undefined}
						href="/">Home</a
					>
					<a
						class="menuitem {pathname.startsWith('/blog') ? 'active' : ''}"
						aria-current={pathname.startsWith('/blog') ? 'page' : undefined}
						href="/blog">Blog</a
					>
					<a
						class="menuitem {pathname.startsWith('/projects') ? 'active' : ''}"
						aria-current={pathname.startsWith('/projects') ? 'page' : undefined}
						href="/projects">Projects</a
					>
				</nav>
				<div class="window-body win-scroll min-h-0 flex-1 overflow-y-auto">
					<slot />
				</div>
			</div>
		</div>
	</main>

	<footer class="taskbar">
		<a class="start" href="/" aria-label="Go to homepage">
			<span class="start-flag" aria-hidden="true">
				<span></span><span></span><span></span><span></span>
				<span></span><span></span><span></span><span></span>
				<span></span><span></span><span></span><span></span>
				<span></span><span></span><span></span><span></span>
			</span>
			Start
		</a>
		<a class="task-btn" href={pathname}>{pageTitle}</a>
		<span class="min-w-0 flex-1"></span>
		<span class="clock hidden sm:block">{clock}</span>
	</footer>
</div>
