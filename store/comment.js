/**
 * @file 评论数据管理
 * @author littlewin(littlewin.wang@gmail.com)
 */

export const state = () => {
  return {
    fetching: false,
    posting: false,
    data: {
      total: 0,
      limit: 0,
      page: 0,
      pages: 0,
      comments: []
    }
  }
}

export const mutations = {
  GET_LIST (state) {
    state.fetching = true
  },
  GET_LIST_SUCCESS (state, action) {
    state.fetching = false
    state.data = action.data
  },
  GET_LIST_FAILURE (state) {
    state.fetching = false
    state.data = {
      total: 0,
      limit: 0,
      page: 0,
      pages: 0,
      comments: []
    }
  }
}
