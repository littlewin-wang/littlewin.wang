/**
 * @file 全局数据和异步方法的统一管理
 * @author littlewin(littlewin.wang@gmail.com)
 */

import { Service, Notes } from '~/plugins/axios'
import global from '~/utils/global'

export const actions = {

  nuxtServerInit (store, { params, route, isServer, req }) {
    const initAppData = [
      // 初始化获取博主/站点/分类/标签等信息
      store.dispatch('getAdmin'),
      store.dispatch('getSite'),
      store.dispatch('getMessage'),
      store.dispatch('getCategories'),
      store.dispatch('getTags'),
      // 初始化热门文章/最近回复
      store.dispatch('getHotArticles'),
      store.dispatch('getLatestComments')
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

  // 获取全站信息
  getSite ({ commit }) {
    commit('site/GET_SITE')
    return Service.get('/site')
      .then(res => {
        const success = !!res.status && res.data && res.data.success === true
        if (success) commit('site/GET_SITE_SUCCESS', res.data)
        if (!success) commit('site/GET_SITE_FALIURE')
      }, err => {
        commit('site/GET_SITE_FALIURE', err)
      })
  },

  // 获取全站信息
  getMessage ({ commit }) {
    commit('message/REQUEST_LIST')
    return Service.get('/message')
      .then(res => {
        const success = !!res.status && res.data && res.data.success === true
        if (success) commit('message/GET_LIST_SUCCESS', res.data)
        if (!success) commit('message/GET_LIST_FAILURE')
      }, err => {
        commit('message/GET_LIST_FAILURE', err)
      })
  },

  // 获取分类信息
  getCategories ({ commit }, params = { per_page: 100 }) {
    commit('category/GET_LIST')
    return Service.get('/category', { params })
      .then(res => {
        const success = !!res.status && res.data && res.data.success === true
        if (success) commit('category/GET_LIST_SUCCESS', res.data)
        if (!success) commit('category/GET_LIST_FAILURE')
      })
      .catch(err => {
        commit('category/GET_LIST_FAILURE', err)
      })
  },

  // 获取标签信息
  getTags ({ commit }, params = { per_page: 100 }) {
    commit('tag/GET_LIST')
    return Service.get('/tag', { params })
      .then(res => {
        const success = !!res.status && res.data && res.data.success === true
        if (success) commit('tag/GET_LIST_SUCCESS', res.data)
        if (!success) commit('tag/GET_LIST_FAILURE')
      })
      .catch(err => {
        commit('tag/GET_LIST_FAILURE', err)
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
  },

  // 获取热门文章列表
  getHotArticles ({ commit }) {
    commit('article/GET_HOT_LIST')
    return Service.get('/article', { params: { hot: 1, per_page: 5 } })
      .then(res => {
        const success = !!res.status && res.data && res.data.success === true
        if (success) commit('article/GET_HOT_LIST_SUCCESS', res.data)
        if (!success) commit('article/GET_HOT_LIST_FAILURE')
      })
      .catch(err => {
        commit('article/GET_HOT_LIST_FAILURE', err)
      })
  },

  // 获取文章具体内容
  getArticleDetail ({ commit }, params = {}) {
    commit('article/GET_DETAIL')
    return Service.get(`/article/${params.id}`)
      .then(res => {
        const success = !!res.status && res.data && res.data.success === true
        if (success) commit('article/GET_DETAIL_SUCCESS', res.data)
        if (!success) commit('article/GET_DETAIL_FAILURE')
        return Promise.resolve(res.data)
      })
      .catch(err => {
        commit('article/GET_DETAIL_FAILURE', err)
        return Promise.reject(err)
      })
  },

  // 获取最近回复
  getLatestComments ({ commit }) {
    commit('comment/GET_LATEST')
    return Service.get('/comment', { params: { sort: -1, per_page: 5 } }).then(res => {
      const success = !!res.status && res.data && res.data.success === true
      if (success) commit('comment/GET_LATEST_SUCCESS', res.data)
      if (!success) commit('comment/GET_LATEST_FAILURE')
    }, err => {
      commit('comment/GET_LATEST_FAILURE', err)
    })
  },

  // 根据post-id获取评论列表
  loadCommentsByPostId ({ commit }, params) {
    params.sort = params.sort || -1
    params.page = params.page || 1
    params.per_page = params.per_page || 40

    commit('comment/GET_LIST')
    return Service.get('/comment', { params }).then(res => {
      const success = !!res.status && res.data && res.data.success === true
      if (success) {
        // if (Object.is(params.sort, -1)) res.data.data.comments.reverse()
        commit('comment/GET_LIST_SUCCESS', res.data)
      }
      if (!success) commit('comment/GET_LIST_FAILURE')
    }, err => {
      commit('comment/GET_LIST_FAILURE', err)
    })
  },

  // 发布评论
  postComment ({ commit }, comment) {
    commit('comment/POST_ITEM')
    return Service.post('/comment', comment)
      .then(res => {
        const success = !!res.status && res.data && res.data.success === true
        if (success) {
          commit('comment/POST_ITEM_SUCCESS', res.data)
          return Promise.resolve(res.data)
        } else {
          commit('comment/POST_ITEM_FAILURE')
          return Promise.reject(res.data)
        }
      }, err => {
        commit('comment/POST_ITEM_FAILURE', err)
        return Promise.reject(err)
      })
  },

  // 喜欢某个页面或主站 || 为某条回复点赞
  addLike ({ commit }, like) {
    return Service.post('/like', like)
      .then(res => {
        const success = !!res.status && res.data && res.data.success === true
        if (success) {
          let mutation
          switch (like.type) {
            case 1:
              mutation = 'comment/LIKE_ITEM'
              break
            case 2:
              mutation = Object.is(like.id, 0) ? 'site/LIKE_SITE' : 'article/LIKE_ARTICLE'
              break
            default:
              break
          }
          commit(mutation, like)
          return Promise.resolve(res.data)
        } else {
          return Promise.reject(res.data)
        }
      }, err => {
        return Promise.reject(err)
      })
  },

  // 页面宽度设置
  getWidth ({ commit }, width) {
    commit('site/GET_WIDTH', width)
  },

  // 获取github repos
  getProjects ({ commit, state }) {
    // 如果数据已存在，则直接返回Promise成功，并返回数据
    if (state.project.data.length) {
      return Promise.resolve(state.project.data)
    }
    // 不存在则请求新数据
    commit('project/GET_PROJECTS')
    return Service.get(`/github`)
      .then(res => {
        const success = !!res.status && res.data && res.data.success === true
        if (success) commit('project/GET_PROJECTS_SUCCESS', res.data)
        if (!success) commit('project/GET_PROJECTS_FAILURE')
      }, err => {
        commit('project/GET_PROJECTS_FAILURE', err)
      })
  },

  // 获取notes
  getNotes ({ commit }) {
    commit('note/GET_NOTES')
    return Notes.get(`/issues`)
      .then(res => {
        const success = !!res.status && res.data
        if (success) commit('note/GET_NOTES_SUCCESS', res.data)
        if (!success) commit('note/GET_NOTES_FAILURE')
      }, err => {
        commit('note/GET_NOTES_FAILURE', err)
      })
  },

  // 获取具体note内容
  getNote ({ commit }, id) {
    commit('note/GET_NOTE')
    return Notes.get(`/issues/${id}`)
      .then(res => {
        const success = !!res.status && res.data
        if (success) commit('note/GET_NOTE_SUCCESS', res.data)
        if (!success) commit('note/GET_NOTE_FAILURE')
      }, err => {
        commit('note/GET_NOTE_FAILURE', err)
      })
  },

  // 获取具体note评论
  getNoteComments ({ commit }, id) {
    commit('note/GET_NOTE_COMMENTS')
    return Notes.get(`/issues/${id}/comments`)
      .then(res => {
        const success = !!res.status && res.data
        if (success) commit('note/GET_NOTE_COMMENTS_SUCCESS', res.data)
        if (!success) commit('note/GET_NOTE_COMMENTS_FAILURE')
      }, err => {
        commit('note/GET_NOTE_COMMENTS_FAILURE', err)
      })
  },

  // 获取歌曲列表
  getPlayerList ({ commit }) {
    global.requestMusicList()

    return Service.get('/music/list/2174766006')
      .then(res => {
        const success = !!res.status && res.data
        if (success) {
          global.getMusicListSuccess(res.data)
          global.initPlayer()
        }
        if (!success) global.getMusicListFailure()
      }, err => {
        global.getMusicListFailure(err)
      })
  }
}
