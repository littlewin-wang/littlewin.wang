<template>
  <div>
    <h5 class="title">
      <i class="iconfont icon-menu"></i>
      相关文章
    </h5>
    <div class="container" v-for="(article, index) in articles.slice(0, 5)" :key="index">
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
</template>

<script>
export default {
  props: {
    articles: Array
  }
}
</script>

<style lang="scss" scoped>
.title {
  margin: 0;
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
  .post {
    .content {
      height: 3rem;
      line-height: 3rem;
      h5 {
        margin: 0;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
