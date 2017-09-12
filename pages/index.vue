<template>
  <div class="index">
    <div class="index-left">
      <IndexLink class="index-link"></IndexLink>
      <div class="index-nav">
        <IndexSelect></IndexSelect>
        <IndexSearch></IndexSearch>
        <Grid></Grid>
      </div>
    </div>
    <div class="index-right">456</div>
  </div>
</template>

<script>
import IndexLink from '~/components/common/link.vue'
import IndexSelect from '~/components/common/select.vue'
import IndexSearch from '~/components/common/search.vue'
import Grid from '~/components/rotator/grid.vue'

export default {
  components: {
    IndexLink,
    IndexSelect,
    IndexSearch,
    Grid
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
  display: flex;
  height: 100%;
  .index-left {
    flex: 0 50%;
    height: 100%;
    display: flex;
    .index-link {
      flex: 0 40px;
      height: 100%;
    }
    .index-nav {
      flex: 1 auto;
    }
  }
  .index-right {
    flex: 0 50%;
  }
}
</style>
