<template>
  <div class="article-list">

    <Card></Card>

    <Card></Card>

    <Card></Card>

    <Card></Card>

    <Card></Card>

    <div class="loading">
      <a href="">加载更多</a>
    </div>

  </div>
</template>

<script>
import Card from './card'

export default {
  name: 'List',
  components: {
    Card
  },
  data () {
    return {
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
  a {
    display: block;
    text-align: center;
    padding: 1rem;
  }
}
</style>
