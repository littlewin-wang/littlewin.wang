<template>
  <div class="article-list">
    <waterfall :line-gap="200" :watch="items">
      <waterfall-slot v-for="(item, index) in items" :width="item.width" :height="item.height" :order="index" :key="item.id" move-class="item-move">
        <div class="article-item">
          <Card></Card>
        </div>
      </waterfall-slot>
    </waterfall>
  </div>
</template>

<script>
import Card from './card'

export default {
  name: 'List',
  components: {
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
.item-move {
  transition: all .5s cubic-bezier(.55, 0, .1, 1);
  -webkit-transition: all .5s cubic-bezier(.55, 0, .1, 1);
}

.article-item {
  padding: 1rem
}
</style>
