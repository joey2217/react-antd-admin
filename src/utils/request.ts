import axios, { AxiosInstance } from 'axios'
import { message } from 'antd';

const request: AxiosInstance = axios.create({
  // baseURL,  
  // withCredentials: true,  
  timeout: 5000  
})

request.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  console.error(error);
  message.error(error.message);
  throw error;
});


export default request;