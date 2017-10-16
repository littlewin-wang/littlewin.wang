<template>
  <div class="article-list">
    <ListHeader v-if="$route.name!=='index'"></ListHeader>
    <Card v-for="(article, index) in articles.data.articles" :article="article" :user="user.data.user" :key="index"></Card>
    <div class="loading">
      <button @click="$emit('add')" :disabled="articles.fetching || !canAdd">
        <span v-if="!articles.fetching && canAdd">加载更多</span>
        <span v-else-if="articles.fetching && canAdd">加载中</span>
        <span v-else-if="!canAdd">有完没有？有</span>
      </button>
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
  },
  computed: {
    canAdd () {
      return this.articles.data.total ? (this.articles.data.page < this.articles.data.pages) : false
    }
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
  button {
    display: block;
    width: 100%;
    text-align: center;
    padding: 1rem;
  }
}
</style>
