<template>
  <div class="music">
    <div class="cd">
      <div class="img">
        <img :class="playerState.playing ? 'active' : ''" :src="currentSongPic" :alt="currentSong ? currentSong.name : 'No current song'">
        <div class="inner"></div>
      </div>
      <h3 class="artist">{{currentSong ? currentSong.artists[0].name : 'No current artist'}}</h3>
      <h5 class="title">{{currentSong ? currentSong.name : 'No current song'}}</h5>
    </div>
    <div class="state">
      <span>{{formatTime(playerState.seek)}}</span>
      <div class="wave">
        <div class="line" :class="playerState.playing? 'active' : ''" v-for="i in 40" :key="i" :style="{marginLeft: i !== 1 ? '2px' : '0', animationDelay: `${i * 0.2}s`}"></div>
      </div>
      <span>{{formatTime(playerState.duration)}}</span>
    </div>

    <div class="ctrl">
      <i class="iconfont icon-prev" @click="handlePrev"></i>
      <i class="iconfont" :class="playerState.playing ? 'icon-pause' : 'icon-play'" @click="handlePlay"></i>
      <i class="iconfont icon-next" @click="handleNext"></i>
    </div>
  </div>
</template>

<script>
import global from '~/utils/global'

export default {
  components: {
  },
  head: {
    title: '音乐'
  },
  data () {
    return {
    }
  },
  computed: {
    player () {
      return global.music.player
    },
    playerState () {
      return global.music.playerState
    },
    currentSong () {
      return global.currentSong
    },
    currentSongPic () {
      if (this.currentSong) {
        const picUrl = this.currentSong.album.picUrl
        return picUrl ? picUrl.replace('http://', 'https://littlewin.wang/proxy/') + '?param=600y600' : 'https://static.littlewin.wang/blog/music-bg.jpeg'
      } else {
        return 'https://static.littlewin.wang/blog/music-bg.jpeg'
      }
    },
    currentSongProgress () {
      return this.playerState.progress || 0
    }
  },
  methods: {
    // 上一曲
    handlePrev () {
      this.player.prev()
    },
    // 音乐播放控制
    handlePlay () {
      this.player.toggle()
    },
    // 下一曲
    handleNext () {
      this.player.next()
    },
    // mute控制
    handleMute () {
      this.player.mute()
    },
    formatTime (seconds) {
      return [
        parseInt(seconds / 60 % 60),
        parseInt(seconds % 60)
      ]
        .join(':')
        .replace(/\b(\d)\b/g, '0$1')
    }
  }
}
</script>

<style lang="scss" scoped>
.music {
  width: 320px;
  margin: 2rem auto;
  .cd {
    text-align: center;
    .img {
      position: relative;
      img {
        border-radius: 50%;
        &.active {
          animation: rotate 12s infinite linear;
        }
      }
      .inner {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 20%;
        height: 20%;
        border-radius: 50%;
        background: #eee;
      }
    }
    .artist {

    }
    .title {
      margin: .5rem 0;
      color: #888;
      font-weight: 400;
    }
  }
  .state {
    margin: 3rem 0;
    display: flex;
    justify-content: center;
    height: 20px;
    line-height: 20px;

    span {
      font-size: 13px;
      color: #bbb;
    }

    .wave {
      margin: 0 2rem;
      .line {
        display: inline-block;
        width: 2px;
        height: 2px;
        vertical-align: middle;
        background: #bbb;
      }

      .active {
        animation: wave 1.6s infinite ease;
      }
    }
  }
  .ctrl {
    margin: 2rem 0;
    display: flex;
    justify-content: center;
    height: 80px;
    line-height: 80px;
    i {
      cursor: pointer;
    }
    .icon-play, .icon-pause {
      margin: 0 1rem;
      font-size: 60px;
      color: #888;
    }
    .icon-prev, .icon-next {
      font-size: 36px;
      color: #bbb;
      &:hover {
        color: #888;
      }
    }
  }
}
</style>
