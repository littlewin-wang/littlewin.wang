<template>
  <div class="grid">
    <div class="row">
      <div class="col">
        <Rotator ref="rotator" :animation="animations[Math.floor(Math.random()*animations.length)]" :imgUrl="images[indexTest['0']].url" :title="images[indexTest['0']].label" @change="changeUrl"></Rotator>
      </div>
      <div class="col">
        <Rotator ref="rotator" :animation="animations[Math.floor(Math.random()*animations.length)]" :imgUrl="images[indexTest['1']].url" :title="images[indexTest['1']].label" @change="changeUrl"></Rotator>
      </div>
      <div class="col">
        <Rotator ref="rotator" :animation="animations[Math.floor(Math.random()*animations.length)]" :imgUrl="images[indexTest['2']].url" :title="images[indexTest['2']].label" @change="changeUrl"></Rotator>
      </div>
      <div class="col">
        <Rotator ref="rotator" :animation="animations[Math.floor(Math.random()*animations.length)]" :imgUrl="images[indexTest['9']].url" :title="images[indexTest['0']].label" @change="changeUrl"></Rotator>
      </div>
      <div class="col">
        <Rotator ref="rotator" :animation="animations[Math.floor(Math.random()*animations.length)]" :imgUrl="images[indexTest['10']].url" :title="images[indexTest['1']].label" @change="changeUrl"></Rotator>
      </div>
      <div class="col">
        <Rotator ref="rotator" :animation="animations[Math.floor(Math.random()*animations.length)]" :imgUrl="images[indexTest['11']].url" :title="images[indexTest['2']].label" @change="changeUrl"></Rotator>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <Rotator ref="rotator" :animation="animations[Math.floor(Math.random()*animations.length)]" :imgUrl="images[indexTest['3']].url" :title="images[indexTest['3']].label" @change="changeUrl"></Rotator>
      </div>
      <div class="col">
        <Rotator ref="rotator" :animation="animations[Math.floor(Math.random()*animations.length)]" :imgUrl="images[indexTest['4']].url" :title="images[indexTest['4']].label" @change="changeUrl"></Rotator>
      </div>
      <div class="col">
        <Rotator ref="rotator" :animation="animations[Math.floor(Math.random()*animations.length)]" :imgUrl="images[indexTest['5']].url" :title="images[indexTest['5']].label" @change="changeUrl"></Rotator>
      </div>
      <div class="col">
        <Rotator ref="rotator" :animation="animations[Math.floor(Math.random()*animations.length)]" :imgUrl="images[indexTest['12']].url" :title="images[indexTest['0']].label" @change="changeUrl"></Rotator>
      </div>
      <div class="col">
        <Rotator ref="rotator" :animation="animations[Math.floor(Math.random()*animations.length)]" :imgUrl="images[indexTest['13']].url" :title="images[indexTest['1']].label" @change="changeUrl"></Rotator>
      </div>
      <div class="col">
        <Rotator ref="rotator" :animation="animations[Math.floor(Math.random()*animations.length)]" :imgUrl="images[indexTest['14']].url" :title="images[indexTest['2']].label" @change="changeUrl"></Rotator>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <Rotator ref="rotator" :animation="animations[Math.floor(Math.random()*animations.length)]" :imgUrl="images[indexTest['6']].url" :title="images[indexTest['6']].label" @change="changeUrl"></Rotator>
      </div>
      <div class="col">
        <Rotator ref="rotator" :animation="animations[Math.floor(Math.random()*animations.length)]" :imgUrl="images[indexTest['7']].url" :title="images[indexTest['7']].label" @change="changeUrl"></Rotator>
      </div>
      <div class="col">
        <Rotator ref="rotator" :animation="animations[Math.floor(Math.random()*animations.length)]" :imgUrl="images[indexTest['8']].url" :title="images[indexTest['8']].label" @change="changeUrl"></Rotator>
      </div>
      <div class="col">
        <Rotator ref="rotator" :animation="animations[Math.floor(Math.random()*animations.length)]" :imgUrl="images[indexTest['15']].url" :title="images[indexTest['0']].label" @change="changeUrl"></Rotator>
      </div>
      <div class="col">
        <Rotator ref="rotator" :animation="animations[Math.floor(Math.random()*animations.length)]" :imgUrl="images[indexTest['16']].url" :title="images[indexTest['1']].label" @change="changeUrl"></Rotator>
      </div>
      <div class="col">
        <Rotator ref="rotator" :animation="animations[Math.floor(Math.random()*animations.length)]" :imgUrl="images[indexTest['17']].url" :title="images[indexTest['2']].label" @change="changeUrl"></Rotator>
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
      indexTest: {
        '0': 0,
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10,
        '11': 11,
        '12': 12,
        '13': 13,
        '14': 14,
        '15': 15,
        '16': 16,
        '17': 17
      },
      images: [
        {
          url: 'http://7xpot0.com1.z0.glb.clouddn.com/16-12-22/96450860-file_1482369398392_5c90.jpg',
          label: '0'
        },
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
        },
        {
          url: 'http://7xpot0.com1.z0.glb.clouddn.com/16-11-7/16133495.jpg',
          label: '13'
        },
        {
          url: 'http://7xpot0.com1.z0.glb.clouddn.com/16-11-8/29213923.jpg',
          label: '14'
        },
        {
          url: 'http://7xpot0.com1.z0.glb.clouddn.com/16-9-27/77701867.jpg',
          label: '15'
        },
        {
          url: 'http://7xpot0.com1.z0.glb.clouddn.com/16-9-30/85454892.jpg',
          label: '16'
        },
        {
          url: 'http://7xpot0.com1.z0.glb.clouddn.com/16-10-17/11886208.jpg',
          label: '17'
        },
        {
          url: 'http://7xpot0.com1.z0.glb.clouddn.com/16-10-30/20940731.jpg',
          label: '18'
        },
        {
          url: 'http://7xpot0.com1.z0.glb.clouddn.com/16-11-8/65019381.jpg',
          label: '19'
        },
        {
          url: 'http://7xpot0.com1.z0.glb.clouddn.com/16-11-8/7134187.jpg',
          label: '20'
        },
        {
          url: 'http://7xpot0.com1.z0.glb.clouddn.com/public/16-12-5/39797105.jpg',
          label: '21'
        }, {
          url: 'http://7xpot0.com1.z0.glb.clouddn.com/public/16-12-8/34326467.jpg',
          label: '22'
        },
        {
          url: 'http://7xpot0.com1.z0.glb.clouddn.com/16-12-20/28956487-file_1482226716996_dc59.jpg',
          label: '23'
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
      let randomFrom = Math.floor(Math.random() * 9)
      let restArray = this.images.filter(item => {
        return !Object.values(this.indexTest).includes(Number(item.label))
      })

      this.$set(this.indexTest, randomFrom, Number(restArray[Math.floor(Math.random() * restArray.length)].label))
    }
  },
  mounted () {
    setInterval(() => {
      this.changeUrl()
    }, 1000)
  }
}
</script>

<style lang="scss" scoped>
.grid {
  display: flex;
  flex-flow: column nowrap;
  width: 480px;
  height: 240px;
  background: #000;
  .row {
    display: flex;
    flex-flow: row nowrap;
    flex: 1 1 auto;
    .col {
      flex: 1 1 auto;
    }
  }
}
</style>
