<script lang="ts">
	import { getDifferentInMinutesByTimeStamp, isArrivalTimeLessThenOneMinutes } from '$lib/eta';

	const { etaTime } = $props<{ etaTime: string }>();

	const eta = $derived(getDifferentInMinutesByTimeStamp(etaTime));
	const isLessThanOneMinute = $derived(isArrivalTimeLessThenOneMinutes(new Date(etaTime)));
</script>

{#if isLessThanOneMinute}
	<span class="text-red-700 animate-pulse">即將到達</span>
{:else}
	<span>{eta} 分鐘</span>
{/if}
