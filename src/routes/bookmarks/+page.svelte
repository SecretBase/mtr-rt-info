<script lang="ts">
	import { bookmarkStore } from '$lib/bookmarkStore.svelte';
	import { lightRailStationsConfig } from '$lib/lightRightStations';
	import { linesConfig } from '$lib/lines';
	import { stationsConfig } from '$lib/stations';
	import { isServer } from '@tanstack/svelte-query';

	const mtrStations = $derived(bookmarkStore.bookmarks.filter(({ type }) => type === 'mtr'));
	const lightRailStations = $derived(
		bookmarkStore.bookmarks.filter(({ type }) => type === 'lightRail')
	);
</script>

<div class="h-full overflow-y-auto">
	<div class="mb-4">
		<h2 class="h-full flex items-center justify-center mb-4 text-lg">港鐵</h2>

		{#if mtrStations.length > 0}
			<ul class="grid auto-rows-min gap-4">
				{#each mtrStations as station}
					<li>
						<a
							href={`/mtr/line/${station.line}/station/${station.station}`}
							class="p-3 border-l-8 border-[var(--line-color)] shadow-md rounded-md flex gap-2 items-center border-y border-y-gray-200 border-r border-r-gray-200 dark:border-y-gray-600 dark:border-r-gray-600 dark:bg-dark-200"
							style={`--line-color: ${linesConfig[station.line].color}`}
						>
							{stationsConfig[station.station].tcName} ({linesConfig[station.line].tcName})
						</a>
					</li>
				{/each}
			</ul>
		{:else if isServer}{:else}
			<p class="text-center">沒bookmark港鐵喎</p>
		{/if}
	</div>

	<div>
		<h2 class="h-full flex items-center justify-center mb-4 text-lg">輕鐵</h2>

		{#if lightRailStations.length > 0}
			<ul class="grid auto-rows-min gap-4">
				{#each lightRailStations as station}
					<li>
						<a
							href={`/lr/station/${station.station}`}
							class="p-3 border-l-8 border-[var(--line-color)] shadow-md rounded-md flex gap-2 items-center border-y border-y-gray-200 border-r border-r-gray-200 dark:border-y-gray-600 dark:border-r-gray-600 dark:bg-dark-200 border-l-amber-300 dark:border-l-amber-300"
						>
							{lightRailStationsConfig[station.station].tcName}
						</a>
					</li>
				{/each}
			</ul>
		{:else if isServer}{:else}
			<p class="text-center">沒bookmark港鐵喎</p>
		{/if}
	</div>
</div>
