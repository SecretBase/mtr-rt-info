<script lang="ts">
	import { lightRailStationsConfig } from '$lib/lightRightStations';
	import type { FormEventHandler } from 'svelte/elements';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	let filterInput = $state($page.url.searchParams.get('q'));

	let stations = $derived(
		Object.entries(lightRailStationsConfig).filter(([, { name, tcName }]) => {
			if (!filterInput) return true;
			return (
				name.toLocaleLowerCase().includes(filterInput.toLocaleLowerCase()) ||
				tcName.toLocaleLowerCase().includes(filterInput.toLocaleLowerCase())
			);
		})
	);

	const onInput: FormEventHandler<HTMLInputElement> = (event) => {
		if (!event.currentTarget.value) return;

		const searchParams = new URLSearchParams($page.url.searchParams.toString());

		searchParams.set('q', event.currentTarget.value);

		goto(`?${searchParams.toString()}`, {
			keepFocus: true,
			noScroll: true,
			invalidateAll: true,
			replaceState: true
		});
	};
</script>

<svelte:head>
	<title>輕鐵</title>
</svelte:head>

<div class="grid gap-4 h-full grid-rows-[max-content_1fr]">
	<input
		type="search"
		class="border border-gray-200 rounded-md p-3 w-full"
		placeholder="搜尋站名"
		oninput={onInput}
		bind:value={filterInput}
	/>

	<ul class="grid gap-3 h-full overflow-y-auto pb-4 auto-rows-min">
		{#each stations as [stationId, { tcName }]}
			<li class="contents">
				<a
					href={`/lr/station/${stationId}`}
					class="border border-gray-200 rounded-md p-3 shadow-md"
				>
					{tcName}
				</a>
			</li>
		{/each}
	</ul>
</div>
