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
    },
    latest: {
      fetching: false,
      comments: []
    }
  }
}

export const mutations = {
  GET_LATEST (state) {
    state.latest.fetching = true
  },
  GET_LATEST_SUCCESS (state, action) {
    state.latest.fetching = false
    state.latest.comments = action.data.comments
  },
  GET_LATEST_FAILURE (state) {
    state.latest.fetching = false
  },

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
  },
  CLEAR_LIST (state) {
    state.data = {
      total: 0,
      limit: 0,
      page: 0,
      pages: 0,
      comments: []
    }
  },

  // 发布评论
  POST_ITEM (state) {
    state.posting = true
  },
  POST_ITEM_SUCCESS (state, action) {
    state.posting = false
    state.data.total += 1
    state.data.comments.push(action.data.result)
  },
  POST_ITEM_FAILURE (state) {
    state.posting = false
  },

  // 喜欢某条评论
  LIKE_ITEM (state, action) {
    const comment = state.data.comments.find(comment => comment.id === action.id)
    if (comment) {
      comment.likes++
    }
  }
}
