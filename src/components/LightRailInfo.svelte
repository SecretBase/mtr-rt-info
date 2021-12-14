<script lang="ts">
  import type { UseQueryStoreResult } from "@sveltestack/svelte-query";
  import useLightRailInfo from "../hooks/useLightRailInfo";
  import type { LightRailResponse } from "../hooks/useLightRailInfo";
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
  <button
    class={`bg-transparent border-0 p-0 star-button ${
      lightRailFavorite.includes(selectedStation) ? "text-yellow-300" : ""
    }`}
    on:click={onFavoriteClick}
  >
    {#if lightRailFavorite.includes(selectedStation)}<svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-star-fill"
        viewBox="0 0 16 16"
      >
        <path
          d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
        />
      </svg>
    {:else}<svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-star"
        viewBox="0 0 16 16"
      >
        <path
          d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
        />
      </svg>{/if}
  </button>
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
