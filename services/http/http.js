import axios from "axios";
import localStorageService from "../localStorageService";

const url = "https://9c42-212-13-134-111.ngrok-free.app/api"

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
httpAuth.interceptors.request.use(function (config) { 
  config.headers.Authorization =
    "Bearer " + localStorageService.getItem("TOKEN");
  return config;
});
httpAuth.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status == 401) {
        localStorageService.removeItem("TOKEN");
        window.location.replace("/403");
      }
    }
    return Promise.reject(error);
  }
);