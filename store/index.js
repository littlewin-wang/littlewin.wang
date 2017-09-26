/**
 * @file 全局数据和异步方法的统一管理
 * @author littlewin(littlewin.wang@gmail.com)
 */

import Service from '~/plugins/axios'

export const actions = {

  nuxtServerInit (store, { params, route, isServer, req }) {
    const initAppData = [
      // 配置数据
      store.dispatch('getAdmin')
    ]
    return Promise.all(initAppData)
  },

  // 获取博主信息
  getAdmin ({ commit }) {
    commit('user/GET_USER')
    return Service.get('/user')
      .then(res => {
        const success = !!res.status && res.data && res.data.success === true
        if (success) commit('user/GET_USER_SUCCESS', res.data)
        if (!success) commit('user/GET_USER_FALIURE')
      }, err => {
        commit('user/GET_USER_FALIURE', err)
      })
  },

  // 获取文章列表
  getArticles ({ commit }, params = { page: 1 }) {
    commit('article/GET_LIST')
    return Service.get('/article', { params })
      .then(res => {
        const success = !!res.status && res.data && res.data.success === true
        const isAdd = params.page && params.page > 1
        const commitName = `article/${isAdd ? 'ADD' : 'GET'}_LIST_SUCCESS`
        if (success) commit(commitName, res.data)
        if (!success) commit('article/GET_LIST_FAILURE')
      })
      .catch(err => {
        commit('article/GET_LIST_FAILURE', err)
      })
  }
}
