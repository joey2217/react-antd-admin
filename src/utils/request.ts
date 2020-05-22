import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { message } from 'antd';
import { getToken } from "../utils/auth";

const request: AxiosInstance = axios.create({
  // baseURL,  
  // withCredentials: true,  
  // timeout: 5000  
})

const TOKEN_KEY = 'React-Admin-Request-Token-Key'

request.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = getToken()
  if (token) {
    config.headers[TOKEN_KEY] = token;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});


request.interceptors.response.use((response: AxiosResponse<any>) => {
  return response;
}, (error) => {
  console.error(error);
  message.error(error.message || 'Oops,出错了!');
  return Promise.reject(error);
});


export default request;