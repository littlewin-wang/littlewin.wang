/**
 * @file 笔记数据管理
 * @author littlewin(littlewin.wang@gmail.com)
 */

export const state = () => {
  return {
    fetching: false,
    data: []
  }
}

export const mutations = {
  GET_NOTES (state) {
    state.fetching = true
  },
  GET_NOTES_SUCCESS (state, action) {
    state.fetching = false
    state.data = action
  },
  GET_NOTES_FAILURE (state) {
    state.fetching = false
    state.data = []
  }
}
