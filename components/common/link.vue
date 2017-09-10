<template>
  <div class="link-list">
    <div class="line"></div>
    <div class="list-container">
      <div>
        <i class="iconfont icon-github">
        </i>
      </div>
      <div>
        <i class="iconfont icon-mail">
        </i>
      </div>
      <div>
        <i class="iconfont icon-twitter">
        </i>
      </div>
      <div>
        <i class="iconfont icon-weibo">
        </i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Link'
}
</script>

<style lang="scss" scoped>
.link-list {
  position: relative;

  .line {
    width: 3px;
    height: 100%;
    margin: 0 auto;
    background: #eee
  }

  .list-container {
    position: absolute;
    width: 100%;
    top: 15%;
    padding: 20px 0;
    background: #fff;
    div {
      text-align: center;
      line-height: 2.5rem;
      i {
        color: #747474
      }
    }
  }
}
</style>
