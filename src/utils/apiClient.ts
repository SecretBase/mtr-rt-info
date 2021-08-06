import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://rt.data.gov.hk/v1/transport/mtr",
});
