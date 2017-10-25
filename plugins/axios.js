/**
 * @file 配置axios参数和拦截器，植入Vue
 * @author littlewin(littlewin.wang@gmail.com)
 */

import Vue from 'vue'
import axios from 'axios'

// mock service in remote
const service = axios.create({
  baseURL: 'https://api.littlewin.wang'
})

// http request 拦截器
service.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

// http response 拦截器
service.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.reject(error)
})

Vue.prototype.$http = axios
export default service
