<template>
  <div class="about">
    <div class="basic container">
      <div class="content">
        <h5 class="title">个人基本</h5>
        <p>Littlewin是一个
          <a target="_blank" rel="external nofollow" href="http://littlewin.wang">独立博客</a> 的Owner
          <br> Littlewin目前热情集中在与
          <a target="_blank" rel="external nofollow" href="http://littlewin.wang/article/4">大目标</a> 携手并进和在
          <a target="_blank" rel="external nofollow" href="https://github.com/littlewin-wang">Github
          </a> 上积极垒砖
          <br>Littlewin目前是小厂前端开发师一枚，积极上进中
          <br>
          <span>
            Find Me In
            <a rel="external nofollow" href="mailto:littlewin.wang@gmail.com">
              <i style="font-size: 14px; padding:0 .2rem" class="iconfont icon-mail"></i>
            </a>
            <a target="_blank" rel="external nofollow" href="https://github.com/littlewin-wang">
              <i style="font-size: 14px; padding:0 .2rem" class="iconfont icon-github"></i>
            </a>
            <a target="_blank" rel="external nofollow" href="https://weibo.com/fredinweibo">
              <i style="font-size: 14px; padding:0 .2rem" class="iconfont icon-weibo"></i>
            </a>
            <a target="_blank" rel="external nofollow" href="https://www.v2ex.com/member/littlewin">
              <i style="font-size: 14px; padding:0 .2rem" class="iconfont icon-v2ex"></i>
            </a>
            <a target="_blank" rel="external nofollow" href="https://twitter.com/littlewin_wang">
              <i style="font-size: 14px; padding:0 .2rem" class="iconfont icon-twitter"></i>
            </a>
          </span>
        </p>
      </div>
    </div>

    <div class="experience container">
      <div class="content">
        <h5 class="title">个人特点</h5>
        <p>Littlewin看重总结
          <a target="_blank" rel="external nofollow" href="http://localhost:3000/article/8">2016年终总结</a> ，
          <a target="_blank" rel="external nofollow" href="http://localhost:3000/article/1">To be 27</a> 和立FLAG<br>Littlewin有时会写诗
          <a target="_blank" rel="external nofollow" href="http://localhost:3000/article/11">小任性大男孩</a> ，
          <a target="_blank" rel="external nofollow" href="http://localhost:3000/article/4">Hello, 大目标</a><br>Littlewin向往单纯和善美，相信
          <strong>生活会孕育每一个为之付出了努力的可能</strong><br>Littlewin热情不张扬，相信
          <strong>生活也需要近乎无耻的自信</strong>
        </p>
      </div>
    </div>

    <div class="hobby container">
      <div class="content">
        <h5 class="title">个人爱好</h5>
        <p>Littlewin Like making cool things and making cool things with cool guys<br>Littlewin是多特死忠，期待有日去威斯特法伦坐在南看台看球<br>Littlewin经常参加足球和篮球运动<br>Littlewin也喜欢玩游戏：FIFA18、NBA2K17</p>
      </div>
    </div>

    <div class="statement container">
      <div class="content">
        <h5 class="title">一些声明</h5>
        <p>本站所有文章均为本人原创，仅代表个人在撰文时刻的观点和想法<br>内容转载请保留署名
          <strong>Littlewin</strong>或指向该原文(
          <a target="_blank" rel="external nofollow" href="http://littlewin.wang">http://littlewin.wang</a>)的链接，请勿用于商业用途</p>
      </div>
    </div>

  </div>
  </div>
</template>

<script>
import Grid from '~/components/rotator/grid.vue'

export default {
  components: {
    Grid
  },
  head: {
    title: '关于'
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
.about {
  .grid-container {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 2rem;
  }

  .container {
    width: 100%;
    margin-bottom: 2rem;
    background-color: hsla(0, 0%, 100%, .6);
    .content {
      padding: 1rem 2rem;
      h5 {
        position: relative;
        border-bottom: 1px solid #eee;
        margin-bottom: 1rem;
        &:after {
          content: "#";
          position: absolute;
          right: 0;
        }
      }
      p {
        padding-left: 2rem;
        border-left: 4px solid #6cf;
        a {
          color: #6cf;
          &:hover {
            color: #09c;
          }
          .iconfont {
            margin-right: .5rem;
            color: #999;
            &:hover {
              color: #666;
            }
          }
        }
      }
    }
  }
}
</style>
