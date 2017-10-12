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
  // 喜欢本站
  LIKE_SITE (state) {
    state.site.data.meta.likes++
  }
}
