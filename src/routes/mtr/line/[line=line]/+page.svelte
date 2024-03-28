<script lang="ts">
	import { page } from '$app/stores';

	import { lineStationsMap } from '$lib/linesStationMap';
	import { stationsConfig } from '$lib/stations';
	import { linesConfig } from '$lib/lines';
	import type { LINE } from '$lib/lines';
	import { cn } from '$lib/cn';

	let isReverse = $state(false);

	const stations = $derived(
		isReverse
			? lineStationsMap[$page.params.line as LINE].toReversed()
			: lineStationsMap[$page.params.line as LINE]
	);

	const onReverseClick = (event: MouseEvent) => {
		event.preventDefault();
		isReverse = !isReverse;
		const lineSettings = JSON.parse(window.localStorage.getItem('lineSettings') ?? '{}');
		window.localStorage.setItem(
			'lineSettings',
			JSON.stringify({
				...lineSettings,
				[$page.params.line]: {
					...lineSettings[$page.params.line],
					isReverse
				}
			})
		);
	};
</script>

<svelte:head>
	<title>{linesConfig[$page.params.line as LINE].tcName}</title>
</svelte:head>

<div class="grid h-full gap-4 grid-rows-[min-content_1fr]">
	<h1
		class="p-3 border-l-8 border-[var(--line-color)] shadow-md rounded-md border-y border-y-gray-200 border-r border-r-gray-200 dark:border-y-gray-600 dark:border-r-gray-600 dark:bg-dark-200 flex justify-between items-center"
		style={`--line-color: ${linesConfig[$page.params.line as LINE].color}`}
	>
		{linesConfig[$page.params.line as LINE].tcName}

		<button
			type="button"
			onclick={onReverseClick}
			class={cn('transition-transform duration-300 rotate-0', isReverse && 'rotate-180')}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width={1.5}
				stroke="currentColor"
				class="w-4 h-4 text-gray-500"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
			</svg>
			<span class="sr-only">Reverse</span>
		</button>
	</h1>

	<ul class="grid h-full overflow-y-auto auto-rows-min">
		{#each stations as station, index}
			<li>
				<a
					class={cn('flex py-4 pr-4 items-center gap-4 relative isolate', index === 0 && 'pt-0')}
					href={`/mtr/line/${$page.params.line}/station/${station}`}
				>
					<span class="w-5 h-5 border-4 border-black rounded-full block z-30 bg-white"></span>
					<span
						class={cn(
							'absolute h-full w-5 bg-[var(--line-color)] z-10',
							index === 0 && 'top-1 rounded-t-full',
							index === stations.length - 1 && 'bottom-5 rounded-b-full'
						)}
						style={`--line-color: ${linesConfig[$page.params.line as LINE].color}`}
					></span>
					{stationsConfig[station].tcName}
				</a>
			</li>
		{/each}
	</ul>
</div>
