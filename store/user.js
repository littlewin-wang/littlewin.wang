/**
 * @file 用户数据管理
 * @author littlewin(littlewin.wang@gmail.com)
 */

export const state = () => {
  return {
    fetching: false,
    data: {}
  }
}

export const mutations = {
  GET_USER (state) {
    state.fetching = true
  },
  GET_USER_SUCCESS (state, action) {
    state.fetching = false
    state.data = action.data
  },
  GET_USER_FAILURE (state) {
    state.fetching = false
    state.data = {}
  }
}
