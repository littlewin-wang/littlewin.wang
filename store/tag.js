/**
 * @file 分类数据管理
 * @author littlewin(littlewin.wang@gmail.com)
 */

export const state = () => {
  return {
    fetching: false,
    data: { tags: [] }
  }
}

export const mutations = {
  GET_LIST (state) {
    state.fetching = true
  },
  GET_LIST_FAILURE (state) {
    state.fetching = false
    state.data = { tags: [] }
  },
  GET_LIST_SUCCESS (state, action) {
    state.fetching = false
    state.data = action.data
  }
}
