/**
 * @file 公告数据管理
 * @author littlewin(littlewin.wang@gmail.com)
 */

export const state = () => {
  return {
    fetching: false,
    data: []
  }
}

export const mutations = {
  REQUEST_LIST (state) {
    state.fetching = true
  },
  GET_LIST_FAILURE (state) {
    state.fetching = false
    state.data = []
  },
  GET_LIST_SUCCESS (state, action) {
    state.fetching = false
    state.data = action.data.messages
  }
}
