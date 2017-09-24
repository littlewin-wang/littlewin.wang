<template>
  <div class="index">
    <div class="nav">
      <ArticleNav></ArticleNav>
    </div>
    <div class="list">
      <ArticleList></ArticleList>
    </div>
  </div>

  </div>
</template>

<script>
import IndexLink from '~/components/common/link.vue'
import IndexSelect from '~/components/common/select.vue'
import IndexSearch from '~/components/common/search.vue'
import Grid from '~/components/rotator/grid.vue'
import ArticleNav from '~/components/article/nav.vue'
import ArticleList from '~/components/article/list.vue'

export default {
  components: {
    IndexLink,
    IndexSelect,
    IndexSearch,
    Grid,
    ArticleNav,
    ArticleList
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.index {
  .nav {
    margin-bottom: 1rem;
  }
}
</style>
