<template>
  <div class="grid">
    <div class="row">
      <div class="col">
        <Rotator ref="rotator" :animation="animations[Math.floor(Math.random()*animations.length)]" :imgUrl="images[index].url" :title="images[index].label" @change="changeUrl"></Rotator>
      </div>
      <div class="col">
        <Rotator ref="rotator" :animation="animations[Math.floor(Math.random()*animations.length)]" :imgUrl="images[index].url" :title="images[index].label" @change="changeUrl"></Rotator>
      </div>
      <div class="col">
        <Rotator ref="rotator" :animation="animations[Math.floor(Math.random()*animations.length)]" :imgUrl="images[index].url" :title="images[index].label" @change="changeUrl"></Rotator>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <Rotator ref="rotator" :animation="animations[Math.floor(Math.random()*animations.length)]" :imgUrl="images[index].url" :title="images[index].label" @change="changeUrl"></Rotator>
      </div>
      <div class="col">
        <Rotator ref="rotator" :animation="animations[Math.floor(Math.random()*animations.length)]" :imgUrl="images[index].url" :title="images[index].label" @change="changeUrl"></Rotator>
      </div>
      <div class="col">
        <Rotator ref="rotator" :animation="animations[Math.floor(Math.random()*animations.length)]" :imgUrl="images[index].url" :title="images[index].label" @change="changeUrl"></Rotator>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <Rotator ref="rotator" :animation="animations[Math.floor(Math.random()*animations.length)]" :imgUrl="images[index].url" :title="images[index].label" @change="changeUrl"></Rotator>
      </div>
      <div class="col">
        <Rotator ref="rotator" :animation="animations[Math.floor(Math.random()*animations.length)]" :imgUrl="images[index].url" :title="images[index].label" @change="changeUrl"></Rotator>
      </div>
      <div class="col">
        <Rotator ref="rotator" :animation="animations[Math.floor(Math.random()*animations.length)]" :imgUrl="images[index].url" :title="images[index].label" @change="changeUrl"></Rotator>
      </div>
    </div>
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
        },
        {
          url: 'http://7xpot0.com1.z0.glb.clouddn.com/16-9-27/77701867.jpg',
          label: '3'
        },
        {
          url: 'http://7xpot0.com1.z0.glb.clouddn.com/16-9-30/85454892.jpg',
          label: '4'
        },
        {
          url: 'http://7xpot0.com1.z0.glb.clouddn.com/16-10-17/11886208.jpg',
          label: '5'
        },
        {
          url: 'http://7xpot0.com1.z0.glb.clouddn.com/16-10-30/20940731.jpg',
          label: '6'
        },
        {
          url: 'http://7xpot0.com1.z0.glb.clouddn.com/16-11-8/65019381.jpg',
          label: '7'
        },
        {
          url: 'http://7xpot0.com1.z0.glb.clouddn.com/16-11-8/7134187.jpg',
          label: '8'
        },
        {
          url: 'http://7xpot0.com1.z0.glb.clouddn.com/public/16-12-5/39797105.jpg',
          label: '9'
        }, {
          url: 'http://7xpot0.com1.z0.glb.clouddn.com/public/16-12-8/34326467.jpg',
          label: '10'
        },
        {
          url: 'http://7xpot0.com1.z0.glb.clouddn.com/16-12-20/28956487-file_1482226716996_dc59.jpg',
          label: '11'
        },
        {
          url: 'http://7xpot0.com1.z0.glb.clouddn.com/16-12-22/96450860-file_1482369398392_5c90.jpg',
          label: '12'
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
  },
  mounted () {
    setInterval(() => {
      this.changeUrl()
    }, 2000)
  }
}
</script>

<style lang="scss" scoped>
.grid {
  display: flex;
  flex-flow: column nowrap;
  width: 240px;
  height: 240px;
  background: #000;
  .row {
    display: flex;
    flex-flow: row nowrap;
    flex: 1 1 0;
    .col {
      flex: 1 1 0;
    }
  }
}
</style>
