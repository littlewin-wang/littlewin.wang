<template>
  <div class="article-nav">
    <nav>
      <ul>
        <li v-for="(category, index) in categories.data.categories" :key="index">
          <nuxt-link :to="`/category/${category.name}`">{{category.name}}</nuxt-link>
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
    @media screen and (max-width: 400px) {
      a {
        padding: .5rem 1rem;
      }
    }
  }
}
</style>

