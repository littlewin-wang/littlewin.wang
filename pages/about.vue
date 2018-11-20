<template>
  <div class="about">
    <div class="wrapper basic">
      <div class="left">
        <div class="profile box" style="background-color: rgba(250,204,153,.2)">
          <div class="content">
            <div class="avatar">
              <img :alt="'Me'" :src="'/images/avatar.jpeg'"></a>
            </div>
            <div class="title">
              <h3>王 琪</h3>
              <h5>Littlewin</h5>
              <p>FrontEnd Engineer</p>
              <p>@<a target="_blank" rel="external nofollow" href="http://www.sky-cloud.net/">Sky-cloud</a></p>
            </div>
          </div>
        </div>
        <div class="contact box" style="background-color: rgba(102,204,255,.2)">
          <div class="content">
            <p style="text-align: left">
              <i style="font-size: 18px; padding:0 .2rem" class="iconfont icon-mail"></i>
              <a rel="external nofollow" href="mailto:littlewin.wang@gmail.com">
                littlewin.wang@gmail.com
              </a>
            </p>
            <p style="text-align: left"><i style="font-size: 18px; padding:0 .2rem" class="iconfont icon-location"></i>中国深圳</p>
          </div>
        </div>
        <div class="social box" style="background-color: rgba(247,153,4,.2)">
          <div class="content">
            <a target="_blank" rel="external nofollow" href="https://github.com/littlewin-wang">
              <i style="font-size: 18px" class="iconfont icon-github"></i>
            </a>
            <a target="_blank" rel="external nofollow" href="https://weibo.com/fredinweibo">
              <i style="font-size: 18px" class="iconfont icon-weibo"></i>
            </a>
            <a target="_blank" rel="external nofollow" href="https://www.v2ex.com/member/littlewin">
              <i style="font-size: 18px" class="iconfont icon-v2ex"></i>
            </a>
            <a target="_blank" rel="external nofollow" href="https://twitter.com/littlewin_wang">
              <i style="font-size: 18px" class="iconfont icon-twitter"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="education box" style="background-color: rgba(245,102,103,.2)">
          <div class="content">
            <div class="period">
              <h5><a target="_blank" rel="external nofollow" href="http://www.scu.edu.cn/">四川大学</a></h5>
              <p>检测技术与自动化装置 - 硕士 (2012-2015)</p>
            </div>
            <div class="period">
              <h5><a target="_blank" rel="external nofollow" href="http://www.scu.edu.cn/">四川大学</a></h5>
              <p>自动化 - 学士 (2008-2012)</p>
            </div>
          </div>
        </div>
        <div class="work box" style="background-color: rgba(102,102,153,.2)">
          <div class="content">
            <div class="period">
              <h5><a target="_blank" rel="external nofollow" href="http://www.sky-cloud.net/">天元云科技</a></h5>
              <p>前端工程师 && 产品工程师 (2017-目前)</p>
            </div>
            <div class="period">
              <h5><a target="_blank" rel="external nofollow" href="http://www.ramaxel.com/">记忆科技</a></h5>
              <p>固件开发工程师 (2015-2017)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container" style="background-color: rgba(204,204,255,.2)">
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
    <div class="project container" style="background-color: rgba(250,204,153,.2)">
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
    <div class="statement container" style="margin-bottom: 1rem; background-color: rgba(245,102,103,.2)">
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
  .wrapper {
    width: 100%;
    display: flex;
    .left, .right {
      flex: 0 0 50%;
      display: flex;
      flex-direction: column;
      .box {
        padding: 1rem 0;
        display: flex;
        flex-grow: 1;
        justify-content: center;
        align-items: center;
      }
    }

    .content {
      text-align: center;
    }
    h3 {
      margin: .5rem 0;
    }
    h5 {
      margin: .2rem 0;
    }
    p {
      line-height: 1.6rem;
    }

    .profile {
      .avatar {
        img {
          width: 8rem;
          height: 8rem;
          border-radius: 50%;
        }
      }
    }
    .social {
      display: flex;

      a {
        margin: 1rem;
        &:hover {
          color: #09c;
        }
        .iconfont {
          margin-right: .5rem;
          color: #777;
        }
        .icon-mail:hover {
          color: #6cf;
        }
        .icon-github:hover {
          color: #555;
        }
        .icon-weibo:hover {
          color: #f66;
        }
        .icon-v2ex:hover {
          color: #9c6;
        }
        .icon-twitter:hover {
          color: #9cf;
        }
      }
    }
    .education, .work {
      padding: .6rem 0;
      .period:not(:first-child) {
        margin-top: .6rem;
      }
    }
  }

  .container {
    width: 100%;
    // background-color: hsla(0, 0%, 100%, .6);
    .content {
      padding: 1rem 2rem;
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

  @media screen and (max-width: 600px) {
    .wrapper {
      display: block;
    }
  }

  @media screen and (max-width: 480px) {
    .container {
      .list {
        display: block;
      }
    }
  }
}
</style>
