<script>
	import '../app.css';
	import { QueryClientProvider } from '@tanstack/svelte-query';

	const { data } = $props();
</script>

<QueryClientProvider client={data.queryClient}>
	<slot />
</QueryClientProvider>
