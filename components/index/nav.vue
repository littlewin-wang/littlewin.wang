<template>
  <div class="article-nav">
    <nav>
      <ul>
        <li>
          <a href="">思考</a>
        </li>
        <li>
          <a href="">生活</a>
        </li>
        <li>
          <a href="">编程</a>
        </li>
        <li>
          <a href="">恋爱</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Footer'
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

