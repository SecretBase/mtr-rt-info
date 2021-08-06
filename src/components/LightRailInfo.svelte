<script lang="ts">
  import type { UseQueryStoreResult } from "@sveltestack/svelte-query";
  import { Table, Input, Spinner, Row, Col } from "sveltestrap";
  import useLightRailInfo from "../hooks/useLightRailInfo";

  // https://opendata.mtr.com.hk/doc/LR_Next_Train_DataDictionary_v1.0.pdf
  interface LightRailResponse {
    platform_list: {
      platform_id: number;
      route_list: {
        arrival_departure: "A" | "D";
        dest_ch: string;
        dest_en: string;
        route_no: string;
        stop: number;
        time_ch: string;
        time_en: string;
      }[];
    }[];
  }

  const LIGHT_RAIL_FAVORITE_KEY = "favorite-light-rail";
  let localStorageFavorite = localStorage.getItem(LIGHT_RAIL_FAVORITE_KEY);

  $: selectedStation =
    localStorageFavorite !== null ? parseInt(localStorageFavorite, 10) : 1;

  const stations = [
    { value: 1, name: "Tuen Mun Ferry Pier 屯門碼頭" },
    { value: 10, name: "Melody Garden 美樂" },
    { value: 15, name: "Butterfly 蝴蝶" },
    { value: 20, name: "Light Rail Depot 輕鐵車廠" },
    { value: 30, name: "Lung Mun 龍門" },
    { value: 40, name: "Tsing Shan Tsuen 青山村" },
    { value: 50, name: "Tsing Wun 青雲" },
    { value: 60, name: "Kin On 建安" },
    { value: 70, name: "Ho Tin 河田" },
    { value: 75, name: "Choy Yee Bridge 蔡意橋" },
    { value: 80, name: "Affluence 澤豐" },
    { value: 90, name: "Tuen Mun Hospital 屯門醫院" },
    { value: 100, name: "Siu Hong 兆康" },
    { value: 110, name: "Kei Lun 麒麟" },
    { value: 120, name: "Ching Chung 青松" },
    { value: 130, name: "Kin Sang 建生" },
    { value: 140, name: "Tin King 田景" },
    { value: 150, name: "Leung King 良景" },
    { value: 160, name: "San Wai 新圍" },
    { value: 170, name: "Shek Pai 石排" },
    { value: 180, name: "Shan King (North) 山景 (北)" },
    { value: 190, name: "Shan King (South) 山景 (南)" },
    { value: 200, name: "Ming Kum 鳴琴" },
    { value: 212, name: "Tai Hing (North) 大興 (北)" },
    { value: 220, name: "Tai Hing (South) 大興 (南)" },
    { value: 230, name: "Ngan Wai 銀圍" },
    { value: 240, name: "Siu Hei 兆禧" },
    { value: 250, name: "Tuen Mun Swimming Pool 屯門泳池" },
    { value: 260, name: "Goodview Garden 豐景園" },
    { value: 265, name: "Siu Lun 兆麟" },
    { value: 270, name: "On Ting 安定" },
    { value: 275, name: "Yau Oi 友愛" },
    { value: 280, name: "Town Centre 市中心" },
    { value: 295, name: "Tuen Mun 屯門" },
    { value: 300, name: "Pui To 杯渡" },
    { value: 310, name: "Hoh Fuk Tong 何福堂" },
    { value: 320, name: "San Hui 新墟" },
    { value: 330, name: "Prime View 景峰" },
    { value: 340, name: "Fung Tei 鳳地" },
    { value: 350, name: "Lam Tei 藍地" },
    { value: 360, name: "Nai Wai 泥圍" },
    { value: 370, name: "Chung Uk Tsuen 鍾屋村" },
    { value: 380, name: "Hung Shui Kiu 洪水橋" },
    { value: 390, name: "Tong Fong Tsuen 塘坊村" },
    { value: 400, name: "Ping Shan 屏山" },
    { value: 425, name: "Hang Mei Tsuen 坑尾村" },
    { value: 430, name: "Tin Shui Wai 天水圍" },
    { value: 435, name: "Tin Tsz 天慈" },
    { value: 445, name: "Tin Yiu 天耀" },
    { value: 448, name: "Locwood 樂湖" },
    { value: 450, name: "Tin Wu 天湖" },
    { value: 455, name: "Ginza 銀座" },
    { value: 460, name: "Tin Shui 天瑞" },
    { value: 468, name: "Chung Fu 頌富" },
    { value: 480, name: "Tin Fu 天富" },
    { value: 490, name: "Chestwood 翠湖" },
    { value: 500, name: "Tin Wing 天榮" },
    { value: 510, name: "Tin Yuet 天悅" },
    { value: 520, name: "Tin Sau 天秀" },
    { value: 530, name: "Wetland Park 濕地公園" },
    { value: 540, name: "Tin Heng 天恒" },
    { value: 550, name: "Tin Yat 天逸" },
    { value: 560, name: "Shui Pin Wai 水邊圍" },
    { value: 570, name: "Fung Nin Road 豐年路" },
    { value: 580, name: "Hong Lok Road 康樂路" },
    { value: 590, name: "Tai Tong Road 大棠路" },
    { value: 600, name: "Yuen Long 元朗" },
    { value: 920, name: "Sam Shing 三聖" },
  ];

  let queryResults: UseQueryStoreResult<LightRailResponse>;

  $: {
    queryResults = useLightRailInfo({
      stationId: selectedStation,
    });
  }

  function onSelect(e: Event & { target: HTMLSelectElement }) {
    e.preventDefault();
    selectedStation = parseInt(e.target.value, 10);
  }

  function onFavoriteClick(e: Event) {
    e.preventDefault();

    if (localStorage.getItem(LIGHT_RAIL_FAVORITE_KEY)) {
      localStorage.removeItem(LIGHT_RAIL_FAVORITE_KEY);
      localStorageFavorite = null;
    } else {
      localStorage.setItem(LIGHT_RAIL_FAVORITE_KEY, String(selectedStation));
      localStorageFavorite = String(selectedStation);
    }
  }
