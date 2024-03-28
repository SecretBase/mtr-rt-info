<script lang="ts">
	import { page } from '$app/stores';
	import { createQuery } from '@tanstack/svelte-query';
	import { getLightRailSchedule } from '$lib/getLightRailSchedule';
	import { lightRailStationsConfig, lightRailRoute } from '$lib/lightRightStations';
	import { cn } from '$lib/cn';
	import BookmarkButton from '$lib/components/BookmarkButton.svelte';
	import { bookmarkStore } from '$lib/bookmarkStore.svelte';

	const station = $page.params.station as unknown as keyof typeof lightRailStationsConfig;

	const query = createQuery({
		queryKey: ['getLightRailSchedule', station],
		refetchInterval: 10_000,
		gcTime: 0,
		staleTime: 0,
		queryFn: () =>
			getLightRailSchedule({
				station: station
			})
	});

	console.log($query.data?.platform_list);
</script>

<div class="grid gap-4 h-full grid-rows-[max-content_1fr]">
	<h1
		class="p-3 border-l-8 shadow-md rounded-md border border-gray-200 border-l-amber-300 dark:border-l-amber-300 dark:border-gray-600 dark:bg-dark-200 flex items-center gap-1"
	>
		<a href={`/lr`} class="flex-grow">
			{lightRailStationsConfig[station].tcName}
		</a>
		<BookmarkButton
			active={bookmarkStore.hasBookmark({ type: 'lightRail', station })}
			type="lightRail"
			{station}
		/>
	</h1>

	<div class="grid gap-4 overflow-y-auto py-4 auto-rows-min">
		{#if $query.isLoading}
			<ul class="grid gap-8">
				<li class="h-12 shadow-md border rounded-md bg-gray-200 border-gray-200 animate-pulse"></li>
				<li class="h-12 shadow-md border rounded-md bg-gray-200 border-gray-200 animate-pulse"></li>
				<li class="h-12 shadow-md border rounded-md bg-gray-200 border-gray-200 animate-pulse"></li>
			</ul>
		{:else if $query.data?.platform_list}
			<ul class="grid gap-8">
				{#each $query.data.platform_list as platform}
					<li>
						<h2 class="mb-3 text-center font-extrabold">{platform.platform_id} 號月台</h2>
						<ol class="grid gap-3">
							{#each platform.route_list as route}
								<li
									class="p-3 border border-l-8 rounded-md shadow-md grid grid-cols-3 border-l-[var(--line-color)] dark:border-l-[var(--line-color)] dark:border-gray-600 dark:bg-dark-200"
									style={lightRailRoute[route.route_no]?.color
										? `--line-color: ${lightRailRoute[route.route_no]?.color}`
										: undefined}
								>
									<span>{route.route_no}</span>
									<span class="text-center">{route.dest_ch}</span>
									<span
										class={cn(
											'text-right ',
											route.time_ch === '即將抵達' && 'text-red-700 animate-pulse'
										)}
									>
										{route.time_ch === '即將抵達' ? route.time_ch : route.time_ch}
									</span>
								</li>
							{/each}
						</ol>
					</li>
				{/each}
			</ul>
		{/if}
	</div>
</div>
