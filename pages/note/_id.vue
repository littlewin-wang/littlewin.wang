<template>
  <div class="main">
    <div class="main-container">
      <div class="page-container">
        <div class="article-container">
          <h2 class="title">{{ note.title || '...' }}</h2>
          <div class="content" v-html="noteContent"></div>
        </div>
        <div class="share-container">
          <share></share>
        </div>
        <div class="meta-container">
          <p>
            <span>本文于&nbsp;{{new Date(note.created_at).toLocaleDateString()}}&nbsp;</span>
            <span>
              发布在&nbsp;
              <a target="_blank" rel="external nofollow" :href="note.html_url">{{note.html_url.split('/').reverse()[2]}}</a>
              &nbsp;分支,
            </span>
          </p>
          <p>
            并被添加「
            <a target="_blank" rel="external nofollow" :href="label.url" v-for="(label, index) in note.labels" :key="index">
              <span>{{ label.name }}</span>
              <span v-if="note.labels.length && note.labels[index + 1]">、</span>
            </a>
            」标签
          </p>
          <p>
            本站使用「
            <a href="https://creativecommons.org/licenses/by/4.0/deed.zh" target="_blank" rel="external nofollow">署名 4.0 国际</a>」创作共享协议
          </p>
        </div>
        <div class="comment-container">
          <div class="list">
            <ul>
              <li class="comment-item" :id="`comment-item-${comment.id}`" :key="index" v-for="(comment, index) in comments">
                <div class="cm-avatar">
                  <a target="_blank" rel="external nofollow" :href="comment.user.html_url">
                    <img :alt="comment.user.origin || '匿名用户'" :src="comment.user.avatar_url || '/images/anonymous.jpg'">
                  </a>
                </div>
                <div class="cm-body">
                  <div class="cm-header">
                    <a class="user-name" target="_blank" rel="external nofollow" :href="comment.user.html_url">
                      {{ comment.user.login }}
                    </a>
                  </div>
                  <div class="cm-content">
                    <div v-html="marked(comment.body)"></div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="link-container">
          <a :href="note.html_url" target="_blank" rel="external nofollow">
            >>> 前往Github Issues评论参与
          </a>
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
import Sidebar from '~/components/common/sidebar.vue'
import Share from '~/components/common/share.vue'
import Comment from '~/components/common/comment.vue'
import marked from '~/plugins/marked'

export default {
  name: 'note-detail',
  validate ({ params }) {
    return (!!params.id && !Object.is(Number(params.id), NaN))
  },
  head () {
    const note = this.note
    return {
      title: note.title || 'No Result Data.'
    }
  },
  fetch ({ store, params }) {
    return Promise.all([
      store.dispatch('getNote', params.id),
      store.dispatch('getNoteComments', params.id)
    ])
  },
  components: {
    Sidebar,
    Share,
    Comment
  },
  data () {
    return {
    }
  },
  computed: {
    note () {
      return this.$store.state.note.note.data
    },
    comments () {
      return this.$store.state.note.comments.data
    },
    noteContent () {
      let content = this.note.body

      if (!content) {
        return ''
      }

      return marked(content)
    },
    hotArticles () {
      return this.$store.state.article.hot
    },
    LatestComments () {
      return this.$store.state.comment.latest
    },
    categories () {
      return this.$store.state.category
    },
    tags () {
      return this.$store.state.tag
    }
  },
  methods: {
    marked (content) {
      return marked(content, null, false)
    }
  }
}
</script>

<style lang="scss">
@import '~assets/sass/mixins';
@import '~assets/sass/variables';

