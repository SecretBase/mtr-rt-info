<script lang="ts">
  import { getContext } from "svelte";
  import { TABS } from "./Tabs.svelte";

  export let key: string;
  const { registerPanel, selectedPanel } = getContext(TABS);

  registerPanel(key);
</script>

{#if $selectedPanel === key}
  <slot />
{/if}
