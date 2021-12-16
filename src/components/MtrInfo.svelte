<script lang="ts">
  import { DateTime } from "luxon";
  import type { UseQueryStoreResult } from "@sveltestack/svelte-query";
  import useMtrInfo from "../hooks/useMtrInfo";
  import FavoriteStarButton from "./FavoriteStarButton.svelte";
  import type { MtrResponse } from "../hooks/useMtrInfo";
  import { favoriteStore } from "../store/index";

  import data from "../data/mtr.json";

  const lines = data.lines;

  const stationsNameMap = new Map(
    // @ts-expect-error
    data.lines
      .map((line) =>
        line.stations.map((station) => [station.value, station.name])
      )
      .flat()
  );

  $: selectedLine = "TML";
  $: selectedStation = "MEF";
  $: line = lines.find((line) => line.value === selectedLine);
  $: stations = line?.stations;
  $: favoriteActive = favoriteStore.containMTR({
    line: selectedLine,
    station: selectedStation,
  });

  function onSelectLine(e) {
    e.preventDefault();
    selectedLine = e.target.value;
    selectedLine;

    selectedStation = data.lines.find((line) => line.value === selectedLine)
      ?.stations[0].value;
  }
  function onSelectStation(e) {
    e.preventDefault();
    selectedStation = e.target.value;
  }

  let queryResults: UseQueryStoreResult<MtrResponse>;

  $: {
    queryResults = useMtrInfo(
      {
        line: selectedLine,
        station: selectedStation,
      },
      {
        enabled: Boolean(selectedStation && selectedLine),
      }
    );
  }

  $: routes = Object.values($queryResults?.data?.data ?? {})[0];

  $: UP = routes?.UP;
  $: DOWN = routes?.DOWN;

  const onFavoriteClick: svelte.JSX.MouseEventHandler<HTMLButtonElement> = (
    e
  ) => {
    e.preventDefault();
    if (
      favoriteStore.containMTR({ line: selectedLine, station: selectedStation })
    ) {
      favoriteStore.removeMTR({ line: selectedLine, station: selectedStation });
    } else {
      favoriteStore.addMTR({ line: selectedLine, station: selectedStation });
    }

    favoriteActive = favoriteStore.containMTR({
      line: selectedLine,
      station: selectedStation,
    });
  };
</script>

<h3 class="mb-4 text-2xl">MTR</h3>
<div class="flex gap-4">
  <select
    class="flex-1 border border-gray-400 p-1.5 rounded"
    name="lineId"
    id="select-lines"
    on:change={onSelectLine}
  >
    {#each lines as line (line.value)}
      <option value={line.value} selected={selectedLine === line.value}
        >{line.name}</option
      >
    {/each}
  </select>

  <select
    class="flex-1 border border-gray-400 p-1.5 rounded"
    name="lineId"
    id="select-lines"
    on:change={onSelectStation}
  >
    {#each stations as station (station.value)}
      <option value={station.value} selected={selectedStation === station.value}
        >{station.name}</option
      >
    {/each}
  </select>

  <FavoriteStarButton {onFavoriteClick} active={favoriteActive} />
</div>

<div class="justify-content-center">
  <div class="d-flex justify-content-center">
    {#if $queryResults.isLoading}Loading ...{/if}
  </div>
</div>

{#if $queryResults.data}
  <table class="mb-4 w-full table-fixed">
    <caption class="text-md py-2 text-gray-400 text-left">UP</caption>
    <tbody>
      {#each UP as train}
        <tr class="border-b">
          <td class="w-1/5 py-2">{train.plat}號月台</td>
          <td class="py-2">{stationsNameMap.get(train.dest)}</td>
          <td class="w-1/5 text-right py-2"
            >{Math.max(
              0,
              Math.floor(
                DateTime.fromFormat(train.time, "yyyy-MM-dd HH:mm:ss")
                  .diff(DateTime.now(), ["minutes"])
                  .toObject().minutes
              )
            )} 分鐘</td
          >
        </tr>
      {/each}
    </tbody>
  </table>
  <table class="w-full table-fixed">
    <caption class="text-md py-2 text-gray-400 text-left">DOWN</caption>
    <tbody>
      {#each DOWN as train}
        <tr class="border-b">
          <td class="w-1/5 py-2">{train.plat}號月台</td>
          <td class="py-2">{stationsNameMap.get(train.dest)}</td>
          <td class="w-1/5 text-right py-2"
            >{Math.max(
              0,
              Math.floor(
                DateTime.fromFormat(train.time, "yyyy-MM-dd HH:mm:ss")
                  .diff(DateTime.now(), ["minutes"])
                  .toObject().minutes
              )
            )} 分鐘</td
          >
        </tr>
      {/each}
    </tbody>
  </table>
{/if}
