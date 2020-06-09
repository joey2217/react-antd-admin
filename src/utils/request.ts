import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse,AxiosError } from 'axios'
import { message } from 'antd';
import { getToken } from "../utils/auth";
import {IRequest} from '../models/type'

const request: AxiosInstance = axios.create({
  // baseURL,  
  // withCredentials: true,  
  // timeout: 5000  
})

const TOKEN_KEY = 'React-Admin-Request-Token'

request.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = getToken()
  if (token) {
    config.headers[TOKEN_KEY] = token;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});


request.interceptors.response.use((response: AxiosResponse<IRequest>) => {
  return response;
}, (error:AxiosError<IRequest>) => {
  console.error(error);
  message.error(error.message || 'Oops,出错了!');
  // if (error.code==='403') {
  //   window.location.replace('/login');
  // }
  return Promise.reject(error);
});


export default request;