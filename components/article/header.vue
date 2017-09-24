<template>
  <div class="article-header">
    <div class="logo">
      <i class="iconfont icon-think"></i>
    </div>
    <h5 class="description">和生命一样，思考的意义往往就是本身</h5>
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
.article-header {
  padding: 1rem;
  margin-bottom: 2rem;
  background-color: hsla(0, 0%, 100%, .6);
  text-align: center;
  color: #555;
  .logo {
    i {
      font-size: 6rem;
    }
  }
  h5 {
    font-size: 16px;
    font-weight: 300;
  }
}
</style>
