<template>
  <div class="main">
    <div class="carrousel-container">
      <Carrousel :articles="articles"></Carrousel>
    </div>
    <div class="main-container">
      <div class="page-container">
        <div class="nav">
          <ArticleNav :categories="categories"></ArticleNav>
        </div>
        <div class="list">
          <ArticleList :articles="articles" :user="user"></ArticleList>
        </div>
      </div>
      <div class="sidebar">
        <div>
          <Sidebar :articles="hotArticles" :tags="tags" :comments="LatestComments"></Sidebar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carrousel from '~/components/index/carrousel.vue'
import ArticleNav from '~/components/index/nav.vue'
import ArticleList from '~/components/article/list.vue'
import Sidebar from '~/components/common/sidebar.vue'

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
    hotArticles () {
      return this.$store.state.article.hot
    },
    user () {
      return this.$store.state.user
    },
    categories () {
      return this.$store.state.category
    },
    tags () {
      return this.$store.state.tag
    },
    LatestComments () {
      return this.$store.state.comment.latest
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
