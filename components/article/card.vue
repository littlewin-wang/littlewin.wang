<template>
  <div class="article-card">
    <div class="container">
      <div class="date">
        <div class="detail">
          <span class="date-day">{{new Date(article.createAt).getDate()}}</span>
          <span class="date-month">{{new Date(article.createAt).getMonth() + 1}}月</span>
          <span class="date-year">{{new Date(article.createAt).getFullYear()}}</span>
        </div>
      </div>
      <div class="content">
        <h2 class="title">
          <nuxt-link class="underline" :to="'/note/'.concat(article.number)" v-if="article.isIssue">{{article.title}}</nuxt-link>
          <nuxt-link class="underline" :to="`/article/${article.id}`" v-else>{{article.title}}</nuxt-link>
        </h2>
        <p class="excerpt">
          {{article.description}}
        </p>
        <div class="info">
          <div class="before-left">
            <span class="time-ago">
              {{timeAgo(article.createAt)}}
            </span>
          </div>
          <div class="left">
            <span class="tag" v-if="!article.isIssue">
              <i class="iconfont" :class="[article.tag[0].extends.find(t => Object.is(t.name, 'icon')).value]"></i>
              <nuxt-link class="underline" :to="`/tag/${article.tag[0].name}`">{{article.tag[0].name}}</nuxt-link>
            </span>
            <span class="tag" v-else>
              <i class="iconfont icon-github"></i>
              <nuxt-link class="underline" :to="'/notes'">Note</nuxt-link>
            </span>

            <span class="author">
              <img :src="user.gravatar" :alt="user.slogan">
              <span>{{user.username}}</span>
            </span>
          </div>
          <div class="right" v-if="!article.isIssue">
            <span class="tag">
              <i class="iconfont icon-view"></i>
              <span>{{article.meta.views}}</span>
            </span>
            <span class="tag">
              <i class="iconfont icon-love"></i>
              <span>{{article.meta.likes}}</span>
            </span>
            <span class="tag">
              <i class="iconfont icon-comment"></i>
              <span>{{article.meta.comments}}</span>
            </span>
          </div>
          <div class="right" v-else>
            <a class="underline" target="_blank" rel="external nofollow" href="https://github.com/littlewin-wang/Notes">View in Github</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    article: Object,
    user: Object
  },
  methods: {
    timeAgo (createAt) {
      var now = Date.parse(new Date()) / 1000
      var limit = now - Date.parse(new Date(createAt)) / 1000
      var content = ''
      if (limit < 60) {
        content = '刚刚'
      } else if (limit >= 60 && limit < 3600) {
        content = Math.floor(limit / 60) + '分钟前'
      } else if (limit >= 3600 && limit < 86400) {
        content = Math.floor(limit / 3600) + '小时前'
      } else if (limit >= 86400 && limit < 2592000) {
        content = Math.floor(limit / 86400) + '天前'
      } else if (limit >= 2592000 && limit < 31104000) {
        content = Math.floor(limit / 2592000) + '个月前'
      } else {
        content = '很久前'
      }
      return content
    }
  }
}
</script>

<style lang="scss" scoped>
.article-card {
  display: inline-block;
  width: 100%;
  padding: .5rem;
  margin-bottom: 1rem;
  background-color: hsla(0, 0%, 100%, .6);
  &:hover {
    background-color: hsla(0, 0%, 77%, .4);
  }
  .container {
    display: flex;
    .date {
      flex: 0 0 70px;
      .detail {
        padding: 0 20px;
        border-right: 1px solid #ebebeb;
        .date-day,
        .date-month,
        .date-year {
          font-size: 12px;
          display: block;
        }
        .date-day {
          font-size: 16px;
          font-weight: 500;
          color: #303030;
          padding-bottom: 5px;
        }
      }
    }
    .content {
      flex: 1;
      padding: 0 35px 0 20px;
      .title {
        margin: 0;
        font-size: 17px;
        font-weight: 700;
        letter-spacing: 1px;
        text-transform: uppercase;
        margin-bottom: .5rem;
        &:hover {
          text-decoration: underline;
        }
      }
      .excerpt {
        margin-bottom: .5rem;
        font-size: 13px;
        color: #777;
      }
      .info {
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        color: #222222;
        padding-top: .5rem;
        border-top: 1px solid #ebebeb;
        .before-left,
        .left,
        .right {
          white-space: nowrap;
          height: 2rem;
          line-height: 2rem;
          a {
            &:hover {
              color: #222;
              text-decoration: underline;
            }
          }
        }
        .tag {
          margin-left: 6px;
        }
        i {
          color: #8d8d8d;
          font-size: 12px;
          margin-right: 4px;
        }
        .author {
          position: relative;
          margin-left: 6px;
          padding-left: 22px;
          img {
            position: absolute;
            width: 16px;
            height: 16px;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            border-radius: 50%;
          }
        }
        @media screen and (min-width: 481px) {
          .before-left {
            display: none;
          }
        }
      }
    }
  }
  @media screen and (max-width: 480px) {
    .container {
      display: block;
      .date {
        display: none;
      }
      .content {
        padding: 0;
        .info {
          .author {
            display: none;
          }
        }
      }
    }
  }
}
</style>
