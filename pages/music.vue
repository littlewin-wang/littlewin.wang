<template>
  <div class="music">
    <div class="cd">
      <div class="img">
        <img :class="playerState.playing ? 'active' : ''" :src="currentSongPic" :alt="currentSong ? currentSong.name : 'No current song'">
        <div class="inner"></div>
        <div class="left">
          <div class="left-circle" :style="{transform: `rotate(${currentSongProgress && currentSongProgress > 50 ? (-135 + currentSongProgress / 100 * 360 - 180) : -135}deg)`}"></div>
        </div>
        <div class="right">
          <div class="right-circle" :style="{transform: `rotate(${currentSongProgress && currentSongProgress > 50 ? 225 : (45 + currentSongProgress / 100 * 360)}deg)`}"></div>
        </div>
      </div>
      <h3 class="artist" v-if="currentSong && currentSong.artists && currentSong.artists.length">
        <a v-for="(artist, index) in currentSong.artists" :key="artist.id" target="_blank" rel="external nofollow" :href="artist.id ? `http://music.163.com/#/artist?id=${artist.id}` : ''">{{ index ? ' / ' + artist.name : artist.name }}</a>
      </h3>
      <h5 class="title">
        <a target="_blank" rel="external nofollow" :href="currentSong ? `http://music.163.com/#/song?id=${currentSong.id}` : ''">{{ currentSong ? currentSong.name : '' }}</a>
      </h5>
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
  head () {
    const currentSong = this.currentSong
    return {
      title: currentSong ? currentSong.name : '音乐'
    }
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
      width: 100%;
      height: 320px;
      position: relative;
      img {
        border-radius: 50%;
        border: 6px solid rgba(187,187,187,.8);
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
      .left {
        position: absolute;
        top: 0;
        left: 0;
        width: 50%;
        height: 100%;
        overflow: hidden;
        .left-circle {
          position: absolute;
          top: 0;
          left: 0;
          width: 200%;
          height: 100%;
          border-radius: 160px;
          border: 6px solid transparent;
          border-top: 6px solid #ddd;
          border-right: 6px solid #ddd;
          transform: rotate(-135deg)
        }
      }
      .right {
        position: absolute;
        top: 0;
        left: 50%;
        width: 50%;
        height: 100%;
        overflow: hidden;
        .right-circle {
          position: absolute;
          top: 0;
          right: 0;
          width: 200%;
          height: 100%;
          border-radius: 160px;
          border: 6px solid transparent;
          border-top: 6px solid #ddd;
          border-right: 6px solid #ddd;
        }
      }
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
