<template>
  <div id="app" v-cloak>
    <Background></Background>
    <LHeader></LHeader>
    <div class="container">
      <div class="content">
        <div class="carrousel-container">
          <Carrousel></Carrousel>
        </div>
        <div class="main-container">
          <div class="page-container">
            <nuxt/>
          </div>
          <div class="sidebar">
            <div>
              <Sidebar></Sidebar>
            </div>
          </div>
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
import Carrousel from '~/components/layout/carrousel.vue'
import Sidebar from '~/components/layout/sidebar.vue'

export default {
  components: {
    Background,
    LHeader,
    LFooter,
    Carrousel,
    Sidebar
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
    padding-top: calc(70px+2rem);
    .content {
      max-width: 980px;
      height: 100%;
      margin: 0 auto;
      .main-container {
        display: flex;
        margin-top: 2rem;
        .page-container {
          flex: 1 1 66.6%;
        }
        .sidebar {
          flex: 1 1 33.4%;
          padding-left: 2rem;
        }
      }
    }
  }
}
</style>
