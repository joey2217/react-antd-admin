import axios, { AxiosInstance } from 'axios'
import { message } from 'antd';

const request: AxiosInstance = axios.create({
  // baseURL: baseURL, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  // timeout: 5000 // request timeout
})

request.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  console.log(error);
  message.error(error.toString());
  return Promise.reject(error);
});

export default request;