<template>
  <div class="article-nav">
    <nav>
      <ul>
        <li v-for="(category, index) in categories.data.categories" :key="index">
          <a href="" :alt="category.name">{{category.name}}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    categories: Object
  }
}
</script>

<style lang="scss" scoped>
.article-nav {
  li {
    display: inline-block;
    margin-right: 1rem;
    a {
      display: inline-block;
      padding: 1rem 2rem;
      background-color: hsla(0, 0%, 100%, .6);
      &:hover {
        background-color: hsla(0, 0%, 77%, .4);
      }
    }
  }
}
</style>

