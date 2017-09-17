<template>
  <div id="app" v-cloak>
    <Background></Background>
    <LHeader></LHeader>
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
import LHeader from '~/components/layout/header'
import LFooter from '~/components/layout/footer'

export default {
  components: {
    Background,
    LHeader,
    LFooter
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
