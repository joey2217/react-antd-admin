import axios from 'axios'
import { getToken } from '../utils/auth'
import { message } from 'antd'

const request = axios.create({
  baseURL: '/api',
  // withCredentials: true,
  // timeout: 5000
})

const HEADER_KEY = 'authorization'
const PREFIX = 'Bearer '

request.interceptors.request.use(
  (config) => {
    const token = getToken()
    if (token && config.headers) {
      config.headers[HEADER_KEY] = `${PREFIX}${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    handleError(error)
    // if (error.code==='403') {
    //   window.location.replace('/login');
    // }
    return Promise.reject(error)
  }
)

function handleError(error: any) {
  let msg = error.message || '请求失败'
  if (error.response) {
    // 请求成功发出且服务器也响应了状态码，但状态代码超出了 2xx 的范围
    console.log(error.response.data)
    console.log(error.response.status)
    console.log(error.response.headers)
  } else if (error.request) {
    // 请求已经成功发起，但没有收到响应
    // `error.request` 在浏览器中是 XMLHttpRequest 的实例，
    // 而在node.js中是 http.ClientRequest 的实例
    console.log(error.request)
  } else {
    // 发送请求时出了点问题
    console.log('Error', error.message)
  }
  console.error(error)
  message.error(msg)
}

export default request
