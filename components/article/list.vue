<template>
  <div class="article-list">
    <ListHeader v-if="$route.name!=='index'"></ListHeader>
    <Card v-for="(article, index) in articles.data.articles" :article="article" :user="user.data.user" :key="index"></Card>
    <div class="loading" @click="$emit('add')">
      <a href="">加载更多</a>
    </div>
  </div>
</template>

<script>
import ListHeader from './header'
import Card from './card'

export default {
  name: 'List',
  components: {
    ListHeader,
    Card
  },
  props: {
    articles: Object,
    user: Object
  }
}
</script>

<style lang="scss" scoped>
.loading {
  margin-bottom: 2rem;
  background-color: hsla(0, 0%, 100%, .6);
  &:hover {
    background-color: hsla(0, 0%, 77%, .4);
  }
  a {
    display: block;
    text-align: center;
    padding: 1rem;
  }
}
</style>
