import axios from "axios";
import localStorageService from "../localStorageService";

export const url = "https://c683-2-75-73-231.ngrok-free.app/api"

export const http = axios.create({
  baseURL: url,
  timeout: 1000,
  headers: {
    "ngrok-skip-browser-warning": true
  }
});
export const httpAuth = axios.create({
  baseURL: url,
  timeout: 1000,
});
httpAuth.interceptors.request.use(async function (config) { 
  config.headers.Authorization =
    "Bearer " + await localStorageService.getItem("token");
  return config;
});
