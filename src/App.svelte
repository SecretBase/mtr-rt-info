<script lang="ts">
  import { QueryClient, QueryClientProvider } from "@sveltestack/svelte-query";
  import LightRailInfo from "./components/LightRailInfo.svelte";
  import MtrInfo from "./components/MtrInfo.svelte";
  const queryClient = new QueryClient();
</script>

<QueryClientProvider client={queryClient}>
  <div class="flex flex-col md:flex-row p-2 gap-4">
    <div class="flex-1">
      <LightRailInfo />
    </div>
    <div class="flex-1">
      <MtrInfo />
    </div>
  </div>
</QueryClientProvider>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
