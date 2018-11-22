<template>
  <div id="app" v-cloak>
    <Background></Background>
    <LHeader></LHeader>
    <div class="container">
      <div class="content">
        <nuxt/>
      </div>
    </div>
    <LFooter></LFooter>
  </div>
</template>

<script>
import global from '~/utils/global'
import Background from '~/components/layout/background'
import LHeader from '~/components/layout/header'
import LFooter from '~/components/layout/footer'

export default {
  components: {
    Background,
    LHeader,
    LFooter
  },
  methods: {
    isActive () {
      let reallyDocumentTitle
      document.addEventListener('visibilitychange', event => {
        if (event.target.hidden || event.target.webkitHidden) {
          reallyDocumentTitle = document.title
          document.title = '来不及解释了，快上车!'
        } else {
          document.title = reallyDocumentTitle
        }
      }, false)
    }
  },
  mounted () {
    this.isActive()

    // 将全局变量组件注册到Vue
    this.$root.$global = global

    // 获取歌曲列表
    this.$store.dispatch('getPlayerList')
  }
}
</script>

<style lang="scss" scoped>
#app {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  &[v-cloak] {
    color: transparent;
    -webkit-text-fill-color: transparent;
  }

  .container {
    flex: 1;
    position: relative;
    padding-top: 80px;

    .content {
      max-width: 980px;
      height: 100%;
      margin: 0 auto;
    }
  }
}
</style>
