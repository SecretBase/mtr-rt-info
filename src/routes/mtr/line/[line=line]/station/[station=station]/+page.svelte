<script lang="ts">
	import { linesConfig, type LINE } from '$lib/lines';
	import ETA from '$lib/components/ETA.svelte';
	import { stationsConfig, type STATION } from '$lib/stations';
	import { page } from '$app/stores';
	import { createQuery } from '@tanstack/svelte-query';
	import { getMTRSchedule } from '$lib/getMTRSchedule';
	import BookmarkButton from '$lib/components/BookmarkButton.svelte';
	import { bookmarkStore } from '$lib/bookmarkStore.svelte';

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

<div class="grid gap-4 h-full grid-rows-[min-content_1fr]">
	<h1
		class="p-3 border-l-8 border-[var(--line-color)] shadow-md rounded-md flex gap-2 items-center border-y border-y-gray-200 border-r border-r-gray-200 dark:border-y-gray-600 dark:border-r-gray-600 dark:bg-dark-200"
		style={`--line-color: ${linesConfig[$page.params.line as LINE].color}`}
	>
		<a href={`/mtr/line/${$page.params.line}`} class="flex-grow">
			{stationsConfig[$page.params.station as STATION].tcName} ({linesConfig[$page.params.line as LINE].tcName})
		</a>
		<BookmarkButton
			active={bookmarkStore.hasBookmark({ type: 'mtr', line: $page.params.line as LINE, station: $page.params.station as STATION })}
			type="mtr"
			line={$page.params.line as LINE}
			station={$page.params.station as STATION}
		/>
	</h1>

	<div class="grid gap-4 overflow-y-auto py-4 auto-rows-min">
		{#if $query.isLoading}
			<ul class="grid gap-3">
				<li class="h-12 shadow-md border rounded-md bg-gray-200 border-gray-200 animate-pulse"></li>
				<li class="h-12 shadow-md border rounded-md bg-gray-200 border-gray-200 animate-pulse"></li>
				<li class="h-12 shadow-md border rounded-md bg-gray-200 border-gray-200 animate-pulse"></li>
			</ul>
		{:else if $query.data?.data}
			{#if $query.data?.data[`${$page.params.line as LINE}-${$page.params.station as STATION}`].UP}
				<ul class="grid gap-3 [&+hr]:block">
					{#each $query.data?.data[`${$page.params.line as LINE}-${$page.params.station as STATION}`].UP ?? [] as train}
						<li
							class="p-3 shadow-md rounded-md flex items-center gap-2 border border-gray-200 dark:border-gray-600 dark:bg-dark-200"
						>
							{@render etaInfo(train)}
						</li>
					{/each}
				</ul>
			{/if}

			{#if $query.data?.data[`${$page.params.line as LINE}-${$page.params.station as STATION}`].DOWN}
				<hr class="hidden mx-16 border-gray-400 border-dashed" />
				<ul class="grid gap-3">
					{#each $query.data?.data[`${$page.params.line as LINE}-${$page.params.station as STATION}`].DOWN ?? [] as train}
						<li
							class="p-3 shadow-md rounded-md flex items-center gap-2 border border-gray-200 dark:border-gray-600 dark:bg-dark-200"
						>
							{@render etaInfo(train)}
						</li>
					{/each}
				</ul>
			{/if}
		{/if}
	</div>
</div>
