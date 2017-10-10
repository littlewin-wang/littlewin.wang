<template>
  <div class="comment">
    <div class="comment-box">
      <div class="toolbar">
        <div class="left">
          <span>20条评论</span>
          <span>
            <i class="iconfont icon-love"></i>
            11人喜欢
          </span>
        </div>
        <div class="right">
          <a href="" class="sort-btn" :class="{ actived: Object.is(sortMode, -1) }">最新</a>
          <a href="" class="sort-btn" :class="{ actived: Object.is(sortMode, 2) }">最热</a>
        </div>
      </div>
      <div class="list"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'comment',
  data () {
    return {
      sortMode: -1
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/sass/mixins';
.toolbar {
  display: flex;
  justify-content: space-between;
  .left {
    span {
      padding: .2em .5em;
      background-color: hsla(0, 0%, 77%, .4);
      margin: 0 .5rem;
      >i {
        font-size: 1.3rem;
      }
      &:hover {
        background-color: darken(hsla(0, 0%, 77%, .4), 20%);
      }
      &.liked {
        >i {
          color: #f44336;
        }
      }
    }
  }
  .right {
    .sort-btn {
      margin: 0 .5rem;
      &.actived {
        color: #000;
        font-weight: bold;
      }
    }
  }
}
</style>
