<script context="module">
  export const TABS = {};
</script>

<script lang="ts">
  import { setContext, onDestroy } from "svelte";
  import { writable } from "svelte/store";
  export let onTabChange = (key: string) => {};
  export let key = null;

  const selectedTab = writable(key);
  const selectedPanel = writable(key);

  $: {
    selectedPanel.set(key);
    selectedTab.set(key);
  }

  setContext(TABS, {
    registerTab: (key) => {
      selectedTab.update((current) => current || key);
    },

    registerPanel: (key) => {
      selectedPanel.update((current) => current || key);
    },

    selectTab: (key) => {
      selectedTab.set(key);
      selectedPanel.set(key);
      onTabChange?.(key);
    },

    selectedTab,
    selectedPanel,
  });
</script>

<div class="tabs">
  <slot />
</div>
