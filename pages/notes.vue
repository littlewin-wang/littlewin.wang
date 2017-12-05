<template>
  <div class="main">
    <div class="main-container">
      <div class="page-container">
        <ul>
          <li v-for="(note, index) in notes" :key="index">
            <div class="note">
              <i style="color: green" class="iconfont icon-issue-opened" v-if="note.state==='open'"></i>
              <i style="color: red" class="iconfont icon-issue-closed" v-if="note.state==='close'"></i>
              <div class="note-title">
                <h5><nuxt-link :to="'/note/'.concat(note.number)">{{note.title}}</nuxt-link></h5>
                <div>#{{note.number}} {{new Date(note.updated_at).toLocaleDateString()}} by <a target="_blank" rel="external nofollow" :href="note.user.html_url">{{note.user.login}}</a></div>
              </div>
              <i class="iconfont icon-comment"></i>
              <span>{{note.comments}}</span>
            </div>
          </li>
        </ul>
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
import Sidebar from '~/components/common/sidebar.vue'

export default {
  components: {
    Sidebar
  },
  head: {
    title: '学记'
  },
  fetch ({ store }) {
    return Promise.all([
      store.dispatch('getNotes', { per_page: 100 })
    ])
  },
  computed: {
    notes () {
      return this.$store.state.note.data
    },
    hotArticles () {
      return this.$store.state.article.hot
    },
    tags () {
      return this.$store.state.tag
    },
    LatestComments () {
      return this.$store.state.comment.latest
    }
  }
}
</script>

<style lang="scss" scoped>
.page-container {
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: hsla(0, 0%, 100%, .6);
  ul {
    li {
      .note {
        display: flex;
        padding: .5rem;
        height: calc(40px+1rem);
        line-height: 40px;
        justify-content: space-between;
        &:hover {
          background-color: hsla(0, 0%, 77%, .4);
        }

        i {
          padding: 0 .5rem;
        }
        .note-title {
          flex: 1;
          h5 {
            margin: 0;
            height: 24px;
            line-height: 24px;
            &:hover {
              text-decoration: underline;
            }
          }
          div {
            height: 16px;
            line-height: 16px;
            font-size: 12px;
            a {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
}
</style>
