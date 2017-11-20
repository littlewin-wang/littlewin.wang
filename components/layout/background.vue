<template>
  <div class="background">
    <div id="particles-background" class="background-canvas"></div>
  </div>
</template>

<script>
export default {
  name: 'Background',
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang='scss' scoped>
.background {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  background-color: #eee;

  .background-canvas {
    position: absolute;
    width: 100%;
    height: 100%;
  }
}
</style>

