<template>
  <div class="main">
    <div class="main-container">
      <div class="page-container">
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
import ArticleNav from '~/components/index/nav.vue'
import ArticleList from '~/components/article/list.vue'
import Sidebar from '~/components/article/sidebar.vue'

export default {
  components: {
    ArticleNav,
    ArticleList,
    Sidebar
  },
  validate ({ params }) {
    return !!params.keyword
  },
  fetch ({ store, params }) {
    return store.dispatch('getArticles', params)
  },
  head () {
    const keyword = this.$route.params.keyword
    const title = keyword.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase())
    return {
      title: `${title} | 搜索`
    }
  },
  created () {
    // 如果关键词不存在，则返回上一个页面
    if (!this.keyword) {
      this.$router.back()
    }
  },
  computed: {
    articles () {
      return this.$store.state.article.list
    },
    user () {
      return this.$store.state.user
    },
    keyword () {
      return this.$route.params.keyword ? this.$route.params.keyword : ''
    },
    baseParams () {
      return {
        keyword: this.keyword
      }
    },
    nextPageParams () {
      return Object.assign({
        page: this.articles.data.page + 1
      }, this.baseParams)
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>

</style>
