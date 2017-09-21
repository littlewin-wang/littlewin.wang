<template>
  <footer>
    <div class="footer-content">
      <div>
        <span>© 2016 - 2017 ❤ Littlewin. </span>
        <span>
          <a href="#">SITEMAP</a>
        </span>
      </div>
      <div>
        <span>
          Powered on by
          <a href="#">Nuxt.js</a> &
          <a href="#">Koa.js</a>
        </span>
      </div>

    </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
footer {
  border-top: none;
  margin-bottom: 0;
  background-color: hsla(0, 0%, 100%, .6);
  .footer-content {
    font-size: .9em;
    text-transform: uppercase;
  }
}
</style>

