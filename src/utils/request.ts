import axios from "axios";
import { message } from "antd";
import { getToken } from "../utils/auth";

const request = axios.create({
  // baseURL,
  // withCredentials: true,
  // timeout: 5000
});

const HEADER_KEY = "react-admin-request-token";

request.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers[HEADER_KEY] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error(error);
    message.error(error.message || "Oops,出错了!");
    // if (error.code==='403') {
    //   window.location.replace('/login');
    // }
    return Promise.reject(error);
  }
);

export default request;
