<template>
  <footer>
    <div class="footer-content">
      <div class="left">
        <div class="left-line">
          <ul>
            <strong>链接</strong>
            <li>
              <a target="_blank" rel="external nofollow" href="https://github.com/littlewin-wang">
                <i class="iconfont icon-github">
                </i>
              </a>
            </li>
            <li>
              <a target="_blank" rel="external nofollow" href="https://weibo.com/fredinweibo">
                <i class="iconfont icon-weibo">
                </i>
              </a>
            </li>
            <li>
              <a target="_blank" rel="external nofollow" href="https://twitter.com/littlewin_wang">
                <i class="iconfont icon-twitter">
                </i>
              </a>
            </li>
            <li>
              <a rel="external nofollow" href="mailto:littlewin.wang@gmail.com">
                <i class="iconfont icon-mail ">
                </i>
              </a>
            </li>
          </ul>
        </div>
        <div class="left-line">
          <ul>
            <strong>支持</strong>
            <li>
              <a target="_blank" rel="external nofollow" href="https://vuefe.cn/">
                <i class="iconfont icon-vue ">
                </i>
              </a>
            </li>
            <li>
              <a target="_blank" rel="external nofollow" href="http://koajs.com/">
                <i class="iconfont icon-nodejs ">
                </i>
              </a>
            </li>
            <li>
              <a target="_blank" rel="external nofollow" href="https://cloud.tencent.com/">
                <i class="iconfont icon-tengxunyun ">
                </i>
              </a>
            </li>
          </ul>
        </div>
        <div class="left-line">
          <strong>备案</strong>
          <a target="_blank" rel="external nofollow" href="http://www.miitbeian.gov.cn/">
            <span class="content ">粤ICP备17113740号</span>
          </a>
        </div>
      </div>
      <div class="right ">
        <div class="right-line">
          <span>© 2016 - 2017 ❤
            <a target="_blank" rel="external nofollow" href="http://littlewin.wang/">Littlewin</a> |
            <a target="_blank" rel="external nofollow" href="http://api.littlewin.wang/sitemap.xml">sitemap</a>
          </span>
        </div>
        <div class="right-line">
          <i>无论过往，就不再纠结</i>
        </div>
        <div class="right-line">
          <i>为可能而追求可能，为不能而独善其身</i>
        </div>
      </div>
    </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
footer {
  border-top: none;
  margin-bottom: 0;
  background-color: hsla(0, 0%, 100%, .6);
  .footer-content {
    max-width: 980px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    font-size: .9em;
    text-transform: uppercase;
    .left {
      .left-line {
        text-align: left;
        height: 2rem;
        line-height: 2rem;
        li,
        .content {
          display: inline-block;
          margin-left: 1rem;
        }
      }
    }
    .right {
      .right-line {
        text-align: right;
        height: 2rem;
        line-height: 2rem;
      }
    }
  }

  @media screen and (max-width: 400px) {
    .footer-content {
      width: 100%;
      display: block;
      .left {
        .left-line {
          text-align: center;
        }
      }
      .right {
        .right-line {
          text-align: center;
        }
      }
    }
  }
}
</style>

