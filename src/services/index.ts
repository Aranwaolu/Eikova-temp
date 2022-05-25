import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { getUserFromLocal } from "../utils";

const conf: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_BASE_URL,
  // timeout: 100000,
};

const request: AxiosInstance = axios.create(conf);

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  if (!config.headers) {
    config.headers = {};
  }
  config.headers["Authorization"] = `Bearer ${getUserFromLocal().token}`;
  return config;
};

request.interceptors.request.use(onRequest);

export default request;
