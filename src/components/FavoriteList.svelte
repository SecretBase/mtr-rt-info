<script lang="ts">
  import { favoriteStore } from "../store/index";
  import lightRailData from "../data/lightRail.json";

  const lightRailStations = lightRailData.stations;
  const favoriteLightRail = favoriteStore.getLightRail();

  let lightRailFavorties = lightRailStations.filter(({ value }) =>
    favoriteLightRail.includes(value)
  );

  export let onLightRailClick = (stationId: number) => {};
</script>

<h1>Light Rail</h1>
<ul class="mb-4">
  {#each lightRailFavorties as lightRail}
    <li class="mb-4">
      <button
        class="w-full border p-2"
        on:click={() => onLightRailClick(lightRail.value)}
      >
        {lightRail.name}
      </button>
    </li>
  {/each}
</ul>
