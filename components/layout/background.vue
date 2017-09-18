<template>
  <div class="background">
    <div class="background-circle" style="top:-100px;left:70%;width:160px;height:160px;background:#ec8"></div>
    <div class="background-circle" style="top:20%;right:-20px;width:50px;height:50px;background:#dedede"></div>
    <div class="background-circle" style="bottom:-100px;right:70%;width:160px;height:160px;background:#ec8"></div>
    <div class="background-circle" style="bottom:40px;right:63%;width:30px;height:30px;background:#dedede"></div>
  </div>
</template>

<script>
export default {
  name: 'Background'
}
</script>

<style lang="scss" scoped>
.background {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  background-color: #f6f6f6;

  .background-circle {
    position: absolute;
    border-radius: 50%;
    &:after {
      content: "";
      display: block;
      width: 75%;
      height: 75%;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #f6f6f6;
    }
  }
}
</style>

