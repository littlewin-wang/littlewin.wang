<template>
  <div class="share">
    <div class="share-box">
      <a title="微信" rel="nofollow" class="share-link wechat" @click.prevent="shareWindow(`http://qr.topscan.com/api.php?text=${url}&w=300&el=h&m=10`)">
        <i class="iconfont icon-wechat"></i>
      </a>
      <a title="微博" rel="nofollow" class="share-link weibo" @click.prevent="shareWindow(`http://service.weibo.com/share/share.php?url=${url}&title=${title()}&source=${url}&sourceUrl=${url}&content=${description()}`)">
        <i class="iconfont icon-weibo"></i>
      </a>
      <a title="豆瓣" rel="nofollow" class="share-link douban" @click.prevent="shareWindow(`https://www.douban.com/recommend/?url=${url}&title=${title()}`)">
        <i class="iconfont icon-douban"></i>
      </a>
      <a title="twitter" rel="nofollow" class="share-link twitter" @click.prevent="shareWindow(`http://twitter.com/share?text=${title()}&url=${url}`)">
        <i class="iconfont icon-twitter"></i>
      </a>
      <a title="facebook" rel="nofollow" class="share-link facebook" @click.prevent="shareWindow(`https://www.facebook.com/sharer/sharer.php?u=${url}`)">
        <i class="iconfont icon-facebook"></i>
      </a>
      <a title="email" rel="nofollow" class="share-link mail" @click.prevent="shareWindow(`mailto:?subject=${title()}&body=${url}`)">
        <i class="iconfont icon-mail"></i>
      </a>
      <span ref="share_copy_btn" class="share-link link" rel="nofollow" :data-clipboard-text="url">
        <i class="iconfont icon-link"></i>
      </span>
    </div>
  </div>
</template>

<script>
import Clipboard from 'clipboard'
export default {
  name: 'share',
  mounted () {
    this.clipboard = new Clipboard(this.$refs.share_copy_btn)
  },
  computed: {
    url () {
      return `http://littlewin.wang${this.$route.fullPath}`
    }
  },
  methods: {
    description () {
      try {
        if (document) return document.getElementsByName('description')[0].getAttribute('content')
      } catch (err) { return '' }
    },
    title () {
      try {
        if (document) return document.title
      } catch (err) { return 'Littlewin.wang' }
    },
    shareWindow (url) {
      url = url.includes('mailto') ? url.replace(/\s|\||Littlewin.wang/g, '') : encodeURI(url)

      let winName = 'newWin'
      // screen.availWidth 获得屏幕宽度
      // screen.availHeight 获得屏幕高度
      // 居中的算法是：
      // 左右居中： (屏幕宽度 - 窗口宽度)/2
      // 上下居中： (屏幕高度 - 窗口高度)/2
      // 窗口宽度,需要设置
      let awidth = screen.availWidth / 6 * 2
      // 窗口高度,需要设置
      let aheight = screen.availHeight / 5 * 2
      // 窗口顶部位置,一般不需要改
      let atop = (screen.availHeight - aheight) / 2
      // 窗口放中央,一般不需要改
      let aleft = (screen.availWidth - awidth) / 2
      // 新窗口的参数
      let param0 = 'scrollbars=0,status=0,menubar=0,resizable=2,location=0'
      // 新窗口的左部位置，顶部位置，宽度，高度
      let params = `top=${atop},left=${aleft},width=${awidth},height=${aheight},${param0}`
      // 打开新窗口
      const win = window.open(url, winName, params)
      // 新窗口获得焦点
      win.focus()
    }
  }
}
</script>

<style lang="scss" scoped>
.share {

  .share-box {

    >.share-link {
      width: 2.5rem;
      height: 2.2rem;
      line-height: 2.5rem;
      background-color: #eee;
      margin-right: .5rem;
      cursor: pointer;
      display: inline-block;
      text-align: center;

      &.wechat:hover {
        background-color: rgb(123, 179, 46);
      }

      &.weibo:hover {
        background-color: rgb(230, 22, 45);
      }

      &.douban:hover {
        background-color: rgb(0, 119, 17);
      }

      &.twitter:hover {
        background-color: rgb(85, 172, 238);
      }

      &.facebook:hover {
        background-color: rgb(59, 89, 152);
      }

      &.mail:hover {
        background-color: #5dc732;
      }

      &.link:hover {
        background-color: #e67a1c;
      }

      &:hover {

        >.iconfont {
          color: #fff;
        }
      }
    }
  }
}
</style>
