// https://opendata.mtr.com.hk/doc/LR_Next_Train_DataDictionary_v1.0.pdf
export default interface LightRailResponse {
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
