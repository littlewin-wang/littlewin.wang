/**
 * @file 笔记数据管理
 * @author littlewin(littlewin.wang@gmail.com)
 */

export const state = () => {
  return {
    fetching: false,
    data: [],
    note: {
      fetching: false,
      data: {},
    },
    comments: {
      fetching: false,
      data: []
    }
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
  },
  GET_NOTE (state) {
    state.note.fetching = true
  },
  GET_NOTE_SUCCESS (state, action) {
    state.note.fetching = false
    state.note.data = action
  },
  GET_NOTE_FAILURE (state) {
    state.note.fetching = false
    state.note.data = {}
  },
  GET_NOTE_COMMENTS (state) {
    state.comments.fetching = true
  },
  GET_NOTE_COMMENTS_SUCCESS (state, action) {
    state.comments.etching = false
    state.comments.data = action
  },
  GET_NOTE_COMMENTS_FAILURE (state) {
    state.comments.etching = false
    state.comments.data = []
  }
}
