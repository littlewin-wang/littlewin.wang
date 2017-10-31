/**
 * @file Google 统计分析
 * @author littlewin(littlewin.wang@gmail.com)
 */

/* eslint-disable */
// 只在生产模式加载
if (process.env.NODE_ENV === 'production') {
  // Google 统计分析脚本
  (function(i, s, o, g, r, a, m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)}, i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a, m)
  })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga')

  // 当前页的访问统计
  ga('create', 'UA-108992108-1', 'auto')
  ga('send', 'pageview')

  // 应用挂载后
  window.onNuxtReady((app) => {
    // 页面路由切换
    app.$nuxt.$on('routeChanged', (to, from) => {
      // 告诉 Google 统计分析服务 增加新的页面访问统计
      ga('set', 'page', to.fullPath)
      ga('send', 'pageview')
    })
  })
}
