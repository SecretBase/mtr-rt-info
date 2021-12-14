<script lang="ts">
  import { QueryClient, QueryClientProvider } from "@sveltestack/svelte-query";
  import LightRailInfo from "./components/LightRailInfo.svelte";
  import MtrInfo from "./components/MtrInfo.svelte";
  import FavoriteList from "./components/FavoriteList.svelte";
  import { Tabs, Tab, TabList, TabPanel } from "./components/Tabs/tabs.js";
  const queryClient = new QueryClient();

  let activeTabKey = "favorite";

  let lightRailStationId = 1;

  const onLightRailClick = (stationId: number) => {
    lightRailStationId = stationId;
    activeTabKey = "lightRail";
  };

  const onTabChange = (key: string) => {
    activeTabKey = key;
  };
</script>

<QueryClientProvider client={queryClient}>
  <div class="p-2">
    <Tabs key={activeTabKey} {onTabChange}>
      <TabList>
        <Tab tabKey="favorite">Favorite</Tab>
        <Tab tabKey="lightRail">Light Rail</Tab>
        <Tab tabKey="mtr">MTR</Tab>
      </TabList>
      <TabPanel key="favorite"><FavoriteList {onLightRailClick} /></TabPanel>
      <TabPanel key="lightRail">
        <LightRailInfo stationId={lightRailStationId} />
      </TabPanel>
      <TabPanel key="mtr">
        <MtrInfo />
      </TabPanel>
    </Tabs>
  </div>
</QueryClientProvider>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
