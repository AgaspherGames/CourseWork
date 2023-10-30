import axios from "axios";
import localStorageService from "../localStorageService";

export const url = "https://2c27-2-75-76-1.ngrok-free.app/api";

export const http = axios.create({
  baseURL: url,
  timeout: 1000,
  headers: {
    "ngrok-skip-browser-warning": true,
  },
});
export const httpAuth = axios.create({
  baseURL: url,
  timeout: 1000,
});

httpAuth.interceptors.request.use(async function (config) {
  config.headers.Authorization =
    "Bearer " + (await localStorageService.getItem("token"));
  return config;
});

http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error.message);
  }
);
httpAuth.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error.message);
  }
);
