/**
 * @file 项目数据管理
 * @author littlewin(littlewin.wang@gmail.com)
 */

export const state = () => {
  return {
    fetching: false,
    data: []
  }
}

export const mutations = {
  GET_PROJECTS (state) {
    state.fetching = true
  },
  GET_PROJECTS_SUCCESS (state, action) {
    state.fetching = false
    const newProjects = action.data.projects
      .filter(rep => (rep.stargazers_count > 3))
      .map(rep => {
        return {
          html_url: rep.html_url,
          name: rep.name || ' ',
          fork: rep.fork,
          forks: rep.forks,
          is_private: rep.private,
          forks_count: rep.forks_count,
          description: rep.description || ' ',
          open_issues_count: rep.open_issues_count,
          stargazers_count: rep.stargazers_count,
          created_at: rep.created_at,
          language: rep.language
        }
      })
    state.data = newProjects
  },
  GET_PROJECTS_FAILURE (state) {
    state.fetching = false
    state.data = []
  }
}
