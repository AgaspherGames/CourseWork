import axios from "axios";
import localStorageService from "../localStorageService";

export const url = "https://puppypaw.azurewebsites.net/api";

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
