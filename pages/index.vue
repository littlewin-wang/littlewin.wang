<template>
  <div class="main">
    <div class="main-container">
      <div class="page-container">
        <div class="message">
          <MessageBox :messages="messages"></MessageBox>
        </div>
        <div class="nav">
          <ArticleNav :categories="categories"></ArticleNav>
        </div>
        <div class="list">
          <ArticleList :articles="articles" :user="user" @add="addArticles"></ArticleList>
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
import MessageBox from '~/components/index/message.vue'
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
    MessageBox,
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
    messages () {
      return this.$store.state.message.data
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
    addArticles () {
      this.$store.dispatch('getArticles', { page: this.articles.data.page + 1 })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
