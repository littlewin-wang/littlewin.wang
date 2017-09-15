<template>
  <div class="article-list">
    <waterfall :line-gap="200" :watch="items">
      <waterfall-slot v-for="(item, index) in items" :width="item.width" :height="item.height" :order="index" :key="item.id">
        <div class="article-item">
          <Card></Card>
        </div>
      </waterfall-slot>
    </waterfall>
  </div>
</template>

<script>
import { Waterfall, WaterfallSlot } from 'vue-waterfall'
import Card from './card'
export default {
  name: 'List',
  components: {
    Waterfall,
    WaterfallSlot,
    Card
  },
  data () {
    return {
      items: [
        {
          id: 0,
          width: 240,
          height: 360
        },
        {
          id: 1,
          width: 240,
          height: 360
        },
        {
          id: 2,
          width: 240,
          height: 360
        },
        {
          id: 3,
          width: 240,
          height: 360
        },
        {
          id: 4,
          width: 240,
          height: 360
        },
        {
          id: 5,
          width: 240,
          height: 360
        },
        {
          id: 6,
          width: 240,
          height: 360
        },
        {
          id: 7,
          width: 240,
          height: 360
        },
        {
          id: 8,
          width: 240,
          height: 360
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.article-item {
  padding: 1rem
}
</style>
