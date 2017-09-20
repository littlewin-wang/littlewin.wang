<template>
  <div class="index">
    <div>
      <Carrousel></Carrousel>
    </div>
    <div class="index-container">
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
      <div class="sidebar">
        <div>
          <Sidebar></Sidebar>
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
import Carrousel from '~/components/article/carrousel.vue'
import Sidebar from '~/components/article/sidebar.vue'

export default {
  components: {
    IndexLink,
    IndexSelect,
    IndexSearch,
    Grid,
    ArticleList,
    ArticleCard,
    Carrousel,
    Sidebar
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
  .index-container {
    display: flex;
    .list {
      flex: 1 1 66.6%;
    }
    .sidebar {
      flex: 1 1 33.4%;
      padding-left: 1rem;
    }
  }
}
</style>
