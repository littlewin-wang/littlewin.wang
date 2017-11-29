/**
 * @file Google 统计分析
 * @author littlewin(littlewin.wang@gmail.com)
 */

import Service from '~/plugins/axios'
import Cookies from 'js-cookie'
const uuidv4 = require('uuid/v4')

/* eslint-disable */
// 只在生产模式加载
// if (process.env.NODE_ENV === 'production') {
if (1) {
  // Generate Client information
  let clientInfo = (window, document, navigator, location, route) => {
    let screen = window.screen;
    let encode = encodeURIComponent;
    let cid = Cookies.get('_cid')

    if (!cid) {
      cid = uuidv4()
      Cookies.set('_cid', cid)
    }

    let data = [
      'v=1',
      't=pageview',
      'cid=' + cid,
      'tid=' + 'UA-108992108-1',
      'dt=' + encode(route.fullPath),
      'dr=' + encode(document.referrer),
      'dp=' + encode(route.fullPath),
      'ul=' + (navigator.language || navigator.browserLanguage),
      'sd=' + screen.colorDepth + '-bit',
      'sr=' + screen.width + 'x' + screen.height,
      'z=' + (+new Date)
    ]

    return '?' + data.join('&')
  }

  // 应用挂载后
  window.onNuxtReady((app) => {
    Service.post('/ga', {
      query: clientInfo(window, document, navigator, location, app.$route)
    })
    // 页面路由切换
    app.$nuxt.$on('routeChanged', (to, from) => {
      // 告诉后端统计分析服务 增加新的页面访问统计
      Service.post('/ga', {
        query: clientInfo(window, document, navigator, location, to)
      })
    })
  })
}
