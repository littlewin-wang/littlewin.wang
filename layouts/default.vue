<template>
  <div id="app" v-cloak>
    <Background></Background>
    <div class="container">
      <div class="main">
        <div class="content">
          <nuxt/>
        </div>
      </div>
    </div>
    <LFooter></LFooter>
  </div>
</template>

<script>
import Background from '~/components/layout/background'
import LFooter from '~/components/layout/footer'

export default {
  components: {
    Background,
    LFooter
  }
}
</script>


<style lang="scss" scoped>
#app {
  &[v-cloak] {
    color: transparent;
    -webkit-text-fill-color: transparent;
  }

  .container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin-top: -52px;
    .main {
      position: relative;
      margin-top: 52px;
      flex: 1 0 800px;
      .content {
        position: absolute;
        top: calc(52px+10%);
        left: 5%;
        right: 5%;
        bottom: 10%;
        background: #fff;
      }
    }
  }
}
</style>
