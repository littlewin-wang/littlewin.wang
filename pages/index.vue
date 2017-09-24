<template>
  <div class="index">
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

export default {
  components: {
    IndexLink,
    IndexSelect,
    IndexSearch,
    Grid,
    ArticleList,
    ArticleCard,
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
.index {}
</style>
