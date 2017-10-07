<template>
  <div class="main">
    <div class="main-container">
      <div class="page-container">
        <div class="articles">
          <h5>文章</h5>
          <ol>
            <li v-for="(article, index) in articles.data.articles" :key="index">
              <span>{{index+1}}</span>
              - {{article.title}}
            </li>
          </ol>
        </div>
      </div>
      <div class="sidebar">
        <div>
          <Sidebar :articles="hotArticles" :tags="tags"></Sidebar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '~/components/article/sidebar.vue'

export default {
  components: {
    Sidebar
  },
  fetch ({ store }) {
    return Promise.all([
      store.dispatch('getArticles')
    ])
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
    }
  }
}
</script>

<style lang="scss" scoped>
.page-container {
  margin-bottom: 2rem;
  padding: 2em 3em;
  background-color: hsla(0, 0%, 100%, .6);
  .articles {
    h5 {
      margin: 1rem 0
    }
    ol {
      padding-left: 2rem;
      li {
        margin-bottom: 1rem;
        span {
          font: bold italic 1.5rem Helvetica, Verdana, sans-serif;
        }
        .iconfont {
          margin-left: 1rem
        }
      }
    }
  }
}
</style>
