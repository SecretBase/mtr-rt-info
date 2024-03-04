<script lang="ts">
	import { page } from '$app/stores';

	import { stationsConfig, type STATION } from '$lib/stations';
	import { linesConfig, type LINE } from '$lib/lines';
	import { getMTRSchedule } from '$lib/getMTRSchedule';

	import { browser } from '$app/environment';

	const schedule = browser
		? getMTRSchedule({
				line: $page.params.line as LINE,
				station: $page.params.station as STATION
			})
		: Promise.resolve({
				data: {
					[`${$page.params.line as LINE}-${$page.params.station as STATION}`]: { UP: [], DOWN: [] }
				}
			});
</script>

<main class="max-w-80 mx-auto container grid pt-4">
	<h1
		class="p-3 border-l-8 border-[var(--line-color)] shadow-md rounded-md block"
		style={`--line-color: ${linesConfig[$page.params.line as LINE].color}`}
	>
		{stationsConfig[$page.params.station as STATION].name} ({linesConfig[$page.params.line as LINE].name})
	</h1>

	{#await schedule}
		Loading ...
	{:then value}
		{#if value.data[`${$page.params.line as LINE}-${$page.params.station as STATION}`].UP}
			UP
			<ul>
				{#each value.data[`${$page.params.line as LINE}-${$page.params.station as STATION}`].UP ?? [] as train}
					<li>
						{train.time}
					</li>
				{/each}
			</ul>
		{/if}

		{#if value.data[`${$page.params.line as LINE}-${$page.params.station as STATION}`].DOWN}
			DOWN
			<ul>
				{#each value.data[`${$page.params.line as LINE}-${$page.params.station as STATION}`].DOWN ?? [] as train}
					<li>
						{train.time}
					</li>
				{/each}
			</ul>
		{/if}
	{/await}
</main>
