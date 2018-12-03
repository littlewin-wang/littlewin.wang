<template>
  <div class="gift">
    <div class="content">
      <div class="title">
        <div class="item">
          <h2>2</h2>
        </div>
        <div class="item picture">
          <img :alt="'Me'" :src="'/images/atu.jpg'"></a>
        </div>
        <div class="item">
          <h2>+</h2>
        </div>
        <div class="item">
          <h2>6</h2>
        </div>
      </div>
      <div class="sentence">
        <span>Happy birthday</span><i class="iconfont icon-love"></i><span>阿土姑娘</span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  head: {
    title: '礼物'
  },
  data () {
    return {
    }
  },
  methods: {
  },
  asyncData ({ params, error }) {
    if (params.name !== 'wangnr') {
      error({
        statusCode: 404,
        message: '你又没过生日，别瞎凑热闹~'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .gift {
    position: relative;
    padding: 40px 0;
    height: 800px;
    margin-bottom: 10px;
    background: no-repeat center/100% url('/images/background-wangnr.png');
    color: #fff;
    z-index: 1;
    .content {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      .title {
        margin: 30px 0;
        display: flex;
        height: 80px;
        justify-content: center;
        .item {
          margin: 0 10px;
          h2 {
            margin: 0;
            line-height: 80px;
            font-size: 100px;
            font-weight: 100;
          }
          img {
            display: inline-block;
            border-radius: 50%;
            border: 3px solid #999;
            width: 80px;
            height: 80px;
          }
        }
        .picture {
          flex: 0 0 80px;
        }
      }
      .sentence {
        display: flex;
        justify-content: center;
        height: 40px;
        line-height: 40px;
        span {
          font-size: 20px;
        }
        i {
          color: #f56667;
          margin: 0 10px;
          animation: blink 2s infinite linear;
        }
        @keyframes blink {
          0% {
            font-size: 20px
          }
          25% {
            font-size: 25px
          }
          50% {
            font-size: 30px
          }
          75% {
            font-size: 25px
          }
        }
      }

      @media screen and (max-width: 600px) {
        .title {
          .item {
            margin: 0 4px;
          }
        }

        .sentence {
          span {
            font-size: 14px;
          }
        }
      }
    }

    &:after {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: #555;
      opacity: 0.7;
      z-index: -1;
    }
  }
</style>
