<script lang="ts">
  import { favoriteStore } from "../store/index";
  import lightRailData from "../data/lightRail.json";
  import MTRData from "../data/mtr.json";

  const lightRailStations = lightRailData.stations;
  const mtrStationsLines = MTRData.lines;
  const favoriteLightRail = favoriteStore.getLightRail();
  const favoriteMTR = favoriteStore.getMTR();

  let lightRailFavorties = lightRailStations.filter(({ value }) =>
    favoriteLightRail.includes(value)
  );

  const mtrStations = Object.fromEntries(
    mtrStationsLines
      .map((line) => {
        return line.stations.map((station) => [station.value, station.name]);
      })
      .flat()
  );

  export let onLightRailClick: (stationId: number) => void;
  export let onMTRClick: ({
    line,
    station,
  }: {
    line: string;
    station: string;
  }) => void;
</script>

<h2>Light Rail</h2>
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

<h2>MTR</h2>

<ul class="mb-4">
  {#each favoriteMTR as mtr}
    <li class="mb-4">
      <button
        class="w-full border p-2"
        on:click={() => onMTRClick({ line: mtr[0], station: mtr[1] })}
      >
        {mtrStations[mtr[1]]}
      </button>
    </li>
  {/each}
</ul>
