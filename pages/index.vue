<template>
  <div class="index">
    <div class="index-left">
      <IndexLink class="index-link"></IndexLink>
      <div class="index-nav">
        <IndexSelect></IndexSelect>
        <IndexSearch></IndexSearch>
        <Rotator :imgUrl="images[index].url" :title="images[index].label" @change="changeUrl"></Rotator>
      </div>
    </div>
    <div class="index-right">456</div>
  </div>
</template>

<script>
import IndexLink from '~/components/common/link.vue'
import IndexSelect from '~/components/common/select.vue'
import IndexSearch from '~/components/common/search.vue'
import Rotator from '~/components/common/rotator.vue'

export default {
  components: {
    IndexLink,
    IndexSelect,
    IndexSearch,
    Rotator
  },
  data () {
    return {
      index: 0,
      images: [
        {
          url: 'http://7xpot0.com1.z0.glb.clouddn.com/16-11-7/16133495.jpg',
          label: '1'
        },
        {
          url: 'http://7xpot0.com1.z0.glb.clouddn.com/16-11-8/29213923.jpg',
          label: '2'
        }
      ]
    }
  },
  methods: {
    changeUrl () {
      this.index = this.index === 0 ? 1 : 0
    }
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
