<template>
  <div class="about">
    <div class="basic container white">
      <div class="content">
        <h5 class="title">基本</h5>
        <p>Littlewin是一个
          <a target="_blank" rel="external nofollow" href="https://littlewin.wang">独立博客</a> 的Owner
          <br> Littlewin目前是小厂前端开发师一枚，积极上进中
          <br> Littlewin目前热情集中在与
          <a target="_blank" rel="external nofollow" href="https://littlewin.wang/article/4">大目标</a> 携手并进和在
          <a target="_blank" rel="external nofollow" href="https://github.com/littlewin-wang">Github
          </a> 上积极垒砖
          <br>
          <span>
            Find Me In
            <a rel="external nofollow" href="mailto:littlewin.wang@gmail.com">
              <i style="font-size: 18px; padding:0 .2rem" class="iconfont icon-mail"></i>
            </a>
            <a target="_blank" rel="external nofollow" href="https://github.com/littlewin-wang">
              <i style="font-size: 18px; padding:0 .2rem" class="iconfont icon-github"></i>
            </a>
            <a target="_blank" rel="external nofollow" href="https://weibo.com/fredinweibo">
              <i style="font-size: 18px; padding:0 .2rem" class="iconfont icon-weibo"></i>
            </a>
            <a target="_blank" rel="external nofollow" href="https://www.v2ex.com/member/littlewin">
              <i style="font-size: 18px; padding:0 .2rem" class="iconfont icon-v2ex"></i>
            </a>
            <a target="_blank" rel="external nofollow" href="https://twitter.com/littlewin_wang">
              <i style="font-size: 18px; padding:0 .2rem" class="iconfont icon-twitter"></i>
            </a>
          </span>
        </p>
      </div>
    </div>

    <div class="container white">
      <div class="content">
        <h5 class="title">追求</h5>
        <div class="content list">
          <div class="item">
            <div class="icon">
              <i class="iconfont icon-coding"></i>
            </div>
            <h5>构建高颜值界面</h5>
            <p>
              热衷于构建清晰简洁的web界面
              <br>
              逐渐理解更深入的UI设计原则
            </p>
          </div>

          <div class="item">
            <div class="icon">
              <i class="iconfont icon-app"></i>
            </div>
            <h5>构建前端应用</h5>
            <p>
              热衷于构建个性化功能的WEB应用
              <br>
              探索前端应用的能力扩展
            </p>
          </div>

          <div class="item">
            <div class="icon">
              <i class="iconfont icon-think"></i>
            </div>
            <h5>追求杰出</h5>
            <p>
              热衷于和杰出的伙伴为伍
              <br>
              热衷于打造杰出的产品
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="project container white">
      <div class="content">
        <h5 class="title">项目</h5>
        <div class="content list">
          <div class="item">
            <a target="_blank" rel="external nofollow" href="https://github.com/littlewin-wang/littlewin.wang">
              <div class="icon">
                <i class="iconfont icon-frontend"></i>
              </div>
              <h5>个人博客</h5>
            </a>
          </div>

          <div class="item">
            <a target="_blank" rel="external nofollow" href="https://github.com/coding-show/dort">
              <div class="icon">
                <i class="iconfont icon-presentation"></i>
              </div>
              <h5>代码讲演工具</h5>
            </a>
          </div>

          <div class="item">
            <a target="_blank" rel="external nofollow" href="https://github.com/littlewin-wang/vue-images">
              <div class="icon">
                <i class="iconfont icon-image"></i>
              </div>
              <h5>Vue图片展示工具</h5>
            </a>
          </div>

          <div class="item">
            <nuxt-link to="/project">
              <div class="icon">
                <i class="iconfont icon-more"></i>
              </div>
              <h5>更多</h5>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>

    <div class="hobby container white">
      <div class="content">
        <h5 class="title">爱好</h5>
        <p>Littlewin是多特死忠，期待有日去威斯特法伦坐在南看台看球<br>Littlewin经常参加足球和篮球运动<br>Littlewin也喜欢玩游戏：FIFA18、NBA2K17</p>
      </div>
    </div>

    <div class="statement container white">
      <div class="content">
        <h5 class="title">声明</h5>
        <p>本站所有文章均为本人原创，仅代表个人在撰文时刻的观点和想法<br>内容转载请保留署名
          <strong>Littlewin</strong>或指向该原文(
          <a target="_blank" rel="external nofollow" href="https://littlewin.wang">https://littlewin.wang</a>)的链接，请勿用于商业用途</p>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  components: {
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
  .container {
    width: 100%;
    margin-bottom: 1rem;
    // background-color: hsla(0, 0%, 100%, .6);
    .content {
      padding: 1rem 2rem;
      // h5 {
      //   position: relative;
      //   border-bottom: 1px solid #eee;
      //   margin: 1rem;
      //   &:after {
      //     content: "#";
      //     position: absolute;
      //     right: 0;
      //   }
      // }
      p {
        // padding-left: 2rem;
        // border-left: 4px solid #6cf;
        a {
          color: #6cf;
          &:hover {
            color: #09c;
          }
          .iconfont {
            margin-right: .5rem;
            color: #999;
          }
          .icon-mail:hover {
            color: #6cf;
          }
          .icon-github:hover {
            color: #666;
          }
          .icon-weibo:hover {
            color: #f66;
          }
          .icon-v2ex:hover {
            color: #666;
          }
          .icon-twitter:hover {
            color: #9cf;
          }
        }
      }
    }

    .list {
      display: flex;
      justify-content: space-between;
      .item {
        flex: 0 30%;
        text-align: center;
        .icon {
          i {
            font-size: 36px;
            color: #555;
          }
        }
        h5 {
          margin: 0 0 .8rem 0;
        }
        p {
          line-height: 1.5rem;
          color: #999;
        }
      }
    }
  }

  .white {
    background-color: hsla(0, 0%, 100%, .6);
  }
}
</style>
