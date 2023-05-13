/*
 * @Descripttion: 
 * @Author: Rui Lin
 * @Date: 2023-04-15 18:26:12
 */
import axios from 'axios'

import { Notification } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

const token = localStorage.getItem("authToken")

const instance = axios.create({
  baseURL: '', //实际跨域地址写在vue.config.js即可
  timeout: 10000,
  headers: {
    'authToken': token
  }
})

// 请求拦截器
instance.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截器
instance.interceptors.response.use(response => {
  // TODO:成功码（注册成功也提醒一下？）
  let code = response.data.code;
  switch (code) {
    case 1000:
      return response.data
    case "success":
      return response.data
    default:
      Notification({
        message: response.data.msg || response.data.message,
        offset: 115,
        type: 'warning',
        duration: 2000
      })
  }
},
  error => {
    let code = error.code
    switch (code) {
      default:
        //FIX: 消息弹出位置修改（不同屏幕适配失败？）
        Notification({
          message: "网络错误",
          offset: 115,
          type: 'warning',
          duration: 2000
        })
    }    
    return Promise.reject(error)
  })

export default instance
