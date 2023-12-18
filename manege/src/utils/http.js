
import axios from "axios";
import qs from "qs";


// 设置axios为form-data
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
axios.defaults.headers.get["Content-Type"] =
  "application/x-www-form-urlencoded";

const token = localStorage.getItem("token");

// if (token) {

// }
axios.defaults.headers["Authorization"] = token;

axios.defaults.transformRequest = function (data) {
  return qs.stringify(data);
};
axios.defaults.timeout = 60000;
axios.defaults.baseURL = window.baseURL
// 添加请求拦截器
axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
// 添加响应拦截
axios.interceptors.response.use(
  function (response) {
    if (response.config.disableResponseInterceptor) {
      return response
    } else {
      return response.data;
    }
  },
  function (error) {
    const a = error.toString();
    if (a.substring(a.length - 3) === "401") {
    
      //   router.push("/");
    } else {
      return Promise.reject(error);
    }
  }
);
const uploadAxios = axios.create({
  timeout: 6000,
});

uploadAxios.defaults.transformRequest = function (data) {
  return data;
};
uploadAxios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

uploadAxios.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    const a = error.toString();
    if (a.substring(a.length - 3) === "401") {
    
      //   router.push("/");
    } else {
      return Promise.reject(error);
    }
  }
);
const downloadAxios = axios.create({
  timeout: 6000,
});
downloadAxios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
downloadAxios.defaults.transformRequest = function (data) {
  return qs.stringify(data);
};
export { uploadAxios, downloadAxios }

export default axios;
