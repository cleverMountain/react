import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import qs from "qs";
const http: AxiosInstance = axios.create({
  baseURL: 'http://192.168.0.222:8777', // 替换为你的 API 地址
  timeout: 5000, // 请求超时时间
});

// 设置axios为form-data
http.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
http.defaults.headers.get["Content-Type"] =
  "application/x-www-form-urlencoded";
http.defaults.transformRequest = function (data) {
  return qs.stringify(data);
};

// 请求拦截器
http.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token") || '';
    config.headers["Authorization"] = token
    // 在请求发送之前可以进行一些处理，比如添加请求头等
    return config;
  },
  (error) => {
    // 处理请求错误
    return Promise.reject(error);
  }
);

// 响应拦截器
http.interceptors.response.use(
  (response: AxiosResponse) => {
    // 在响应成功后可以进行一些处理，比如解析数据等
    return response.data;
  },
  (error: AxiosError) => {
    // 处理响应错误
    return Promise.reject(error);
  }
);

export default http