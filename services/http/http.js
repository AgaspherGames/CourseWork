import axios from "axios";
import localStorageService from "../localStorageService";

export const url = "https://4d63-212-13-134-111.ngrok-free.app/api";

const headers = {
  "ngrok-skip-browser-warning": true,
  "X-Tunnel-Skip-AntiPhishing-Page": true,
  "X-Tunnel-Authorization": false,
};

export const http = axios.create({
  baseURL: url,
  timeout: 1000,
  headers,
});
export const httpAuth = axios.create({
  baseURL: url,
  timeout: 1000,
  headers,
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
