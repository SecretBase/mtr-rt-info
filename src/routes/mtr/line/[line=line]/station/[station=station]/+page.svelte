<script lang="ts">
	import { linesConfig, type LINE } from '$lib/lines';
	import ETA from '$lib/components/ETA.svelte';
	import { stationsConfig, type STATION } from '$lib/stations';
	import { page } from '$app/stores';
	import { createQuery } from '@tanstack/svelte-query';
	import { getMTRSchedule } from '$lib/getMTRSchedule.js';

	const query = createQuery({
		queryKey: ['getMTRSchedule', $page.params.line, $page.params.station],
		refetchInterval: 10_000,
		gcTime: 0,
		staleTime: 0,
		queryFn: () =>
			getMTRSchedule({
				line: $page.params.line as LINE,
				station: $page.params.station as STATION
			})
	});
</script>

<svelte:head>
	<title>
		{stationsConfig[$page.params.station as STATION].tcName} | {linesConfig[$page.params.line as LINE].tcName}
	</title>
</svelte:head>

{#snippet etaInfo(train)}
	<span
		class="text-white bg-[var(--line-color)] w-6 h-6 flex items-center justify-center rounded-full"
		style={`--line-color: ${linesConfig[$page.params.line as LINE].color}`}
	>
		{train.plat}
	</span>
	<span class="flex-1">
		{stationsConfig[train.dest as STATION].tcName}
	</span>
	<ETA etaTime={train.time} />
{/snippet}

<main class="max-w-80 mx-auto container grid pt-4 gap-6">
	<h1
		class="p-3 border-l-8 border-[var(--line-color)] shadow-md rounded-md block"
		style={`--line-color: ${linesConfig[$page.params.line as LINE].color}`}
	>
		<a href={`/mtr/line/${$page.params.line}`}>
			{stationsConfig[$page.params.station as STATION].tcName} ({linesConfig[$page.params.line as LINE].tcName})
		</a>
	</h1>

	{#if $query.isLoading}
		Loading ...
	{:else if $query.data?.data}
		{#if $query.data?.data[`${$page.params.line as LINE}-${$page.params.station as STATION}`].UP}
			<ul class="grid gap-3 [&+hr]:block">
				{#each $query.data?.data[`${$page.params.line as LINE}-${$page.params.station as STATION}`].UP ?? [] as train}
					<li class="p-3 shadow-md rounded-md flex items-center gap-2 border-1 border-gray-700">
						{@render etaInfo(train)}
					</li>
				{/each}
			</ul>
		{/if}

		{#if $query.data?.data[`${$page.params.line as LINE}-${$page.params.station as STATION}`].DOWN}
			<hr class="hidden" />
			<ul class="grid gap-3">
				{#each $query.data?.data[`${$page.params.line as LINE}-${$page.params.station as STATION}`].DOWN ?? [] as train}
					<li class="p-3 shadow-md rounded-md flex items-center gap-2 border-1 border-gray-700">
						{@render etaInfo(train)}
					</li>
				{/each}
			</ul>
		{/if}
	{/if}
</main>
