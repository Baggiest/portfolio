<script>
	import { onMount } from 'svelte';
	import format from '../utils/format';
	import github_logo from '$lib/assets/github.svg';
	import x_logo from '$lib/assets/x.svg';
	import linkedin_logo from '$lib/assets/linkedin.svg';
	import yc_logo from '$lib/assets/yc.svg';
	import oishimarket_png from '$lib/assets/oishi.png';

	// timestamp of december 15th 2004
	let birthday = 1103106600;

	// get timestamp of now
	$: timestamp = Date.now();

	// my age in amount of seconds
	$: age = timestamp / 1000 - birthday;

	onMount(() => {
		const interval = setInterval(() => {
			timestamp = Date.now();
			age = timestamp / 1000 - birthday;
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<div class="flex h-auto justify-center pt-16 text-[#2a2e58]">
	<div class="h-[500px] w-1/3 min-w-[330px]">
		<h1 class="p-4 text-5xl font-extrabold tracking-tight text-[#d42b41]">Hey I'm Mani Sohi ツ</h1>

		<p class="p-5 text-xl font-bold leading-tight max-sm:text-center">
			I'm a {format(Math.floor(age / 60))}
			minutes old software engineer who likes to learn and solve problems usually around people<br
			/>
			I do professional backend engineering with some frontend tendencies mostly because I have to
		</p>

		<div class="flex justify-center gap-6 p-4 pt-8 max-sm:justify-center">
			<a href="https://github.com/baggiest">
				<img height="30" width="30" src={github_logo} alt="Github" />
			</a>
			<a href="https://www.linkedin.com/in/manisohi/">
				<img height="30" width="30" src={linkedin_logo} alt="LinkedIn" />
			</a>
			<a href="https://x.com/manisohi">
				<img height="30" width="30" src={x_logo} alt="X" />
			</a>
			<a href="https://news.ycombinator.com/user?id=Baggie">
				<img height="30" width="30" src={yc_logo} alt="hackernews" />
			</a>
		</div>
		<!-- <p class="font-rampart text-4xl ">タイドポッドは美味しいですよ :3</p> -->

		<img class="p-10" src={oishimarket_png} alt="oishi" />
	</div>
</div>
