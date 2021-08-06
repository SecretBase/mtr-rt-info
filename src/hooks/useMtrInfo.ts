import { apiClient } from "../utils/apiClient";
import { useQuery } from "@sveltestack/svelte-query";
import type { UseQueryOptions } from "@sveltestack/svelte-query";

interface Params {
  line: string;
  station: string;
}

interface NextTrainDetails {
  seq: 1 | 2 | 3 | 4;
  dest: string;
  plat: number;
  time: string;
}

// https://opendata.mtr.com.hk/doc/Next_Train_DataDictionary.pdf
export interface MtrResponse {
  status: 1 | 0;
  message: string;
  ur: string;
  curr_time: string;
  sys_time: string;
  isdelay: string;
  data: Record<
    string,
    {
      curr_time: string;
      sys_time: string;
      UP: NextTrainDetails[];
      DOWN: NextTrainDetails[];
    }
  >;
}

const useMtrInfo = (
  params: Params,
  options: UseQueryOptions<MtrResponse> = {}
) =>
  useQuery(
    ["mtr", params],
    async () => {
      const response = await apiClient.get<MtrResponse>("/getSchedule.php", {
        params: {
          line: params.line,
          sta: params.station,
          lang: "TC",
        },
      });

      return response.data;
    },
    {
      refetchInterval: 10000,
      ...options,
    }
  );

export default useMtrInfo;
