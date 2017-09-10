<template>
  <div class="index">
    <div class="index-left">
      <IndexLink class="index-link"></IndexLink>
    </div>
    <div class="index-right">456</div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import IndexLink from '~/components/common/link.vue'

export default {
  components: {
    Logo,
    IndexLink
  }
}
</script>

<style lang="scss" scoped>
.index {
  display: flex;
  height: 100%;
  .index-left {
    flex: 1 auto;
    height: 100%;
    .index-link {
      display: inline-block;
      width: 40px;
      height: 100%;
    }
  }
  .index-right {
    flex: 1 auto;
  }
}
</style>