</script>

<Row>
  <Col xs={10}>
    <Input
      type="select"
      name="stationId"
      id="select-station"
      on:change={onSelect}
    >
      {#each stations as station (station.value)}
        <option
          value={station.value}
          selected={selectedStation === station.value}>{station.name}</option
        >
      {/each}
    </Input>
  </Col>
  <Col xs={2} class="d-flex justify-content-center align-items-center">
    <button
      class={`${"star-button"} ${
        localStorageFavorite &&
        selectedStation === parseInt(localStorageFavorite, 10)
          ? "active"
          : ""
      }`}
      on:click={onFavoriteClick}
    >
      {#if localStorageFavorite && selectedStation === parseInt(localStorageFavorite, 10)}<svg
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
    </button></Col
  >
</Row>
<Row class="justify-content-center">
  <Col xs={12} class="d-flex justify-content-center">
    {#if $queryResults.isLoading}<Spinner color="primary" />{/if}
  </Col>
</Row>

{#if $queryResults.data}
  <Row>
    <Col>
      {#each $queryResults.data.platform_list as platform}
        <Table class={$$props.class}>
          <caption class="caption-top">{platform.platform_id}號月台</caption>
          <tbody>
            {#each platform.route_list as route}
              <tr>
                <td width="10%">{route.route_no}</td>
                <td>{route.dest_ch}</td>
                <td width="30%" class="text-end">{route.time_ch}</td>
              </tr>
            {/each}
          </tbody>
        </Table>
      {/each}
    </Col>
  </Row>
{/if}

<style>
  table {
    table-layout: fixed;
  }

  .star-button {
    background-color: transparent;
    border: none;
    padding: 0;
  }

  .star-button.active {
    color: #ffc107;
  }
</style>
