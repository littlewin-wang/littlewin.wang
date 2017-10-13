/**
 * @file 全站数据管理
 * @author littlewin(littlewin.wang@gmail.com)
 */

export const state = () => {
  return {
    // ua
    userAgent: '',

    // 全局配置
    site: {
      fetching: false,
      data: {
        meta: {
          likes: 0
        }
      }
    }
  }
}

export const mutations = {
  // 获取全站信息
  GET_SITE (state) {
    state.site.fetching = true
  },
  GET_SITE_SUCCESS (state, action) {
    state.site.fetching = false
    state.site.data = action.data.site
  },
  GET_SITE_FAILURE (state) {
    state.site.fetching = false
  },

  // 喜欢本站
  LIKE_SITE (state) {
    state.site.data.meta.likes++
  }
}
