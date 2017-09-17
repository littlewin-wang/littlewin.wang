<template>
  <div id="rotator">
    <transition :mode="animation.mode" :enter-active-class="'animated ' + animation.enterClass" :leave-active-class="'animated ' + animation.leaveClass">
      <img :key="title" :src="imgUrl" @click="handleClick">
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    imgUrl: String,
    title: String,
    animation: Object
  },
  data () {
    return {
      mode: '',
      enterClass: 'rollIn',
      leaveClss: 'rollOut'
    }
  },
  computed: {
    buttonMessage: function () {
      switch (this.docState) {
        case 'saved': return 'http://7xpot0.com1.z0.glb.clouddn.com/16-11-7/16133495.jpg'
        case 'edited': return 'http://7xpot0.com1.z0.glb.clouddn.com/16-11-8/29213923.jpg'
      }
    }
  },
  methods: {
    handleClick () {
      this.$emit('change')
    }
  }
}
</script>

<style>
#rotator {
  position: relative;
}

#rotator img {
  position: absolute;
  left: 0;
  display: block;
  height: 80px;
  width: 80px;
}
</style>
