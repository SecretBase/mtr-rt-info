<script lang="ts">
  import { favoriteStore } from "../store/index";
  import lightRailData from "../data/lightRail.json";
  import MTRData from "../data/mtr.json";
  import TrashIButton from "./TrashIButton.svelte";

  const lightRailStations = lightRailData.stations;
  const mtrStationsLines = MTRData.lines;
  let favoriteLightRail = favoriteStore.getLightRail();
  let favoriteMTR = favoriteStore.getMTR();

  $: lightRailFavorites = lightRailStations.filter(({ value }) =>
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

<h2 class="mb-2">Light Rail</h2>
<ul class="mb-4">
  {#each lightRailFavorites as lightRail}
    <li class="mb-4 flex items-center text-center">
      <div class="flex-1">
        <button
          class="w-full border p-2"
          on:click={() => onLightRailClick(lightRail.value)}
        >
          {lightRail.name}
        </button>
      </div>
      <div class="p-2">
        <TrashIButton
          class="w-4"
          on:click={() => {
            favoriteStore.removeLightRail(lightRail.value);
            favoriteLightRail = favoriteStore.getLightRail();
          }}
        />
      </div>
    </li>
  {/each}
</ul>

<h2 class="mb-2">MTR</h2>

<ul class="mb-4">
  {#each favoriteMTR as mtr}
    <li class="mb-4 flex items-center text-center">
      <div class="flex-1">
        <button
          class="w-full border p-2"
          on:click={() => onMTRClick({ line: mtr[0], station: mtr[1] })}
        >
          {mtrStations[mtr[1]]}
        </button>
      </div>
      <div class="p-2">
        <TrashIButton
          class="w-4"
          on:click={() => {
            favoriteStore.removeMTR({ line: mtr[0], station: mtr[1] });
            favoriteMTR = favoriteStore.getMTR();
          }}
        />
      </div>
    </li>
  {/each}
</ul>
