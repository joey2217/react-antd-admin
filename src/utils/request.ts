import axios, { AxiosInstance } from 'axios'
import { message } from 'antd';

// const baseURL='https://mock-server-eight.now.sh/api/react-antd-admin'

const request: AxiosInstance = axios.create({
  // baseURL, // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

request.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  console.error(error);
  message.error(error.message);
  throw error;
});


export default request;