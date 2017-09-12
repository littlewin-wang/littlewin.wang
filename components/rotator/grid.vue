<template>
  <div class="grid">
    <Rotator :animation="animations[Math.floor(Math.random()*animations.length)]" :imgUrl="images[index].url" :title="images[index].label" @change="changeUrl"></Rotator>
  </div>
</template>

<script>
import Rotator from './rotator.vue'

export default {
  components: {
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
      ],
      animations: [
        {
          mode: 'out-in',
          enterClass: 'bounceIn',
          leaveClass: 'bounceOut'
        },
        {
          mode: '',
          enterClass: 'fadeInLeft',
          leaveClass: 'fadeOutRight'
        },
        {
          mode: '',
          enterClass: 'fadeInDown',
          leaveClass: 'fadeOutDown'
        },
        {
          mode: '',
          enterClass: 'fadeInUp',
          leaveClass: 'fadeOutUp'
        },
        {
          mode: 'out-in',
          enterClass: 'flipInX',
          leaveClass: 'flipOutX'
        },
        {
          mode: 'out-in',
          enterClass: 'flipInY',
          leaveClass: 'flipOutY'
        },
        {
          mode: '',
          enterClass: 'rotateIn',
          leaveClass: 'rotateOut'
        },
        {
          mode: '',
          enterClass: 'zoomIn',
          leaveClass: 'zoomOut'
        },
        {
          mode: '',
          enterClass: 'rollIn',
          leaveClass: 'rollOut'
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

</style>
