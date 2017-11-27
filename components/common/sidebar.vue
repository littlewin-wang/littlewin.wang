<template>
  <div class="article-sidebar">
    <div class="article-sidebar-box">
      <h5 class="title">
        <i class="iconfont icon-menu"></i>
        热门文章
      </h5>
      <div class="container" v-if="!articles.data.articles.length">
        <p>暂无热门文章</p>
      </div>
      <div class="container" v-for="(article, index) in articles.data.articles" :key="index">
        <ul>
          <li>
            <div class="post">
              <div class="content">
                <h5>
                  <nuxt-link :to="`/article/${article.id}`">{{article.title}}</nuxt-link>
                </h5>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="article-sidebar-box">
      <h5 class="title">
        <i class="iconfont icon-menu"></i>
        标签
      </h5>
      <div class="container" v-if="!tags.data.tags.length">
        <p>暂无标签</p>
      </div>
      <div class="container">
        <ul>
          <li class="tag-container" v-for="(tag, index) in tags.data.tags" :key="index">
            <nuxt-link :to="`/tag/${tag.name}`" class="tag">
              <i class="iconfont" :class="[tag.extends.find(t => Object.is(t.name, 'icon')).value]"></i>
              <span data-v-3a678449="">&nbsp;</span>
              <span data-v-3a678449="">{{tag.name}}</span>
              <span data-v-3a678449="">({{tag.count}})</span>
            </nuxt-link>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="article-sidebar-box">
      <h5 class="title">
        <i class="iconfont icon-menu"></i>
        最新评论
      </h5>
      <div class="container" v-if="!comments.comments.length">
        <p>暂无最新评论</p>
      </div>
      <div class="container">
        <ul>
          <li>
            <div class="comment" v-for="(comment,index) in this.comments.comments" :key="index">
              <div class="comment-title">
                <strong>
                  <a target="_blank" rel="external nofollow" :href="comment.author.site" @click.stop="clickUser($event, comment.author)">{{ comment.author.name }}</a>
                </strong>
                在
                <strong>
                  <nuxt-link :to="`/article/${comment.postID}`" v-if="comment.postID!==0">#{{ comment.postID }}</nuxt-link>
                  <nuxt-link :to="`/guest`" v-else>#{{ comment.postID }}</nuxt-link>
                </strong>
              </div>
              <div class="comment-content">
                <div v-html="marked(comment.content)"></div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import marked from '~/plugins/marked'

export default {
  name: 'Sidebar',
  props: {
    articles: Object,
    tags: Object,
    comments: Object
  },
  methods: {
    // markdown转义
    marked (content) {
      return marked(content, null, false)
    },
    // 点击用户
    clickUser (event, user) {
      if (!user.site) event.preventDefault()
    }
  }
}
</script>

<style lang="scss" scoped>
.article-sidebar {
  .article-sidebar-box {
    margin-bottom: 2rem;
    background-color: hsla(0, 0%, 100%, .6);
  }
  .title {
    margin: 0;
    padding-left: 1rem;
    height: 3rem;
    line-height: 3rem;
    font-size: 14px;
    font-weight: 400;
    color: #48494d;
    border-bottom: 1px dashed #eee;
    i {
      font-size: 14px;
    }
  }
  .container {
    padding: .2rem 1rem;
    .post {
      &:hover {
        background-color: hsla(0, 0%, 77%, .4);
      }
      .content {
        padding: .5rem 1rem;
        h5 {
          margin: .2rem 0;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
    .tag-container {
      display: inline-block;
      margin-right: 1rem;
      margin-bottom: 1rem;
      .tag {
        display: inline-block;
        height: 2em;
        padding: 0 .5em;
        line-height: 2em;
        background-color: hsla(0, 0%, 77%, .4);
        &:hover {
          background-color: rgba(95, 95, 95, .4);
        }
      }
    }
    .comment {
      padding: .5rem;
      &:hover {
        background-color: hsla(0, 0%, 77%, .4);
      }
      .comment-title {
        height: 1.5rem;
        line-height: 1.5rem;
      }
    }
  }
}
</style>
