<template>
  <div class="main">
    <div class="main-container">
      <div class="page-container">
        <div class="articles list">
          <h5>文章</h5>
          <ul>
            <li v-for="(article, index) in articles.data.articles" :key="index">
              <span>{{index+1}}</span>
              - {{article.title}}
            </li>
          </ul>
        </div>
        <div class="category list">
          <h5>分类</h5>
          <ul>
            <li v-for="(category, index) in categories.data.categories" :key="index">
              <span>
                <i class="iconfont icon-category"></i>
              </span>
              - {{category.name}} ({{category.count}})
              <p>
                {{category.description}}
              </p>
            </li>
          </ul>
        </div>
        <div class="tag tag-list">
          <h5>标签</h5>
          <ul>
            <li v-for="(tag, index) in tags.data.tags" :key="index">
              {{tag.name}} ({{tag.count}})
            </li>
          </ul>
        </div>
        <div class="tag page-list">
          <h5>页面</h5>
          <ul>
            <li class="item">
              <router-link to="/">主页</router-link>
            </li>
            <li class="item">
              <router-link to="/about">关于</router-link>
            </li>
          </ul>
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
  .list {
    margin-bottom: 2rem;
    h5 {
      margin: 1rem 0
    }
    ul {
      padding-left: 2rem;
      li {
        margin-bottom: 1rem;
        span {
          font: bold italic 1.5rem Helvetica, Verdana, sans-serif;
        }
      }
    }
  }
  .tag-list,
  .page-list {
    margin-bottom: 2rem;
    h5 {
      margin: 1rem 0
    }
    ul {
      padding-left: 2rem;
      li {
        display: inline-block;
        margin: .5rem 1rem;
      }
    }
  }
}
</style>
