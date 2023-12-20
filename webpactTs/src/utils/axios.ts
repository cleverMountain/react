import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

const http: AxiosInstance = axios.create({
  baseURL: 'https://api.example.com', // 替换为你的 API 地址
  timeout: 5000, // 请求超时时间
});

// 请求拦截器
http.interceptors.request.use(
  (config) => {
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