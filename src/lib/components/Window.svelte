<script lang="ts">
	export let title = 'Window';
	export let className = '';
	export let scrollable = true;
</script>

<div class="window flex flex-col {className}">
	<div class="window-title">
		<span class="min-w-0 truncate">{title}</span>
		<span class="flex shrink-0 items-center gap-0.5" aria-hidden="true">
			<button class="tbtn" type="button">_</button>
			<button class="tbtn" type="button">&#9633;</button>
			<button class="tbtn" type="button">&#10005;</button>
		</span>
	</div>
	<div class="window-body {scrollable ? 'win-scroll min-h-0 flex-1 overflow-y-auto' : ''}">
		<slot />
	</div>
</div>
