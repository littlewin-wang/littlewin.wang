/**
 * @file 全局数据和异步方法的统一管理
 * @author littlewin(littlewin.wang@gmail.com)
 */

import Service from '~/plugins/axios'

export const actions = {
  // 获取文章列表
  loadArticles ({ commit }, params = { page: 1 }) {
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
