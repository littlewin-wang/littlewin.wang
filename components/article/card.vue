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
          <nuxt-link :to="`/article/${article.id}`">{{article.title}}</nuxt-link>
        </h2>
        <p class="excerpt">
          {{article.description}}
        </p>
        <div class="info">
          <div class="left">
            <span class="tag">
              <i class="iconfont icon-tag"></i>
              <nuxt-link :to="`/tag/${article.tag[0].name}`">{{article.tag[0].name}}</nuxt-link>
            </span>
            <span class="author">
              <img :src="user.gravatar" :alt="user.slogan">
              <span>{{user.username}}</span>
            </span>
          </div>
          <div class="right">
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
  }
}
</script>

<style lang="scss" scoped>
.article-card {
  display: inline-block;
  width: 100%;
  padding: 1rem;
  margin-bottom: 2rem;
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
        .date-day {
          font-size: 21px;
          font-weight: 600;
          color: #303030;
          padding-bottom: 5px;
        }
        .date-day,
        .date-month,
        .date-year {
          display: block;
        }
      }
    }
    .content {
      flex: 1;
      padding: 0 35px 0 20px;
      .title {
        margin: 0;
        font-family: Raleway;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        letter-spacing: 1px;
        text-transform: uppercase;
        margin-bottom: 1rem;
        &:hover {
          text-decoration: underline;
          transform: translateX(1rem)
        }
      }
      .info {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        color: #222222;
        margin-top: 1rem;
        padding-top: .5rem;
        border-top: 1px solid #ebebeb;
        .left,
        .right {
          height: 2em;
          line-height: 2rem;
        }
        span {
          margin: 0 4px;
        }
        i {
          color: #8d8d8d;
          font-size: 14px;
          margin-right: 2px;
        }
        .author {
          position: relative;
          padding-left: 22px;
          img {
            position: absolute;
            width: 20px;
            height: 20px;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            border-radius: 50%;
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
