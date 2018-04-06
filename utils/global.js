/**
 * @file 全局变量
 * @author littlewin(littlewin.wang@gmail.com)
 */

import Vue from 'vue'
import musicPlayer from '~/utils/musicPlayer'

export default new Vue({
  name: 'global',
  data () {
    return {
      music: {
        player: null,
        playerState: {
          seek: 0,
          index: 0,
          targetIndex: 0,
          volume: 0.4,
          wave: false,
          ready: false,
          muted: false,
          loading: false,
          playing: false,
          progress: 0
        },
        list: {
          fetching: false,
          data: null
        }
      }
    }
  },
  methods: {
    initPlayer () {
      musicPlayer(this.music)

      if (this.music.playerState.ready && this.music.player.play) {
        this.music.player.play()
      }
    },

    requestMusicList () {
      this.music.list.fetching = true
    },

    getMusicListFailure () {
      this.music.list.fetching = false
      this.music.list.data = null
    },

    getMusicListSuccess (action) {
      this.music.list.fetching = false
      this.music.list.data = action.data.playlist
    }
  }
})
