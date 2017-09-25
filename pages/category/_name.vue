<template>
  <div class="main">
    <div class="main-container">
      <div class="page-container">
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
import ArticleNav from '~/components/index/nav.vue'
import ArticleList from '~/components/article/list.vue'
import Sidebar from '~/components/article/sidebar.vue'

export default {
  components: {
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

</style>
