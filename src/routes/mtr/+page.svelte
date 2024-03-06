<script lang="ts">
	import { linesConfig } from '$lib/lines';

	const filteredLine = Object.entries(linesConfig);
</script>

<svelte:head>
	<title>MTR</title>
</svelte:head>

<main class="container max-w-80 mx-auto grid gap-4">
	<ul class="contents">
		{#each filteredLine as [line, { tcName, color }]}
			<li>
				<a
					class="p-3 border-l-8 border-[var(--line-color)] shadow-md rounded-md block"
					style={`--line-color: ${color}`}
					href={`/mtr/line/${line}`}>{tcName}</a
				>
			</li>
		{/each}
	</ul>
</main>
