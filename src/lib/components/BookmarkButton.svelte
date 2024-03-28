<script lang="ts">
	import { bookmarkStore } from '$lib/bookmarkStore.svelte';
	import { cn } from '$lib/cn';
	import type { lightRailStationsConfig } from '$lib/lightRightStations';
	import type { LINE } from '$lib/lines';
	import type { STATION } from '$lib/stations';

	const {
		active,
		type,
		line,
		station,
		class: className
	} = $props<
		| {
				active: boolean;
				type: 'mtr';
				line: LINE;
				station: STATION;
				class?: string;
		  }
		| {
				active: boolean;
				type: 'lightRail';
				station: keyof typeof lightRailStationsConfig;
				class?: string;
		  }
	>();
</script>

<button
	type="button"
	class={cn('h-5 w-3.5', className, active && 'text-amber-400')}
	onclick={(e) => {
		e.preventDefault();

		const toggle = active ? bookmarkStore.removeBookmark : bookmarkStore.setBookmark;

		if (type === 'mtr') {
			toggle({ type: 'mtr', line, station });
			return;
		}

		if (type === 'lightRail') {
			toggle({ type: 'lightRail', station });
			return;
		}
	}}
>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor">
		<path
			d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"
		/>
	</svg>
	<span class="sr-only">{active ? 'Delete from bookmark' : 'Add to bookmark'}</span>
</button>
