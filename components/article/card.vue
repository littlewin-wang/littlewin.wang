<template>
  <div class="article-card">
    <div class="container">
      <div class="date">
        <div class="detail">
          <span class="date-day">{{new Date(article.createAt).getDate()}}</span>
          <span class="date-month">{{new Date(article.createAt).getMonth() + 1}}月</span>
        </div>
      </div>
      <div class="content">
        <h2>
          <a href="">{{article.title}}</a>
        </h2>
        <p class="excerpt">
          {{article.description}}
        </p>
        <div class="info">
          <div class="left">
            <span class="tag">
              <i class="iconfont icon-tag"></i>
              <a href="">{{article.tag[0].name}}</a>
            </span>
            <span class="author">
              <img src="http://7xpot0.com1.z0.glb.clouddn.com/16-12-20/28956487-file_1482226716996_dc59.jpg" alt="">
              <a href="">Littlewin</a>
            </span>
          </div>
          <div class="right">
            <span class="tag">
              <i class="iconfont icon-view"></i>
              <a href="">{{article.meta.views}}</a>
            </span>
            <span class="tag">
              <i class="iconfont icon-love"></i>
              <a href="">{{article.meta.likes}}</a>
            </span>
            <span class="tag">
              <i class="iconfont icon-comment"></i>
              <a href="">{{article.meta.comments}}</a>
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
    article: Object
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
        .date-month {
          display: block;
        }
      }
    }
    .content {
      flex: 1;
      padding: 0 35px 0 20px;
      h2 {
        margin: 0;
        font-family: Raleway;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        letter-spacing: 1px;
        text-transform: uppercase;
        margin-bottom: 1rem;
      }
      .info {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        color: #222222;
        margin-top: 1rem;
        padding-top: .5rem;
        border-top: 1px solid #ebebeb;
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
}
</style>
