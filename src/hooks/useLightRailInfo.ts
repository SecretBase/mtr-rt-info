import { apiClient } from "../utils/apiClient";
import { useQuery } from "@sveltestack/svelte-query";

interface Params {
  stationId: number;
}

export interface LightRailResponse {
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

const useLightRailInfo = (params: Params) => {
  return useQuery(
    ["light-rail", params],
    async () => {
      const response = await apiClient.get<LightRailResponse>(
        "/lrt/getSchedule",
        {
          params: {
            station_id: params.stationId,
          },
        }
      );

      return response.data;
    },
    {
      refetchInterval: 10000,
    }
  );
};

export default useLightRailInfo;
