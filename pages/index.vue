<template>
  <div class="index">
    <div class="nav">
      <ArticleNav></ArticleNav>
    </div>
    <div class="list">
      <div>
        <ArticleCard></ArticleCard>
      </div>
      <div>
        <ArticleCard></ArticleCard>
      </div>
      <div>
        <ArticleCard></ArticleCard>
      </div>
    </div>
  </div>

  </div>
</template>

<script>
import IndexLink from '~/components/common/link.vue'
import IndexSelect from '~/components/common/select.vue'
import IndexSearch from '~/components/common/search.vue'
import Grid from '~/components/rotator/grid.vue'
import ArticleList from '~/components/article/list.vue'
import ArticleCard from '~/components/article/card.vue'
import ArticleNav from '~/components/article/nav.vue'

export default {
  components: {
    IndexLink,
    IndexSelect,
    IndexSearch,
    Grid,
    ArticleList,
    ArticleCard,
    ArticleNav
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
