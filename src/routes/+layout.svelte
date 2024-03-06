<script>
	import { cn } from '$lib/cn';
	import '../app.css';
	import { QueryClientProvider } from '@tanstack/svelte-query';
	import { page } from '$app/stores';
	const { data } = $props();

	import { onNavigate } from '$app/navigation';

	onNavigate((navigation) => {
		// @ts-expect-error do not have this type for now
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			// @ts-expect-error do not have this type for now
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<QueryClientProvider client={data.queryClient}>
	<div class="grid grid-cols-[1fr_calc(375px-2rem)_1fr] grid-rows-1 h-dvh">
		<main class="col-start-2 pt-4 overflow-hidden">
			<slot />
		</main>
		<nav class="col-start-1 col-span-3 grid-cols-subgrid grid bg-amber-300 h-10">
			<ul class="col-start-2 grid grid-cols-2 text-center">
				<li class="contents">
					<a
						class={cn(
							'flex items-center justify-center w-full h-full hover:bg-amber-400 active:bg-amber-500',
							$page.url.pathname.startsWith('/mtr') && 'bg-amber-500'
						)}
						href="/mtr"
					>
						港鐵
					</a>
				</li>
				<li class="contents">
					<a
						class={cn(
							'flex items-center justify-center w-full h-full hover:bg-amber-400 active:bg-amber-500',
							$page.url.pathname.startsWith('/lr') && 'bg-amber-500'
						)}
						href="/lr"
					>
						輕鐵
					</a>
				</li>
			</ul>
		</nav>
	</div>
</QueryClientProvider>
