<script lang="ts">
  import { Table, Input, Spinner, Row, Col, FormGroup } from "sveltestrap";
  import { DateTime } from "luxon";
  import type { UseQueryStoreResult } from "@sveltestack/svelte-query";
  import useMtrInfo from "../hooks/useMtrInfo";
  import type { MtrResponse } from "../hooks/useMtrInfo";

  import data from "../data/mtr.json";

  const lines = data.lines;

  const linesNameMap = new Map(
    data.lines.map((line) => [line.value, line.name])
  );
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

  function onSelectLine(e: Event & { target: HTMLSelectElement }) {
    e.preventDefault();
    selectedLine = e.target.value;
    selectedLine;

    selectedStation = data.lines.find((line) => line.value === selectedLine)
      ?.stations[0].value;
  }

  function onSelectStation(e: Event & { target: HTMLSelectElement }) {
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
</script>

<h3>MTR</h3>
<Row>
  <Col md={6}>
    <FormGroup>
      <Input
        type="select"
        name="lineId"
        id="select-lines"
        on:change={onSelectLine}
      >
        {#each lines as line (line.value)}
          <option value={line.value} selected={selectedLine === line.value}
            >{line.name}</option
          >
        {/each}
      </Input>
    </FormGroup>
  </Col>
  <Col md={6}>
    <FormGroup>
      <Input
        type="select"
        name="lineId"
        id="select-lines"
        on:change={onSelectStation}
      >
        {#each stations as station (station.value)}
          <option
            value={station.value}
            selected={selectedStation === station.value}>{station.name}</option
          >
        {/each}
      </Input>
    </FormGroup>
  </Col>
</Row>

<Row class="justify-content-center">
  <Col xs={12} class="d-flex justify-content-center">
    {#if $queryResults.isLoading}<Spinner color="primary" />{/if}
  </Col>
</Row>

{#if $queryResults.data}
  <Row>
    <Col>
      <Table>
        <caption class="caption-top">UP</caption>
        <tbody>
          {#each UP as train}
            <tr>
              <td width="20%">{train.plat}號月台</td>
              <td>{stationsNameMap.get(train.dest)}</td>
              <td width="20%" class="text-end"
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
      </Table>
      <Table>
        <caption class="caption-top">DOWN</caption>
        <tbody>
          {#each DOWN as train}
            <tr>
              <td width="20%">{train.plat}號月台</td>
              <td>{stationsNameMap.get(train.dest)}</td>
              <td width="20%" class="text-end"
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
      </Table>
    </Col>
  </Row>
{/if}

<style>
  table {
    table-layout: fixed;
  }
</style>
