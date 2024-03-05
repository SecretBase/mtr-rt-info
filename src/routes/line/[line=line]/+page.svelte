<script lang="ts">
	import { page } from '$app/stores';

	import { lineStationsMap } from '$lib/linesStationMap';
	import { stationsConfig } from '$lib/stations';
	import { linesConfig } from '$lib/lines';
	import type { LINE } from '$lib/lines';
	import { cn } from '$lib/cn';
	const stations = lineStationsMap[$page.params.line as LINE];
</script>

<svelte:head>
	<title>{linesConfig[$page.params.line as LINE].tcName}</title>
</svelte:head>

<main class="max-w-80 mx-auto container grid pt-4">
	<h1
		class="p-3 border-l-8 border-[var(--line-color)] shadow-md rounded-md block"
		style={`--line-color: ${linesConfig[$page.params.line as LINE].color}`}
	>
		{linesConfig[$page.params.line as LINE].tcName}
	</h1>

	<ul class="grid">
		{#each stations as station, index}
			<li>
				<a
					class="flex py-4 pr-4 items-center gap-4 relative isolate"
					href={`/line/${$page.params.line}/station/${station}`}
				>
					<span class="w-5 h-5 border-4 border-black rounded-full block z-30 bg-white"></span>
					<span
						class={cn(
							'absolute h-full w-5 bg-[var(--line-color)] z-10',
							index === 0 && 'top-5 rounded-t-full',
							index === stations.length - 1 && 'bottom-5 rounded-b-full'
						)}
						style={`--line-color: ${linesConfig[$page.params.line as LINE].color}`}
					></span>
					{stationsConfig[station].tcName}
				</a>
			</li>
		{/each}
	</ul>
</main>
