<template>
  <div class="main">
    <div class="main-container">
      <div class="page-container">
        <div class="article-container">
          <h2 class="title">{{ article.title || '...' }}</h2>
          <img class="thumb" :src="article.thumb" :alt="article.description">
          <div class="content" v-html="articleContent"></div>
        </div>
        <div class="share-container">
          <share></share>
        </div>
        <div class="meta-container">
          <p>
            <span>本文于&nbsp;{{new Date(article.createAt).toLocaleDateString()}}&nbsp;</span>
            <span>
              发布在&nbsp;
              <router-link :to="`/category/${article.category.name}`" :title="article.category.description || article.category.name">
                <span>{{ article.category.name }}</span>
              </router-link>
              &nbsp;分类下,
            </span>
            <span>当前已被围观&nbsp;{{article.meta.views}}&nbsp;次</span>
          </p>
          <p>
            并被添加「
            <router-link :to="`/tag/${tag.name}`" :title="tag.description || tag.name" v-for="(tag, index) in article.tag" :key="index">
              <span>{{ tag.name }}</span>
              <span v-if="article.tag.length && article.tag[index + 1]">、</span>
            </router-link>
            」标签
          </p>
          <p>
            本站使用「
            <a href="http://creativecommons.org/licenses/by/4.0/deed.zh">署名 4.0 国际</a>」创作共享协议
          </p>
        </div>
        <div class="carrousel-container">
          <Carrousel :articles="article.related"></Carrousel>
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
import Carrousel from '~/components/article/carrousel.vue'
import Sidebar from '~/components/article/sidebar.vue'
import Share from '~/components/common/share.vue'
import marked from '~/plugins/marked'

export default {
  name: 'article-detail',
  validate ({ params }) {
    return (!!params.id && !Object.is(Number(params.id), NaN))
  },
  head () {
    const article = this.article
    return {
      title: article.title || 'No Result Data.',
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content: (article.keywords ? article.keywords.join(',') : article.title) || ''
        },
        { hid: 'description', name: 'description', content: article.description }
      ]
    }
  },
  fetch ({ store, params }) {
    return store.dispatch('getArticleDetail', params)
  },
  components: {
    Carrousel,
    Sidebar,
    Share
  },
  data () {
    return {
    }
  },
  computed: {
    article () {
      return this.$store.state.article.detail.data
    },
    articleContent () {
      let content = this.article.content

      if (!content) {
        return ''
      }

      const hasTag = !!this.tags.data.tags.length

      return marked(content, hasTag ? this.tags.data.tags : false, true)
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
  },
  methods: {
  }
}
</script>

<style lang="scss">
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
      }
    }
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
</style>
