<template>
  <div class="main">
    <div class="carrousel-container">
      <Carrousel></Carrousel>
    </div>
    <div class="main-container">
      <div class="page-container">
        <div class="nav">
          <ArticleNav></ArticleNav>
        </div>
        <div class="list">
          <ArticleList :articles="articles" :user="user"></ArticleList>
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
  fetch ({ store }) {
    return Promise.all([
      store.dispatch('getArticles')
    ])
  },
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
  computed: {
    articles () {
      return this.$store.state.article.list
    },
    user () {
      return this.$store.state.user
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.carrousel-container {
  margin-bottom: 1rem;
}
</style>
