<template>
  <div id="demo">
    <transition mode="out-in" :enter-active-class="'animated ' + enterClass" :leave-active-class="'animated ' + leaveClss">
      <img :key="title" :src="imgUrl" @click="handleClick">
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    imgUrl: String,
    title: String
  },
  data () {
    return {
      docState: 'saved',
      enterClass: 'flipInX',
      leaveClss: 'flipOutX'
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
#demo img {
  display: block;
  height: 80px;
  width: 80px;
}
</style>
