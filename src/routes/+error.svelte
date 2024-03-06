<script>
	import { page } from '$app/stores';
</script>

<h1 class="h-full flex justify-center items-center">
	{#if $page.status === 404}
		{$page.status}: Life Not Found
	{:else}
		{$page.status}: {$page.error?.message}
	{/if}
</h1>
