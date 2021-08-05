import axios from "axios";

export const lightRailApiClient = axios.create({
  baseURL: "https://rt.data.gov.hk/v1/transport/mtr/lrt",
});

export const mtrApiClient = axios.create({
  baseURL: "https://rt.data.gov.hk/v1/transport/mtr/getSchedule.php",
});
