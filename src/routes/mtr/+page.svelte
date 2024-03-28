<script lang="ts">
	import { linesConfig } from '$lib/lines';

	const filteredLine = Object.entries(linesConfig);
</script>

<svelte:head>
	<title>MTR</title>
</svelte:head>

<div class="grid gap-4 h-full overflow-y-auto pb-4 auto-rows-min">
	<ul class="contents">
		{#each filteredLine as [line, { tcName, color }]}
			<li>
				<a
					class="p-3 border-l-8 border-[var(--line-color)] shadow-md rounded-md block border-y border-y-gray-200 border-r border-r-gray-200 dark:border-y-gray-600 dark:border-r-gray-600 dark:bg-dark-200"
					style={`--line-color: ${color}`}
					href={`/mtr/line/${line}`}>{tcName}</a
				>
			</li>
		{/each}
	</ul>
</div>
