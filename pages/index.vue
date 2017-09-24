<template>
  <div class="index">
    <div class="carrousel-container">
      <Carrousel></Carrousel>
    </div>
    <div class="main-container">
      <div class="page-container">
        <div class="nav">
          <ArticleNav></ArticleNav>
        </div>
        <div class="list">
          <ArticleList></ArticleList>
        </div>
      </div>
      <div class="sidebar">
        <div>
          <Sidebar></Sidebar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carrousel from '~/components/index/carrousel.vue'
import ArticleNav from '~/components/index/nav.vue'
import ArticleList from '~/components/article/list.vue'
import Sidebar from '~/components/article/sidebar.vue'

export default {
  components: {
    Carrousel,
    ArticleNav,
    ArticleList,
    Sidebar
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
.index {
  .main-container {
    display: flex;
    margin-top: 2rem;
    .page-container {
      flex: 1 1 66.6%;
      .nav {
        margin-bottom: 1rem;
      }
    }
    .sidebar {
      flex: 1 1 33.4%;
      padding-left: 2rem;
    }
  }
}
</style>
