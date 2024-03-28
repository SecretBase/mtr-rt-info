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
	<div
		class="grid grid-cols-[1fr_calc(375px-2rem)_1fr] grid-rows-[minmax(0,1fr)_calc(40px+env(safe-area-inset-bottom,20px))] h-dvh"
	>
		<main class="col-start-2 pt-4 overflow-hidden">
			<slot />
		</main>
		<nav
			class="col-start-1 col-span-3 grid-cols-subgrid grid bg-amber-300 pb-[env(safe-area-inset-bottom,20px)] dark:bg-dark-300"
		>
			<ul class="col-start-2 grid grid-cols-3 text-center">
				<li class="contents">
					<a
						class={cn(
							'flex items-center justify-center w-full h-full dark:hover:text-black dark:active:text-black hover:bg-amber-400 active:bg-amber-500',
							$page.url.pathname.startsWith('/mtr') && 'bg-amber-500 dark:text-black'
						)}
						href="/mtr"
					>
						港鐵
					</a>
				</li>
				<li class="contents">
					<a
						class={cn(
							'flex items-center justify-center w-full h-full dark:hover:text-black dark:active:text-black hover:bg-amber-400 active:bg-amber-500',
							$page.url.pathname.startsWith('/lr') && 'bg-amber-500 dark:text-black'
						)}
						href="/lr"
					>
						輕鐵
					</a>
				</li>
				<li class="contents">
					<a
						class={cn(
							'flex items-center justify-center w-full h-full dark:hover:text-black dark:active:text-black hover:bg-amber-400 active:bg-amber-500',
							$page.url.pathname.startsWith('/bookmarks') && 'bg-amber-500 dark:text-black'
						)}
						href="/bookmarks"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 384 512"
							fill="currentColor"
							class="w-3"
						>
							<path
								d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"
							/>
						</svg>
						<span class="sr-only">Bookmarks</span>
					</a>
				</li>
			</ul>
		</nav>
	</div>
</QueryClientProvider>