.article-container {
  margin-bottom: 1rem;
  padding: 2rem 3rem;
  background-color: hsla(0, 0%, 100%, .6);
  >.title {
    text-align: center;
    margin: 1.5rem 0;
    font-weight: 700;
  }
  >.thumb {
    display: block;
    max-width: 100%;
    margin: 1rem auto;
  }
  >.content {
    a {
      font-weight: bold;
      margin: 0 .1rem;

      &.image-link {
        margin: 0;
      }

      &:hover {
        text-decoration: underline;
      }
    }

    img {
      max-width: 100%;
      margin: 0 auto;
      display: block;
      text-align: center;
      border-radius: 2px;
      border: .5rem solid rgba(197, 197, 197, 0.4);
      transition: all .25s;
      opacity: .9;
      cursor: pointer;

      &:hover {
        opacity: 1;
        transition: all .25s;
      }
    }

    p {
      line-height: 2.2rem;
      margin-bottom: 1rem;

      &.text-center {
        text-align: center;
      }

      &.text-right {
        text-align: right;
      }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 2rem 0 1rem 0;
      padding-left: 0;
      line-height: 1.8rem;
      font-weight: 700;
      text-indent: 0;
    }

    blockquote {
      p {
        margin-bottom: 0;
      }
    }

    ul {
      list-style-type: square;
    }

    ol {
      list-style-type: decimal;
    }

    ul,
    ol {
      padding-left: 2rem;
      vertical-align: baseline;

      >li {
        line-height: 1.8rem;
        padding: .5rem .8rem;

        &:hover {
          background-color: rgba(230, 230, 230, 0.7);
        }

        >ul {
          &:last-child {
            margin-bottom: 0;
          }
        }

        >p {
          margin-bottom: 0;
        }
      }
    }

    code {
      color: #bd4147;
      padding: .3rem .5rem;
      margin: 0 .5rem;
      border-radius: 2px;
      background-color: rgba(197, 197, 197, 0.4);
    }

    pre {
      display: flex;
      position: relative;
      overflow: hidden;
      margin-bottom: 1rem;
      padding: 2.8rem 0 0 0;
      background-color: rgba(0, 0, 0, 0.8);

      &:before {
        color: white;
        content: attr(data-lang)" CODE";
        height: 2.8rem;
        line-height: 2.8rem;
        font-size: 1rem;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        font-weight: 700;
        background-color: rgba(68, 68, 68, 0.9);
        display: block;
        text-transform: uppercase;
        text-align: center;
      }

      >.code-lines {
        flex: 0 0 2.5rem;
        padding: 1rem 0;
        text-align: center;
        background-color: rgba(0, 0, 0, 0.2);

        >.code-line-number {
          padding: 0;
          position: relative;
          list-style-type: none;
          line-height: 2rem;
          transition: background-color .05s;

          &:hover {
            &:before {
              display: block;
              opacity: 1;
              visibility: visible;
            }
          }

          &:before {
            content: '';
            height: 1.6rem;
            position: absolute;
            top: 0;
            left: 2.5rem;
            width: 66rem;
            background-color: rgba(154, 154, 154, 0.2);
            display: none;
            visibility: hidden;
            opacity: 0;
          }
        }
      }

      >code {
        flex: 1;
        margin: 0;
        padding: 1rem;
        line-height: 2rem;
        color: rgba(255, 255, 255, 0.87);
        background-color: transparent;
        white-space: pre;
        overflow: auto;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .article-container {
    padding: 1rem;
  }
}

.share-container {
  margin-bottom: 1rem;
  padding: 1rem 1.5rem;
  background-color: hsla(0, 0%, 100%, .6);
}

.meta-container {
  margin-bottom: 1rem;
  padding: 1rem 1.5rem;
  background-color: hsla(0, 0%, 100%, .6);
  p {
    margin: .5rem 0;
    a {
      text-decoration: underline;
    }
  }
}

.carrousel-container {
  margin-bottom: 1rem;
  padding: 1rem 1.5rem;
  background-color: hsla(0, 0%, 100%, .6);
  overflow: hidden;
}

.comment-container {
  margin-bottom: 1rem;
  padding: 1rem 1.5rem;
  background-color: hsla(0, 0%, 100%, .6);
  .comment-item {
    position: relative;
    padding: .6em 0 .6em 1.5em;

    &:hover {

      >.cm-avatar {
        >a {
          >img {
            transition: transform .5s ease-out;
            transform: rotate(360deg);
          }
        }
      }

      >.cm-body {
        background-color: darken($module-hover-bg, 20%);
      }
    }

    >.cm-avatar {
      display: block;
      position: absolute;
      left: 0;
      top: 2em;
      background-color: $module-hover-bg;

      >a {
        display: block;
        border: .3em solid $module-bg;
        width: 4em;
        height: 4em;

        >img {
          width: 100%;
          height: 100%;
          transition: transform .5s ease-out;
        }
      }
    }

    >.cm-body {
      display: block;
      width: 100%;
      height: 100%;
      padding: .6rem .6rem .6rem 3.2rem;
      background-color: $module-hover-bg;

      >.cm-header {
        display: block;
        position: relative;
        height: 2rem;
        line-height: 2rem;

        >.user-name {
          font-weight: bold;
          margin-right: .8rem;
          &:hover {
            text-decoration: underline;
          }
        }
      }

      >.cm-content {
        font-size: .95rem;
      }
    }
  }

  @media screen and (max-width: 400px) {
    .comment-item {
      padding: .6em 0;
      >.cm-avatar {
        display: none;
      }
      >.cm-body {
        padding: .6rem;
      }
    }
  }
}

.link-container {
  margin-bottom: 1rem;
  padding: 1rem 1.5rem;
  background-color: hsla(0, 0%, 100%, .6);
  text-align: center;
  &:hover {
    background-color: darken($module-hover-bg, 20%);
    a {
      text-decoration: underline;
    }
  }
}
</style>
