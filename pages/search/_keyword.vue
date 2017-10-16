<template>
  <div class="main">
    <div class="main-container">
      <div class="page-container">
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
import ArticleNav from '~/components/index/nav.vue'
import ArticleList from '~/components/article/list.vue'
import Sidebar from '~/components/common/sidebar.vue'

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
    const title = keyword ? keyword.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase()) : ''
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
    hotArticles () {
      return this.$store.state.article.hot
    },
    LatestComments () {
      return this.$store.state.comment.latest
    },
    user () {
      return this.$store.state.user
    },
    tags () {
      return this.$store.state.tag
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
    addArticles () {
      this.$store.dispatch('getArticles', this.nextPageParams)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
