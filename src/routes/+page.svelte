<script lang="ts">
	import { linesConfig } from '$lib/lines';

	const { data } = $props();

	let filterLine = $state(data.q);
	const filteredLine = $derived(
		Object.entries(linesConfig).filter(([, { name }]) => {
			if (!filterLine) return true;
			return name.toLowerCase().includes(filterLine.toLowerCase());
		})
	);
</script>

<main class="container max-w-80 mx-auto grid gap-4">
	<input
		type="text"
		bind:value={filterLine}
		class="border border-gray-400 rounded-md p-3 block w-full box-border"
		placeholder="Search"
	/>

	<ul class="contents">
		{#each filteredLine as [line, { name, color }]}
			<li>
				<a
					class="p-3 border-l-8 border-[var(--line-color)] shadow-md rounded-md block"
					style={`--line-color: ${color}`}
					href={`/line/${line}`}>{name}</a
				>
			</li>
		{/each}
	</ul>
</main>
