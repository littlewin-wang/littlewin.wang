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
    state.list.data = action.data
  },
  ADD_LIST_SUCCESS (state, action) {
    state.list.fetching = false
    Array.prototype.push.apply(state.list.data.articles, action.data.articles)
    state.list.data.page = action.data.page
  }
}
