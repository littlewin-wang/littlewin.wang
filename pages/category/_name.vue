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
          <Sidebar :articles="hotArticles" :tags="tags" :comments="LatestComments"></Sidebar>
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
    return !!params.name
  },
  fetch ({ store, params }) {
    let category = store.state.category.data.categories.find(category => category.name === params.name)
    return store.dispatch('getArticles', { category: category ? category._id : '' })
  },
  head () {
    const category = this.$route.params.name
    const title = category ? category.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase()) : ''
    return {
      title: `${title} | 分类`
    }
  },
  created () {
    // 如果分类找不到，则返回上一个页面
    if (!this.categoryID) {
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
    categoryID () {
      let category = this.$store.state.category.data.categories.find(category => category.name === this.$route.params.name)
      return category ? category._id : ''
    },
    baseParams () {
      return {
        category: this.categoryID
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
