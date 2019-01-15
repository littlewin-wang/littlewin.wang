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
          <ArticleList :articles="combinedArticles" :user="user" @add="addArticles"></ArticleList>
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
    let fetchList = [
      store.dispatch('getNotes', { per_page: 100 })
    ]

    console.log(store.state.article.list.data.articles.length)
    console.log(store.state.article.list.data.page)

    if (!store.state.article.list.data.articles.length) {
      fetchList.push(store.dispatch('getArticles'))
    }

    return Promise.all(fetchList)
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
    notes () {
      return this.$store.state.note.data
    },
    combinedArticles () {
      let data = JSON.parse(JSON.stringify(this.articles))
      const len = data.data.articles.length

      this.notes.map(n => {
        if (new Date(n.created_at) > new Date(data.data.articles[len - 1].createAt)) {
          n.createAt = n.created_at
          n.isIssue = true
          n.description = n.body.split('\n')[0].replace(/[#>]/g, '')
          data.data.articles.push(n)
        }
      })

      data.data.articles.sort((a, b) => new Date(b.createAt) - new Date(a.createAt))
      return data
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
