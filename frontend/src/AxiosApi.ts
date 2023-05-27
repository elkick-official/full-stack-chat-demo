import axios, { HeadersDefaults } from "axios";
import { config } from "./config";

export const axiosApi = axios.create({
  baseURL: config.API_URL,
});

axiosApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error?.response?.status === 404) {
      console.log("/404");
    } else if (error?.response?.status === 500) {
      console.log("/500");
    } else if (error?.response?.status === 401) {
      console.log("/401");
    } else {
      console.log("/other-errors.");
    }
    return Promise.reject(error);
  }
);
