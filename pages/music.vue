<template>
  <div class="music">
    <div class="cd">
      <div class="img">
        <img class="active" src="https://littlewin.wang/proxy/p1.music.126.net/piJxh4DzlpPowp1Csj6z7Q==/109951163219136146.jpg?param=600y600" alt="">
        <div class="inner"></div>
      </div>
      <h3 class="artist">Daft Punk</h3>
      <h5 class="title">Instant crush</h5>
    </div>
    <div class="state">
      <span>0:13</span>
      <div class="wave">
        <div class="line active" v-for="i in 40" :key="i" :style="{marginLeft: i !== 1 ? '2px' : '0', animationDelay: `${i * 0.2}s`}"></div>
      </div>
      <span>4:13</span>
    </div>

    <div class="ctrl">
      <i class="iconfont icon-prev"></i>
      <i class="iconfont icon-play"></i>
      <i class="iconfont icon-next"></i>
    </div>
  </div>
</template>

<script>
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
  methods: {
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
    .icon-play, .icon-pause {
      margin: 0 1rem;
      font-size: 60px;
      color: #888;
    }
    .icon-prev, .icon-next {
      font-size: 36px;
      color: #bbb;
    }
  }
}

@keyframes wave{
  0% { height: 4px; }
  30% { height: 8px; }
  50% { height: 18px; }
  70% { height: 8px; }
  100% { height: 4px; }
}
</style>
