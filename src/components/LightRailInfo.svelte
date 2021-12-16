<script lang="ts">
  import type { UseQueryStoreResult } from "@sveltestack/svelte-query";
  import useLightRailInfo from "../hooks/useLightRailInfo";
  import type { LightRailResponse } from "../hooks/useLightRailInfo";
  import FavoriteStarButton from "../components/FavoriteStarButton.svelte";
  import { favoriteStore } from "../store";
  import data from "../data/lightRail.json";

  export let stationId = 1;

  let lightRailFavorite = favoriteStore.getLightRail();
  let firstFavorite = stationId ?? lightRailFavorite[0] ?? stationId;
  $: selectedStation = firstFavorite ? parseInt(firstFavorite, 10) : 1;

  const stations = data.stations;

  let queryResults: UseQueryStoreResult<LightRailResponse>;

  $: {
    queryResults = useLightRailInfo({
      stationId: selectedStation,
    });
  }

  function onSelect(e) {
    e.preventDefault();
    selectedStation = parseInt(e.target.value, 10);
  }

  function onFavoriteClick(e: Event) {
    e.preventDefault();

    const stationIds = favoriteStore.getLightRail();

    if (stationIds.includes(selectedStation)) {
      favoriteStore.removeLightRail(selectedStation);
    } else {
      favoriteStore.addLightRail(selectedStation);
    }

    lightRailFavorite = favoriteStore.getLightRail();
  }
</script>

<h3 class="mb-4 text-2xl">Light Rail</h3>
<div class="flex gap-2 mb-4">
  <select
    class="border p-1.5 border-gray-400 rounded flex-1"
    name="stationId"
    id="select-station"
    on:change={onSelect}
  >
    {#each stations as station (station.value)}
      <option value={station.value} selected={selectedStation === station.value}
        >{station.name}</option
      >
    {/each}
  </select>
  <FavoriteStarButton
    active={lightRailFavorite.includes(selectedStation)}
    {onFavoriteClick}
  />
</div>
<div class="justify-content-center">
  <div class="d-flex justify-content-center">
    {#if $queryResults.isLoading} Loading ... {/if}
  </div>
</div>

{#if $queryResults.data}
  {#each $queryResults.data.platform_list as platform}
    <p class="text-md py-2 text-gray-400">{platform.platform_id}號月台</p>
    <table class="w-full mb-8 table-fixed">
      <tbody>
        {#if platform.route_list}
          {#each platform.route_list as route}
            <tr class="border-b">
              <td class="py-2 w-2/12">{route.route_no}</td>
              <td class="py-2">{route.dest_ch}</td>
              <td class="py-2 text-right w-4/12">{route.time_ch}</td>
            </tr>
          {/each}
        {/if}
      </tbody>
    </table>
  {/each}
{/if}
