<script>
	import { onMount } from 'svelte';
	import format from '../utils/format';
	import github_logo from '$lib/assets/github.svg';
	import x_logo from '$lib/assets/x.svg';
	import linkedin_logo from '$lib/assets/linkedin.svg';
	import yc_logo from '$lib/assets/yc.svg';
	import oishimarket_png from '$lib/assets/oishi.png';

	// timestamp of december 14th 2004
	let birthday = 1103023247;

	// current time in ms; updated via rAF for smooth updates
	let currentTimeInMs = Date.now();

	// my age in seconds (reacts to currentTimeInMs)
	$: ageSeconds = currentTimeInMs / 1000 - birthday;
	$: ageMinutes = ageSeconds / 60;
	$: wholeMinutes = Math.floor(ageMinutes);
	$: fractional = Math.floor((ageMinutes - wholeMinutes) * 100);

	onMount(() => {
		let raf = 0;
		const tick = () => {
			currentTimeInMs = Date.now();
			raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	});
</script>

<div class="flex h-auto justify-center pt-8 text-[#2a2e58]">
	<div class="h-[500px] w-1/3 min-w-[330px]">
		<h1 class="pl-4 mb-0 pb-0 pt-4 text-left text-[2.8rem] font-extrabold tracking-tight text-blue-950">
			Hey I'm <span class="text-nowrap text-primary">Mani E. Sohi </span>ツ
		</h1>
		<div class="">
			<p
				class="mr-auto max-w-[400px] pl-4‍‍ pb-4 pt-4 text-left text-xl font-bold leading-tight"
			>
				I'm a <span class="">{format(wholeMinutes)}</span><span
					class="tabular-nums text-primary">.{String(fractional).padStart(2, '0')}</span
				>
				minutes old product engineer working on the intersection of human-AI interaction, systems engineering,
				and execution.<br />
			</p>

			<div class="flex justify-center gap-x-8 gap-y-0 pr-5 pt-4 items-baseline">
				<a href="https://github.com/baggiest">
					<img height="40" width="40" src={github_logo} class="ml-0" alt="Github" />
				</a>
				<a href="https://www.linkedin.com/in/manisohi/">
					<img height="40" width="40" src={linkedin_logo} alt="LinkedIn" />
				</a>
				<a href="https://x.com/manisohi">
					<img height="40" width="40" src={x_logo} alt="X" />
				</a>
				<a href="https://news.ycombinator.com/user?id=Baggie">
					<img height="40" width="40" src={yc_logo} alt="hackernews" />
				</a>
			</div>
		</div>
		<!-- <p class="font-rampart text-4xl ">タイドポッドは美味しいですよ :3</p> -->

		<img class="p-10" src={oishimarket_png} alt="oishi" />
	</div>
</div>
