/**
 * @file article数据管理
 * @author littlewin(littlewin.wang@gmail.com)
 */

export const state = () => {
  return {
    list: {
      fetching: false,
      data: {
        total: 0,
        limit: 0,
        page: 0,
        pages: 0,
        articles: []
      }
    },
    hot: {
      fetching: false,
      data: {}
    },
    detail: {
      fetching: false,
      data: {}
    }
  }
}

export const mutations = {
  GET_LIST (state) {
    state.list.fetching = true
  },
  GET_LIST_FAILURE (state) {
    state.list.fetching = false
  },
  GET_LIST_SUCCESS (state, action) {
    state.list.fetching = false

    // replace articles already in store and add those didn't
    action.data.articles.forEach(a => {
      let index = state.list.data.articles.findIndex(article => article._id === a._id)

      if (index !== -1) {
        state.list.data.articles[index] = a
      } else {
        state.list.data.articles.push(a)
      }
    })

    // replace params already in store after init
    state.list.data.total = state.list.data.total || action.data.total
    state.list.data.limit = state.list.data.limit || action.data.limit
    state.list.data.page = state.list.data.page || action.data.page
    state.list.data.pages = state.list.data.pages || action.data.pages
  },
  ADD_LIST_SUCCESS (state, action) {
    state.list.fetching = false
    Array.prototype.push.apply(state.list.data.articles, action.data.articles)
    state.list.data.page = action.data.page
  },

  GET_HOT_LIST (state) {
    state.hot.fetching = true
  },
  GET_HOT_LIST_FAILURE (state) {
    state.hot.fetching = false
  },
  GET_HOT_LIST_SUCCESS (state, action) {
    state.hot.fetching = false
    state.hot.data = action.data
  },

  GET_DETAIL (state) {
    state.detail.fetching = true
  },
  GET_DETAIL_FAILURE (state) {
    state.detail.fetching = false
    state.detail.data = {}
  },
  GET_DETAIL_SUCCESS (state, action) {
    state.detail.fetching = false
    state.detail.data = action.data
  },

  LIKE_ARTICLE (state, action) {
    let article = state.detail.data
    if (Object.is(article.id, action.id)) {
      state.detail.data.meta.likes++
    }
  }
}
