<script lang="ts">
  import { getContext } from "svelte";
  import { TABS } from "./Tabs.svelte";

  export let tabKey: string;

  const { registerTab, selectTab, selectedTab } = getContext(TABS);

  registerTab(tabKey);
</script>

<button
  class={`border-b-2 p-2 border-gray-200 flex-1 ${
    $selectedTab === tabKey ? "border-blue-600" : ""
  }`}
  on:click={() => selectTab(tabKey)}
>
  <slot />
</button>
